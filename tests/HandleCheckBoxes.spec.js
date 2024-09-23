const {test,expect}=require("@playwright/test")

test("check box explore",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")
    await page.locator("//input[@id='Newsletter']").check();
    await expect(page.locator("//input[@id='Newsletter']")).toBeChecked();
    await expect(page.locator("//input[@id='Newsletter']").isChecked()).toBeTruthy();
    await page.waitForTimeout(5000)

})