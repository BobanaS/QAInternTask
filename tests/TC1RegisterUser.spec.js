const { test, expect } = require('@playwright/test');
const { homePage } = require('../pages/homePage');
const { registerPage } = require('../pages/registerPage');
const { productPage } = require('../pages/productPage');
test.describe("TC1 Register User", () => {

    //1. Launch browser
    //2. Navigate to url 'https://automaticityacademy.ngrok.app/'
    //3. Verify that home page is visible successfully
    //4. Click on "Register' button
    //5. Verify 'Already have an account?' is visible
    //6. Enter username, email and passwor and click 'registe' button
    ///8. Verify that new user is created

    test("TC1 user register successfully", async ({ page }) => {
        let homePage1= new homePage(page) 
        let registerPage1= new registerPage(page)
        let productPage1= new productPage(page)


        await homePage1.openApp()
        await expect(page).toHaveURL(homePage1.getApplicationUrl())
        await homePage1.chooseOption(homePage1.registerB)
        await expect(await registerPage1.isRegisterMessageVisible()).toBeTruthy();
        await registerPage1.fillRegisterForm("testic135","testic135@testic.com","Testici12")
        await expect(page).toHaveURL(registerPage1.registerURL)
        await expect((productPage1.searchInput).isVisible()).toBeTruthy()
    })
})