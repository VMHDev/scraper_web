const SCRAPER_TYPE_STOCKS = {
  TEST: "test",
  INVESTED: "invested",
  BANK: "bank",
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

const SCRAPER_LIST_ITEM_TEST = ["VIC", "CEO"];

const SCRAPER_LIST_ITEM_INVESTED = [
  "DCM",
  "DGC",
  "GEX",
  "VHC",
  "DGW",
  "MBB",
  "MWG",
  "POW",
];

const SCRAPER_LIST_ITEM_BANK = [
  "ABB",
  "ACB",
  "BID",
  "BVB",
  "CTG",
  "EIB",
  "HDB",
  "KLB",
  "LPB",
  "MBB",
  "MSB",
  "OCB",
  "SHB",
  "SSB",
  "STB",
  "TCB",
  "TPB",
  "VCB",
  "VIB",
  "VPB",
];

const SCRAPER_LIST_ITEM_LOGISTIC = [
  // "ACV",
  // "DVP",
  // "GMD",
  // "HAH",
  // "HVN",
  // "PVT",
  "PVP",
  // "SCS",
  // "STG",
  // "TMS",
  // "VJC",
  // "VOS",
  // "VSC",
];

const SCRAPER_LIST_ITEM_ELECTRICAL = [
  "BCG",
  "GEG",
  "HDG",
  "PC1",
  "REE",
  "TTA",
  "HND",
  "PGV",
  "PPC",
  "QTP",
  "NT2",
  "POW",
  "CHP",
  "HNA",
  "TBC",
  "TMP",
  "VSH",
  "GEX",
];

const SCRAPER_LIST_ITEM_AGRICULTURE = [
  // "BAF",
  // "DBC",
  // "HAG",
  // "MML",
  // "VLC",
  // "VSN",
  // "PAN",
  // "TAR",
  "NSC",
  "LTG",
  // "GVR",
  // "PHR",
  // "DCM",
  // "DPM",
  // "DGC",
  // "LAS",
  // "KDC",
  "SAB",
  "VNM",
];

const SCRAPER_LIST_ITEM_PETROL = [
  // "POW", "PLX", "PLC", "BSR",
  "PVD",
  "PVS",
];

const SCRAPER_LIST_ITEM_EXPORT = [
  //"GIL",
  "ADS",
  "VGT",
  "TNG",
  //"ANV",
  //"ASM",
  //"IDI",
  //"VHC",
];

const SCRAPER_LIST_ITEM_REALESTATE = [
  // "HPG",
  "HSG",
  "NKG",
  // "PTB",
  // "ACG",
  // "KSB",
  // "BCC",
  "HT1",
  // "CTD",
  // "HTN",
  // "HBC",
  // "VCG",
  // "DXG",
  // "KDH",
  // "NLG",
  // "NVL",
  // "PDR",
  // "DIG",
  // "CEO",
  // "VPI",
  // "AGG",
  // "KHG",
  // "VHM",
  // "VIC",
  "NTL",
  "CTR",
  // "VRE",
  // "IDC",
  // "BCM",
  // "VGC",
  // "KBC",
  // "NTC",
  // "SNZ",
  // "VRG",
  // "D2D",
];

const SCRAPER_LIST_ITEM_COMMERCE = ["DGW", "MSN", "MWG", "FRT"];

const SCRAPER_LIST_ITEM_FINANCE = [
  "SSI",
  "VND",
  "HCM",
  "MBS",
  "VCI",
  "ORS",
  "MIG",
];

const SCRAPER_LIST_ITEM_OTHES = ["FIT", "FPT", "BWE", "TDM", "SLS", "QNS"];

module.exports = {
  SCRAPER_TYPE_STOCKS,
  SCRAPER_LIST_ITEM_TEST,
  SCRAPER_LIST_ITEM_INVESTED,
  SCRAPER_LIST_ITEM_BANK,
  SCRAPER_LIST_ITEM_FINANCE,
  SCRAPER_LIST_ITEM_LOGISTIC,
  SCRAPER_LIST_ITEM_ELECTRICAL,
  SCRAPER_LIST_ITEM_AGRICULTURE,
  SCRAPER_LIST_ITEM_PETROL,
  SCRAPER_LIST_ITEM_EXPORT,
  SCRAPER_LIST_ITEM_REALESTATE,
  SCRAPER_LIST_ITEM_COMMERCE,
  SCRAPER_LIST_ITEM_OTHES,
};
