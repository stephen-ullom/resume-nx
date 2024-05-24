import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import yaml from '@rollup/plugin-yaml';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/resume',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), yaml(), nxViteTsPaths()],

  build: {
    outDir: '../../dist/apps/resume',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
