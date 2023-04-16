const SCRAPER_TYPE_STOCKS = {
  INVESTED: "invested",
  LOGISTIC: "logistic",
  ELECTRICAL: "electrical",
  AGRICULTURE: "agriculture",
  PETROL: "petrol",
  EXPORT: "export",
  REALESTATE: "realestate",
  COMMERCE: "commerce",
  FINANCE: "finance",
  OTHERS: "others",
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

const SCRAPER_LIST_ITEM_LOGISTIC = [
  "ACV",
  "DVP",
  "GMD",
  "HAH",
  "HVN",
  "PVT",
  "SCS",
  "STG",
  "TMS",
  "VJC",
  "VOS",
  "VSC",
];

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

const SCRAPER_LIST_ITEM_PETROL = ["POW", "PLX", "PLC", "BSR"];

const SCRAPER_LIST_ITEM_EXPORT = ["GIL", "ANV", "ASM", "IDI", "VHC"];

const SCRAPER_LIST_ITEM_REALESTATE = [
  "HPG",
  "PTB",
  "KSB",
  "BCC",
  "CTD",
  "HTN",
  "HBC",
  "VCG",
  "DXG",
  "KDH",
  "NLG",
  "NVL",
  "PDR",
  "VHM",
  "VIC",
  "IDC",
  "BCM",
  "VGC",
];

const SCRAPER_LIST_ITEM_COMMERCE = ["DGW", "MSN", "MWG", "FRT"];

const SCRAPER_LIST_ITEM_FINANCE = ["SSI", "VND", "HCM", "MBS", "MIG"];

const SCRAPER_LIST_ITEM_OTHES = ["FIT", "FPT"];

module.exports = {
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
};
