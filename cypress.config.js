const { defineConfig } = require("cypress");
const fs = require('fs');

const config = require('./cypress/configfiles/config.json');
const envconfig = require('./cypress/configfiles/envconfig.json');

module.exports = defineConfig({
 
  ...config,
 ...envconfig,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
