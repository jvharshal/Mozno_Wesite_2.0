import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mozno_Wesite_2.0/', // GitHub Pages repo name
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'dist',           // keeps /dist/… paths identical to dev
    rollupOptions: {
      output: {
        assetFileNames: 'dist/[name].[hash][extname]',
        chunkFileNames: 'dist/[name].[hash].js',
        entryFileNames: 'dist/[name].[hash].js',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
