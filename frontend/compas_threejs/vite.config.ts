import path from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../../src/compas_threejs/viewer/frontend"), // ✅ build goes into dist
    emptyOutDir: true, // clears old build
    sourcemap: false, // no sourcemaps needed
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js", // no hash in filename
        chunkFileNames: "assets/[name].js", // no hash in chunk filenames
        assetFileNames: "assets/[name][extname]", // no hash in asset filenames
      },
    },
  },
});
