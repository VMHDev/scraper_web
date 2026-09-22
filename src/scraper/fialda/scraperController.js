/**
 * @file scraperController.js
 * @description Fialda scraper v1: exports one JSON snapshot and one CSV file
 * per stock ticker.
 */
const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("./../../configs/browser");
const scraperFialda = require("./scraperFialda");
const processingData = require("./processingData");
const { SCRAPER_TYPE_STOCKS } = require("./../../constants/stocks");
const { getListScraperFialda } = require("./../../utils/fialda/commons");

/**
 * Main controller (v1) for the fwt.fialda.com scraper.
 * For each ticker of the AGRICULTURE group: scrapes the finance page,
 * writes a raw JSON snapshot, then a processed CSV.
 * Prefer scraperControllerV2 for a single combined CSV export.
 * @returns {Promise<void>}
 */
const scraperController = async () => {
  try {
    const lstPageScraper = getListScraperFialda(
      SCRAPER_TYPE_STOCKS.AGRICULTURE,
    );
    // Scraper price fialda
    for (const itemPage of lstPageScraper) {
      // Open browser
      let browser = await startBrowser();

      // Scraper
      const dataInfo = await scraperFialda(
        browser,
        itemPage.urlSite,
        itemPage.symbolStock,
      );
      console.log("dataInfo", dataInfo);

      // Write file json
      fs.writeFileSync(itemPage.pathJson, JSON.stringify(dataInfo), (err) => {
        if (err) console.log("Write data failed: " + err);
        console.log("Write success");
      });

      // Processing data
      const dataScraper = processingData(dataInfo);
      console.log("dataScraper", dataScraper);

      // Write file csv
      const csvResult = await converter.json2csv(dataScraper);
      fs.writeFileSync(itemPage.pathCSV, csvResult, (err) => {
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
