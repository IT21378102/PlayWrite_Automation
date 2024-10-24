const { test, expect } = require("@playwright/test");

test("LocatingMultipleElements", async ({ page }) => {
  // Navigate to the demoblaze website
  await page.goto("https://www.demoblaze.com/");

  // Wait for the selector to ensure the products are visible before proceeding
  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

  // Locate all product elements using XPath
  const products = await page.$$("xpath=//div[@id='tbodyid']//div//h4/a");

  // Loop through each product element and log its text content (product name)
  for (const product of products) {
    const productName = await product.textContent(); // Fetch the text content (product name)
    console.log(productName); // Log the product name to the console
  }
});
