import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

Then('debería ver un mensaje de error indicando que las credenciales son inválidas', async () => {
    await loginPage.getErrorMessage();
});