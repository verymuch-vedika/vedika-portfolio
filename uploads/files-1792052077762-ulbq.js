import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        caseStudy: resolve(import.meta.dirname, 'case-study.html'),
      },
    },
  },
});
