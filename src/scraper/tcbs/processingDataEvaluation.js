const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 1,
    title: "Rating",
    value: dataInfo?.rating ? dataInfo?.rating : "",
  });

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 2,
    title: "Valuation",
    value: dataInfo?.valuation ? dataInfo?.valuation : "",
  });

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 3,
    title: "Valuation PE",
    value: dataInfo?.valuationPE ? dataInfo?.valuationPE : "",
  });

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 4,
    title: "Valuation PB",
    value: dataInfo?.valuationPB ? dataInfo?.valuationPB : "",
  });

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 5,
    title: "Valuation DCF",
    value: dataInfo?.valuationDCF ? dataInfo?.valuationDCF : "",
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
