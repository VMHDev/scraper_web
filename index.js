/**
 * @file index.js
 * @description Application entry point. Runs exactly one site-specific
 * scraper, selected by the `typeScraper` constant below.
 */
const { TYPE_SCRAPER } = require("./src/constants/commons");
const scraperBatDongSan = require("./src/scraper/batdongsan/scraperController");
const scraperFialda = require("./src/scraper/fialda/scraperControllerV2");
const scraperVietStock = require("./src/scraper/vietstock/scraperController");
const scraperTakeProfit = require("./src/scraper/takeprofit/scraperController");
const scraperDStock = require("./src/scraper/dstock/scraperController");
const scraperControllerEvaluation = require("./src/scraper/tcbs/scraperControllerEvaluation");

/**
 * Scraper to execute on this run (see TYPE_SCRAPER for available targets).
 * @type {number}
 */
let typeScraper = TYPE_SCRAPER.FIALDA;

// Dispatch to the scraper matching the configured type
switch (typeScraper) {
  case TYPE_SCRAPER.BATDONGSAN:
    scraperBatDongSan();
    break;
  case TYPE_SCRAPER.FIALDA:
    scraperFialda();
    break;
  case TYPE_SCRAPER.VIETSTOCK:
    scraperVietStock();
    break;
  case TYPE_SCRAPER.TAKEPROFIT:
    scraperTakeProfit();
    break;
  case TYPE_SCRAPER.DSTOCK:
    scraperDStock();
    break;
  case TYPE_SCRAPER.TCBS_EVALUATION:
    scraperControllerEvaluation();
    break;
  default:
    break;
}
