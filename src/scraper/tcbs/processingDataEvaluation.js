const processingData = (dataInfo) => {
  const dataScraper = [];
  var item = "";

  /////////////////////////////////////////////////
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
