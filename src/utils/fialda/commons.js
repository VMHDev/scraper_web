const {
  SCRAPER_TYPE_FIALDA,
  SCRAPER_LIST_ITEM_ELECTRICAL,
} = require("../../constants/fialda");

const getListScraperFialda = (type) => {
  switch (type) {
    case SCRAPER_TYPE_FIALDA.ELECTRICAL:
      return SCRAPER_LIST_ITEM_ELECTRICAL.map((item) => {
        return {
          urlSite: `https://fwt.fialda.com/co-phieu/${item.toUpperCase()}/taichinh`,
          pathJson: `src/data/fialda-electrical-${item}.json`,
          pathCSV: `src/data/fialda-electrical-${item}.csv`,
        };
      });
    default:
      break;
  }
};

module.exports = { getListScraperFialda };
