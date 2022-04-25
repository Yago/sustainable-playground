import { VitePWA } from 'vite-plugin-pwa';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';

export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: 'http://sustainable-playground.yago.io/',
  integrations: [
    react(),
    solid(),
    sitemap(),
  ],
  vite: {
    plugins: [VitePWA({})]
  },
};
