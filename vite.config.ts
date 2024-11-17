import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Preferred port
    strictPort: false, // Allow fallback to another port if 3000 is unavailable
    host: true, // Enable access over the network
  },
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
