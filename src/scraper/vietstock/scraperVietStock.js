const { delayRequest } = require("./../../utils/commons");

const scraperVietstock = (browser, url, symbol) =>
  new Promise(async (resolve, reject) => {
    let dataScraper = {
      indexStocks: null,
      priceStocks: null,
      financialStocks: null,
      profileStocks: null,
    };
    let isHasError = false;

    if (
      symbol === "-0-" ||
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
        },
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
        },
      );
      console.log("dataPriceStocks", JSON.stringify(dataPriceStocks));
      dataScraper.priceStocks = dataPriceStocks;

      //////////////////////////////////////////////////////////
      let dataFinancialStocks = null;
      try {
        dataFinancialStocks = await pageInfo.evaluate(() => {
          const getTextById = (id) => {
            const el = document.getElementById(id);
            return el ? el.innerText.trim() : "";
          };

          let data = {
            priceInfo: {
              price: getTextById("stockprice"),
              change: getTextById("stockchange"),
              tradeDate: getTextById("tradedate"),
              tradingStatus: getTextById("tradingstatus"),
            },
            basicInfo: {
              openPrice: getTextById("openprice"),
              highestPrice: getTextById("highestprice"),
              lowestPrice: getTextById("lowestprice"),
              tradingVolume: getTextById("totalvol"),
              marketCap: "", // No ID for this, will get from selector
            },
            tradingInfo: {
              buyingVolume: getTextById("outbuy"),
              sellingVolume: getTextById("outsell"),
              high52Week: "",
              low52Week: "",
              avgVolume52Week: "",
            },
            foreignInfo: {
              foreignBuy: getTextById("foreignBuy"),
              foreignOwnership: getTextById("ownedratio"),
              cashDividend: "",
              dividendYield: "",
              beta: "",
            },
            financialRatios: {
              eps: "",
              pe: "",
              fpe: "",
              bvps: "",
              pb: "",
            },
          };

          // Get items without IDs using selectors
          const container = document.querySelector(
            "#page-container > div.row.stock-row.p-b > div.col-xs-24.col-md-17.m-b-xs.stock-cell > div.bt3.m-b > div",
          );

          if (container) {
            // Get Vốn hóa (no ID)
            const allColumns = container.querySelectorAll(
              ".col-xs-12.col-sm-5.col-md-5.col-c.bg-50",
            );
            if (allColumns.length > 0) {
              const paragraphs = allColumns[0].querySelectorAll("p.p8");
              paragraphs.forEach((p) => {
                const text = p.childNodes[0]?.textContent?.trim() || "";
                if (text.includes("Vốn hóa")) {
                  data.basicInfo.marketCap =
                    p.querySelector("b.pull-right")?.innerText.trim() || "";
                }
              });
            }

            // Get Trading Info items without IDs (Cao 52T, Thấp 52T, KLBQ 52T)
            if (allColumns.length > 1) {
              const paragraphs = allColumns[1].querySelectorAll("p.p8");
              paragraphs.forEach((p) => {
                const text = p.childNodes[0]?.textContent?.trim() || "";
                const value =
                  p.querySelector("b.pull-right")?.innerText.trim() || "";

                if (text.includes("Cao 52T"))
                  data.tradingInfo.high52Week = value;
                else if (text.includes("Thấp 52T"))
                  data.tradingInfo.low52Week = value;
                else if (text.includes("KLBQ 52T"))
                  data.tradingInfo.avgVolume52Week = value;
              });
            }

            // Get Foreign Info items without IDs
            const foreignSection = container.querySelector(
              ".col-xs-12.col-sm-5.col-md-4.col-c.bg-50",
            );
            if (foreignSection) {
              const paragraphs = foreignSection.querySelectorAll("p.p8");
              paragraphs.forEach((p) => {
                const text = p.childNodes[0]?.textContent?.trim() || "";
                const value =
                  p.querySelector("b.pull-right")?.innerText.trim() || "";

                if (text.includes("Cổ tức TM"))
                  data.foreignInfo.cashDividend = value;
                else if (text.includes("T/S cổ tức"))
                  data.foreignInfo.dividendYield = value;
                else if (text.includes("Beta")) data.foreignInfo.beta = value;
              });
            }

            // Get Financial Ratios (no IDs)
            const ratiosSection = container.querySelector(
              ".col-xs-12.col-sm-4.col-md-4.col-c-last .col-ce.bg-50",
            );
            if (ratiosSection) {
              const paragraphs = ratiosSection.querySelectorAll("p.p8");
              paragraphs.forEach((p) => {
                const text = p.childNodes[0]?.textContent?.trim() || "";
                const value =
                  p.querySelector("b.pull-right")?.innerText.trim() || "";

                if (text.includes("EPS")) data.financialRatios.eps = value;
                else if (text === "P/E") data.financialRatios.pe = value;
                else if (text.includes("F P/E"))
                  data.financialRatios.fpe = value;
                else if (text.includes("BVPS"))
                  data.financialRatios.bvps = value;
                else if (text.includes("P/B")) data.financialRatios.pb = value;
              });
            }
          }

          return data;
        });
      } catch (err) {
        console.log("Error getting financial stocks V2: ", err);
      }
      console.log("dataFinancialStocks", JSON.stringify(dataFinancialStocks));
      dataScraper.financialStocks = dataFinancialStocks;

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
        },
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
