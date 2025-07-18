// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// Make sure to uncomment the base when publishing to GITHUB PAGES
// https://astro.build/config
export default defineConfig({
  site: "https://jakobmatuschek.de",
  //outDir: "./docs",
  output: "static",
  //base: "matuschek",
  server: {
    host: true,
  },
  /*build: {
    assets: "custom-folder",
  },*/
  integrations: [sitemap()],
});
