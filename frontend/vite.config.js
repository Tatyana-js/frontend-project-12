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
        changeOrigin: true, // устанавливает заголовок Origin к http-запросам
        rewriteWsOrigin: true, // переписывает заголовок Origin для соединения веб-сокета.
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-toastify')) {
              return 'toastify';
            }
            if (id.includes('bootstrap') || id.includes('react-bootstrap')) {
              return 'bootstrap';
            }
            if (id.includes('i18next')) {
              return 'i18n';
            }
            if (id.includes('formik') || id.includes('yup')) {
              return 'formik';
            }
            if (id.includes('rollbar')) {
              return 'rollbar';
            }
            return 'vendor';
          }
          return null;
        },
      },
    },
  },
});
