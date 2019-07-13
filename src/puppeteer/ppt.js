// 自动操作测试
// 前端自动化测试，puppeteer是控制浏览器自己进行操作的测试，一个测试用例就是一个async的调用，每个操作都是在await之后
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
