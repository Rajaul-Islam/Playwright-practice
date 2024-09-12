const {test,expect} = require('@playwright/test');
test('home page',async({page})=>{
   await page.goto('https://www.demoblaze.com/');

   const pageTitle =await page.title();
   console.log('page title is',pageTitle);

   await expect(page).toHaveURL('https://www.demoblaze.com/');

   await expect(page).toHaveTitle('STORE');
   await page.close();

})