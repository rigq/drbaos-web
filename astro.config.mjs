// @ts-check
import { defineConfig } from 'astro/config';

// Dominio de producción. El sitio actual vive en clinicadentaldrbaos.com
// (canonical de todas las páginas heredadas). Cambiar aquí si se migra de dominio.
export default defineConfig({
  site: 'https://clinicadentaldrbaos.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
