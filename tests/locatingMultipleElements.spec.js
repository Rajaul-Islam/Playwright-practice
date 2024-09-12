const {test,expect} =require("@playwright/test")

test('located multiple elements',async({page})=>{

    await page.goto('https://www.demoblaze.com/');
    // const links = await page.$$('a');

    // for(const link of links){
    //    const linkTest=  await link.textContent();
    //    console.log(linkTest)

    // } 


   await page.waitForSelector("//div[@id='tbodyid']//h4/a")
   const products =  await page.$$("//div[@id='tbodyid']//h4/a")
   for(const product of products){
    const productName =await product.textContent()
    console.log(productName)
   }

})