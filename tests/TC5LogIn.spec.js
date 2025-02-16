const { test, expect } = require('@playwright/test');
const { homePage } = require('../pages/homePage');
const { productPage } = require('../pages/productPage');
const { logInPage } = require('../pages/logInPage');
test.describe("LogIn User", () => {

    //1. Launch browser
    //2. Navigate to url 'https://automaticityacademy.ngrok.app/'
    //3. Verify that home page is visible successfully
    //4. Click on "LogIn' button
    //5. Verify 'Welcome Back!' is visible
    //6. Enter email and password and click 'login' button
    ///8. Verify that user is log in

    test("TC5 user logIN successfully", async ({ page }) => {
        let homePage1= new homePage(page) 
        let loginPage1= new logInPage(page)
        let productPage1= new productPage(page)


        await homePage1.openApp()
        await expect(page).toHaveURL(homePage1.getApplicationUrl())
        await homePage1.chooseOption(homePage1.loginB)
        await expect(await loginPage1.isElementVisible(loginPage1.welcomeBackMessage)).toBeTruthy();
        await loginPage1.logIN("testic135@testic.com","Testici12")
        await expect(page).toHaveURL(productPage1.dashboardURL)
        await expect((productPage1.searchInput).isVisible()).toBeTruthy()
    })
})