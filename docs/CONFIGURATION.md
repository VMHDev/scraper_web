# Configuration

> **Last updated**: 2026-09-23

There are no config files or environment variables — all configuration is
done by editing constants and a few well-marked lines in the source.

## 1. Select which site to scrape

Edit `typeScraper` in [index.js](../index.js#L18):

```js
let typeScraper = TYPE_SCRAPER.FIALDA;
```

Values come from the `TYPE_SCRAPER` enum in
[src/constants/commons.js](../src/constants/commons.js).

## 2. Stock scrapers (Fialda, VietStock, TakeProfit, DStock, TCBS)

### Choose a stock group

Each stock-site controller has a `type` constant near the top, e.g. in
[src/scraper/fialda/scraperControllerV2.js](../src/scraper/fialda/scraperControllerV2.js#L19):

```js
const type = SCRAPER_TYPE_STOCKS.INVESTED; // INVESTED TEST
```

Available groups are defined in `SCRAPER_TYPE_STOCKS`
([src/constants/stocks.js](../src/constants/stocks.js)): `TEST`, `INVESTED`,
`BANK`, `LOGISTIC`, `ELECTRICAL`, `AGRICULTURE`, `PETROL`, `EXPORT`,
`REALESTATE_I`, `REALESTATE_II`, `COMMERCE`, `FINANCE`, `OTHERS`, `VN30`,
`HNX30`.

### Add or remove tickers

Edit the matching list in [src/constants/stocks.js](../src/constants/stocks.js),
e.g. `SCRAPER_LIST_ITEM_PETROL`:

```js
const SCRAPER_LIST_ITEM_PETROL = [
  "BSR",
  "OIL",
  // ...
];
```

Notes:

- Use `TEST` (`SCRAPER_LIST_ITEM_TEST`) for quick smoke tests.
- `"-N-"` entries act as separator rows → empty CSV columns between groups.

## 3. Real-estate scraper (BatDongSan)

### Add a project

1. Add its URL slug to `SCRAPER_LIST_ITEM` in
   [src/constants/batdongsan.js](../src/constants/batdongsan.js):

   ```js
   const SCRAPER_LIST_ITEM = {
     // ...
     myProject: "my-project-slug",
   };
   ```

2. Add (or uncomment) an entry in `SCRAPER_LIST_PAGE` in the same file:

   ```js
   {
     urlSite: `https://batdongsan.com.vn/ban-can-ho-chung-cu-${SCRAPER_LIST_ITEM.myProject}?sortValue=1`,
     pathJson: `src/data/batdongsan-${SCRAPER_LIST_ITEM.myProject}.json`,
     pathCSV: `src/data/batdongsan-${SCRAPER_LIST_ITEM.myProject}-${new Date().getTime()}.csv`,
   }
   ```

Disabled projects stay in the file as commented-out entries for easy
re-enabling.

## 4. Browser behavior

Edit [src/configs/browser.js](../src/configs/browser.js):

| Option                     | Default | Effect                                       |
| -------------------------- | ------- | -------------------------------------------- |
| `headless`                 | `true`  | Set `false` to open a visible browser window |
| `--disable-setuid-sandbox` | on      | Required in restricted/CI environments       |
| `ignoreHTTPSErrors`        | `true`  | Allows pages with invalid TLS certificates   |

All scrapers share this factory — changing it affects every site.

## 5. Credentials / cookies

Some sites (e.g. Fialda premium metrics) may require a logged-in session.
**Never commit real cookies or tokens.** Store them as environment variables
and reference placeholders in code and docs, e.g. `<FIALDA_AUTH_TOKEN>`.

## Related docs

- [QUICK_START.md](QUICK_START.md) — install and first run.
- [SCRAPERS.md](SCRAPERS.md) — what each site collects.
