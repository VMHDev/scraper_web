/**
 * @file browser.js
 * @description Puppeteer browser factory shared by all scraper modules.
 */
const puppeteer = require("puppeteer");

/**
 * Launches a new headless Chromium browser instance.
 * - `headless: true` runs without a visible window (set `false` to debug).
 * - `--disable-setuid-sandbox` is required in restricted/CI environments.
 * - `ignoreHTTPSErrors` allows scraping pages with invalid TLS certificates.
 * @returns {Promise<import('puppeteer').Browser|undefined>} Browser instance,
 * or `undefined` when the launch fails.
 */
const startBrowser = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true, // false: Open browser
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (error) {
    console.log("Start browser failed: " + error);
  }
  return browser;
};

module.exports = startBrowser;
