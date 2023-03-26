const scraperOverview = (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let pageInfo = await browser.newPage();
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);
      await pageInfo.waitForSelector("table.table-striped");
      console.log(">> Page load done...");

      let dataScraper = {};

      //////////////////////////////////////////////////////////
      const dataOverview = await pageInfo.$$eval(
        "div[id^='top-'] > div.card-body > div.info-cp > div:nth-child(2) > div.grid-cp > div.grid-cp-item",
        (els) => {
          let tmpDataOverview = els.map((el, idx) => {
            if (idx === 3 || idx === 7) {
              const tmpValueMin =
                el.querySelector("div.progress-custom-panel > div:nth-child(2)")
                  ?.innerText || "";
              const tmpValueMax =
                el.querySelector("div.progress-custom-panel > div:nth-child(3)")
                  ?.innerText || "";
              return {
                id: idx,
                title:
                  el.querySelector("h6.widget-subheading")?.innerText || "",
                value: `${tmpValueMin} - ${tmpValueMax}`,
              };
            } else {
              return {
                id: idx,
                title:
                  el.querySelector("h6.widget-subheading")?.innerText || "",
                value: el.querySelector("div.fsize-4")?.innerText || "",
              };
            }
          });
          return tmpDataOverview;
        }
      );
      dataScraper.overview = dataOverview;

      //////////////////////////////////////////////////////////
      const dataFinanceOne = await pageInfo.$$eval(
        "div[data-tab~='chính'] > div.card-body > div > div.m-px-15 > div.col-md-4 > div:nth-child(4) > table > tbody > tr",
        (els) => {
          let tmpDataFinanceOne = els.map((el, idx) => {
            return {
              id: idx,
              title: el.querySelector("td:nth-child(1)")?.innerText || "",
              value: el.querySelector("td:nth-child(2)")?.innerText || "",
            };
          });
          return tmpDataFinanceOne;
        }
      );
      dataScraper.financeOne = dataFinanceOne;

      //////////////////////////////////////////////////////////
      const dataFinanceTwo = await pageInfo.$$eval(
        "div[data-tab~='chính'] > div.card-body > div > div.m-px-15 > div.col-md-4 > div:nth-child(5) > table > tbody > tr",
        (els) => {
          let tmpDataFinanceTwo = els.map((el, idx) => {
            return {
              id: idx,
              title: el.querySelector("td:nth-child(1)")?.innerText || "",
              value: el.querySelector("td:nth-child(2)")?.innerText || "",
            };
          });
          return tmpDataFinanceTwo;
        }
      );
      dataScraper.financeTwo = dataFinanceTwo;

      await pageInfo.waitForTimeout(1 * 1000);
      await pageInfo.close();
      console.log(">> Tab đã đóng...");

      resolve(dataScraper);
    } catch (error) {
      console.log("Controller failed: " + error);
      await pageInfo.close();
      console.log(">> Tab đã đóng...");
      reject(error);
    }
  });

module.exports = scraperOverview;
