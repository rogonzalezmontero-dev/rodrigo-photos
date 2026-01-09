import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Integración PRINCIPAL: Tailwind CSS (para los estilos de Lovable)
  integrations: [tailwind()],
  // Salida estática (perfecta para Vercel/Netlify)
  output: 'static',
  // Opcional: Si quieres mantener el sitemap, añádelo así:
  // integrations: [tailwind(), sitemap()],
  // Y asegúrate de importarlo: import sitemap from "@astrojs/sitemap";
});