export default class checkoutPage {
    private Elements = {
        nameInput: '//*[@id="first-name"]',
        lastNameInput: '//*[@id="last-name"]',
        postalCodeInput: '//*[@id="postal-code"]',
        continueBtn: '//*[@id="continue"]',
        finishBtn: '//*[@id="finish"]',
        checkoutComplete: '//*[@id="header_container"]/div[2]/span',
        backHomeBtn: '//*[@id="back-to-products"]',
    }

    async enterInformation(firstName: string, lastName: string, postalCode: number) {
        await global.page.waitForSelector(this.Elements.nameInput);
        await global.page.type(this.Elements.nameInput, firstName);
        await global.page.type(this.Elements.lastNameInput, lastName);
        await global.page.type(this.Elements.postalCodeInput, postalCode.toString());
    }

    async clickContinueButton() {
        await global.page.waitForSelector(this.Elements.continueBtn);
        await global.page.click(this.Elements.continueBtn);
    }

    async clickFinishButton() {
        await global.page.waitForSelector(this.Elements.finishBtn);
        await global.page.click(this.Elements.finishBtn);
    }

    async getCheckoutCompleteText() {
        await global.page.waitForSelector(this.Elements.checkoutComplete);
        const text = await global.page.textContent(this.Elements.checkoutComplete);

        if (text?.trim() !== "Checkout: Complete!") {
            throw new Error(`El texto del checkout no es correcto. Se esperaba "Checkout: Complete!", pero se obtuvo "${text?.trim()}"`);
        }
    }

    async clickBackHomeButton() {
        await global.page.waitForSelector(this.Elements.backHomeBtn);
        await global.page.click(this.Elements.backHomeBtn);
    }
}