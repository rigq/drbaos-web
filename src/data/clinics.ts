// Datos de las clínicas — fuente única para nav, footer, CTAs y Schema.org.
// Schema: docs/site-architecture.md §6.

export type ClinicId = 'arges' | 'majadahonda';

export interface Clinic {
  id: ClinicId;
  name: string;
  shortName: string;
  tag: string;
  address: string;
  phone: string[];
  whatsapp: string;
  hours: string;
  mapsUrl: string;
  pageUrl: string;
}

export const clinics: Clinic[] = [
  {
    id: 'arges',
    name: 'Argés, Toledo',
    shortName: 'Argés',
    tag: 'Clínica Principal',
    address: 'Av. Toledo, 5, Local-A, 45122 Argés',
    phone: ['652 714 665', '925 040 593'],
    whatsapp: '34652714665',
    hours: 'L–J 10:00–20:00 · V 10:00–14:00',
    mapsUrl: 'https://maps.google.com/?q=Av.+Toledo+5+Argés',
    pageUrl: '/arges',
  },
  {
    id: 'majadahonda',
    name: 'Majadahonda, Madrid',
    shortName: 'Majadahonda',
    tag: 'Nueva Apertura',
    address: 'C. de San Joaquín, 5, 28220 Majadahonda',
    phone: ['614 05 56 29'],
    whatsapp: '34614055629',
    hours: 'L–J 9:00–13:00 y 15:00–19:00 · V 9:00–14:00',
    mapsUrl: 'https://maps.google.com/?q=Calle+San+Joaquín+5+Majadahonda',
    pageUrl: '/dentista-majadahonda',
  },
];

export const getClinic = (id: ClinicId): Clinic =>
  clinics.find((c) => c.id === id)!;

export const DEFAULT_WA_TEXT = 'Hola, me gustaría pedir cita.';

export const waUrl = (clinic: Clinic, text: string = DEFAULT_WA_TEXT): string =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;

export const telHref = (phone: string): string =>
  `tel:+34${phone.replace(/\s+/g, '')}`;
