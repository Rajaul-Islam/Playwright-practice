const {test,expect}=require('@playwright/test');
const exp = require('constants');
test('assertionTest',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    // 1) expect(page).toHaveURL()  
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // expect(page).toHaveTitle() 
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

// 3) expect(locator).toBeVisible()  Element is visible
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();

// 4) expect(locator).toBeEnabled()  Control is enabled
await expect(page.locator('#small-searchterms')).toBeEnabled();

// 5) expect(locator).toBeChecked()  Radio is checked
const radioBtn =await page.locator('#gender-female');
await radioBtn.click();
expect(radioBtn).toBeChecked()


// 5) expect(locator).toBeChecked()  Radio is checked for disable button
const radioBtnF =await page.locator('#Newsletter');
expect(radioBtnF).toBeChecked()


// 5) expect(locator).toBeChecked()  Checkbox is checked for disable button
const checkBtn =await page.locator('#gender-male');
await checkBtn.click();
expect(checkBtn).toBeChecked()

// 6) expect(locator).toHaveAttribute() Element has attribute
await expect(page.locator('#register-button')).toHaveAttribute('type','submit');

// 7) expect(locator).toHaveText()  Element matches text
await expect(page.locator("div[class='page-title'] h1")).toHaveText('Register');

// 8) expect(locator).toContainText()  Element contains text

await expect(page.locator("//strong[normalize-space()='Your Personal Details']")).toContainText('Details');

// 9) expect(locator).toHaveValue(value) Input has a value
const textBox = await page.locator('#Email')
await textBox.fill('rajaul@gmail.com');
await expect(textBox).toHaveValue('rajaul@gmail.com');


// 10) expect(locator).toHaveCount()  List of elements has given length
await expect(page.locator("select[name='DateOfBirthDay'] option")).toHaveCount(32);

})