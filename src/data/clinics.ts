// Datos de las clínicas — fuente única para nav, footer, CTAs y Schema.org.
// Schema: docs/site-architecture.md §6.

export type ClinicId = 'arges' | 'majadahonda';

export interface OpeningSlot {
  days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[];
  opens: string;
  closes: string;
}

export interface Clinic {
  id: ClinicId;
  name: string;
  shortName: string;
  /** Ciudad / provincia para textos: "Toledo", "Madrid" */
  region: string;
  tag: string;
  address: string;
  street: string;
  postalCode: string;
  locality: string;
  phone: string[];
  whatsapp: string;
  hours: string;
  /** Horario por días para tablas */
  hoursTable: { days: string; time: string }[];
  opening: OpeningSlot[];
  geo?: { lat: number; lng: number };
  mapsUrl: string;
  /** Query para el iframe de Google Maps */
  mapsQuery: string;
  pageUrl: string;
  rating: { score: string; value: string; count: number };
  areaServed: string[];
  image: string;
}

const MON_THU: OpeningSlot['days'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

export const clinics: Clinic[] = [
  {
    id: 'arges',
    name: 'Argés, Toledo',
    shortName: 'Argés',
    region: 'Toledo',
    tag: 'Clínica Principal',
    address: 'Av. Toledo, 5, Local-A, 45122 Argés',
    street: 'Av. Toledo, 5, Local-A',
    postalCode: '45122',
    locality: 'Argés',
    phone: ['652 714 665', '925 040 593'],
    whatsapp: '34652714665',
    hours: 'L–J 10:00–20:00 · V 10:00–14:00',
    hoursTable: [
      { days: 'Lunes – Jueves', time: '10:00 – 20:00' },
      { days: 'Viernes', time: '10:00 – 14:00' },
      { days: 'Sábado – Domingo', time: 'Cerrado' },
    ],
    opening: [
      { days: MON_THU, opens: '10:00', closes: '20:00' },
      { days: ['Friday'], opens: '10:00', closes: '14:00' },
    ],
    geo: { lat: 39.8123, lng: -4.0285 },
    mapsUrl: 'https://maps.google.com/?q=Av.+Toledo+5+Argés',
    mapsQuery: 'Clínica Dental Dr. Baos, Av. Toledo 5, 45122 Argés, Toledo',
    pageUrl: '/arges',
    rating: { score: '4,9', value: '4.9', count: 39 },
    areaServed: ['Argés', 'Toledo'],
    image: '/assets/images/arges/fachada_arges.avif',
  },
  {
    id: 'majadahonda',
    name: 'Majadahonda, Madrid',
    shortName: 'Majadahonda',
    region: 'Madrid',
    tag: 'Nueva Apertura',
    address: 'C. de San Joaquín, 5, 28220 Majadahonda',
    street: 'C. de San Joaquín, 5',
    postalCode: '28220',
    locality: 'Majadahonda',
    phone: ['614 05 56 29'],
    whatsapp: '34614055629',
    hours: 'L–J 9:00–13:00 y 15:00–19:00 · V 9:00–14:00',
    hoursTable: [
      { days: 'Lunes – Jueves', time: '9:00 – 13:00 y 15:00 – 19:00' },
      { days: 'Viernes', time: '9:00 – 14:00' },
      { days: 'Sábado – Domingo', time: 'Cerrado' },
    ],
    opening: [
      { days: MON_THU, opens: '09:00', closes: '13:00' },
      { days: MON_THU, opens: '15:00', closes: '19:00' },
      { days: ['Friday'], opens: '09:00', closes: '14:00' },
    ],
    mapsUrl: 'https://maps.google.com/?q=Calle+San+Joaquín+5+Majadahonda',
    mapsQuery: 'Clínica Dental Dr. Baos, C. de San Joaquín 5, 28220 Majadahonda',
    pageUrl: '/dentista-majadahonda',
    rating: { score: '5,0', value: '5.0', count: 27 },
    areaServed: ['Majadahonda', 'Las Rozas de Madrid', 'Pozuelo de Alarcón', 'Boadilla del Monte', 'Villanueva de la Cañada'],
    image: '/assets/images/majadahonda/fachada-majadahonda.jpg',
  },
];

export const getClinic = (id: ClinicId): Clinic =>
  clinics.find((c) => c.id === id)!;

export const DEFAULT_WA_TEXT = 'Hola, me gustaría pedir cita.';

export const waUrl = (clinic: Clinic, text: string = DEFAULT_WA_TEXT): string =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;

export const telHref = (phone: string): string =>
  `tel:+34${phone.replace(/\s+/g, '')}`;

export const mapsEmbedUrl = (clinic: Clinic): string =>
  `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`;
