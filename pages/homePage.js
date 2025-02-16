import { BasePage } from "./basePage"

export class homePage extends BasePage{
    constructor(page){
        super(page)
        this.registerB=page.getByRole("link", { name: "Register" })
        this.loginB = page.getByRole("link", { name: "Log in" })
       
    }
    async chooseOption(a){
        await a.click()
    }
}