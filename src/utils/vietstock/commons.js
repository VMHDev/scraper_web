const {
  SCRAPER_TYPE_STOCKS,
  SCRAPER_LIST_ITEM_TEST,
  SCRAPER_LIST_ITEM_INVESTED,
  SCRAPER_LIST_ITEM_BANK,
  SCRAPER_LIST_ITEM_LOGISTIC,
  SCRAPER_LIST_ITEM_ELECTRICAL,
  SCRAPER_LIST_ITEM_AGRICULTURE,
  SCRAPER_LIST_ITEM_PETROL,
  SCRAPER_LIST_ITEM_EXPORT,
  SCRAPER_LIST_ITEM_REALESTATE,
  SCRAPER_LIST_ITEM_COMMERCE,
  SCRAPER_LIST_ITEM_FINANCE,
  SCRAPER_LIST_ITEM_OTHES,
} = require("../../constants/stocks");

const getListScraperVietstock = (type) => {
  switch (type) {
    case SCRAPER_TYPE_STOCKS.TEST:
      return SCRAPER_LIST_ITEM_TEST.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.INVESTED:
      return SCRAPER_LIST_ITEM_INVESTED.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.BANK:
      return SCRAPER_LIST_ITEM_BANK.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.LOGISTIC:
      return SCRAPER_LIST_ITEM_LOGISTIC.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.ELECTRICAL:
      return SCRAPER_LIST_ITEM_ELECTRICAL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.AGRICULTURE:
      return SCRAPER_LIST_ITEM_AGRICULTURE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.PETROL:
      return SCRAPER_LIST_ITEM_PETROL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.EXPORT:
      return SCRAPER_LIST_ITEM_EXPORT.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.REALESTATE:
      return SCRAPER_LIST_ITEM_REALESTATE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.COMMERCE:
      return SCRAPER_LIST_ITEM_COMMERCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.FINANCE:
      return SCRAPER_LIST_ITEM_FINANCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    default:
      return SCRAPER_LIST_ITEM_OTHES.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
      break;
  }
};

const getURLExportCSV = (type) => {
  switch (type) {
    case SCRAPER_TYPE_STOCKS.TEST:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.TEST}.csv`;
    case SCRAPER_TYPE_STOCKS.INVESTED:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.INVESTED}.csv`;
    case SCRAPER_TYPE_STOCKS.BANK:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.BANK}.csv`;
    case SCRAPER_TYPE_STOCKS.LOGISTIC:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.LOGISTIC}.csv`;
    case SCRAPER_TYPE_STOCKS.ELECTRICAL:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.ELECTRICAL}.csv`;
    case SCRAPER_TYPE_STOCKS.AGRICULTURE:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.AGRICULTURE}.csv`;
    case SCRAPER_TYPE_STOCKS.PETROL:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.PETROL}.csv`;
    case SCRAPER_TYPE_STOCKS.EXPORT:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.EXPORT}.csv`;
    case SCRAPER_TYPE_STOCKS.REALESTATE:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.REALESTATE}.csv`;
    case SCRAPER_TYPE_STOCKS.COMMERCE:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.COMMERCE}.csv`;
    case SCRAPER_TYPE_STOCKS.FINANCE:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.FINANCE}.csv`;
    default:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.OTHERS}.csv`;
      break;
  }
};

const checkIndexIsChecked = (value) => {
  if (value.includes("fa-check-square-o")) {
    return "x";
  } else {
    return "";
  }
};

module.exports = {
  getListScraperVietstock,
  getURLExportCSV,
  checkIndexIsChecked,
};
