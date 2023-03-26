const SCRAPER_LIST_PAGE = [
  {
    urlSite: "https://fwt.fialda.com/co-phieu/PPC/taichinh",
    pathJson: "src/data/fialda-electrical-ppc.json",
    pathCSV: "src/data/fialda-electrical-ppc.csv",
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
