import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  adapter: vercel(),
  output: 'hybrid',
  site: 'https://your-poetry-blog.vercel.app'
});