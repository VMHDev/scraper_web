const { checkIndexIsChecked } = require("./../../utils/vietstock/commons");

const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  dataInfo?.indexStocks?.forEach((item, idx) => {
    if (item.typeInfo === "HNX30" || item.typeInfo === "VN30") {
      dataScraper.push({
        id: 0,
        title: "VN30/HNX30",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "GD ký quỹ") {
      dataScraper.push({
        id: 1,
        title: "Margin",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "FTSE Vietnam ETF") {
      dataScraper.push({
        id: 2,
        title: "FTSE VN ETF",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "V.N.M ETF") {
      dataScraper.push({
        id: 3,
        title: "VNM ETF",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    }
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
