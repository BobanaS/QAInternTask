import { BasePage } from "./basePage"

export class productPage extends BasePage{
    constructor(page){
        super(page)
        this.dashboardURL = "https://automaticityacademy.ngrok.app/dashboard"
        this.filter=page.getByText("Filter")
        this.searchInput= page.locator('input#search[type="text"]');

    }


        
}