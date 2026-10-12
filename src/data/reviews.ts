// Reseñas de Google: SOLO texto literal de reseñas reales publicadas.
// No añadir reseñas que no existan en Google (publicidad engañosa en el ámbito sanitario).
// Para ampliar: copiar el texto exacto desde el perfil de Google Maps de cada clínica.

export const rating = {
  score: '4,9',
  count: 39,
  googleUrl: 'https://maps.app.goo.gl/cNQpd3WYr14AdRcL7',
};

export interface Review {
  text: string;
  author: string;
  clinic: string;
}

export const reviews: Review[] = [
  {
    text: 'Siempre he tenido cierto temor a las visitas al dentista, pero esta vez fue diferente. Albani fue increíblemente cuidadosa y profesional, me explicó cada paso con claridad. La experiencia fue inmejorable.',
    author: 'Marta Ballesteros',
    clinic: 'Argés',
  },
  {
    text: 'Muy recomendable, excelente atención y soluciones rápidas y eficaces. Regresé en marzo 2026 y de nuevo excelente. ¡Muy recomendable!',
    author: 'Javier del Puerto Martín',
    clinic: 'Argés',
  },
];
