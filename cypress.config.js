const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //video: true,
    baseUrl: "http://localhost:4000",
    reporter: 'cypress-mochawesome-reporter',
    //baseUrl: process.env.URL || Cypress.env('http://localhost:4000')adicionado para variaveis de ambiente
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
