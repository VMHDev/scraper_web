const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("../../configs/browser");
const scraperFialda = require("./scraperFialda");
const processingData = require("./processingData");
const { SCRAPER_TYPE_FIALDA } = require("../../constants/fialda");
const {
  getListScraperFialda,
  getURLExportCSV,
} = require("../../utils/fialda/commons");

const type = SCRAPER_TYPE_FIALDA.OTHERS;

const scraperController = async () => {
  try {
    const lstPageScraper = getListScraperFialda(type);
    // Scraper price fialda
    var dataSummary = [];
    for (const itemPage of lstPageScraper) {
      // Open browser
      let browser = await startBrowser();

      // Scraper
      const dataInfo = await scraperFialda(browser, itemPage.urlSite);
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
