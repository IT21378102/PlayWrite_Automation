// Import the necessary Playwright functions for testing
const { test, expect } = require("@playwright/test");

// Define a test case with a description "Home Page"
test("Home Page", async ({ page }) => {
  // Navigate to the URL of the website
  await page.goto("https://www.demoblaze.com/");

  // Get the page title and log it to the console
  const pageTitle = await page.title();
  console.log("Page title is:", pageTitle);

  // Verify that the page title is "STORE"
  await expect(page).toHaveTitle("STORE");

  // Get the current page URL and log it to the console
  const pageURL = page.url();
  console.log("Page URL is:", pageURL);

  // Verify that the current URL is as expected
  await expect(page).toHaveURL("https://www.demoblaze.com/");

  // Close the page
  await page.close();
});
