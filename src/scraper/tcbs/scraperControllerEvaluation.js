const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("../../configs/browser");
const scraperEvaluation = require("./scraperEvaluation");
const processingDataEvaluation = require("./processingDataEvaluation");
const { SCRAPER_TYPE_STOCKS } = require("../../constants/stocks");
const { getListScraper, getURLExportCSV } = require("../../utils/tcbs/commons");

const type = SCRAPER_TYPE_STOCKS.REALESTATE;

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
          itemPage.symbolStock
        );
        console.log("dataInfo", dataInfo);

        // Processing data
        const dataScraper = processingDataEvaluation(dataInfo);
        console.log("dataScraper", JSON.stringify(dataScraper));

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
