# Add a New Scraper

> **Last updated**: 2026-09-23

Step-by-step guide to add support for a new website. Follow the existing
per-site pattern (see [ARCHITECTURE.md](ARCHITECTURE.md)).

## Checklist

- [ ] 1. Add the site to the `TYPE_SCRAPER` enum
- [ ] 2. Create constants for the site
- [ ] 3. Create `src/scraper/<site>/` with controller + scraper (+ processor)
- [ ] 4. Create `src/utils/<site>/` helpers if needed
- [ ] 5. Register the controller in `index.js`
- [ ] 6. Smoke-test with a small target list
- [ ] 7. Document the site in [SCRAPERS.md](SCRAPERS.md)

## 1. Add the enum value

In [src/constants/commons.js](../src/constants/commons.js):

```js
const TYPE_SCRAPER = {
  // ...
  MYSITE: 8,
};
```

## 2. Create constants

Create `src/constants/mysite.js` with the targets to scrape (URLs, symbols,
output paths). Reuse [src/constants/stocks.js](../src/constants/stocks.js)
ticker lists if it is a stock site.

## 3. Create the scraper folder

```
src/scraper/mysite/
  scraperController.js   Orchestrates targets, browser lifecycle, file export
  scraperMySite.js       Puppeteer page.evaluate extraction
  processingData.js      (Optional) normalize raw data for CSV
```

Minimal controller skeleton:

```js
const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("../../configs/browser");
const scraperMySite = require("./scraperMySite");

const scraperController = async () => {
  try {
    let browser = await startBrowser();
    const info = await scraperMySite(browser, "<TARGET_URL>");
    const csvResult = await converter.json2csv(info);
    fs.writeFileSync(`src/data/mysite-${new Date().getTime()}.csv`, csvResult);
    await browser.close();
    console.log(">> Trình duyệt đã đóng...");
  } catch (error) {
    console.log("Controller failed: " + error);
  }
};

module.exports = scraperController;
```

The scraper module receives `(browser, url)`, opens a page, and returns raw
data extracted with `page.evaluate`. Keep DOM selectors inside the scraper
module only.

## 4. Site-specific helpers

If the site needs URL builders, unit stripping or date parsing, put them in
`src/utils/mysite/commons.js`. Generic helpers go in
[src/utils/commons.js](../src/utils/commons.js).

## 5. Register in the entry point

In [index.js](../index.js):

```js
const scraperMySite = require("./src/scraper/mysite/scraperController");

// inside the switch:
case TYPE_SCRAPER.MYSITE:
  scraperMySite();
  break;
```

## 6. Smoke-test

1. Set `typeScraper = TYPE_SCRAPER.MYSITE`.
2. Use a single target first (or the `TEST` list for stock sites).
3. Set `headless: false` in [src/configs/browser.js](../src/configs/browser.js)
   to watch the run.
4. Verify the CSV appears in [src/data](../src/data/) with expected columns.

## 7. Document it

Add a section for the site in [SCRAPERS.md](SCRAPERS.md): what it collects,
where it is configured, and the output format.

## Rules of thumb

- One browser per target; always close it (even on error paths where possible).
- No hardcoded URLs/tickers inside scraper logic — constants only.
- Timestamp every output filename (`new Date().getTime()`).
- Never commit cookies, tokens or credentials — use env vars and
  placeholders like `<MYSITE_AUTH_TOKEN>`.
