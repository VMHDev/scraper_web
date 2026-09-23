# Scraper web

> **Last updated**: 2026-09-23

Node.js + Puppeteer web scraper for real-estate listings (batdongsan.com.vn)
and Vietnamese stock data (Fialda, VietStock, TakeProfit, DStock, TCBS),
exporting timestamped CSV files to `src/data/`.

## Documentation

- [Quick Start](docs/QUICK_START.md) — install and first run
- [Architecture](docs/ARCHITECTURE.md) — project structure and patterns
- [Configuration](docs/CONFIGURATION.md) — select sites, add tickers/projects
- [Scrapers](docs/SCRAPERS.md) — what each supported site collects
- [Add a New Scraper](docs/ADD_NEW_SCRAPER.md) — step-by-step guide
- [Output Data](docs/OUTPUT_DATA.md) — CSV formats and file naming
- [Troubleshooting](docs/TROUBLESHOOTING.md) — common issues and fixes

## Start scraper

- npm install (only first time)
- npm start

## Web: batdongsan.com.vn

- In file index.js set typeScraper = TYPE_SCRAPER.BATDONGSAN;
- Add item scraper
  - In src/constants/batdongsan.js
  - Add item in SCRAPER_LIST_PAGE

## Web: fwt.fialda.com

- In file index.js set typeScraper = TYPE_SCRAPER.FIALDA;
- Two option
  - Export one stock per file use scraperController
  - Export multiple stock one file use scraperControllerV2
- scraperControllerV2
  - In src/scraper/fialda/scraperControllerV2.js
    - Set type = SCRAPER_TYPE_FIALDA.PETROL
  - In src/constants/stocks.js
    - Add item in SCRAPER_LIST_ITEM_PETROL
