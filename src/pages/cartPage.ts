export default class CartPage {
    private Elements = {
        checkoutBtn: '//*[@id="checkout"]'
    }

    async clickCheckoutButton() {
        await global.page.waitForSelector(this.Elements.checkoutBtn);
        await global.page.click(this.Elements.checkoutBtn);
    }
}