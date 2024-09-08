const { test, expect } = require("@playwright/test");

test("First Playwrigth test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  console.log(await page.title());

  await page.locator("#username").fill("rahulshetty");
  await page.locator("#password").fill("learning");
  await page.locator("#signInBtn").click();
});
