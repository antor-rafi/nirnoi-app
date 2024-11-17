import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define the Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Use port 3000 (or another if preferred)
    strictPort: true, // Prevent Vite from trying a different port if 3000 is in use
    host: true, // Allow access from network (useful for StackBlitz or remote debugging)
  },
  css: {
    postcss: './postcss.config.js', // Path to your PostCSS configuration file
  },
  resolve: {
    alias: {
      '@': '/src', // Simplify imports by using "@" to refer to the "src" folder
    },
  },
});
