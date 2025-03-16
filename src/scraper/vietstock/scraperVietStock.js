const { delayRequest } = require("./../../utils/commons");

const scraperVietstock = (browser, url, symbol) =>
  new Promise(async (resolve, reject) => {
    let dataScraper = {
      indexStocks: null,
      priceStocks: null,
      profileStocks: null,
    };
    let isHasError = false;

    if (
      symbol === "-1-" ||
      symbol === "-2-" ||
      symbol === "-3-" ||
      symbol === "-4-" ||
      symbol === "-5-" ||
      symbol === "-6-" ||
      symbol === "-7-" ||
      symbol === "-8-" ||
      symbol === "-9-"
    ) {
      resolve(dataScraper);
      return;
    }

    let pageInfo = await browser.newPage();
    try {
      console.log(">> Open new page ...: ", url);
      await pageInfo
        .goto(url, { waitUntil: "load", timeout: 5 * 10000 })
        .catch((err) => {
          console.log("Error Scraper >>> ", JSON.stringify(err));
          isHasError = true;
        });
      console.log(">> Accessing " + url);
      await pageInfo.waitForSelector("#order-chart-index").catch((err) => {
        console.log("Error Scraper >>> ", JSON.stringify(err));
        isHasError = true;
      });
      if (isHasError) {
        resolve(dataScraper);
        return;
      }
      console.log(">> Page load done...");

      //////////////////////////////////////////////////////////
      const dataIndexStocks = await pageInfo.$$eval(
        "#page-container > div.row.stock-row.p-b > div.col-xs-24.col-md-17.m-b-xs.stock-cell > div:nth-child(4) > small",
        (els) => {
          let tmpDataIndexStocks = els.map((el, idx) => {
            return {
              id: idx,
              infoChecked: el.querySelector("i")?.className || "",
              typeInfo: el.querySelector("a")?.innerText || "",
            };
          });
          return tmpDataIndexStocks;
        }
      );
      console.log("dataIndexStocks", JSON.stringify(dataIndexStocks));
      dataScraper.indexStocks = dataIndexStocks;

      //////////////////////////////////////////////////////////
      const dataPriceStocks = await pageInfo.$eval(
        "#page-container > div.row.stock-row.p-b > div.col-xs-24.col-md-17.m-b-xs.stock-cell > div.bt3.m-b > div > div.col-sm-5.col-md-6.text-center > div > div",
        (el) => {
          return {
            infoWarnings: el.querySelector("small").innerText,
            infoPrice: el.querySelector("#stockprice > span.price").innerText,
          };
        }
      );
      console.log("dataPriceStocks", JSON.stringify(dataPriceStocks));
      dataScraper.priceStocks = dataPriceStocks;

      //////////////////////////////////////////////////////////
      const dataProfileStocks = await pageInfo.$$eval(
        "#niem-yet > table > tbody > tr",
        (els) => {
          let tmpDataProfileStocks = els.map((el, idx) => {
            return {
              id: idx,
              title: el.querySelector("td:nth-child(1)")?.innerText || "",
              value: el.querySelector("td:nth-child(2)")?.innerText || "",
            };
          });
          return tmpDataProfileStocks;
        }
      );
      console.log("dataProfileStocks", JSON.stringify(dataProfileStocks));
      dataScraper.profileStocks = dataProfileStocks;

      //////////////////////////////////////////////////////////
      if (pageInfo) {
        await pageInfo.waitForTimeout(5 * 1000);
        await pageInfo.close();
        await delayRequest(5 * 1000, "Next Pages");
        console.log(">> Tab đã đóng...");
      }

      resolve(dataScraper);
    } catch (error) {
      console.log("Controller failed: " + error);
      await pageInfo.close();
      console.log(">> Tab đã đóng...");
      reject(error);
    }
  });

module.exports = scraperVietstock;
