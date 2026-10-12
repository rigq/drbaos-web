// sitemap.xml generado en la build: páginas indexables + artículos del blog.
// Excluye landings de Ads (noindex) y la 404.
import type { APIRoute } from 'astro';
import { treatments } from '../data/treatments';
import { getPublishedPosts, postUrl } from '../data/blog';

const STATIC = ['/', '/arges', '/dentista-majadahonda', '/tratamientos', '/equipo', '/plan-vip', '/blog', '/aviso-legal', '/politica-privacidad', '/politica-cookies'];

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();
  const urls = [
    ...STATIC.map((p) => ({ loc: p })),
    ...treatments.map((t) => ({ loc: t.url })),
    ...posts.map((p) => ({ loc: postUrl(p), lastmod: (p.data.updatedDate ?? p.data.publishDate).toISOString().slice(0, 10) })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${new URL(u.loc, site).href}</loc>${'lastmod' in u ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
