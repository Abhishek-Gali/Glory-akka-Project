const puppeteer = require('puppeteer');

const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

async function scrapeUrls(urls) {
  // Launch browser with Render-compatible settings
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });

  const results = [];

  try {
    // Process URLs sequentially or in small batches to avoid overloading
    for (const url of urls) {
      let pageResults = { url, emails: [], error: null };
      
      try {
        const page = await browser.newPage();
        // Set a realistic user agent
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
        
        // Timeout after 15 seconds to keep things moving
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

        // Extract text content
        const content = await page.evaluate(() => document.body.innerText);
        
        // Find emails
        const matches = content.match(EMAIL_REGEX) || [];
        // Deduplicate and filter junk
        const uniqueEmails = [...new Set(matches)].filter(email => {
          // Basic filters to remove common false positives (images, etc)
          return !email.endsWith('.png') && !email.endsWith('.jpg') && !email.endsWith('.svg') && email.length < 50;
        });

        pageResults.emails = uniqueEmails;
        await page.close();
      } catch (err) {
        console.error(`Error scraping ${url}:`, err.message);
        pageResults.error = err.message;
      }

      results.push(pageResults);
    }
  } finally {
    await browser.close();
  }

  return results;
}

module.exports = { scrapeUrls };
