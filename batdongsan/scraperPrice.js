const scrapeCategory = (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let pageInfo = await browser.newPage();
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);
      await pageInfo.waitForSelector("#boxSearchForm");
      console.log(">> Page load done...");

      const headerData = await pageInfo.$eval(
        "body > div.re__main > div > div.re__main-content",
        (el) => {
          return {
            title: el.querySelector("h1.re__srp-title").innerText,
          };
        }
      );

      console.log("headerData", headerData);

      const dataItem = await pageInfo.$$eval("#product-lists-web", (els) => {
        dataItem = els.map((el) => {
          return {
            title: el.querySelector("div.js__card > a").title,
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
      await pageInfo.close();
      console.log(">> Tab đã đóng...");
      reject(error);
    }
  });

module.exports = scrapeCategory;
