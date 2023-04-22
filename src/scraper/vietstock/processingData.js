const { checkIndexIsChecked } = require("./../../utils/vietstock/commons");

const TEXT_WARNINGS = "Đang bị cảnh báo";

const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  dataInfo?.profileStocks?.forEach((item, idx) => {
    if (idx === 0) {
      dataScraper.push({
        id: 0,
        title: "Year Of Listing",
        value: item?.value?.substr(6, 4),
      });
    }
  });

  /////////////////////////////////////////////////
  dataInfo?.indexStocks?.forEach((item, idx) => {
    const id = idx + 1;
    if (item.typeInfo === "HNX30" || item.typeInfo === "VN30") {
      dataScraper.push({
        id: id,
        title: "VN30/HNX30",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "GD ký quỹ") {
      dataScraper.push({
        id: id,
        title: "Margin",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "FTSE Vietnam ETF") {
      dataScraper.push({
        id: id,
        title: "FTSE VN ETF",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "V.N.M ETF") {
      dataScraper.push({
        id: id,
        title: "VNM ETF",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    }
  });

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 5,
    title: "Warnings",
    value: dataInfo?.priceStocks?.infoWarnings === TEXT_WARNINGS ? "x" : "",
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
