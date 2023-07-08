// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: '/light-dark-switch',
  build: {
    minify: false,
    rollupOptions: {
      external: ["css","html","svg"],
      input: ["./src/index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "./switch",
        },
      ],
    },
    lib: {
      entry: "./src/index.ts",
    },
  },
});
