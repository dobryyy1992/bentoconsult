// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.bentoconsult.com/',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg', 'ru'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
