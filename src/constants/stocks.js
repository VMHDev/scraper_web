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

const SCRAPER_LIST_ITEM_TEST = ["BVS"];

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

const SCRAPER_LIST_ITEM_FINANCE = [
  "SSI",
  "VND",
  "HCM",
  "MBS",
  "VCI",
  "ORS",
  "CTS",
  "BVS",
  "-1-",
  "MIG",
  "BMI",
];

const SCRAPER_LIST_ITEM_LOGISTIC = [
  "ACV",
  "SCS",
  "-1-",
  "DVP",
  "VOS",
  "GMD",
  "HAH",
  "VSC",
  "STG",
  "TMS",
  "-2-",
  "HVN",
  "VJC",
  "-3-",
  "PVT",
  "PVP",
  "VTO",
];

const SCRAPER_LIST_ITEM_ELECTRICAL = [
  "BCG",
  "GEG",
  "HDG",
  "PC1",
  "REE",
  "TTA",
  "-1-",
  "HND",
  "PGV",
  "PPC",
  "QTP",
  "-2-",
  "NT2",
  "POW",
  "-3-",
  "CHP",
  "HNA",
  "TBC",
  "TMP",
  "VSH",
  "-4-",
  "GEX",
];

const SCRAPER_LIST_ITEM_AGRICULTURE = [
  "BAF",
  "DBC",
  "HAG",
  "MML",
  "VLC",
  "VSN",
  "-1-",
  "PAN",
  "TAR",
  "NSC",
  "LTG",
  "-2-",
  "GVR",
  "PHR",
  "-3-",
  "DCM",
  "DPM",
  "DGC",
  "LAS",
  "-4-",
  "KDC",
  "SAB",
  "VNM",
];

const SCRAPER_LIST_ITEM_PETROL = ["PLX", "PLC", "BSR", "PVD", "PVS"];

const SCRAPER_LIST_ITEM_EXPORT = [
  "GIL",
  "ADS",
  "VGT",
  "TNG",
  "EVE",
  "-1-",
  "ANV",
  "ASM",
  "IDI",
  "VHC",
  "MPC",
];

const SCRAPER_LIST_ITEM_REALESTATE = [
  "HPG",
  "HSG",
  "NKG",
  "-1-",
  "PTB",
  "ACG",
  "-2-",
  "KSB",
  "VLB",
  "DHA",
  "-3-",
  "BCC",
  "HT1",
  "-4-",
  "CTD",
  "HTN",
  "HBC",
  "VCG",
  "-5-",
  "DXG",
  "KDH",
  "NLG",
  "NVL",
  "PDR",
  "DIG",
  "CEO",
  "VPI",
  "AGG",
  "CRE",
  "KHG",
  "VHM",
  "VIC",
  "NTL",
  "CTR",
  "VRE",
  "-6-",
  "IDC",
  "BCM",
  "VGC",
  "KBC",
  "NTC",
  "SNZ",
  "VRG",
  "D2D",
];

const SCRAPER_LIST_ITEM_COMMERCE = ["DGW", "MSN", "MWG", "FRT", "PNJ"];

const SCRAPER_LIST_ITEM_OTHES = [
  "FIT",
  "AMV",
  "LDP",
  "-1-",
  "FPT",
  "SAM",
  "-2-",
  "BWE",
  "TDM",
  "-3-",
  "SLS",
  "QNS",
  "-4-",
  "NTP",
  "BMP",
  "AAA",
];

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
