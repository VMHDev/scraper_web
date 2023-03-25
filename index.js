const { TYPE_SCRAPER } = require("./src/constants/commons");
const scraperBatDongSan = require("./src/scraper/batdongsan/scraperController");

let typeScraper = TYPE_SCRAPER.BATDONGSAN;

switch (typeScraper) {
  case TYPE_SCRAPER.BATDONGSAN:
    scraperBatDongSan();
    break;
  default:
    break;
}
