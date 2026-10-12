// Colección del blog (docs/site-architecture.md §7).
// Flujo de borradores: draft: true → no se publica en producción.
import { defineCollection, z } from 'astro:content';

export const AUTHORS = [
  'Equipo Clínica Dental Dr. Baos',
  'Dr. Carlos Baos',
  'Dra. Albany González',
  'Dra. Daniela Pueyo',
] as const;

export const CATEGORIES = [
  'Implantes',
  'Estética',
  'Ortodoncia',
  'Periodoncia',
  'Endodoncia',
  'Cirugía Oral',
  'Odontopediatría',
  'Urgencias',
  'Higiene',
  'General',
] as const;

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Meta description SEO. Recomendado ≤160 caracteres (Google trunca); los artículos
    // migrados tienen 190–230 y se mantienen tal cual hasta revisarlos.
    description: z.string().max(300),
    excerpt: z.string().optional(),          // resumen para el listado
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.enum(AUTHORS).default('Equipo Clínica Dental Dr. Baos'),
    category: z.enum(CATEGORIES),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    draft: z.boolean().default(false),
    clinic: z.enum(['arges', 'majadahonda', 'ambas']).default('ambas'),
    faqHeading: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
