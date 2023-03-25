const SCRAPER_LIST_PAGE = [
  {
    urlSite:
      "https://batdongsan.com.vn/ban-can-ho-chung-cu-opal-riverside?sortValue=1",
    pathJson: "src/data/batdongsan-opal-riverside.json",
    pathCSV: "src/data/batdongsan-opal-riverside.csv",
  },
  {
    urlSite:
      "https://batdongsan.com.vn/ban-can-ho-chung-cu-opal-garden?sortValue=1",
    pathJson: "src/data/batdongsan-opal-garden.json",
    pathCSV: "src/data/batdongsan-opal-garden.csv",
  },
  {
    urlSite:
      "https://batdongsan.com.vn/ban-can-ho-chung-cu-opal-boulevard?sortValue=1",
    pathJson: "src/data/batdongsan-opal-boulevard.json",
    pathCSV: "src/data/batdongsan-opal-boulevard.csv",
  },
];

const TYPE_DATE = {
  TODAY: "Đăng hôm nay",
  YESTERDAY: "Đăng hôm qua",
  DAY_TWO: "Đăng 2 ngày trước",
  DAY_THREE: "Đăng 3 ngày trước",
  DAY_FOUR: "Đăng 4 ngày trước",
};

module.exports = { SCRAPER_LIST_PAGE, TYPE_DATE };
