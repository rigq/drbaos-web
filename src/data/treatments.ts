// Catálogo de tratamientos — fuente única para la lista editorial, el footer y las páginas.
// Schema: docs/site-architecture.md §6.
import type { ClinicId } from './clinics';

export interface Treatment {
  num: string;
  slug: string;
  name: string;
  /** Nombre corto para menús y footer */
  shortName: string;
  desc: string;
  url: string;
  clinics: ClinicId[];
  /** Landings de Google Ads por clínica, solo si existe campaña */
  landingUrls: Partial<Record<ClinicId, string>>;
}

const both: ClinicId[] = ['arges', 'majadahonda'];

export const treatments: Treatment[] = [
  {
    num: '01', slug: 'estetica-dental', name: 'Estética Dental', shortName: 'Estética Dental',
    desc: 'Carillas · Blanqueamiento · Diseño de sonrisa',
    url: '/tratamientos/estetica-dental', clinics: both, landingUrls: {},
  },
  {
    num: '02', slug: 'implantes-dentales', name: 'Implantes Dentales', shortName: 'Implantes Dentales',
    desc: 'Implantes unitarios · All-on-4',
    url: '/tratamientos/implantes-dentales', clinics: both,
    landingUrls: {
      majadahonda: '/landings/implantes-majadahonda',
      arges: '/landings/implantes-arges',
    },
  },
  {
    num: '03', slug: 'ortodoncia-invisible', name: 'Ortodoncia Invisible', shortName: 'Ortodoncia Invisible',
    desc: 'Invisalign · Alineadores transparentes',
    url: '/tratamientos/ortodoncia-invisible', clinics: both, landingUrls: {},
  },
  {
    num: '04', slug: 'endodoncia', name: 'Endodoncia', shortName: 'Endodoncia',
    desc: 'Endodoncia microscópica · Retratamiento',
    url: '/tratamientos/endodoncia', clinics: both, landingUrls: {},
  },
  {
    num: '05', slug: 'periodoncia', name: 'Periodoncia', shortName: 'Periodoncia',
    desc: 'Tratamiento de encías · Raspado y alisado',
    url: '/tratamientos/periodoncia', clinics: both, landingUrls: {},
  },
  {
    num: '06', slug: 'cirugia-oral', name: 'Cirugía Oral', shortName: 'Cirugía Oral',
    desc: 'Extracciones · Cordales · Cirugía menor',
    url: '/tratamientos/cirugia-oral', clinics: both, landingUrls: {},
  },
  {
    num: '07', slug: 'odontopediatria', name: 'Odontopediatría', shortName: 'Odontopediatría',
    desc: 'Dentista infantil · Selladores · Revisiones',
    url: '/tratamientos/odontopediatria', clinics: both, landingUrls: {},
  },
  {
    num: '08', slug: 'urgencias-dentales', name: 'Urgencias Dentales', shortName: 'Urgencias',
    desc: 'Atención urgente · Dolor · Traumatismos',
    url: '/tratamientos/urgencias-dentales', clinics: both, landingUrls: {},
  },
];
