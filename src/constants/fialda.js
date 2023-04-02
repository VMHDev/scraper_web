const SCRAPER_TYPE_FIALDA = {
  INVESTED: "invested",
  LOGISTIC: "logistic",
  ELECTRICAL: "electrical",
  AGRICULTURE: "agriculture",
  PETROL: "petrol",
  EXPORT: "Export",
  REALESTATE: "RealEstate",
  COMMERCE: "Commerce",
  FINANCE: "Finance",
};

const SCRAPER_LIST_ITEM_INVESTED = [
  "dcm",
  "dgc",
  "gex",
  "vhc",
  "dgw",
  "mbb",
  "mwg",
  "pow",
];

const SCRAPER_LIST_ITEM_LOGISTIC = ["pan"];

const SCRAPER_LIST_ITEM_ELECTRICAL = [
  // "bcg",
  // "geg",
  // "hdg",
  // "pc1",
  "ree",
  // "tta",
  // "hnd",
  // "nt2",
  // "pgv",
  // "pow",
  // "ppc",
  // "qtp",
  // "chp",
  // "hna",
  // "tbc",
  // "tmp",
  // "vsh",
  // "gex",
];

const SCRAPER_LIST_ITEM_AGRICULTURE = [
  // "pan",
  // "tar",
  // "gvr",
  // "phr",
  // "dcm",
  // "dpm",
  "dgc",
  "las",
  "kdc",
];

const SCRAPER_LIST_ITEM_PETROL = ["pan"];

const SCRAPER_LIST_ITEM_EXPORT = ["pan"];

const SCRAPER_LIST_ITEM_REALESTATE = ["pan"];

const SCRAPER_LIST_ITEM_COMMERCE = ["pan"];

const SCRAPER_LIST_ITEM_FINANCE = ["pan"];

module.exports = {
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
};
