// 自动操作测试
// 前端自动化测试，puppeteer是控制浏览器自己进行操作的测试，一个测试用例就是一个async的调用，每个操作都是在await之后
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.baidu.com/");
  await page.click("#su");
})();
