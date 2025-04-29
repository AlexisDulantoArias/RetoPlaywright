export default class LoginPage {
    private Elements = {
        usernameInput: '//*[@id="user-name"]',
        passwordInput: '//*[@id="password"]',
        loginBtn: '//*[@id="login-button"]',
        errorMsg: '//*[@id="login_button_container"]/div/form/div[3]/h3'
    }
    async navigateToLoginPage() {
        await global.page.goto(process.env.BASEURL);
    }

    async submitLogin(username: string, password: string) {
        await global.page.waitForSelector(this.Elements.usernameInput);
        await global.page.type(this.Elements.usernameInput, username);
        await global.page.type(this.Elements.passwordInput, password)
    }

    async clickLoginButton() {
        await global.page.click(this.Elements.loginBtn);
    }

    async getErrorMessage() {
        await global.page.waitForSelector(this.Elements.errorMsg);
        const text = await global.page.textContent(this.Elements.errorMsg);
    
        if (text?.trim() !== "Epic sadface: Sorry, this user has been locked out.") {
            throw new Error(`El texto del checkout no es correcto. Se esperaba "Epic sadface: Sorry, this user has been locked out.", pero se obtuvo "${text?.trim()}"`);
        }
    }
}