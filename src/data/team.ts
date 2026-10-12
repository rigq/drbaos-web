// Equipo médico. Schema: docs/site-architecture.md §6.

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export const team: TeamMember[] = [
  { name: 'Dr. Carlos Baos',      role: 'Director Clínico · Implantología', photo: '/assets/images/team/carlos.avif' },
  { name: 'Dra. Albany González', role: 'Estética Dental · Endodoncia',      photo: '/assets/images/team/albany.avif' },
  { name: 'Dra. Daniela Pueyo',   role: 'Cirugía Oral · Periodoncia',        photo: '/assets/images/team/daniela.avif' },
];
