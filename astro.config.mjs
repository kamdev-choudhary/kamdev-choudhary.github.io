// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/**
 * Static build for GitHub Pages.
 *
 * `site` is the canonical origin — it drives the sitemap, the canonical link
 * and the absolute URLs in the Open Graph tags and JSON-LD. The repo is
 * published as a user site (kamdev-bharatai.github.io), so `base` stays at
 * the root and no asset path needs a prefix.
 *
 * There is no UI framework integration: every component is .astro and the
 * interactive parts are plain `<script>` modules, so the site ships no
 * framework runtime at all.
 */
export default defineConfig({
  site: "https://kamdev-bharatai.github.io",
  base: "/",
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
