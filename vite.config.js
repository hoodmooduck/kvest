import { defineConfig } from 'vite';


export default defineConfig({
    resolve: {
        alias: {
            '@': '/src', // Замените 'src' на вашу директорию, если она называется иначе
        },
    },
    base: './',
    server: {
        open: true,
    },
});
