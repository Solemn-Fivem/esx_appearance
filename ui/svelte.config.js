import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

export default {
    preprocess: vitePreprocess(),
    compilerOptions: {
        compatibility: {
            componentApi: 4, // Abilita la compatibilità con Svelte 4
        },
    },
    kit: {
        adapter: adapter(),
        paths: {
            base: ''
        }
    },
};
