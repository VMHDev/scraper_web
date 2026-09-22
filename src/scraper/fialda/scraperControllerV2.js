/**
 * @file scraperControllerV2.js
 * @description Fialda scraper v2: scrapes a whole stock group and exports a
 * single pivoted CSV (rows = metrics, columns = stock symbols).
 */
const fs = require("fs");
const path = require("path");
const converter = require("json-2-csv");
const startBrowser = require("../../configs/browser");
const scraperFialda = require("./scraperFialda");
const processingData = require("./processingData");
const { SCRAPER_TYPE_STOCKS } = require("../../constants/stocks");
const {
  getListScraperFialda,
  getURLExportCSV,
} = require("../../utils/fialda/commons");

/** Stock group to scrape (see SCRAPER_TYPE_STOCKS). */
const type = SCRAPER_TYPE_STOCKS.INVESTED; // INVESTED TEST

/**
 * Main controller (v2) for the fwt.fialda.com scraper.
 * Scrapes every ticker of the configured group, merges results into a
 * pivot table (`dataSummary`) where each row is a metric and each column a
 * stock symbol, and writes it to a timestamped CSV (creating the output
 * directory when missing).
 * @returns {Promise<void>}
 */
const scraperController = async () => {
  var dataSummary = [];
  try {
    const lstPageScraper = getListScraperFialda(type);
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

      // Processing data
      const dataScraper = processingData(dataInfo);
      console.log("dataScraper", dataScraper);

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
    }
  } catch (error) {
    console.log("Controller failed: " + error);
  }

  console.log("dataSummary", dataSummary);

  // Write file csv
  const urlExportCSV = getURLExportCSV(type);
  const directoryPath = path.dirname(urlExportCSV);
  if (!fs.existsSync(directoryPath)) {
    // If it doesn't exist, create the directory
    fs.mkdirSync(directoryPath);

    console.log(`Directory '${directoryPath}' created.`);
  } else {
    console.log(`Directory '${directoryPath}' already exists.`);
  }
  const csvResult = await converter.json2csv(dataSummary);
  fs.writeFileSync(urlExportCSV, csvResult, (err) => {
    if (err) console.log("Write data failed: " + err);
    console.log("Write success");
  });
};
module.exports = scraperController;
