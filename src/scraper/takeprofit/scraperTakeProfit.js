const scraperTakeProfit = (browser, url, symbol) =>
  new Promise(async (resolve, reject) => {
    let dataScraper = {};

    if (
      symbol === "-1-" ||
      symbol === "-2-" ||
      symbol === "-3-" ||
      symbol === "-4-" ||
      symbol === "-5-" ||
      symbol === "-6-"
    ) {
      dataScraper.scoreTP = "";
      dataScraper.scoreF = "";
      resolve(dataScraper);
      return;
    }

    try {
      let pageInfo = await browser.newPage();
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);
      await pageInfo.waitForSelector("div[id$='tong-quan-co-phieu']");
      console.log(">> Page load done...");

      //////////////////////////////////////////////////////////
      const dataTPScore = await pageInfo.$eval(
        "div[id$='panel-tong-quan-co-phieu'] > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(1) > div > div.chart-wrapper__score-name",
        (el) => {
          return el.querySelector("span").innerText;
        }
      );
      console.log("dataIndexStocks", JSON.stringify(dataTPScore));
      dataScraper.scoreTP = dataTPScore;

      //////////////////////////////////////////////////////////
      const dataFScore = await pageInfo.$eval(
        "div[id$='panel-tong-quan-co-phieu'] > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(1) > div > div.chart-wrapper__sub",
        (el) => {
          return el.querySelector("span:nth-child(2)").innerText;
        }
      );
      console.log("dataPriceStocks", JSON.stringify(dataFScore));
      dataScraper.scoreF = dataFScore;

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

module.exports = scraperTakeProfit;
