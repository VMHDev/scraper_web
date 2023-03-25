const fs = require("fs");
const scraperPrice = require("./scraperPrice");

const urlSite =
  "https://batdongsan.com.vn/ban-can-ho-chung-cu-opal-riverside?sortValue=1";
const urlExport = "src/data/batdongsan.json";

const scraperController = async (browserInstance) => {
  try {
    let browser = await browserInstance;

    // Scraper Category
    let categories = await scraperPrice(browser, urlSite);

    fs.writeFileSync(urlExport, JSON.stringify(categories), (err) => {
      if (err) console.log("Write data failed: " + err);
      console.log("Write success");
    });

    // Close browser
    await browser.close();
    console.log(">> Trình duyệt đã đóng...");
  } catch (error) {
    console.log("Controller failed: " + error);
  }
};
module.exports = scraperController;
