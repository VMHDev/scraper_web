/**
 * @file scraperController.js
 * @description Orchestrates scraping of stock scores from takeprofit.vn and
 * exports one pivoted CSV per stock group (rows = metrics, columns =
 * stock symbols).
 */
const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("../../configs/browser");
const scraperTakeProfit = require("./scraperTakeProfit");
const processingData = require("./processingData");
const { SCRAPER_TYPE_STOCKS } = require("../../constants/stocks");
const {
  getListScraperTakeProfit,
  getURLExportCSV,
} = require("../../utils/takeprofit/commons");

/** Stock group to scrape (see SCRAPER_TYPE_STOCKS). */
const type = SCRAPER_TYPE_STOCKS.FINANCE;

/**
 * Main controller for the takeprofit.vn scraper.
 * Scrapes every ticker of the configured group, merges results into a
 * pivot table (`dataSummary`) where each row is a metric and each column a
 * stock symbol, and writes it to a timestamped CSV.
 * A failing ticker is skipped so the rest of the group still exports.
 * @returns {Promise<void>}
 */
const scraperController = async () => {
  try {
    const lstPageScraper = getListScraperTakeProfit(type);
    console.log("lstPageScraper", lstPageScraper);
    // Scraper price fialda
    var dataSummary = [];
    for (const itemPage of lstPageScraper) {
      try {
        // Open browser
        let browser = await startBrowser();

        // Scraper
        const dataInfo = await scraperTakeProfit(
          browser,
          itemPage.urlSite,
          itemPage.symbolStock,
        );
        console.log("dataInfo", dataInfo);

        // Processing data
        const dataScraper = processingData(dataInfo);
        console.log("dataScraper", JSON.stringify(dataScraper));

        // Pivot merge: keep one row per metric title and add the current
        // symbol as a new column, preserving values scraped previously
        dataSummary = dataScraper.map((itemScraper, idx) => {
          return {
            title: itemScraper.title,
            ...dataSummary[idx],
            [itemPage?.symbolStock]: itemScraper.value,
          };
        });

        // Close browser
        await browser.close();
        console.log(">> Trình duyệt đã đóng...");
      } catch (error) {
        console.log("Scraper fail >>> ", itemPage?.symbolStock);
        continue;
      }
    }

    console.log("dataSummary", dataSummary);

    // Write file csv
    const urlExportCSV = getURLExportCSV(type);
    const csvResult = await converter.json2csv(dataSummary);
    fs.writeFileSync(urlExportCSV, csvResult, (err) => {
      if (err) console.log("Write data failed: " + err);
      console.log("Write success");
    });
  } catch (error) {
    console.log("Controller failed: " + error);
  }
};
module.exports = scraperController;
