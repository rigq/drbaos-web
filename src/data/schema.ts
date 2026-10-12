// Constructores de JSON-LD (schema.org). Se inyectan con <SchemaOrg data={...} />.
import { clinics, type Clinic } from './clinics';

export const SITE = 'https://clinicadentaldrbaos.com';
const ORG_ID = `${SITE}/#organization`;
const abs = (path: string) => new URL(path, SITE).href;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Clínica Dental Dr. Baos',
  url: SITE,
  logo: abs('/assets/images/brand/android-chrome-512x512.png'),
  sameAs: ['https://www.instagram.com/clinicadental.drbaos/'],
  subOrganization: clinics.map((c) => ({ '@id': `${abs(c.pageUrl)}#clinic` })),
});

export const clinicSchema = (c: Clinic, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${abs(c.pageUrl)}#clinic`,
  name: `Clínica Dental Dr. Baos — ${c.shortName}`,
  description,
  url: abs(c.pageUrl),
  parentOrganization: { '@id': ORG_ID },
  image: abs(c.image),
  logo: abs('/assets/images/brand/android-chrome-512x512.png'),
  telephone: c.phone.map((p) => `+34${p.replace(/\s+/g, '')}`),
  address: {
    '@type': 'PostalAddress',
    streetAddress: c.street,
    addressLocality: c.locality,
    addressRegion: c.region,
    postalCode: c.postalCode,
    addressCountry: 'ES',
  },
  ...(c.geo && { geo: { '@type': 'GeoCoordinates', latitude: c.geo.lat, longitude: c.geo.lng } }),
  openingHoursSpecification: c.opening.map((o) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: o.days,
    opens: o.opens,
    closes: o.closes,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: c.rating.value,
    reviewCount: String(c.rating.count),
    bestRating: '5',
  },
  areaServed: c.areaServed.map((name) => ({ '@type': 'City', name })),
  priceRange: '€€',
  sameAs: ['https://www.instagram.com/clinicadental.drbaos/'],
});

export interface Faq { q: string; a: string }

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.url),
  })),
});

export const articleSchema = (a: {
  title: string; description: string; url: string; image?: string;
  published: Date; updated?: Date; author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: a.title,
  description: a.description,
  mainEntityOfPage: abs(a.url),
  ...(a.image && { image: abs(a.image) }),
  datePublished: a.published.toISOString(),
  dateModified: (a.updated ?? a.published).toISOString(),
  author: { '@type': 'Person', name: a.author },
  publisher: { '@id': ORG_ID },
});
