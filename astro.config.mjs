// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// True when at least one non-draft post exists (files starting with "_" are templates).
const blogDir = new URL('./src/content/blog/', import.meta.url);
const hasPublishedPosts = readdirSync(blogDir, { recursive: true, encoding: 'utf8' })
  .filter((f) => /\.mdx?$/.test(f) && !f.split('/').some((part) => part.startsWith('_')))
  .some((f) => !/^draft:\s*true\s*$/m.test(readFileSync(new URL(f, blogDir), 'utf8')));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tesseriumlabs.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap({
      // Keep utility pages, and the blog index while it is empty, out of the sitemap.
      filter: (page) => !page.includes('/404') && (hasPublishedPosts || !page.endsWith('/blog/')),
    }),
  ]
});
