import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte()],
    build: {
        outDir: 'dist', // Directory di output
        assetsDir: 'assets', // Directory di assets
        emptyOutDir: true,
    },
    base: './',
    css: {
        preprocessorOptions: {
            postcss: true,
        },
    },
});