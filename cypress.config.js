import { defineConfig } from "cypress";

export default defineConfig({
  //*yazılan kodların otomatik test edilmesini kapatır
  watchForFileChanges:false,
  //*default kontrol etme süresini ayarlar
  defaultCommandTimeout:10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
