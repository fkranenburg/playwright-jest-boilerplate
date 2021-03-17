module.exports = {
  preset: "jest-playwright-preset",
  reporters: ["default", "jest-junit"],
  setupFilesAfterEnv: ["expect-playwright"],
  testEnvironmentOptions: {
    "jest-playwright": {
      launchOptions: {
        headless: false,
        slowMo: 200,
      },
      browsers: ["chromium"],
      contextOptions: {
        acceptDownloads: true,
      },
    },
  },
};
