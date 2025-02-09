import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5002,
    proxy: {
      // Проксируем запросы к API
      '/api': {
        target: 'http://127.0.0.1:5001',
        changeOrigin: true,
      },
      // Проксируем WebSocket соединения
      '/socket.io': {
        target: 'ws://127.0.0.1:5001',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  // build: {
  //   chunkSizeWarningLimit: 1000,
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('bootstrap' || 'index-BwV0OUVV.css')) {
  //           return 'bootstrap';
  //         }
  //         if (id.includes('node_modules')) {
  //           return 'vendor';
  //         }
  //       },
  //     },
  //   },
  },
// }
);
