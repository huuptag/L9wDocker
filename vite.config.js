import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const host = env.VITE_HOST
        ? env.VITE_HOST.replace(/https:\/\//, "")
        : 'localhost';

    return {
        server: {
            port: env.VITE_PORT ? env.VITE_PORT : undefined,
            hmr: {
                host: 'localhost',
            },
            watch: {
                usePolling: true,
                awaitWriteFinish: true
            }
        },
        plugins: [
            laravel({
                input: [
                    'resources/js/app.jsx',
                    'resources/css/app.css'
                ],
                refresh: true,
            }),
            react(),
        ],
        resolve: {
            alias: {
                '@': '/resources/js'
            }
        }
    }
});
