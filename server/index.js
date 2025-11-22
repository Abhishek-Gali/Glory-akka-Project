const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { scrapeUrls } = require('./scraper');

const app = express();
const PORT = 3001;

const path = require('path');

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

app.post('/scrape', async (req, res) => {
  const { urls } = req.body;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ success: false, message: 'Invalid input. "urls" must be an array.' });
  }

  if (urls.length > 10) {
    return res.status(400).json({ success: false, message: 'Too many URLs. Please scrape up to 10 at a time.' });
  }

  try {
    console.log(`Scraping ${urls.length} URLs...`);
    const results = await scrapeUrls(urls);
    res.json({ success: true, results });
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ success: false, message: 'Internal server error during scraping.' });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
