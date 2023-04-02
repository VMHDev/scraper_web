const {
  SCRAPER_TYPE_FIALDA,
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
} = require("../../constants/fialda");

const getListScraperFialda = (type) => {
  switch (type) {
    case SCRAPER_TYPE_FIALDA.INVESTED:
      return SCRAPER_LIST_ITEM_INVESTED.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.INVESTED}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.INVESTED}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.LOGISTIC:
      return SCRAPER_LIST_ITEM_LOGISTIC.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.LOGISTIC}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.LOGISTIC}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.ELECTRICAL:
      return SCRAPER_LIST_ITEM_ELECTRICAL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.ELECTRICAL}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.ELECTRICAL}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.AGRICULTURE:
      return SCRAPER_LIST_ITEM_AGRICULTURE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.AGRICULTURE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.AGRICULTURE}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.PETROL:
      return SCRAPER_LIST_ITEM_PETROL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.PETROL}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.PETROL}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.EXPORT:
      return SCRAPER_LIST_ITEM_EXPORT.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.EXPORT}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.EXPORT}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.REALESTATE:
      return SCRAPER_LIST_ITEM_REALESTATE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.REALESTATE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.REALESTATE}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.COMMERCE:
      return SCRAPER_LIST_ITEM_COMMERCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.COMMERCE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.COMMERCE}-${item}.csv`,
        };
      });
    case SCRAPER_TYPE_FIALDA.FINANCE:
      return SCRAPER_LIST_ITEM_FINANCE.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.FINANCE}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.FINANCE}-${item}.csv`,
        };
      });
    default:
      return SCRAPER_LIST_ITEM_OTHES.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.OTHERS}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.OTHERS}-${item}.csv`,
        };
      });
      break;
  }
};

const getURLExportCSV = (type) => {
  switch (type) {
    case SCRAPER_TYPE_FIALDA.INVESTED:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.INVESTED}.csv`;
    case SCRAPER_TYPE_FIALDA.LOGISTIC:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.LOGISTIC}.csv`;
    case SCRAPER_TYPE_FIALDA.AGRICULTURE:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.AGRICULTURE}.csv`;
    case SCRAPER_TYPE_FIALDA.PETROL:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.PETROL}.csv`;
    case SCRAPER_TYPE_FIALDA.EXPORT:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.EXPORT}.csv`;
    case SCRAPER_TYPE_FIALDA.REALESTATE:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.REALESTATE}.csv`;
    case SCRAPER_TYPE_FIALDA.COMMERCE:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.COMMERCE}.csv`;
    case SCRAPER_TYPE_FIALDA.FINANCE:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.FINANCE}.csv`;
    default:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.OTHERS}.csv`;
      break;
  }
};

module.exports = { getListScraperFialda, getURLExportCSV };
