// Import the necessary Playwright functions for testing
const { test, expect } = require("@playwright/test");

test("Locators", async ({ page }) => {
  // Navigate to the specified URL
  await page.goto("https://www.demoblaze.com/");

  // Click on the "Log in" button using its ID locator
  await page.click("id=login2");

  // Provide the username by filling in the input field using a CSS selector
  await page.fill("#loginusername", "pavanol");

  // Provide the password using a CSS selector
  await page.fill("input[id='loginpassword']", "test@123");

  // Click the "Log in" button using an XPath selector
  await page.click("//button[normalize-space()='Log in']");

  // Verify the presence of the "Log out" link using an XPath selector
  const logoutlink = await page.locator("//a[normalize-space()='Log out']");

  // Assert that the "Log out" link is visible on the page
  await expect(logoutlink).toBeVisible();

  // Close the page after the test
  await page.close();
});
