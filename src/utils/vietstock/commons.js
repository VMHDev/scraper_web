/**
 * @file commons.js
 * @description URL builders and checkbox helpers for the
 * finance.vietstock.vn scraper.
 */
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
  SCRAPER_LIST_ITEM_REALESTATE_I,
  SCRAPER_LIST_ITEM_REALESTATE_II,
  SCRAPER_LIST_ITEM_COMMERCE,
  SCRAPER_LIST_ITEM_FINANCE,
  SCRAPER_LIST_ITEM_OTHES,
  SCRAPER_LIST_ITEM_VN30,
  SCRAPER_LIST_ITEM_HNX30,
} = require("../../constants/stocks");

/**
 * Builds the list of Vietstock company-profile pages to scrape for a
 * stock group. Every switch branch applies the same URL template to its
 * ticker list.
 * @param {string} type - One of SCRAPER_TYPE_STOCKS.
 * @returns {Array<{symbolStock: string, urlSite: string}>} Pages to scrape.
 */
const getListScraperVietstock = (type) => {
  // Each case maps its ticker list to the site's per-stock URL template
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
    case SCRAPER_TYPE_STOCKS.REALESTATE_I:
      return SCRAPER_LIST_ITEM_REALESTATE_I.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.REALESTATE_II:
      return SCRAPER_LIST_ITEM_REALESTATE_II.map((item) => {
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
    case SCRAPER_TYPE_STOCKS.VN30:
      return SCRAPER_LIST_ITEM_VN30.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://finance.vietstock.vn/${item.toUpperCase()}/ho-so-doanh-nghiep.htm`,
        };
      });
    case SCRAPER_TYPE_STOCKS.HNX30:
      return SCRAPER_LIST_ITEM_HNX30.map((item) => {
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

/**
 * Returns the timestamped CSV export path for a stock group.
 * @param {string} type - One of SCRAPER_TYPE_STOCKS.
 * @returns {string} Path like `src/data/vietstock-<type>-<timestamp>.csv`.
 */
const getURLExportCSV = (type) => {
  const dateNow = new Date().getTime();
  switch (type) {
    case SCRAPER_TYPE_STOCKS.TEST:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.TEST}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.INVESTED:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.INVESTED}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.BANK:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.BANK}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.LOGISTIC:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.LOGISTIC}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.ELECTRICAL:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.ELECTRICAL}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.AGRICULTURE:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.AGRICULTURE}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.PETROL:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.PETROL}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.EXPORT:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.EXPORT}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.REALESTATE_I:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.REALESTATE_I}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.REALESTATE_II:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.REALESTATE_II}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.COMMERCE:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.COMMERCE}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.FINANCE:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.FINANCE}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.VN30:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.VN30}-${dateNow}.csv`;
    case SCRAPER_TYPE_STOCKS.HNX30:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.HNX30}-${dateNow}.csv`;
    default:
      return `src/data/vietstock-${SCRAPER_TYPE_STOCKS.OTHERS}-${dateNow}.csv`;
  }
};

/**
 * Converts a FontAwesome checkbox class into a CSV marker.
 * Used to flag index membership (VN30/HNX30), margin trading and ETF lists.
 * @param {string} value - CSS class string scraped from the <i> icon element.
 * @returns {string} `"x"` when the checkbox is checked, otherwise `""`.
 */
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
