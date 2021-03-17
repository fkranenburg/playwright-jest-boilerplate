module.exports = {
  preset: "jest-playwright-preset",
  reporters: ["default", "jest-junit"],
  setupFilesAfterEnv: ["expect-playwright"],
  testEnvironmentOptions: {
    "jest-playwright": {
      launchOptions: {
        headless: false,
        devtools: true,
        slowMo: 500,
      },
      browsers: ["chromium"],
      contextOptions: {
        acceptDownloads: true,
      },
    },
  },
};
