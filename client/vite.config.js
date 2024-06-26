import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: '../',
  server: {
    //port: 8080, // Hier ändern
    proxy: {
      '/api': {
        target: 'https://blazes-meta-dynmap-server.onrender.com/',
        //target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    hmr: {
      clientPort: 443,
    },
  },
});
