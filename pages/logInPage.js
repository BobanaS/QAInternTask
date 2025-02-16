import { BasePage } from "./basePage"

export class logInPage extends BasePage{
    constructor(page){
        super(page)
        this.registerURL = "https://automaticityacademy.ngrok.app/login"
        this.email=page.locator("#email")
        this.password=page.locator("#password")
        this.signInButton=page.getByRole('button', { name: /Sign in/i })
        this.welcomeBackMessage = page.locator('text=Welcome Back!')
        this.errorEmailMessage = page.locator('text=The email field is required.')
        this.errorPassworMessage = page.locator('text=The password field is required.')


    }
    async chooseOption(a){
        await a.click()
    }

    async logIN(a,b){
        await this.email.fill(a)
        await this.password.fill(b)
        await this.signInButton.click()  
        
    
    
    }
    async fillInput(a,b){
        await a.fill(b)
    }
    async isElementVisible(a) {
        await a.waitFor({ state: 'visible' })
        return await a.isVisible();
    }
        
}