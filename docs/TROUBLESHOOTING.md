# Troubleshooting

> **Last updated**: 2026-09-23

## Puppeteer fails to launch

**Symptom**: console shows `Start browser failed: ...`

- Re-run `npm install` — the Chromium download may have failed.
- On Windows, check that antivirus/Defender is not blocking the Chromium
  executable under `node_modules/puppeteer`.
- In restricted/CI environments keep `--disable-setuid-sandbox` (already set
  in [src/configs/browser.js](../src/configs/browser.js)).
- Set `headless: false` to see the actual browser error.

## Scraper returns empty or partial data

**Symptom**: CSV has empty cells or missing rows for symbols that worked before.

- The target site probably changed its DOM — update the selectors inside the
  site's `scraperXxx.js` module (e.g.
  [src/scraper/fialda/scraperFialda.js](../src/scraper/fialda/scraperFialda.js)).
- Run with `headless: false` and watch where the page stalls (captcha,
  cookie banner, login wall).
- Some pages load data lazily — add/adjust `page.waitForSelector(...)` or a
  small delay before `page.evaluate`.

## Login / premium data missing (Fialda, TCBS)

**Symptom**: only public metrics are scraped; authenticated sections are empty.

- The session cookie/token has likely expired. Refresh it and store it in an
  environment variable — never hardcode it:
  `FIALDA_AUTH_TOKEN=<FIALDA_AUTH_TOKEN>`.
- Verify the account is logged in when running with `headless: false`.

## Rate limiting / IP blocks

**Symptom**: pages stop loading after several tickers; captchas appear.

- The controllers already open/close one browser per target, but add a delay
  between iterations if the site throttles aggressively.
- Reduce the ticker list to `TEST` while debugging.

## Output file not written

**Symptom**: run completes but no CSV in [src/data](../src/data/).

- Check the console for `Write data failed: ...` — usually a path issue.
- The Fialda v2 controller creates the directory if missing; if you changed
  `getURLExportCSV` in [src/utils/fialda/commons.js](../src/utils/fialda/commons.js),
  make sure the returned path is relative to the project root.
- JSON snapshots (BatDongSan) use `fs.writeFileSync(path, data, callback)` —
  the callback error only logs, so always check the console output.

## Wrong or missing dates (BatDongSan)

**Symptom**: `date` column empty or off by days.

- Relative labels (`Hôm nay`, `x ngày trước`) are resolved in
  [src/utils/batdongsan/commons.js](../src/utils/batdongsan/commons.js).
  If the site introduces a new label format, extend `processDate` there.

## Debug checklist

1. `headless: false` in [src/configs/browser.js](../src/configs/browser.js).
2. Shrink the target list (`TEST` group or a single listing page).
3. Read the console logs — every step logs progress and errors.
4. Add temporary `console.log` inside `page.evaluate` to inspect raw DOM data.
