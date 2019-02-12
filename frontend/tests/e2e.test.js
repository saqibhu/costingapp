import puppeteer from "puppeteer";

const appUrlBase = "http://localhost:8080";

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({});
  page = await browser.newPage();
});
