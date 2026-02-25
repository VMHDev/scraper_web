const { checkIndexIsChecked } = require("./../../utils/vietstock/commons");

const TEXT_WARNINGS = "Đang bị cảnh báo";

const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  if (dataInfo?.profileStocks) {
    dataInfo?.profileStocks?.forEach((item, idx) => {
      if (idx === 0) {
        dataScraper.push({
          id: 0,
          title: "Year Of Listing",
          value: item?.value?.substr(6, 4),
        });
      }
      if (idx === 1) {
        dataScraper.push({
          id: 6,
          title: "Price Init",
          value: Number(item?.value?.replace(/,/g, "") || 0) / 1000,
        });
      }
    });
  } else {
    dataScraper.push({
      id: 0,
      title: "Year Of Listing",
      value: "",
    });
    dataScraper.push({
      id: 6,
      title: "Price Init",
      value: "",
    });
  }

  /////////////////////////////////////////////////
  if (dataInfo?.indexStocks) {
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
  } else {
    dataScraper.push({
      id: 1,
      title: "VN30/HNX30",
      value: "",
    });
    dataScraper.push({
      id: 2,
      title: "Margin",
      value: "",
    });
    dataScraper.push({
      id: 3,
      title: "FTSE VN ETF",
      value: "",
    });
    dataScraper.push({
      id: 4,
      title: "VNM ETF",
      value: "",
    });
  }

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
  const fs = dataInfo?.financialStocks;
  const parseChange = (str) => {
    if (!str) return { value: "", percent: "" };
    const match = str.match(/^(.+?)\s*\((.+?)\)$/);
    return match
      ? { value: match[1].trim(), percent: match[2].trim() }
      : { value: str, percent: "" };
  };
  const priceChange = parseChange(fs?.priceInfo?.change);
  const fsFields = [
    // priceInfo
    { id: 7, title: "Price", value: fs?.priceInfo?.price ?? "" },
    { id: 8, title: "Price Change", value: priceChange.value },
    { id: 9, title: "Price Change %", value: priceChange.percent },
    { id: 10, title: "Trade Date", value: fs?.priceInfo?.tradeDate ?? "" },
    {
      id: 11,
      title: "Trading Status",
      value: fs?.priceInfo?.tradingStatus ?? "",
    },
    // basicInfo
    { id: 12, title: "Open Price", value: fs?.basicInfo?.openPrice ?? "" },
    {
      id: 13,
      title: "Highest Price",
      value: fs?.basicInfo?.highestPrice ?? "",
    },
    { id: 14, title: "Lowest Price", value: fs?.basicInfo?.lowestPrice ?? "" },
    {
      id: 15,
      title: "Trading Volume",
      value: fs?.basicInfo?.tradingVolume ?? "",
    },
    { id: 16, title: "Market Cap", value: fs?.basicInfo?.marketCap ?? "" },
    // tradingInfo
    {
      id: 17,
      title: "Buying Volume",
      value: fs?.tradingInfo?.buyingVolume ?? "",
    },
    {
      id: 18,
      title: "Selling Volume",
      value: fs?.tradingInfo?.sellingVolume ?? "",
    },
    { id: 19, title: "Price Current", value: fs?.priceInfo?.price ?? "" },
    { id: 20, title: "High 52W", value: fs?.tradingInfo?.high52Week ?? "" },
    { id: 21, title: "Low 52W", value: fs?.tradingInfo?.low52Week ?? "" },
    {
      id: 22,
      title: "Avg Volume 52W",
      value: fs?.tradingInfo?.avgVolume52Week ?? "",
    },
    // foreignInfo
    { id: 23, title: "Foreign Buy", value: fs?.foreignInfo?.foreignBuy ?? "" },
    {
      id: 24,
      title: "Foreign Ownership",
      value: fs?.foreignInfo?.foreignOwnership ?? "",
    },
    {
      id: 25,
      title: "Cash Dividend",
      value: fs?.foreignInfo?.cashDividend ?? "",
    },
    {
      id: 26,
      title: "Dividend Yield",
      value: fs?.foreignInfo?.dividendYield ?? "",
    },
    { id: 27, title: "Beta", value: fs?.foreignInfo?.beta ?? "" },
    // financialRatios
    { id: 28, title: "EPS", value: fs?.financialRatios?.eps ?? "" },
    { id: 29, title: "P/E", value: fs?.financialRatios?.pe ?? "" },
    { id: 30, title: "F P/E", value: fs?.financialRatios?.fpe ?? "" },
    { id: 31, title: "BVPS", value: fs?.financialRatios?.bvps ?? "" },
    { id: 32, title: "P/B", value: fs?.financialRatios?.pb ?? "" },
  ];
  fsFields.forEach((field) => dataScraper.push(field));

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
