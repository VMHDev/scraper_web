/**
 * @file commons.js
 * @description Shared constants used across the whole project.
 */

/**
 * Enum of supported scraper target websites.
 * @readonly
 * @enum {number}
 */
const TYPE_SCRAPER = {
  BATDONGSAN: 1,
  NHATOT: 2,
  FIALDA: 3,
  VIETSTOCK: 4,
  TAKEPROFIT: 5,
  DSTOCK: 6,
  TCBS_EVALUATION: 7,
};

module.exports = { TYPE_SCRAPER };
