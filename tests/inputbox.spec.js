const { test, expect } = require("@playwright/test");

test("input box explore", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  //radio button
 await page.locator("//input[@id='gender-male']").check();
  await page.locator("//input[@id='Newsletter']").check();
  await expect(await page.locator("//input[@id='Newsletter']")).toBeChecked();
  await expect(
    page.locator("//input[@id='Newsletter']").isChecked()
  ).toBeTruthy();

  await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
  await expect(
    page.locator("//input[@id='gender-male']").isChecked()
  ).toBeTruthy();  await page.locator("//input[@id='gender-male']").check();
  await page.locator("//input[@id='Newsletter']").check();
  await expect(await page.locator("//input[@id='Newsletter']")).toBeChecked();
  await expect(
    page.locator("//input[@id='Newsletter']").isChecked()
  ).toBeTruthy();

  await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
  await expect(
    page.locator("//input[@id='gender-male']").isChecked()
  ).toBeTruthy();
  // await expect(page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy()

  //input box

  await expect(page.locator("//input[@id='FirstName']")).toBeVisible();
  await expect(page.locator("//input[@id='FirstName']")).toBeEmpty();
  await expect(page.locator("//input[@id='FirstName']")).toBeEditable();
  await expect(page.locator("//input[@id='FirstName']")).toBeEnabled();

  await page.locator("//input[@id='FirstName']").fill("Rajaul");
  await page.locator("//input[@id='LastName']").fill("Islam");

  await page.waitForTimeout(5000);
});
