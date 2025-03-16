const {
  SCRAPER_TYPE_STOCKS,
  SCRAPER_LIST_ITEM_TEST,
  SCRAPER_LIST_ITEM_INVESTED,
  SCRAPER_LIST_ITEM_BANK,
  SCRAPER_LIST_ITEM_FINANCE,
  SCRAPER_LIST_ITEM_LOGISTIC,
  SCRAPER_LIST_ITEM_ELECTRICAL,
  SCRAPER_LIST_ITEM_AGRICULTURE,
  SCRAPER_LIST_ITEM_PETROL,
  SCRAPER_LIST_ITEM_EXPORT,
  SCRAPER_LIST_ITEM_REALESTATE_I,
  SCRAPER_LIST_ITEM_REALESTATE_II,
  SCRAPER_LIST_ITEM_COMMERCE,
  SCRAPER_LIST_ITEM_OTHES,
  SCRAPER_LIST_ITEM_VN30,
  SCRAPER_LIST_ITEM_HNX30,
} = require("../../constants/stocks");

const getListScraperFialda = (type) => {
  const dateNow = new Date().getTime();
  switch (type) {
    case SCRAPER_TYPE_STOCKS.TEST:
      return SCRAPER_LIST_ITEM_TEST.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.TEST}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.TEST}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.INVESTED:
      return SCRAPER_LIST_ITEM_INVESTED.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.INVESTED}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.INVESTED}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.BANK:
      return SCRAPER_LIST_ITEM_BANK.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.BANK}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.BANK}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.FINANCE:
      return SCRAPER_LIST_ITEM_FINANCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.FINANCE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.FINANCE}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.LOGISTIC:
      return SCRAPER_LIST_ITEM_LOGISTIC.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.LOGISTIC}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.LOGISTIC}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.ELECTRICAL:
      return SCRAPER_LIST_ITEM_ELECTRICAL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.ELECTRICAL}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.ELECTRICAL}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.AGRICULTURE:
      return SCRAPER_LIST_ITEM_AGRICULTURE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.AGRICULTURE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.AGRICULTURE}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.PETROL:
      return SCRAPER_LIST_ITEM_PETROL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.PETROL}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.PETROL}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.EXPORT:
      return SCRAPER_LIST_ITEM_EXPORT.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.EXPORT}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.EXPORT}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.REALESTATE_I:
      return SCRAPER_LIST_ITEM_REALESTATE_I.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE_I}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE_I}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.REALESTATE_II:
      return SCRAPER_LIST_ITEM_REALESTATE_II.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE_II}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE_II}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.COMMERCE:
      return SCRAPER_LIST_ITEM_COMMERCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.COMMERCE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.COMMERCE}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.VN30:
      return SCRAPER_LIST_ITEM_VN30.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.VN30}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.VN30}-${item}-${dateNow}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.HNX30:
      return SCRAPER_LIST_ITEM_HNX30.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.HNX30}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.HNX30}-${item}-${dateNow}.csv`,
        };
      });
    default:
      return SCRAPER_LIST_ITEM_OTHES.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.OTHERS}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.OTHERS}-${item}-${dateNow}.csv`,
        };
      });
  }
};

const getURLExportCSV = (type) => {
  const dateNow = new Date().getTime();
  switch (type) {
    case SCRAPER_TYPE_STOCKS.TEST:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.TEST}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.INVESTED:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.INVESTED}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.BANK:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.BANK}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.FINANCE:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.FINANCE}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.LOGISTIC:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.LOGISTIC}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.ELECTRICAL:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.ELECTRICAL}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.AGRICULTURE:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.AGRICULTURE}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.PETROL:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.PETROL}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.EXPORT:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.EXPORT}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.REALESTATE_I:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE_I}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.REALESTATE_II:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE_II}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.COMMERCE:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.COMMERCE}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.VN30:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.VN30}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.HNX30:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.HNX30}-${dateNow}.csv`;
    default:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.OTHERS}-${dateNow}.csv`;
  }
};

module.exports = { getListScraperFialda, getURLExportCSV };
