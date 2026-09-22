/**
 * @file processingDataEvaluation.js
 * @description Transforms raw tcinvest.tcbs.com.vn evaluation data into the
 * row format used for the CSV export.
 */

/**
 * Converts raw scraped TCBS evaluation data into export rows.
 *
 * Number normalization: thousand separators (",") are removed before
 * parsing. Rating is normalized to a 0-1 scale (raw / 5, 2 decimals);
 * valuations are converted from VND to billions (raw / 1000).
 * Non-numeric inputs produce empty strings.
 *
 * @param {Object} dataInfo - Raw data from scraperEvaluation.
 * @param {string} [dataInfo.rating] - TCBS rating (0-5).
 * @param {string} [dataInfo.valuation] - Overall valuation.
 * @param {string} [dataInfo.valuationPE] - Valuation by P/E method.
 * @param {string} [dataInfo.valuationPB] - Valuation by P/B method.
 * @param {string} [dataInfo.valuationDCF] - Valuation by DCF method.
 * @returns {Array<{title: string, value: string|number}>} Sorted export rows.
 */
const processingData = (dataInfo) => {
  const dataScraper = [];
  var item = "";

  /////////////////////////////////////////////////
  // Rating: strip thousand separators, then scale from 0-5 to 0-1
  item =
    dataInfo?.rating && !isNaN(parseFloat(dataInfo?.rating))
      ? (parseFloat(dataInfo?.rating?.replace(/,(?=\d)/g, "")) / 5)?.toFixed(2)
      : "";
  dataScraper.push({
    id: 1,
    title: "Rating",
    value: item,
  });

  /////////////////////////////////////////////////
  // Valuations: strip thousand separators, then convert VND -> billions
  item =
    dataInfo?.valuation && !isNaN(parseFloat(dataInfo?.valuation))
      ? parseFloat(dataInfo?.valuation?.replace(/,(?=\d)/g, "")) / 1000
      : "";
  dataScraper.push({
    id: 2,
    title: "Valuation",
    value: item,
  });

  /////////////////////////////////////////////////
  item =
    dataInfo?.valuationPE && !isNaN(parseFloat(dataInfo?.valuationPE))
      ? parseFloat(dataInfo?.valuationPE?.replace(/,(?=\d)/g, "")) / 1000
      : "";
  dataScraper.push({
    id: 3,
    title: "Valuation PE",
    value: item,
  });

  /////////////////////////////////////////////////
  item =
    dataInfo?.valuationPB && !isNaN(parseFloat(dataInfo?.valuationPB))
      ? parseFloat(dataInfo?.valuationPB?.replace(/,(?=\d)/g, "")) / 1000
      : "";
  dataScraper.push({
    id: 4,
    title: "Valuation PB",
    value: item,
  });

  /////////////////////////////////////////////////
  item =
    dataInfo?.valuationPB && !isNaN(parseFloat(dataInfo?.valuationPB))
      ? parseFloat(dataInfo?.valuationPB?.replace(/,(?=\d)/g, "")) / 1000
      : "";
  dataScraper.push({
    id: 5,
    title: "Valuation DCF",
    value: item,
  });

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
