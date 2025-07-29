import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Eccommerce-ssunique/',
  plugins: [react(), tailwindcss()],
   build: {
    chunkSizeWarningLimit: 1000, // optional
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        }
      }
    }
  }
});
