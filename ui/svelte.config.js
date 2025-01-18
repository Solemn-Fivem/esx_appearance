import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
    preprocess: vitePreprocess(),
    compilerOptions: {
        compatibility: {
            componentApi: 4, // Abilita la compatibilità con Svelte 4
        },
    },
};
