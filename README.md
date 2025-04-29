
# Reto de Automatización QA - Frontend

Crear una suite de pruebas automatizadas para la aplicación web Sauce Demo (https://www.saucedemo.com/) utilizando Playwright con Cucumber, implementando un patrón de diseño apropiado.

## Instrucciones de configuración y ejecución

Clonar el proyecto 💻

```bash
  git clone https://github.com/AlexisDulantoArias/RetoPlaywright.git
```

Instalar dependencias 🚗

```bash
  npm i
```

Instalar Playwright 🛠

```bash
  npx playwright install
```
## Ejecutar prueba

Para ejecutar la prueba completa, ejecutar cualquiera de los siguentes comandos  🏃‍♂️

```bash
  npm run test-uat
```
```bash
  npm run test-uat --tags="@allScenarios"
```

Ejecutar solo el flujo correcto ✅

```bash
  npm run test-uat --tags="@correctFlow"
```

Ejecutar solo el flujo con credenciales incorrectas ❌

```bash
  npm run test-uat --tags="@incorrectCredentials"
```
