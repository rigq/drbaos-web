export interface NavLink {
  label: string;
  href: string;
  /** Solo en el menú móvil */
  mobileOnly?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'Tratamientos', href: '/tratamientos' },
  { label: 'Nuestros Centros', href: '/#centros' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Plan VIP', href: '/plan-vip', mobileOnly: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export const isCurrent = (href: string, pathname: string): boolean => {
  if (href.includes('#')) return false;
  const path = pathname.replace(/\/$/, '') || '/';
  return path === href || path.startsWith(`${href}/`);
};
