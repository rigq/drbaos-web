// @ts-check
import { defineConfig } from 'astro/config';

// Dominio de producción (confirmado por la clínica): clinicadentaldrbaos.com
export default defineConfig({
  site: 'https://clinicadentaldrbaos.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
