const { removeUnit } = require("./../../utils/commons");

const processingData = (dataInfo) => {
  const dataScraper = [];
  /////////////////////////////////////////////////
  const arrIntro = dataInfo?.intro.split(":");
  dataScraper.push({
    id: 0,
    title: "Exchange",
    value: arrIntro[1],
  });

  /////////////////////////////////////////////////
  dataInfo?.overview?.forEach((item, idx) => {
    if (idx === 4) {
      dataScraper.push({
        id: 8,
        title: "Capitalization",
        value: removeUnit(item?.value || ""),
      });
    } else if (idx === 6) {
      dataScraper.push({
        id: 7,
        title: "Liquidity (Avg.10d)",
        value: removeUnit(item?.value || ""),
      });
    } else if (idx === 7) {
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

  dataInfo?.financeOne?.forEach((item, idx) => {
    if (idx === 1) {
      dataScraper.push({
        id: 15,
        title: "EPS",
        value: item?.value || "",
      });
    } else if (idx === 2) {
      dataScraper.push({
        id: 13,
        title: "P/E",
        value: item?.value || "",
      });
    } else if (idx === 6) {
      dataScraper.push({
        id: 14,
        title: "P/B",
        value: item?.value || "",
      });
    }
  });

  dataInfo?.financeTwo?.forEach((item, idx) => {
    if (idx === 0) {
      dataScraper.push({
        id: 9,
        title: "Quick Ratio",
        value: item?.value || "",
      });
    } else if (idx === 1) {
      dataScraper.push({
        id: 10,
        title: "Current Ratio",
        value: item?.value || "",
      });
    } else if (idx === 2) {
      dataScraper.push({
        id: 11,
        title: "D/E",
        value: item?.value || "",
      });
    } else if (idx === 3) {
      dataScraper.push({
        id: 12,
        title: "Debt ratio (DTI)",
        value: item?.value || "",
      });
    }
  });
  /////////////////////////////////////////////////

  // Push data empty
  dataScraper.push({
    id: 1,
    title: "Price 5Y Min",
    value: "",
  });
  dataScraper.push({
    id: 4,
    title: "% decrease",
    value: "",
  });
  dataScraper.push({
    id: 5,
    title: "Price",
    value: "",
  });
  dataScraper.push({
    id: 6,
    title: "VN30/HNX30",
    value: "",
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
