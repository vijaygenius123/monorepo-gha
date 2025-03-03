import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run hello-react:serve',
        production: 'nx run hello-react:preview',
      },
      ciWebServerCommand: 'nx run hello-react:serve-static',
    }),
    projectId: "yr9t3g",
    baseUrl: 'http://localhost:4200',
  },
});
