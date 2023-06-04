const SCRAPER_LIST_ITEM = {
  opalRiverside: "opal-riverside",
  opalGarden: "opal-garden",
  opalBoulevard: "opal-boulevard",
  floraNovia: "flora-novia",
  prosperPlaza: "prosper-plaza",
  eightxplus: "8x-plus-truong-chinh",
  lavitaCharm: "lavita-charm",
  lavitaGarden: "lavita-garden",
};

const SCRAPER_LIST_PAGE = [
  // {
  //   urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.opalRiverside}?sortValue=1`,
  //   pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.opalRiverside}.json`,
  //   pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.opalRiverside}.csv`,
  // },
  // {
  //   urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.opalGarden}?sortValue=1`,
  //   pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.opalGarden}.json`,
  //   pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.opalGarden}.csv`,
  // },
  // {
  //   urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.opalBoulevard}?sortValue=1`,
  //   pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.opalBoulevard}.json`,
  //   pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.opalBoulevard}.csv`,
  // },
  {
    urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.floraNovia}?sortValue=1`,
    pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.floraNovia}.json`,
    pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.floraNovia}.csv`,
  },
  // {
  //   urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.prosperPlaza}?sortValue=1`,
  //   pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.prosperPlaza}.json`,
  //   pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.prosperPlaza}.csv`,
  // },
  // {
  //   urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-can-ho-${SCRAPER_LIST_ITEM.eightxplus}?sortValue=1`,
  //   pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.eightxplus}.json`,
  //   pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.eightxplus}.csv`,
  // },
  // {
  //   urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.lavitaCharm}?sortValue=1`,
  //   pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.lavitaCharm}.json`,
  //   pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.lavitaCharm}.csv`,
  // },
  // {
  //   urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.lavitaGarden}?sortValue=1`,
  //   pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.lavitaGarden}.json`,
  //   pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.lavitaGarden}.csv`,
  // },
];

const TYPE_DATE = {
  TODAY: "Đăng hôm nay",
  YESTERDAY: "Đăng hôm qua",
  DAY_TWO: "Đăng 2 ngày trước",
  DAY_THREE: "Đăng 3 ngày trước",
  DAY_FOUR: "Đăng 4 ngày trước",
  DAY_FIVE: "Đăng 5 ngày trước",
  DAY_SIX: "Đăng 6 ngày trước",
  WEEK_ONE: "Đăng 1 tuần trước",
  WEEK_TWO: "Đăng 2 tuần trước",
};

module.exports = { SCRAPER_LIST_PAGE, TYPE_DATE };
