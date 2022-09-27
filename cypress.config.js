const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gxff4w',
  e2e: {
    baseUrl : 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
