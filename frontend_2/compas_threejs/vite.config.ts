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
    // Path relative to the vite.config.ts file
    outDir: path.resolve(__dirname, "../../../src/compas_threejs/frontend"),

    // Optional but nice:
    emptyOutDir: true, // Clears previous build automatically
    sourcemap: false, // Skip sourcemaps for pip distribution
  },
});
