// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["css","html","svg"],
      input: ["./main.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./switch/es",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
});
