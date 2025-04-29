import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given('que estoy en la página de inicio de sesión de Sauce Demo', async () => {
    await loginPage.navigateToLoginPage();
});

When('ingreso el usuario {string} y la contraseña {string}', async (username, password) => {
    await loginPage.submitLogin(username, password);
});

When('hago clic en el botón Iniciar sesión', async () => {
    await loginPage.clickLoginButton();
});

When('selecciono un producto {string} y lo agrego al carrito', async (product) => {
    await inventoryPage.addProductToCart(product);
});

Then('el producto debería estar visible en el carrito de compras', async () => {
    await inventoryPage.clickShoppingCart();
});

When('hago clic en el botón checkout', async () => {
    await cartPage.clickCheckoutButton();
});

When('ingreso mi información personal con nombre {string}, apellido {string} y código postal {int}', async (firstName, lastName, postalCode) => {
    await checkoutPage.enterInformation(firstName, lastName, postalCode);
});

When('hago clic en el botón de continuar', async () => {
    await checkoutPage.clickContinueButton();
});

When('hago clic en el botón de finalizar compra', async () => {
    await checkoutPage.clickFinishButton();
});

Then('debería ver un mensaje de confirmación indicando que la compra fue exitosa', async () => {
    await checkoutPage.getCheckoutCompleteText();
});

Then('regreso a la página de inventario de productos', async () => {
    await checkoutPage.clickBackHomeButton();
});