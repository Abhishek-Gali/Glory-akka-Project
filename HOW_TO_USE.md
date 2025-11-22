# 🚀 OSINT HUNTER - User Manual

![Goku Header](C:/Users/galia/.gemini/antigravity/brain/4dabb680-fc75-4fff-a2f9-376f474fc53f/goku_doc_header_1763829805358.png)

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Step-by-Step Guide](#step-by-step-guide)
- [Tips & Best Practices](#tips--best-practices)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

**OSINT HUNTER** is a professional intelligence gathering tool designed for lead generation and OSINT research. It combines Google Dorking techniques with automated web scraping to extract publicly available contact information.

**Key Features:**

- 🔍 Advanced Google Dork query generator
- 🤖 Automated email extraction from web pages
- 🌌 Professional space-themed interface
- 📊 Real-time results display
- 📋 One-click copy functionality

---

## ⚡ Quick Start

1. **Access the Tool**: Navigate to your deployed URL or run locally at `http://localhost:3001`
2. **Generate Search Query**: Use the TARGET ACQUISITION panel
3. **Execute Search**: Click "INITIALIZE SEARCH" to open Google
4. **Extract Data**: Copy URLs and paste into DATA EXTRACTION panel
5. **Get Results**: Click "EXTRACT DATA" to retrieve emails

---

## 📖 Step-by-Step Guide

### Step 1: Target Acquisition (Google Dork Generator)

The **TARGET ACQUISITION** panel helps you create precise Google search queries.

**Fields:**

- **Platform**: Select your target platform (LinkedIn, YCombinator, Crunchbase, etc.)
- **Target Role**: Enter the job title you're looking for (e.g., "CEO", "Founder", "CTO")
- **Location**: Specify geographic location (e.g., "San Francisco", "New York")
- **Email Domain**: Optional - filter by email domain (e.g., "@gmail.com")
- **Additional Keywords**: Add extra search terms (e.g., "SaaS", "AI", "Startup")

**Example Configuration:**

```
Platform: LinkedIn
Target Role: CEO
Location: San Francisco
Email Domain: (leave blank)
Additional Keywords: AI Startup
```

**Query Preview**: The generated dork query appears in the blue-tinted box below the form.

**Action**: Click **"INITIALIZE SEARCH"** to open Google in a new tab with your custom query.

---

### Step 2: Manual Google Search

Once Google opens:

1. Review the search results
2. Look for relevant profiles, company pages, or contact pages
3. Copy the URLs of interesting pages (right-click → Copy Link Address)

**Pro Tip**: Focus on pages that are likely to contain contact information:

- LinkedIn profiles
- Company "About Us" or "Team" pages
- Startup directories
- Press releases

---

### Step 3: Data Extraction (Page Scraper)

The **DATA EXTRACTION** panel automates email extraction from the URLs you found.

**How to Use:**

1. Paste the URLs you copied (one per line) into the text area
2. Click **"EXTRACT DATA"**
3. Wait for the scan to complete (you'll see "SCANNING SECTOR..." while processing)

**Limitations:**

- Maximum 10 URLs per batch
- Some websites may block automated scraping
- Emails hidden behind JavaScript or forms may not be detected

---

### Step 4: Review Results

Once extraction completes, you'll see:

- **Scan Results** section appears below
- Each URL shows:
  - The scanned URL (clickable)
  - Number of emails found
  - List of extracted emails

**Actions:**

- **Copy Email**: Click the copy icon next to any email
- **Visit Source**: Click the URL to verify the source page

---

## 💡 Tips & Best Practices

### For Better Search Results:

- ✅ Be specific with your target role
- ✅ Use location filters to narrow results
- ✅ Combine multiple keywords for precision
- ✅ Try different platforms for diverse results

### For Better Extraction:

- ✅ Choose pages with visible contact information
- ✅ Avoid heavily protected corporate sites
- ✅ Use "Contact Us" or "About" pages
- ✅ Verify emails before using them

### Ethical Guidelines:

- ⚠️ **Respect Privacy**: Only use publicly available information
- ⚠️ **Follow Terms of Service**: Don't violate website ToS
- ⚠️ **Educational Use**: This tool is for OSINT research and education
- ⚠️ **No Spam**: Don't use extracted emails for unsolicited messages

---

## 🔧 Troubleshooting

### "No emails found"

**Possible Causes:**

- The page doesn't contain email addresses
- Emails are hidden behind forms or JavaScript
- The website blocks automated access

**Solutions:**

- Try different pages from the same domain
- Look for "Contact" or "Team" pages
- Manually inspect the page to verify emails exist

### "Scraping error"

**Possible Causes:**

- Network connectivity issues
- Website blocking automated requests
- Server timeout

**Solutions:**

- Reduce the number of URLs (try 5 instead of 10)
- Wait a moment and try again
- Check if the URLs are accessible in your browser

### Search returns irrelevant results

**Solutions:**

- Refine your keywords
- Add more specific location or role information
- Try a different platform
- Use the email domain filter

---

## 🎮 About

**Made with ![Goku](C:/Users/galia/.gemini/antigravity/brain/4dabb680-fc75-4fff-a2f9-376f474fc53f/goku_sticker_1763828839096.png) by Abhishek Gali**

_Engineered for professional OSINT research and lead generation._

---

## 📞 Support

For issues or questions:

- Check the [Deployment Guide](deployment_guide.md) for setup help
- Review error messages in the browser console (F12)
- Ensure your backend server is running

---

**Version**: 1.0  
**Last Updated**: November 2025  
**License**: Educational & OSINT Research Use Only
