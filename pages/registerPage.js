import { BasePage } from "./basePage"

export class registerPage extends BasePage{
    constructor(page){
        super(page)
        this.registerURL = "https://automaticityacademy.ngrok.app/register";
        this.username = page.locator("#username");
        this.email = page.locator("#email");
        this.password = page.locator("#password");
        this.registerButton = page.locator('button:has-text("Register")');
        this.registerMessage = page.locator('text=Already have an account?');
    }

    async chooseOption(a) {
        await a.click();
    }

    async fillRegisterForm(a, b, c) {
        await this.username.fill(a);
        await this.email.fill(b);
        await this.password.fill(c);
        await this.registerButton.click();
    }

    async isRegisterMessageVisible() {
        await this.registerMessage.waitFor({ state: 'visible' })
        return await this.registerMessage.isVisible();
    }
    
}