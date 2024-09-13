const {test,expect}=require('@playwright/test');
const exp = require('constants');

test('Soft assertion vs hard assertion',async({page})=>{
    await page.goto('https://www.demoblaze.com/');

    //hard assertion
    await expect(page).toHaveTitle('STORE12312q3')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await expect(page.locator("//a[@id='nava']//img")).toBeVisible();

 //hard assertion
        // await expect.soft(page).toHaveTitle('STORE12312q3')
        // await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
        // await expect.soft(page.locator("//a[@id='nava']//img")).toBeVisible();
})