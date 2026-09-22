/**
 * @file scraperControllerEvaluation.js
 * @description Orchestrates scraping of stock evaluation data from
 * tcinvest.tcbs.com.vn and exports one pivoted CSV per stock group
 * (rows = metrics, columns = stock symbols).
 */
const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("../../configs/browser");
const scraperEvaluation = require("./scraperEvaluation");
const processingDataEvaluation = require("./processingDataEvaluation");
const { SCRAPER_TYPE_STOCKS } = require("../../constants/stocks");
const { getListScraper, getURLExportCSV } = require("../../utils/tcbs/commons");

/** Stock group to scrape (see SCRAPER_TYPE_STOCKS). */
const type = SCRAPER_TYPE_STOCKS.REALESTATE_I;

/**
 * Main controller for the TCBS evaluation scraper.
 * Scrapes every ticker of the configured group, merges results into a
 * pivot table (`dataSummary`) where each row is a metric and each column a
 * stock symbol, and writes it to a timestamped CSV.
 * A failing ticker is skipped so the rest of the group still exports.
 * @returns {Promise<void>}
 */
const scraperController = async () => {
  try {
    const lstPageScraper = getListScraper(type);
    // Scraper price fialda
    var dataSummary = [];
    for (const itemPage of lstPageScraper) {
      try {
        // Open browser
        let browser = await startBrowser();

        // Scraper
        const dataInfo = await scraperEvaluation(
          browser,
          itemPage.urlSite,
          itemPage.symbolStock,
        );
        console.log("dataInfo", dataInfo);

        // Processing data
        const dataScraper = processingDataEvaluation(dataInfo);
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
        console.log("Scraper fail >>> ", itemPage?.symbolSto);
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
