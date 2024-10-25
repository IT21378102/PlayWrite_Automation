const { test, expect } = require("@playwright/test");

test("Built-inLocators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Wait until the input field is visible
  await page.waitForSelector('input[placeholder="Username"]');

  // Locate the logo by alt text
  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // Locate input fields by placeholder
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  // Click the login button
  await page.getByRole("button", { name: "Login" }).click();

  // Corrected expect statement
  await expect(page.getByText("King Kohli")).toBeVisible();
});
