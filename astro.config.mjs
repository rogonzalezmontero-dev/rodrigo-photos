// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: 'static',  // ← ESTO ES LO CLAVE PARA NETLIFY
  integrations: [mdx(), sitemap()],
});
