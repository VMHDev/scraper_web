const scraperVietstock = (browser, url, symbol) =>
  new Promise(async (resolve, reject) => {
    let dataScraper = {
      rating: null,
      valuation: null,
      valuationPE: null,
      valuationPB: null,
      valuationDCF: null,
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
      symbol === "-8-"
    ) {
      resolve(dataScraper);
      return;
    }

    let pageInfo = await browser.newPage();
    try {
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);
      await pageInfo.waitForSelector("#evaluationPeChart").catch((err) => {
        console.log("Error Scraper >>> ", JSON.stringify(err));
        isHasError = true;
      });
      if (isHasError) {
        resolve(dataScraper);
        return;
      }
      console.log(">> Page load done...");

      //////////////////////////////////////////////////////////
      const dataRating = await pageInfo.$eval(
        "#tcAnalysis > div > div.mobile-header > div.info > app-analysis-mobile-stock-info > div > div.stock-info > div.exchange > div.rating > div",
        (el) => {
          return el?.innerText?.trim();
        }
      );
      console.log("dataRating", JSON.stringify(dataRating));
      dataScraper.rating = dataRating;

      //////////////////////////////////////////////////////////
      const dataValuation = await pageInfo.$eval(
        "#container > app-evaluation > div > div > div.evaluation-pin-bottom.result-avaible > app-analysis-evaluation-result > div > div.pull-right > div.col-item.col-result",
        (el) => {
          return el.querySelector("div:nth-child(1)").innerText;
        }
      );
      console.log("dataValuation", JSON.stringify(dataValuation));
      dataScraper.valuation = dataValuation;

      // #container > app-evaluation > div > div > div.evaluation-body > div:nth-child(1) > div.method > div > app-analysis-evaluation-method-factor > div > div.method-content > div > mat-radio-group > div:nth-child(12) > div:nth-child(2) > span
      //////////////////////////////////////////////////////////
      const dataValuationPE = await pageInfo
        .$eval(
          "#container > app-evaluation > div > div > div.evaluation-body > div:nth-child(1) > div.method > div > app-analysis-evaluation-method-factor > div > div.method-content > div > mat-radio-group > div:nth-child(12) > div:nth-child(2)",
          (el) => {
            return el.querySelector("span").innerText;
          }
        )
        .catch((err) => {
          console.log("Error Scraper ValuationPE >>> ", err);
        });
      console.log("dataValuationPE", JSON.stringify(dataValuationPE));
      dataScraper.valuationPE = dataValuationPE;

      // #container > app-evaluation > div > div > div.evaluation-body > div:nth-child(1) > div.method > div > app-analysis-evaluation-method-factor > div > div.method-content > div > mat-radio-group > div:nth-child(12) > div:nth-child(3) > span
      //////////////////////////////////////////////////////////
      const dataValuationPB = await pageInfo
        .$eval(
          "#container > app-evaluation > div > div > div.evaluation-body > div:nth-child(1) > div.method > div > app-analysis-evaluation-method-factor > div > div.method-content > div > mat-radio-group > div:nth-child(12) > div:nth-child(3)",
          (el) => {
            return el.querySelector("span").innerText;
          }
        )
        .catch((err) => {
          console.log("Error Scraper ValuationPB >>> ", err);
        });
      console.log("dataValuationPB", JSON.stringify(dataValuationPB));
      dataScraper.valuationPB = dataValuationPB;

      // #container > app-evaluation > div > div > div.evaluation-body > div:nth-child(2) > div > div > app-analysis-evaluation-method-discount-cash-flow > div > div.method-content > div > div.method-row.method-row-bold.no-border > div.pull-right > div
      //////////////////////////////////////////////////////////
      const dataValuationDCF = await pageInfo
        .$eval(
          "#container > app-evaluation > div > div > div.evaluation-body > div:nth-child(2) > div > div > app-analysis-evaluation-method-discount-cash-flow > div > div.method-content > div > div.method-row.method-row-bold.no-border > div.pull-right",
          (el) => {
            return el.querySelector("div").innerText;
          }
        )
        .catch((err) => {
          console.log("Error Scraper ValuationDCF >>> ", err);
        });
      console.log("dataValuationDCF", JSON.stringify(dataValuationDCF));
      dataScraper.valuationDCF = dataValuationDCF;

      //////////////////////////////////////////////////////////
      if (pageInfo) {
        await pageInfo.waitForTimeout(2 * 1000);
        await pageInfo.close();
        console.log(">> Tab đã đóng...");
      }

      resolve(dataScraper);
    } catch (error) {
      await pageInfo.close();
      console.log("Controller failed: " + error);
      reject(error);
    }
  });

module.exports = scraperVietstock;
