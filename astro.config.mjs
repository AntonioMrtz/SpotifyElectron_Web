import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://antoniomrtz.github.io",
  base: "/SpotifyElectron_Web",
  compressHTML: true,
  integrations: [sitemap()],
});
