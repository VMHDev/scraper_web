const {
  SCRAPER_TYPE_FIALDA,
  SCRAPER_LIST_ITEM_ELECTRICAL,
} = require("../../constants/fialda");

const getListScraperFialda = (type) => {
  switch (type) {
    case SCRAPER_TYPE_FIALDA.ELECTRICAL:
      return SCRAPER_LIST_ITEM_ELECTRICAL.map((item) => {
        return {
          symbolStock: item,
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-${SCRAPER_TYPE_FIALDA.ELECTRICAL}-${item}.json`,
          pathCSV: `src/data/fialda-${SCRAPER_TYPE_FIALDA.ELECTRICAL}-${item}.csv`,
        };
      });
    default:
      break;
  }
};

const getURLExportCSV = (type) => {
  switch (type) {
    case SCRAPER_TYPE_FIALDA.ELECTRICAL:
      return `src/data/fialda-${SCRAPER_TYPE_FIALDA.ELECTRICAL}.csv`;
    default:
      break;
  }
};

module.exports = { getListScraperFialda, getURLExportCSV };
