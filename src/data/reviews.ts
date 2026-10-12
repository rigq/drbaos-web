// Reseñas de Google (texto literal de los pacientes) y valoración agregada.

export const rating = {
  score: '4,9',
  count: 39,
  googleUrl: 'https://www.google.com/search?q=Clínica+Dental+Dr+Baos',
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
    text: 'Llevaba tiempo pensando en los implantes y por fin me decidí. El trato del Dr. Baos y su equipo fue excelente desde el primer momento. Muy profesionales, con mucha paciencia para resolver todas mis dudas.',
    author: 'Javier del Puerto Martín',
    clinic: 'Argés',
  },
  {
    text: 'Empecé la ortodoncia con Invisalign hace unos meses y el cambio es increíble. El equipo de Majadahonda me explicó todo el proceso desde el principio. Muy contenta con el seguimiento y los resultados.',
    author: 'María José Fernández',
    clinic: 'Majadahonda',
  },
  {
    text: 'Llevé a mi hijo de 8 años y el trato fue magnífico. La doctora consiguió que se sintiera cómodo desde el principio. Sin llorar, sin dramas. Repetiremos sin duda.',
    author: 'Pablo García',
    clinic: 'Argés',
  },
];
