const { removeUnit } = require("./../../utils/commons");

const processingData = (dataInfo) => {
  const dataScraper = [];
  dataInfo?.overview?.forEach((item, idx) => {
    if (idx === 4) {
      dataScraper.push({
        id: 4,
        title: "Capitalization",
        value: removeUnit(item?.value || ""),
      });
    } else if (idx === 6) {
      dataScraper.push({
        id: 3,
        title: "Liquidity (Avg.10d)",
        value: removeUnit(item?.value || ""),
      });
    } else if (idx === 7) {
      const arrPrice = item?.value.split(" - ");
      dataScraper.push({
        id: 0,
        title: "Price 52W Min",
        value: arrPrice[0],
      });
      dataScraper.push({
        id: 1,
        title: "Price 52W Max",
        value: arrPrice[1],
      });
    }
  });

  dataInfo?.financeOne?.forEach((item, idx) => {
    if (idx === 1) {
      dataScraper.push({
        id: 11,
        title: "EPS",
        value: item?.value || "",
      });
    } else if (idx === 2) {
      dataScraper.push({
        id: 9,
        title: "P/E",
        value: item?.value || "",
      });
    } else if (idx === 6) {
      dataScraper.push({
        id: 10,
        title: "P/B",
        value: item?.value || "",
      });
    }
  });

  dataInfo?.financeTwo?.forEach((item, idx) => {
    if (idx === 0) {
      dataScraper.push({
        id: 5,
        title: "Quick Ratio",
        value: item?.value || "",
      });
    } else if (idx === 1) {
      dataScraper.push({
        id: 6,
        title: "Current Ratio",
        value: item?.value || "",
      });
    } else if (idx === 2) {
      dataScraper.push({
        id: 7,
        title: "D/E",
        value: item?.value || "",
      });
    } else if (idx === 3) {
      dataScraper.push({
        id: 8,
        title: "Debt ratio (DTI)",
        value: item?.value || "",
      });
    }
  });

  const dataSort = dataScraper.sort((a, b) => a.id - b.id);

  return dataSort;
};

module.exports = processingData;
