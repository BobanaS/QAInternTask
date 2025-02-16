const { test, expect } = require('@playwright/test');
const { homePage } = require('../pages/homePage');
const { registerPage } = require('../pages/registerPage');
const { productPage } = require('../pages/productPage');
test.describe("Register User", () => {

    //1. Launch browser
    //2. Navigate to url 'https://automaticityacademy.ngrok.app/'
    //3. Verify that home page is visible successfully
    //4. Click on "Register' button
    //5. Verify 'Already have an account?' is visible
    //6. Click 'register' button
    ///8. Verify that user is not created

    test("TC3InvalidRegisterUserWithoutCredentials.spec", async ({ page }) => {
        let homePage1= new homePage(page) 
        let registerPage1= new registerPage(page)
        let productPage1= new productPage(page)


        await homePage1.openApp()
        await expect(page).toHaveURL(homePage1.getApplicationUrl())
        await homePage1.chooseOption(homePage1.registerB)
        await expect(await registerPage1.isRegisterMessageVisible()).toBeTruthy();
        await registerPage1.chooseOption(registerPage1.registerButton)
        await expect(page).toHaveURL(registerPage1.registerURL)
        await expect(await registerPage1.isErrorMessageVisible(registerPage1.errorMessage)).toBeTruthy();
        await expect(await registerPage1.isErrorMessageVisible(registerPage1.errorMessageEmail)).toBeTruthy();
        await expect(await registerPage1.isErrorMessageVisible(registerPage1.errorMessagePassword)).toBeTruthy();


    })
})