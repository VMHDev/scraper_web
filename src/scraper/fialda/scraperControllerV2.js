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

const type = SCRAPER_TYPE_STOCKS.INVESTED;

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
