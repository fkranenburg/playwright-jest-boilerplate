var merge = require("lodash.merge");
let config = require("./jest.config");
const debugConfig = {};
merge(debugConfig, config, {
  testEnvironmentOptions: {
    "jest-playwright": {
      launchOptions: {
        headless: false,
        slowMo: 200,
      },
    },
  },
  setupFilesAfterEnv: [...config.setupFilesAfterEnv, "./jest-debug.setup.js"],
});

module.exports = debugConfig;
