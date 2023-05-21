const scraperDStock = (browser, url, symbol) =>
  new Promise(async (resolve, reject) => {
    let dataScraper = {};
    let isHasError = false;

    if (
      symbol === "-1-" ||
      symbol === "-2-" ||
      symbol === "-3-" ||
      symbol === "-4-" ||
      symbol === "-5-" ||
      symbol === "-6-" ||
      symbol === "-7-" ||
      symbol === "-8-"
    ) {
      dataScraper.dRating = "";
      dataScraper.dSector = "";
      resolve(dataScraper);
      return;
    }

    try {
      let pageInfo = await browser.newPage();
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);

      await pageInfo.waitForSelector("div[id^='highcharts']").catch((err) => {
        console.log("Error Scraper >>> ", JSON.stringify(err));
        isHasError = true;
      });
      if (isHasError) {
        dataScraper.dRating = "";
        dataScraper.dSector = "";
        resolve(dataScraper);
        return;
      }
      console.log(">> Page load done...");

      //////////////////////////////////////////////////////////
      const dataDStock = await pageInfo
        .$eval(
          "#__next > div > div.page-container.theme-dark > div > div > div > div:nth-child(2) > div.drating-box > div.drating-box__left > div > div.box-item-container > div > div > table > tbody > tr:last-child",
          (el) => {
            return {
              dRating: el.querySelector("td:nth-child(2)")?.innerText || "---",
              dSector: el.querySelector("td:nth-child(3)")?.innerText || "---",
            };
          }
        )
        .catch((err) => {
          console.log("Error Scraper >>> ", JSON.stringify(err));
          return { dRating: "", dSector: "" };
        });
      console.log("dataDStock", JSON.stringify(dataDStock));
      dataScraper.dRating = dataDStock.dRating;
      dataScraper.dSector = dataDStock.dSector;

      //////////////////////////////////////////////////////////
      await pageInfo?.waitForTimeout(2 * 1000);
      await pageInfo?.close();
      console.log(">> Tab đã đóng...");

      resolve(dataScraper);
    } catch (error) {
      console.log("Controller failed: " + error);
      console.log(">> Tab đã đóng...");
      resolve(dataScraper);
      reject(error);
    }
  });

module.exports = scraperDStock;
