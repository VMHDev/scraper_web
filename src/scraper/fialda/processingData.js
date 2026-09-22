/**
 * @file processingData.js
 * @description Transforms raw fwt.fialda.com data into the row format used
 * for the CSV export.
 */
const { removeUnit } = require("./../../utils/commons");

/**
 * Converts raw scraped Fialda data into export rows.
 *
 * The overview/finance blocks are matched by array index because the site
 * renders them as fixed-order grids/tables without stable field labels
 * (fragile if the site changes its layout):
 * - overview[4] = Capitalization, [6] = Liquidity, [7] = 52W min - max price
 * - financeOne[1] = EPS, [2] = P/E, [6] = P/B
 * - financeTwo[0..3] = Quick Ratio, Current Ratio, D/E, Debt ratio (DTI)
 *
 * Missing sections are filled with empty rows so every stock produces the
 * same row layout; rows are then sorted by `id` and the `id` stripped.
 *
 * @param {Object} dataInfo - Raw data from scraperFialda.
 * @param {string} [dataInfo.intro] - Header text containing the exchange name.
 * @param {string} [dataInfo.price] - Current price text.
 * @param {Array<{id: number, title: string, value: string}>} [dataInfo.overview]
 * @param {Array<{id: number, title: string, value: string}>} [dataInfo.financeOne]
 * @param {Array<{id: number, title: string, value: string}>} [dataInfo.financeTwo]
 * @returns {Array<{title: string, value: string}>} Ordered export rows.
 */
const processingData = (dataInfo) => {
  const dataScraper = [];
  /////////////////////////////////////////////////
  if (dataInfo?.intro) {
    // Intro text is "<label>:<exchange>" - keep only the exchange name
    const arrIntro = dataInfo?.intro.split(":");
    dataScraper.push({
      id: 0,
      title: "Exchange",
      value: arrIntro[1],
    });
  } else {
    dataScraper.push({
      id: 0,
      title: "Exchange",
      value: "",
    });
  }

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 1,
    title: "Price Now",
    value: dataInfo?.price ? dataInfo?.price : "",
  });

  /////////////////////////////////////////////////
  if (dataInfo?.overview) {
    dataInfo?.overview?.forEach((item, idx) => {
      if (idx === 4) {
        dataScraper.push({
          id: 5,
          title: "Capitalization",
          value: removeUnit(item?.value || ""),
        });
      } else if (idx === 6) {
        dataScraper.push({
          id: 4,
          title: "Liquidity (Avg.10d)",
          value: removeUnit(item?.value || ""),
        });
      } else if (idx === 7) {
        // Value is "<min> - <max>" - split into two separate rows
        const arrPrice = item?.value.split(" - ");
        dataScraper.push({
          id: 2,
          title: "Price 52W Min",
          value: arrPrice[0],
        });
        dataScraper.push({
          id: 3,
          title: "Price 52W Max",
          value: arrPrice[1],
        });
      }
    });
  } else {
    dataScraper.push({
      id: 5,
      title: "Capitalization",
      value: "",
    });
    dataScraper.push({
      id: 4,
      title: "Liquidity (Avg.10d)",
      value: "",
    });
    dataScraper.push({
      id: 3,
      title: "Price 52W Min",
      value: "",
    });
    dataScraper.push({
      id: 2,
      title: "Price 52W Max",
      value: "",
    });
  }

  if (dataInfo?.financeOne) {
    dataInfo?.financeOne?.forEach((item, idx) => {
      if (idx === 1) {
        dataScraper.push({
          id: 12,
          title: "EPS",
          value: item?.value || "",
        });
      } else if (idx === 2) {
        dataScraper.push({
          id: 10,
          title: "P/E",
          value: item?.value || "",
        });
      } else if (idx === 6) {
        dataScraper.push({
          id: 11,
          title: "P/B",
          value: item?.value || "",
        });
      }
    });
  } else {
    dataScraper.push({
      id: 12,
      title: "EPS",
      value: "",
    });
    dataScraper.push({
      id: 10,
      title: "P/E",
      value: "",
    });
    dataScraper.push({
      id: 11,
      title: "P/B",
      value: "",
    });
  }

  if (dataInfo?.financeTwo) {
    dataInfo?.financeTwo?.forEach((item, idx) => {
      if (idx === 0) {
        dataScraper.push({
          id: 6,
          title: "Quick Ratio",
          value: item?.value || "",
        });
      } else if (idx === 1) {
        dataScraper.push({
          id: 7,
          title: "Current Ratio",
          value: item?.value || "",
        });
      } else if (idx === 2) {
        dataScraper.push({
          id: 8,
          title: "D/E",
          value: item?.value || "",
        });
      } else if (idx === 3) {
        dataScraper.push({
          id: 9,
          title: "Debt ratio (DTI)",
          value: item?.value || "",
        });
      }
    });
  } else {
    dataScraper.push({
      id: 6,
      title: "Quick Ratio",
      value: "",
    });
    dataScraper.push({
      id: 7,
      title: "Current Ratio",
      value: "",
    });
    dataScraper.push({
      id: 8,
      title: "D/E",
      value: "",
    });
    dataScraper.push({
      id: 9,
      title: "Debt ratio (DTI)",
      value: "",
    });
  }

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
