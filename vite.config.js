import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/produktDetalis.html'),
        nestedTwo: resolve(__dirname, 'src/categori.html'),
        nestedThree: resolve(__dirname, 'src/cart.html'),
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
