import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'frontend',
  build: {
    outDir: '../theme/assets',
    emptyOutDir: false,
    assetsDir: '.',
    sourcemap: true,
    rollupOptions: {
      input: {
        theme: resolve(__dirname, 'frontend/main.js')
      },
      output: {
        entryFileNames: 'theme.js',
        chunkFileNames: 'theme.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'theme.css';
          }
          return assetInfo.name || '[name][extname]';
        }
      }
    }
  }
});
