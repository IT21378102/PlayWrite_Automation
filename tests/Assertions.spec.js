const { test, expect } = require("@playwright/test");

test("AssertionsTest", async ({ page }) => {
  // Open app URL
  await page.goto("https://demo.nopcommerce.com/register");

  // 1) Assert that the page has the expected URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // 2)expect(page).toHaveTitle()  page has a title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // 3) Assert that the element is visible
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  // 4) Assert that the control is enabled
  const searchStoreBox = await page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  /// 5) Assert that the radio/checkbox is checked
  const maleRadioButton = await page.locator('input[id="gender-male"]');
  await maleRadioButton.click(); // select the radio button
  await expect(maleRadioButton).toBeChecked();

  // Check if the checkbox is checked
  const newsletterCheckbox = await page.locator("#newsletter");
  await expect(newsletterCheckbox).toBeChecked();
});
