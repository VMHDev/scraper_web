const {
  SCRAPER_TYPE_STOCKS,
  SCRAPER_LIST_ITEM_INVESTED,
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

const getListScraperFialda = (type) => {
  switch (type) {
    case SCRAPER_TYPE_STOCKS.INVESTED:
      return SCRAPER_LIST_ITEM_INVESTED.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.INVESTED}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.INVESTED}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.LOGISTIC:
      return SCRAPER_LIST_ITEM_LOGISTIC.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.LOGISTIC}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.LOGISTIC}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.ELECTRICAL:
      return SCRAPER_LIST_ITEM_ELECTRICAL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.ELECTRICAL}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.ELECTRICAL}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.AGRICULTURE:
      return SCRAPER_LIST_ITEM_AGRICULTURE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.AGRICULTURE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.AGRICULTURE}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.PETROL:
      return SCRAPER_LIST_ITEM_PETROL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.PETROL}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.PETROL}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.EXPORT:
      return SCRAPER_LIST_ITEM_EXPORT.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.EXPORT}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.EXPORT}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.REALESTATE:
      return SCRAPER_LIST_ITEM_REALESTATE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.COMMERCE:
      return SCRAPER_LIST_ITEM_COMMERCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.COMMERCE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.COMMERCE}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_STOCKS.FINANCE:
      return SCRAPER_LIST_ITEM_FINANCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.FINANCE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.FINANCE}-${item}.csv`,
        };
      });
    default:
      return SCRAPER_LIST_ITEM_OTHES.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_STOCKS.OTHERS}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_STOCKS.OTHERS}-${item}.csv`,
        };
      });
      break;
  }
};

const getURLExportCSV = (type) => {
  switch (type) {
    case SCRAPER_TYPE_STOCKS.INVESTED:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.INVESTED}.csv`;
    case SCRAPER_TYPE_STOCKS.LOGISTIC:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.LOGISTIC}.csv`;
    case SCRAPER_TYPE_STOCKS.AGRICULTURE:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.AGRICULTURE}.csv`;
    case SCRAPER_TYPE_STOCKS.PETROL:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.PETROL}.csv`;
    case SCRAPER_TYPE_STOCKS.EXPORT:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.EXPORT}.csv`;
    case SCRAPER_TYPE_STOCKS.REALESTATE:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.REALESTATE}.csv`;
    case SCRAPER_TYPE_STOCKS.COMMERCE:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.COMMERCE}.csv`;
    case SCRAPER_TYPE_STOCKS.FINANCE:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.FINANCE}.csv`;
    default:
      return `src/data/fialda-${SCRAPER_TYPE_STOCKS.OTHERS}.csv`;
      break;
  }
};

module.exports = { getListScraperFialda, getURLExportCSV };
