@allScenarios
Feature: Sauce Demo - Retos Pivot Alexis

  @correctFlow
  Scenario Outline: Completar una compra con credenciales válidas
    Given que estoy en la página de inicio de sesión de Sauce Demo
    When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    And hago clic en el botón Iniciar sesión
    And selecciono un producto "<product>" y lo agrego al carrito
    Then el producto debería estar visible en el carrito de compras
    When hago clic en el botón checkout
    And ingreso mi información personal con nombre "<name>", apellido "<lastName>" y código postal <postalCode>
    And hago clic en el botón de continuar
    And hago clic en el botón de finalizar compra
    Then debería ver un mensaje de confirmación indicando que la compra fue exitosa
    And regreso a la página de inventario de productos
    Examples:
      | product     | name       | lastName   | postalCode |
      | backpack    | Alexis     | Dulanto    | 12345      |
      | bikeLight   | Alexis     | Dulanto    | 12345      |
      | boltTshirt  | Alexis     | Dulanto    | 12345      |
      | fleeceJacket| Alexis     | Dulanto    | 12345      |
      | onesie      | Alexis     | Dulanto    | 12345      |
      | redTshirt   | Alexis     | Dulanto    | 12345      |

    @incorrectCredentials
    Scenario: Iniciar sesión con credenciales inválidas
      Given que estoy en la página de inicio de sesión de Sauce Demo
      When ingreso el usuario "locked_out_user" y la contraseña "secret_sauce"
      And hago clic en el botón Iniciar sesión
      Then debería ver un mensaje de error indicando que las credenciales son inválidas
   
   