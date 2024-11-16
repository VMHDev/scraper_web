const { TYPE_SCRAPER } = require("./src/constants/commons");
const scraperBatDongSan = require("./src/scraper/batdongsan/scraperController");
const scraperFialda = require("./src/scraper/fialda/scraperControllerV2");
const scraperVietStock = require("./src/scraper/vietstock/scraperController");
const scraperTakeProfit = require("./src/scraper/takeprofit/scraperController");
const scraperDStock = require("./src/scraper/dstock/scraperController");
const scraperControllerEvaluation = require("./src/scraper/tcbs/scraperControllerEvaluation");

let typeScraper = TYPE_SCRAPER.FIALDA;

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
