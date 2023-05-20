const { TYPE_SCRAPER } = require("./src/constants/commons");
const scraperBatDongSan = require("./src/scraper/batdongsan/scraperController");
const scraperFialda = require("./src/scraper/fialda/scraperControllerV2");
const scraperVietStock = require("./src/scraper/vietstock/scraperController");
const scraperTakeProfit = require("./src/scraper/takeprofit/scraperController");

let typeScraper = TYPE_SCRAPER.TAKEPROFIT;

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
  default:
    break;
}
