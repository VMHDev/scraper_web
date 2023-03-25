const { TYPE_SCRAPER } = require("./src/constants/comoms");
const startBrowser = require("./src/configs/browser");
const scraperBatDongSan = require("./src/scraper/batdongsan/scraperController");

var browser = startBrowser();
let typeScraper = TYPE_SCRAPER.BATDONGSAN;

switch (typeScraper) {
  case TYPE_SCRAPER.BATDONGSAN:
    scraperBatDongSan(browser);
    break;
  default:
    break;
}
