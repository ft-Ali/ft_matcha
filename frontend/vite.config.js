import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // Utilise le runtime JSX automatique
      include: '**/*.js', // Ajoute les fichiers .js pour le traitement JSX
    }),
  ],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: 'public/index.html', // Assurez-vous que le chemin vers index.html est correct
    },
  },
});