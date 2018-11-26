const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/#/singleTable");
  await page.click("#editButton");
  await page.click(".edit-table-edit-td");
  await page.click(".multi-lang-text-item");
  await page.type(".nc-input", "66666", { delay: 500 });
  await page.click(".u-table-body");
})();
