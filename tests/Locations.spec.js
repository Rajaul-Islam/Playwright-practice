// const {test,expect}=require('@playwright/test');

const { default: test } = require("@playwright/test");

test('locators',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    
})