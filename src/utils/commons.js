/**
 * @file commons.js
 * @description Shared utility helpers used by all scraper modules.
 */

/**
 * Strips currency/unit characters from a scraped string, keeping only
 * digits and dots. E.g. `"3,5 tỷ"` -> `"35"`, `"60.5 triệu/m²"` -> `"60.5"`.
 * @param {string} price - Raw text scraped from the page.
 * @returns {string} Numeric characters only, or `""` when input is falsy.
 */
const removeUnit = (price) => {
  if (price) {
    // Keep only digits and dots; drop currency symbols, units, separators
    return price.replace(/[^0-9\.]+/g, "");
  } else {
    return "";
  }
};

/**
 * Waits for a given time before continuing, logging the reason.
 * Used to throttle requests and avoid being blocked by target websites.
 * @param {number} ms - Delay in milliseconds.
 * @param {string} description - Human-readable reason shown in the console.
 * @returns {Promise<void>} Resolves after the delay.
 */
const delayRequest = (ms, description) => {
  return new Promise((resolve) => {
    console.log(`\nDelay ${ms}ms (${description})`);
    setTimeout(resolve, ms);
  });
};

module.exports = { removeUnit, delayRequest };
