const {test,expect}=require("@playwright/test")

test("radio button explore",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");

    //radio button
    
    await page.locator("//input[@id='gender-female']").check();
    await expect(await page.locator("//input[@id='gender-female']")).toBeChecked();
    await expect(
      page.locator("//input[@id='gender-female']").isChecked()
    ).toBeTruthy();

    await page.locator("//input[@id='gender-male']").check();
    await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
    await expect(
      page.locator("//input[@id='gender-male']").isChecked()
    ).toBeTruthy();
    await page.waitForTimeout(5000);

})