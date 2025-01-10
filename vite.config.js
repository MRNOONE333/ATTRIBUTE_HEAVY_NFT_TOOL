import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/ATTRIBUTE_HEAVY_NFT_TOOL/', // Ensures assets are resolved correctly for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for storing assets
  },
  server: {
    open: true, // Automatically opens the browser in dev mode
    port: 5173, // Default port for Vite
  },
});
