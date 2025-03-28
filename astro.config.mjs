// @ts-check
import { defineConfig } from "astro/config";
// Make sure to uncomment the base when publishing to GITHUB PAGES
// https://astro.build/config
export default defineConfig({
  site: "https://capitanski.github.io/",
  outDir: "./docs",
  output: "static",
  base: "matuschek",
  server: {
    host: true,
  },
  build: {
    assets: "custom-folder",
  },
});
