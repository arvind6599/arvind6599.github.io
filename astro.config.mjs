import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arvind6599.github.io',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
