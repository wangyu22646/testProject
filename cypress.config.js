const { defineConfig } = require("cypress");
const fs = require('fs');

const config = require('./cypress/configfiles/config.json');
const envconfig = require('./cypress/configfiles/envconfig.json');

module.exports = defineConfig({
 
  
 ...envconfig,
  e2e: {
    ...config,
    setupNodeEvents(on, config) {
      
    },
  },
});
