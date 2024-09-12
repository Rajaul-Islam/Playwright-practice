const {test, expect}=require('@playwright/test')

test('builtin locator implementation',async({page})=>{
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type: 'submit'}).click();

    const isLogin = await page.getByAltText('profile picture')
    await expect(isLogin).toBeVisible();
  
    await expect(page.getByText('Dashboard',{ exact: true })).toBeVisible()
})