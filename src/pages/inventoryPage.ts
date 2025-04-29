export default class InventoryPage {
    private Elements = {
        backpack: '//*[@id="add-to-cart-sauce-labs-backpack"]',
        bikeLight: '//*[@id="add-to-cart-sauce-labs-bike-light"]',
        boltTshirt: '//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]',
        fleeceJacket: '//*[@id="add-to-cart-sauce-labs-fleece-jacket"]',
        onesie: '//*[@id="add-to-cart-sauce-labs-onesie"]',
        redTshirt: '//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]',
        shoppintCartBtn: '//*[@id="shopping_cart_container"]/a'
    }

    async addProductToCart(product: string) {
        if (!this.Elements[product]) {
            throw new Error(`El producto "${product}" no está definido en la lista de elementos.`);
        }
        await global.page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
          });
        await global.page.waitForSelector(this.Elements[product]);
        await global.page.click(this.Elements[product]);
    }

    async clickShoppingCart() {
        await global.page.waitForSelector(this.Elements.shoppintCartBtn);
        await global.page.click(this.Elements.shoppintCartBtn);
    }
}