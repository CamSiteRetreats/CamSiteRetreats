import { defineConfig } from 'vite';

export default defineConfig({
    base: '/admin/',
    server: {
        port: 5173,
        open: '/admin/',
        proxy: {
            '/api': {
                target: 'http://localhost:8889',
                changeOrigin: true,
            }
        }
    }
});
