const fs = require("fs");
const startBrowser = require("./../../configs/browser");
const scraperPrice = require("./scraperPrice");
const { SCRAPER_LIST_PAGE } = require("./../../constants/batdongsan");

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

      // Close browser
      await browser.close();
      console.log(">> Trình duyệt đã đóng...");
    }
  } catch (error) {
    console.log("Controller failed: " + error);
  }
};
module.exports = scraperController;
