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
    if (item.typeInfo === "HNX30" || item.typeInfo === "VN30") {
      dataScraper.push({
        id: 1,
        title: "VN30/HNX30",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "GD ký quỹ") {
      dataScraper.push({
        id: 2,
        title: "Margin",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "FTSE Vietnam ETF") {
      dataScraper.push({
        id: 3,
        title: "FTSE VN ETF",
        value: checkIndexIsChecked(item?.infoChecked || ""),
      });
    } else if (item.typeInfo === "V.N.M ETF") {
      dataScraper.push({
        id: 4,
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

  const checkExistVNHNX = (obj) => obj.title === "VN30/HNX30";
  const isExistVNHNX = dataScraper.some(checkExistVNHNX);
  console.log("isExistVNHNX", isExistVNHNX);
  if (!isExistVNHNX) {
    dataScraper.push({
      id: 1,
      title: "VN30/HNX30",
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
