import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Avoid conflicts with default ports
  },
  css: {
    postcss: './postcss.config.js',
  },
});
