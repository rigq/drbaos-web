import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Artículos publicados (sin borradores en producción), del más reciente al más antiguo. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

const fmt = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => fmt.format(d);

export const postUrl = (p: Post) => `/blog/${p.slug}`;

/** Minutos de lectura aproximados (200 palabras/min). */
export const readingTime = (p: Post) =>
  Math.max(1, Math.round((p.body.trim().split(/\s+/).length) / 200));
