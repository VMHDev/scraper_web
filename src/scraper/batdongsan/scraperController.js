/**
 * @file scraperController.js
 * @description Orchestrates scraping of real-estate listings from
 * batdongsan.com.vn and exports the results to JSON and CSV files.
 */
const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("./../../configs/browser");
const scraperPrice = require("./scraperPrice");
const { SCRAPER_LIST_PAGE } = require("./../../constants/batdongsan");
const { removeUnit } = require("./../../utils/commons");
const { processDate } = require("./../../utils/batdongsan/commons");

/**
 * Main controller for the batdongsan.com.vn scraper.
 * For each configured listing page: opens a browser, scrapes the listing
 * cards, writes a raw JSON snapshot, then writes a cleaned CSV where prices
 * and areas are stripped of units and date labels are converted to
 * absolute dates.
 * @returns {Promise<void>}
 */
const scraperController = async () => {
  try {
    // Scraper price batdongsan.com.vn
    for (const item of SCRAPER_LIST_PAGE) {
      // Open browser
      let browser = await startBrowser();

      // Scraper
      let info = await scraperPrice(browser, item.urlSite);

      // Write file json
      fs.writeFileSync(item.pathJson, JSON.stringify(info), (err) => {
        if (err) console.log("Write data failed: " + err);
        console.log("Write success");
      });

      // Write file csv
      // Normalize numeric fields (remove "tỷ", "m²", ...) and resolve dates
      const dataCSV = info.map((item) => {
        return {
          price: removeUnit(item?.price),
          area: removeUnit(item?.area),
          pricePerM2: removeUnit(item?.pricePerM2),
          date: processDate(item?.date),
        };
      });

      const csvResult = await converter.json2csv(dataCSV);
      fs.writeFileSync(item.pathCSV, csvResult, (err) => {
        if (err) console.log("Write data failed: " + err);
        console.log("Write success");
      });

      // Close browser
      await browser.close();
      console.log(">> Trình duyệt đã đóng...");
    }
  } catch (error) {
    console.log("Controller failed: " + error);
  }
};
module.exports = scraperController;
