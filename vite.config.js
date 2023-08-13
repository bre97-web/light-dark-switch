// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    base: 'light-dark-switch',
    root: './demo/',
    build: {
        outDir: '../docs',
        emptyOutDir: true,
    }
});
