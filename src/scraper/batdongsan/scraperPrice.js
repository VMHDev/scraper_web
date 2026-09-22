/**
 * @file scraperPrice.js
 * @description Page-level scraper that extracts real-estate listing cards
 * (title, link, price, area, price/m², publish date) from a
 * batdongsan.com.vn listing page.
 */

/**
 * Scrapes all listing cards on a batdongsan.com.vn search result page.
 *
 * The extraction runs inside the page via `$$eval` over every
 * `#product-lists-web > div.js__card` element; optional chaining is used
 * everywhere because individual cards may miss some fields.
 *
 * @param {import('puppeteer').Browser} browser - Shared browser instance.
 * @param {string} url - URL of the listing page to scrape.
 * @returns {Promise<Array<{id: number, title: string, link: string, price: string, area: string, pricePerM2: string, date: string}>>}
 * Resolves with the scraped rows (empty array when the page fails to load),
 * or rejects on unexpected errors.
 */
const scraperPrice = (browser, url) =>
  new Promise(async (resolve, reject) => {
    let dataScraper = [];
    let isHasError = false;
    let pageInfo = await browser.newPage();
    try {
      console.log(">> Open new page ...");
      await pageInfo.goto(url);
      console.log(">> Accessing " + url);
      // The search form is a reliable indicator that the listing loaded
      await pageInfo.waitForSelector("#boxSearchForm").catch((err) => {
        console.log("Error Scraper >>> ", JSON.stringify(err));
        isHasError = true;
      });
      if (isHasError) {
        resolve(dataScraper);
        return;
      }
      console.log(">> Page load done...");

      dataScraper = await pageInfo
        .$$eval("#product-lists-web > div.js__card ", (els) => {
          let tmpDataItem = els.map((el, idx) => {
            return {
              id: idx,
              title: el.querySelector("a")?.title,
              link: el.querySelector("a")?.href,
              price: el.querySelector(
                "a > div.re__card-info > div.re__card-info-content > div > div.re__card-config.js__card-config > span.re__card-config-price.js__card-config-item",
              )?.innerText,
              area: el.querySelector(
                "a > div.re__card-info > div.re__card-info-content > div > div.re__card-config.js__card-config > span.re__card-config-area.js__card-config-item",
              )?.innerText,
              pricePerM2: el.querySelector(
                "a > div.re__card-info > div.re__card-info-content > div > div.re__card-config.js__card-config > span.re__card-config-price_per_m2.js__card-config-item",
              )?.innerText,
              date: el.querySelector(
                "a > div.re__card-info > div.re__card-contact > div.re__card-published-info > div > span",
              )?.innerText,
            };
          });
          return tmpDataItem;
        })
        .catch((err) => {
          console.log("Error Scraper Price >>> ", err);
        });

      await pageInfo.waitForTimeout(2 * 1000);
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

module.exports = scraperPrice;
