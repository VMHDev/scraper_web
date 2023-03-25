const scrapeCategory = (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let pageInfo = await browser.newPage();
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);
      await pageInfo.waitForSelector("body");
      console.log(">> Page load done...");

      const dataItem = await pageInfo.$$eval("#product-lists-web", (els) => {
        dataItem = els.map((el) => {
          return {
            title: el.querySelector("div.js__card > a").innerText,
            link: el.querySelector("div.js__card > a").href,
          };
        });
        return dataItem;
      });

      console.log("dataItem", dataItem);

      await pageInfo.close();
      console.log(">> Tab đã đóng...");

      resolve(dataItem);
    } catch (error) {
      console.log("Controller failed: " + error);
      reject(error);
    }
  });

module.exports = scrapeCategory;
