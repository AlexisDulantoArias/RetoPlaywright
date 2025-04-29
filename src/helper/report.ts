const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results/reports", // Apunta al directorio específico
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report - Reto Pivot",
    pageTitle: "Demo test report",
    displayDuration: false,
    openReportInBrowser: true,
    disableLog: false,
    durationInMS: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "117",
        },
        device: "Alexis - PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Demo Application" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});