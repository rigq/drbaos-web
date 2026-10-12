// Equipo. Schema: docs/site-architecture.md §6 (+ clínicas en las que atiende).
import type { ClinicId } from './clinics';

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  /** Odontólogos: se muestran en la homepage y la página de equipo */
  doctor: boolean;
  clinics: ClinicId[];
}

export const team: TeamMember[] = [
  { name: 'Dr. Carlos Baos',      role: 'Director Clínico · Implantología', photo: '/assets/images/team/carlos.avif',  doctor: true,  clinics: ['arges', 'majadahonda'] },
  { name: 'Dra. Albany González', role: 'Estética Dental · Endodoncia',      photo: '/assets/images/team/albany.avif',  doctor: true,  clinics: ['arges', 'majadahonda'] },
  { name: 'Dra. Daniela Pueyo',   role: 'Cirugía Oral · Periodoncia',        photo: '/assets/images/team/daniela.avif', doctor: true,  clinics: ['arges', 'majadahonda'] },
  { name: 'Laura Carmena',        role: 'Higienista Dental',                 photo: '/assets/images/team/laura.avif',   doctor: false, clinics: ['arges'] },
  { name: 'Dra. Inés Gil',        role: 'Higienista Dental',                 photo: '/assets/images/team/ines.avif',    doctor: false, clinics: ['majadahonda'] },
];

export const doctors = team.filter((m) => m.doctor);
export const teamFor = (clinic: ClinicId) => team.filter((m) => m.clinics.includes(clinic));
