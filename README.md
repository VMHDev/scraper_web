# Scraper web

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
  - In src/constants/fialda.js
  - Add item in SCRAPER_LIST_ITEM_ELECTRICAL
