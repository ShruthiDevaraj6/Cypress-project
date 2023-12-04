const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
        videoCompression: 20,
        videoUploadOnPasses: false,
        videosFolder: "./cypress/videos",
        reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
        
    },
  },
});

        

