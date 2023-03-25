const { TYPE_SCRAPER } = require("./constants");
const startBrowser = require("./browser");
const scraperBatDongSan = require("./batdongsan/scraperController");

var browser = startBrowser();
let typeScraper = TYPE_SCRAPER.BATDONGSAN;

switch (typeScraper) {
  case TYPE_SCRAPER.BATDONGSAN:
    scraperBatDongSan(browser);
    break;
  default:
    break;
}
