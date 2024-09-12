const {test,expect}=require('@playwright/test');

// const { default: test, expect } = require("@playwright/test");

test('locators',async({page})=>{
    await page.goto('https://www.demoblaze.com/');

    //click on login button
   await page.click('id=login2')
   // provide username --css
   //await page.locator('#loginusername').fill('pavanol')
   //await page.type('#loginusername','pavanol')
   await page.fill('#loginusername','rajaul')

   //provide password --CSS
   await page.fill("input[id='loginpassword']",'1234')

   //Click on the login button ----xpath
   await page.click("//button[normalize-space()='Log in']")

   //verify log out button  -----xpath

    const logOutElement = await page.locator("//a[@id='logout2']")
     await expect(logOutElement).toBeVisible();
     await page.close();
})