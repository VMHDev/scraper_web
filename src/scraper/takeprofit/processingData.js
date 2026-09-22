/**
 * @file processingData.js
 * @description Transforms raw takeprofit.vn scores into the row format used
 * for the CSV export.
 */

/**
 * Converts raw scraped TakeProfit scores into export rows.
 *
 * Values are emitted as Excel formulas (e.g. `=7/10`) so the spreadsheet
 * computes a normalized score; `"---"` marks missing data and `""` marks
 * separator rows (the "-N-" tickers).
 *
 * @param {Object} dataInfo - Raw data from scraperTakeProfit.
 * @param {string} dataInfo.scoreTP - TakeProfit score, e.g. "7/10".
 * @param {string} dataInfo.scoreF - F-Score, e.g. "8/10".
 * @returns {Array<{title: string, value: string}>} Sorted rows
 * (TP Score, F Score) ready for CSV export.
 */
const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 1,
    title: "TP Score",
    value:
      dataInfo?.scoreTP === ""
        ? ""
        : dataInfo?.scoreTP !== "/10"
          ? `=${dataInfo?.scoreTP}`
          : `---`,
  });
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 2,
    title: "F Score",
    value:
      dataInfo?.scoreF === ""
        ? ""
        : dataInfo?.scoreF !== "/10"
          ? `=${dataInfo?.scoreF}`
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
