/**
 * @file processingData.js
 * @description Transforms raw dstock.vndirect.com.vn (D-Rating) data into
 * the row format used for the CSV export.
 */

/**
 * Converts raw scraped D-Rating data into export rows.
 *
 * Values are emitted as Excel formulas (e.g. `=8.5/10`) so the spreadsheet
 * computes a normalized score; `"---"` marks missing data and `""` marks
 * separator rows (the "-N-" tickers).
 *
 * @param {Object} dataInfo - Raw data from scraperDStock.
 * @param {string} dataInfo.dRating - Stock's D-Rating score.
 * @param {string} dataInfo.dSector - Sector average D-Rating score.
 * @returns {Array<{title: string, value: string}>} Sorted rows
 * (D-Rating, Greater D-Sector) ready for CSV export.
 */
const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 1,
    title: "D-Rating",
    value:
      dataInfo?.dRating === ""
        ? ""
        : dataInfo?.dRating
          ? `=${dataInfo?.dRating}/10`
          : `---`,
  });
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  // "x" when the stock's D-Rating beats its sector average
  dataScraper.push({
    id: 2,
    title: "Greater D-Sector",
    value:
      dataInfo?.dRating === "" || dataInfo?.dSector === ""
        ? ""
        : dataInfo?.dRating > dataInfo?.dSector
          ? "x"
          : `---`,
  });
  /////////////////////////////////////////////////

  // Sort
  const dataSort = dataScraper.sort((a, b) => a.id - b.id);
  /////////////////////////////////////////////////

  // Remove id
  dataSort.forEach((item) => {
    delete item.id;
  });

  return dataSort;
};

module.exports = processingData;
