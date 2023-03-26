const fs = require("fs");
const converter = require("json-2-csv");
const startBrowser = require("./../../configs/browser");
const scraperOverview = require("./scraperOverview");
const { SCRAPER_LIST_PAGE } = require("./../../constants/fialdaElectrical");
const { removeUnit, processDate } = require("./../../utils/batdongsan/commons");

const scraperController = async () => {
  try {
    // Scraper price batdongsan.com.vn
    for (const item of SCRAPER_LIST_PAGE) {
      // Open browser
      let browser = await startBrowser();

      // Scraper
      let info = await scraperOverview(browser, item.urlSite);

      // Write file json
      // fs.writeFileSync(item.pathJson, JSON.stringify(info), (err) => {
      //   if (err) console.log("Write data failed: " + err);
      //   console.log("Write success");
      // });

      // Write file csv
      // const dataCSV = info.map((item) => {
      //   return {
      //     price: removeUnit(item?.price),
      //     area: removeUnit(item?.area),
      //     pricePerM2: removeUnit(item?.pricePerM2),
      //     date: processDate(item?.date),
      //   };
      // });

      // const csvResult = await converter.json2csv(dataCSV);
      // fs.writeFileSync(item.pathCSV, csvResult, (err) => {
      //   if (err) console.log("Write data failed: " + err);
      //   console.log("Write success");
      // });

      // Close browser
      await browser.close();
      console.log(">> Trình duyệt đã đóng...");
    }
  } catch (error) {
    console.log("Controller failed: " + error);
  }
};
module.exports = scraperController;
