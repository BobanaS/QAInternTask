const { test, expect } = require('@playwright/test');
const { homePage } = require('../pages/homePage');
const { logInPage } = require('../pages/logInPage');
test.describe("LogIn User", () => {

    //1. Launch browser
    //2. Navigate to url 'https://automaticityacademy.ngrok.app/'
    //3. Verify that home page is visible successfully
    //4. Click on "LogIn' button
    //5. Verify 'Welcome Back!' is visible
    //6. Click 'login' button
    ///8. Verify that user is not log in

    test("TC6 Login without credentials", async ({ page }) => {
        let homePage1= new homePage(page) 
        let loginPage1= new logInPage(page)


        await homePage1.openApp()
        await expect(page).toHaveURL(homePage1.getApplicationUrl())
        await homePage1.chooseOption(homePage1.loginB)
        await expect(await loginPage1.isElementVisible(loginPage1.welcomeBackMessage)).toBeTruthy()
        await loginPage1.chooseOption(loginPage1.signInButton)
        await expect(page.locator("text=The email field is required.")).toBeVisible({ timeout: 10000 })
        await expect(page.locator("text=The password field is required.")).toBeVisible({ timeout: 10000 });

})
    })