const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("./../../configs/browser");
const scraperFialda = require("./scraperFialda");
const processingData = require("./processingData");
const { SCRAPER_TYPE_FIALDA } = require("./../../constants/fialda");
const { getListScraperFialda } = require("./../../utils/fialda/commons");

const scraperController = async () => {
  try {
    const lstPageScraper = getListScraperFialda(SCRAPER_TYPE_FIALDA.ELECTRICAL);
    // Scraper price fialda
    for (const item of lstPageScraper) {
      // Open browser
      let browser = await startBrowser();

      // Scraper
      const dataInfo = await scraperFialda(browser, item.urlSite);
      console.log("dataInfo", dataInfo);

      // Write file json
      fs.writeFileSync(item.pathJson, JSON.stringify(dataInfo), (err) => {
        if (err) console.log("Write data failed: " + err);
        console.log("Write success");
      });

      // Processing data
      const dataScraper = processingData(dataInfo);
      console.log("dataScraper", dataScraper);

      // Write file csv
      const csvResult = await converter.json2csv(dataScraper);
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
