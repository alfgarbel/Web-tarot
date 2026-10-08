import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambiar por el dominio definitivo cuando exista.
export default defineConfig({
  site: 'https://eltarotdeaurora.com',
  integrations: [sitemap()],
});
