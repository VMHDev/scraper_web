# Quick Start

> **Last updated**: 2026-10-16

Get the scraper running locally in a few minutes.

## Prerequisites

| Requirement | Notes                                                     |
| ----------- | --------------------------------------------------------- |
| Node.js     | v16+ recommended (uses CommonJS modules)                  |
| npm or Yarn | npm is bundled with Node.js; Yarn 1.x is also supported   |
| Chromium    | Downloaded automatically by Puppeteer during installation |

## Install

```bash
npm install
# or
yarn install
```

Only needed the first time (or when dependencies change). Puppeteer downloads
a compatible Chromium build into the user cache.

If the package manager skipped Puppeteer's install script and startup reports
`Could not find Chromium`, install the pinned browser explicitly:

```bash
npm run install:browser
# or
yarn install:browser
```

## Run

```bash
npm start
```

The app runs **exactly one** scraper per execution, selected by `typeScraper`
in [index.js](../index.js#L18):

```js
let typeScraper = TYPE_SCRAPER.FIALDA;
```

Available targets (see [src/constants/commons.js](../src/constants/commons.js)):

| Constant          | Site                   |
| ----------------- | ---------------------- |
| `BATDONGSAN`      | batdongsan.com.vn      |
| `FIALDA`          | fwt.fialda.com         |
| `VIETSTOCK`       | vietstock.vn           |
| `TAKEPROFIT`      | takeprofit.vn          |
| `DSTOCK`          | dstock.vndirect.com.vn |
| `TCBS_EVALUATION` | TCBS stock evaluation  |
| `NHATOT`          | nhatot.com (reserved)  |

## First run walkthrough

1. Set `typeScraper = TYPE_SCRAPER.FIALDA` in [index.js](../index.js#L18).
2. In [src/scraper/fialda/scraperControllerV2.js](../src/scraper/fialda/scraperControllerV2.js#L19),
   set `type = SCRAPER_TYPE_STOCKS.TEST` for a small smoke-test list.
3. Run `npm start`. A headless Chromium instance opens per ticker, scrapes
   the data, and closes (`>> Trình duyệt đã đóng...`).
4. Check the output in [src/data](../src/data/) — a file like
   `fialda-test-<timestamp>.csv`.

## Debugging

Set `headless: false` in [src/configs/browser.js](../src/configs/browser.js#L18)
to watch the browser while it works. See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
for common failures.

## Next steps

- [CONFIGURATION.md](CONFIGURATION.md) — add tickers, listing pages, tweak the browser.
- [SCRAPERS.md](SCRAPERS.md) — details per supported website.
- [OUTPUT_DATA.md](OUTPUT_DATA.md) — CSV formats and file naming.
