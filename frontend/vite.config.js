import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', 
    emptyOutDir: true
  },
  server: {
    host: true,              
    port: 5173,
    watch: {
      usePolling: true,
      interval: 100
    }
  }
});
