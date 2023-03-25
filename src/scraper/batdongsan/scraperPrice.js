const scrapeCategory = (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let pageInfo = await browser.newPage();
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);
      await pageInfo.waitForSelector("#boxSearchForm");
      console.log(">> Page load done...");

      const dataItem = await pageInfo.$$eval(
        "#product-lists-web > div.js__card ",
        (els) => {
          let tmpDataItem = els.map((el, idx) => {
            return {
              id: idx,
              title: el.querySelector("a")?.title,
              link: el.querySelector("a")?.href,
              price: el.querySelector(
                "a > div.re__card-info > div.re__card-info-content > div > div.re__card-config.js__card-config > span.re__card-config-price.js__card-config-item"
              )?.innerText,
              area: el.querySelector(
                "a > div.re__card-info > div.re__card-info-content > div > div.re__card-config.js__card-config > span.re__card-config-area.js__card-config-item"
              )?.innerText,
              pricePerM2: el.querySelector(
                "a > div.re__card-info > div.re__card-info-content > div > div.re__card-config.js__card-config > span.re__card-config-price_per_m2.js__card-config-item"
              )?.innerText,
              date: el.querySelector(
                "a > div.re__card-info > div.re__card-contact > div.re__card-published-info > div > span"
              )?.innerText,
            };
          });
          return tmpDataItem;
        }
      );

      // await pageInfo.waitForTimeout(5 * 1000);
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
