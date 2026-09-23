# Scrapers

> **Last updated**: 2026-09-23

One section per supported website. Select the target via `typeScraper` in
[index.js](../index.js#L18) (see [CONFIGURATION.md](CONFIGURATION.md)).

## BatDongSan — batdongsan.com.vn

- **Controller**: [src/scraper/batdongsan/scraperController.js](../src/scraper/batdongsan/scraperController.js)
- **Scraper**: [scraperPrice.js](../src/scraper/batdongsan/scraperPrice.js)
- **What it collects**: real-estate listing cards per project — price, area
  (m²), price per m², publish date.
- **Config**: project slugs and listing URLs in
  [src/constants/batdongsan.js](../src/constants/batdongsan.js).
- **Processing**: strips units (`tỷ`, `m²`, ...) via `removeUnit`; converts
  relative date labels (`Hôm nay`, `x ngày trước`) to absolute dates via
  [src/utils/batdongsan/commons.js](../src/utils/batdongsan/commons.js).
- **Output**: per page, a raw JSON snapshot **and** a cleaned timestamped CSV
  (`batdongsan-<slug>.json`, `batdongsan-<slug>-<timestamp>.csv`).

## Fialda — fwt.fialda.com

Two controller variants:

| Variant      | File                                                                   | Output                                                       |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| v1           | [scraperController.js](../src/scraper/fialda/scraperController.js)     | One CSV **per stock**                                        |
| v2 (default) | [scraperControllerV2.js](../src/scraper/fialda/scraperControllerV2.js) | One pivoted CSV per group: rows = metrics, columns = symbols |

- **Scraper**: [scraperFialda.js](../src/scraper/fialda/scraperFialda.js)
- **What it collects**: per-ticker metrics — exchange, current price,
  52-week min/max, valuation and financial indicators.
- **Config**: stock group via `type` (e.g. `SCRAPER_TYPE_STOCKS.INVESTED`);
  ticker lists in [src/constants/stocks.js](../src/constants/stocks.js).
- **Output**: `fialda-<group>-<timestamp>.csv` (see [OUTPUT_DATA.md](OUTPUT_DATA.md)).

## VietStock — vietstock.vn

- **Controller**: [src/scraper/vietstock/scraperController.js](../src/scraper/vietstock/scraperController.js)
- **Scraper**: [scraperVietStock.js](../src/scraper/vietstock/scraperVietStock.js)
- **What it collects**: per-ticker price/financial data from vietstock.vn.
- **Config**: ticker lists shared from [src/constants/stocks.js](../src/constants/stocks.js).

## TakeProfit — takeprofit.vn

- **Controller**: [src/scraper/takeprofit/scraperController.js](../src/scraper/takeprofit/scraperController.js)
- **What it collects**: per-ticker data from takeprofit.vn, processed by the
  local [processingData.js](../src/scraper/takeprofit/processingData.js).

## DStock — dstock.vndirect.com.vn

- **Controller**: [src/scraper/dstock/scraperController.js](../src/scraper/dstock/scraperController.js)
- **Scraper**: [scraperDStock.js](../src/scraper/dstock/scraperDStock.js)
- **What it collects**: per-ticker data from VNDirect's DStock pages.

## TCBS Evaluation — TCBS

- **Controller**: [src/scraper/tcbs/scraperControllerEvaluation.js](../src/scraper/tcbs/scraperControllerEvaluation.js)
- **What it collects**: TCBS stock evaluation/rating data per ticker.

## Common behavior

All scrapers:

1. Launch a fresh headless Chromium per target via
   [src/configs/browser.js](../src/configs/browser.js).
2. Log progress to the console (Vietnamese log messages, e.g.
   `>> Trình duyệt đã đóng...` when the browser closes).
3. Write output under [src/data](../src/data/) with a millisecond timestamp
   in the filename so runs never overwrite each other.
