// Contenido de las páginas canónicas de tratamiento (/tratamientos/[slug]).
// Migrado de las páginas del sitio anterior (versiones Toledo + Majadahonda unificadas
// en una sola página que cubre ambas clínicas). Ver docs/site-architecture.md §5.
import type { Faq } from './schema';

export interface PointGroup {
  title: string;
  body?: string;
  items: string[];
}

export interface TreatmentPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** Datos clave en una línea: duración, anestesia… */
  facts: string[];
  image: { src: string; alt: string };
  whatIs: { heading: string; body: string; lists: PointGroup[] };
  detail: { eyebrow: string; heading: string; intro?: string; groups: PointGroup[] };
  faqHeading: string;
  faqIntro: string;
  faqs: Faq[];
  cta: { eyebrow: string; heading: string; intro: string };
  /** Urgencias: el hero prioriza la llamada */
  urgent?: boolean;
}

const BOTH = 'en nuestras clínicas de Argés (Toledo) y Majadahonda (Madrid)';

export const treatmentPages: TreatmentPage[] = [
  {
    slug: 'implantes-dentales',
    metaTitle: 'Implantes Dentales en Toledo y Majadahonda | Clínica Dr. Baos',
    metaDescription: 'Implantes dentales con diagnóstico 3D y cirugía guiada en Argés (Toledo) y Majadahonda (Madrid). Recupera tu sonrisa de forma definitiva. Pide tu valoración por WhatsApp.',
    eyebrow: 'Implantología · Argés y Majadahonda',
    h1: 'Implantes dentales',
    intro: `Recupera los dientes que has perdido con la solución más duradera y natural, ${BOTH}. Diagnóstico 3D, cirugía guiada y el trato cercano que nos caracteriza.`,
    facts: ['30–60 min la colocación', 'Cirugía guiada', 'Resultado definitivo'],
    image: { src: '/assets/images/tratamientos/implantes.avif', alt: 'Tratamiento de implantes dentales en la Clínica Dr. Baos' },
    whatIs: {
      heading: '¿Qué es un implante dental?',
      body: 'Un implante dental es un pequeño tornillo de titanio biocompatible que se coloca en el hueso maxilar para sustituir la raíz de un diente perdido; sobre él se fija una corona a medida que devuelve la estética y la función de tu sonrisa. Es la solución más estable y duradera para reponer una o varias piezas, sin dañar los dientes vecinos.',
      lists: [
        { title: 'El proceso, paso a paso', items: ['Estudio radiológico 3D y planificación digital', 'Colocación del implante con cirugía guiada', 'Periodo de integración al hueso (osteointegración)', 'Colocación de la corona, puente o prótesis a medida', 'Revisiones y mantenimiento a largo plazo'] },
        { title: 'Por qué elegir un implante', items: ['No daña ni desgasta los dientes vecinos', 'Recupera la fuerza masticatoria al 100%', 'Evita la pérdida progresiva de hueso', 'Estética natural, indistinguible del resto'] },
      ],
    },
    detail: {
      eyebrow: 'Soluciones',
      heading: 'Tipos de implante que ofrecemos',
      intro: 'Estudiamos tu caso y te recomendamos la opción más adecuada para ti.',
      groups: [
        { title: 'Implante unitario', items: ['Repone un solo diente ausente', 'Implante + corona individual', 'Sin tallar los dientes de al lado'] },
        { title: 'Puente sobre implantes', items: ['Para varios dientes contiguos ausentes', 'Menos implantes que coronas, gran estabilidad', 'Fijo y cómodo'] },
        { title: 'Arcada completa fija', items: ['Rehabilita toda la arcada sobre varios implantes', 'Carga inmediata cuando el caso lo permite', 'Alternativa fija a la dentadura removible'] },
      ],
    },
    faqHeading: 'Preguntas sobre implantes dentales',
    faqIntro: 'Resolvemos las dudas más habituales antes de tu primera visita.',
    faqs: [
      { q: '¿Duele ponerse un implante dental?', a: 'No. La colocación se realiza con anestesia local, por lo que durante la intervención no sentirás dolor, solo cierta presión. La mayoría de pacientes retoman su vida normal al día siguiente. Te pautamos medicación e indicaciones sencillas para que el postoperatorio sea cómodo.' },
      { q: '¿Cuánto dura el tratamiento de implantes?', a: 'Depende de cada caso. Tras colocar el implante, el hueso necesita un periodo de integración (osteointegración) de varios meses antes de colocar la corona definitiva. En casos seleccionados es posible la carga inmediata. En la primera visita valoramos tu situación y te damos un plan de tiempos personalizado.' },
      { q: '¿Cuánto duran los implantes dentales?', a: 'Un implante bien cuidado puede durar muchos años. La clave está en una buena higiene diaria y en acudir a las revisiones de mantenimiento, igual que con tus dientes naturales. Trabajamos con implantes de primeras marcas para asegurar la mejor longevidad.' },
      { q: 'Llevo tiempo sin el diente, ¿soy candidato a un implante?', a: 'En la mayoría de los casos, sí. Cuando ha pasado tiempo puede haber pérdida de hueso, pero existen técnicas de regeneración ósea que permiten recuperar el volumen necesario. Lo confirmamos con un estudio radiológico 3D antes de planificar tu tratamiento.' },
      { q: '¿Los implantes dentales tienen garantía?', a: 'Sí. Trabajamos con implantes de primeras marcas que cuentan con garantía del fabricante y respaldamos el trabajo realizado en la clínica. Su duración depende además de un buen mantenimiento y de acudir a las revisiones periódicas; te explicamos las condiciones de garantía en tu primera valoración.' },
      { q: '¿Se puede financiar el tratamiento de implantes?', a: 'Sí. Tras la primera valoración te preparamos un presupuesto cerrado y sin sorpresas, y disponemos de financiación para que puedas fraccionar el tratamiento en cuotas cómodas. Te explicamos las condiciones y buscamos la fórmula de pago que mejor se adapte a ti.' },
    ],
    cta: { eyebrow: 'Pide tu valoración', heading: 'Estudia tu caso sin compromiso', intro: 'Rellena el formulario y te contactamos por WhatsApp para tu primera valoración de implantes en la clínica que prefieras.' },
  },
  {
    slug: 'estetica-dental',
    metaTitle: 'Estética Dental: Blanqueamiento y Carillas | Clínica Dr. Baos',
    metaDescription: 'Estética dental en Argés (Toledo) y Majadahonda (Madrid): blanqueamiento dental y carillas para una sonrisa más blanca y armónica. Diseño de sonrisa y financiación. Pide tu cita por WhatsApp.',
    eyebrow: 'Estética Dental · Argés y Majadahonda',
    h1: 'Estética dental y blanqueamiento',
    intro: `Consigue una sonrisa más blanca, alineada y armónica con blanqueamiento dental, carillas y diseño de sonrisa, ${BOTH}. Tratamientos a medida y mínimamente invasivos.`,
    facts: ['Según tratamiento', 'Resultado natural', 'Mínimamente invasiva'],
    image: { src: '/assets/images/tratamientos/estetica.avif', alt: 'Estética dental y diseño de sonrisa en la Clínica Dr. Baos' },
    whatIs: {
      heading: '¿Qué es la estética dental?',
      body: 'La estética dental reúne los tratamientos que mejoran la apariencia de tu sonrisa —como el blanqueamiento dental y las carillas— para conseguir dientes más blancos, mejor proporcionados y armónicos con tu rostro. Combinamos ciencia y arte para lograr un resultado natural, preservando al máximo el diente sano.',
      lists: [
        { title: 'Qué incluye nuestra estética dental', items: ['Blanqueamiento dental profesional', 'Carillas de porcelana y de composite', 'Diseño Digital de Sonrisa (DSD)', 'Contorneado y reconstrucciones estéticas'] },
        { title: 'Beneficios', items: ['Sonrisa más luminosa y armónica', 'Más confianza y autoestima', 'Resultados duraderos y naturales', 'Conservación del tejido dental sano'] },
      ],
    },
    detail: {
      eyebrow: 'Tratamientos',
      heading: 'Blanqueamiento y carillas',
      groups: [
        { title: 'Blanqueamiento dental', body: 'El blanqueamiento aclara el tono de tus propios dientes de forma segura, eliminando manchas y devolviendo luminosidad a tu sonrisa. Es uno de los tratamientos estéticos más demandados porque ofrece un cambio visible sin tocar la estructura del diente.', items: ['Blanqueamiento en clínica (resultado rápido)', 'Blanqueamiento domiciliario con férulas a medida', 'Tratamiento combinado para máxima eficacia', 'Protección de encías y control de sensibilidad'] },
        { title: 'Carillas dentales', body: 'Las carillas son finas láminas de porcelana o composite que se adhieren a la cara visible del diente para corregir color, forma, pequeñas fracturas o espacios. Permiten transformar la sonrisa de manera armónica y duradera, con un enfoque conservador.', items: ['Manchas que no mejoran con blanqueamiento', 'Dientes desgastados, astillados o pequeños', 'Espacios o ligeras desalineaciones', 'Rediseño completo de la sonrisa'] },
      ],
    },
    faqHeading: 'Preguntas sobre estética dental',
    faqIntro: 'Resolvemos las dudas más habituales sobre blanqueamiento y carillas.',
    faqs: [
      { q: '¿Cuánto dura el efecto de un blanqueamiento dental?', a: 'El resultado de un blanqueamiento puede mantenerse mucho tiempo, aunque depende de tus hábitos: el café, el té, el vino o el tabaco van oscureciendo el esmalte. Con unos cuidados sencillos y algún retoque puntual conservarás el tono durante más tiempo. Te damos pautas personalizadas para que dure al máximo.' },
      { q: '¿Es seguro el blanqueamiento dental?', a: 'Sí, siempre que lo realice o supervise un profesional. En la clínica usamos productos y concentraciones adecuados y protegemos las encías durante el proceso. Puede aparecer una sensibilidad temporal que desaparece en pocos días. Los kits sin control profesional son los que conviene evitar.' },
      { q: '¿Qué diferencia hay entre el blanqueamiento y las carillas?', a: 'El blanqueamiento aclara el color de tus propios dientes, pero no cambia su forma ni su posición. Las carillas son finas láminas que se adhieren a la cara visible del diente y permiten corregir color, forma, pequeñas fracturas o espacios. En tu visita valoramos cuál es la mejor opción —o la combinación de ambas— para tu caso.' },
      { q: '¿Cuánto duran las carillas dentales?', a: 'Con un buen cuidado, las carillas de porcelana pueden durar muchos años; las de composite suelen durar algo menos, pero son fáciles de retocar y reparar. Su duración depende de tus hábitos —evitar morder objetos duros, una buena higiene— y de las revisiones periódicas. Te damos pautas para que se mantengan perfectas el mayor tiempo posible.' },
      { q: '¿Se puede financiar la estética dental?', a: 'Sí. Tras estudiar tu sonrisa te entregamos un presupuesto cerrado y disponemos de financiación para que puedas fraccionar el tratamiento en cuotas cómodas. Te explicamos las condiciones y buscamos la fórmula de pago que mejor se adapte a ti.' },
    ],
    cta: { eyebrow: 'Pide tu cita', heading: 'Empecemos por diseñar tu sonrisa', intro: 'Rellena el formulario y te contactamos por WhatsApp para tu valoración de estética dental en la clínica que prefieras.' },
  },
  {
    slug: 'ortodoncia-invisible',
    metaTitle: 'Ortodoncia Invisible e Invisalign | Clínica Dr. Baos',
    metaDescription: 'Ortodoncia invisible e Invisalign en Argés (Toledo) y Majadahonda (Madrid): alinea tus dientes con férulas transparentes, casi imperceptibles y removibles. Estudio 3D y financiación. Pide tu cita por WhatsApp.',
    eyebrow: 'Ortodoncia Invisible · Argés y Majadahonda',
    h1: 'Ortodoncia invisible e Invisalign',
    intro: `Endereza tu sonrisa sin que se note, con alineadores transparentes y removibles. Planificamos tu tratamiento en 3D para que veas el resultado antes de empezar, ${BOTH}.`,
    facts: ['Según cada caso', 'Casi invisible', 'Removible'],
    image: { src: '/assets/images/tratamientos/invisalign.avif', alt: 'Alineadores transparentes de ortodoncia invisible' },
    whatIs: {
      heading: '¿Qué es la ortodoncia invisible?',
      body: 'La ortodoncia invisible es un tratamiento que alinea tus dientes mediante férulas transparentes y removibles —como Invisalign—, casi imperceptibles, en lugar de los brackets tradicionales. Diseñamos cada paso del movimiento dental con un escáner 3D, de forma que puedes ver una simulación del resultado final antes incluso de comenzar.',
      lists: [
        { title: 'El proceso, paso a paso', items: ['Escáner intraoral 3D (sin pastas incómodas)', 'Simulación digital de tu sonrisa final', 'Fabricación de tus alineadores a medida', 'Cambio de férula cada cierto número de días', 'Revisiones de control y retenedores finales'] },
        { title: 'Qué corregimos', items: ['Apiñamiento y dientes torcidos', 'Espacios y diastemas entre dientes', 'Problemas de mordida', 'Recaídas tras una ortodoncia previa'] },
      ],
    },
    detail: {
      eyebrow: 'Por qué elegirla',
      heading: 'Ventajas frente a los brackets',
      intro: 'La forma más discreta y cómoda de conseguir la sonrisa que quieres.',
      groups: [
        { title: 'Prácticamente invisible', items: ['Férulas transparentes que apenas se notan', 'Ideal para adultos y entornos profesionales', 'Sonríe con naturalidad durante el tratamiento'] },
        { title: 'Cómoda y removible', items: ['Te la quitas para comer lo que quieras', 'Higiene dental normal, sin brackets de por medio', 'Sin rozaduras de alambres ni urgencias'] },
        { title: 'Digital y predecible', items: ['Plan de tratamiento diseñado en 3D', 'Ves el resultado estimado antes de empezar', 'Menos visitas de ajuste que los brackets'] },
      ],
    },
    faqHeading: 'Preguntas sobre ortodoncia invisible',
    faqIntro: 'Resolvemos las dudas más habituales sobre la ortodoncia invisible y los alineadores transparentes.',
    faqs: [
      { q: '¿Cuánto dura el tratamiento de ortodoncia invisible?', a: 'Depende de cada caso y de cuánto haya que mover los dientes. Algunos tratamientos sencillos se resuelven en pocos meses y los más complejos pueden prolongarse más. En tu primera visita realizamos un estudio 3D y te damos una estimación personalizada del tiempo y del número de férulas.' },
      { q: '¿Duele la ortodoncia invisible?', a: 'No duele. Es habitual notar una ligera presión los primeros días con cada férula nueva, señal de que los dientes se están moviendo; esa sensación desaparece en poco tiempo. Al no llevar brackets ni alambres, se evitan las rozaduras típicas de la ortodoncia tradicional.' },
      { q: '¿Hay que llevar los alineadores todo el día?', a: 'Sí, para que el tratamiento funcione los alineadores deben llevarse en torno a 22 horas al día. La gran ventaja es que son removibles: te los quitas para comer y para lavarte los dientes, así que mantienes tu higiene y tu alimentación sin restricciones.' },
      { q: '¿Qué diferencia hay entre la ortodoncia invisible y la tradicional?', a: 'La ortodoncia invisible usa férulas transparentes y removibles en lugar de brackets fijos. Es mucho más discreta, más cómoda y permite planificar el resultado de forma digital antes de empezar. Invisalign es una de las marcas de alineadores más conocidas dentro de la ortodoncia invisible.' },
      { q: '¿Cuál es la diferencia entre Invisalign y la ortodoncia invisible genérica?', a: 'Invisalign es una marca concreta de alineadores, pionera y con una de las mayores bases de datos de casos del mundo, lo que aporta mucha predicibilidad al resultado. «Ortodoncia invisible» es el término genérico que engloba todos los sistemas de férulas transparentes, incluidas otras marcas. En tu estudio te asesoramos sobre la opción más adecuada para tu caso y tu presupuesto.' },
      { q: '¿Se puede financiar la ortodoncia invisible?', a: 'Sí. Tras el estudio inicial te entregamos un presupuesto cerrado y disponemos de financiación para que puedas fraccionar el tratamiento en cuotas cómodas. Te explicamos las condiciones y buscamos la fórmula de pago que mejor se adapte a ti.' },
    ],
    cta: { eyebrow: 'Pide tu estudio', heading: 'Descubre cómo quedaría tu sonrisa', intro: 'Rellena el formulario y te contactamos por WhatsApp para tu estudio de ortodoncia invisible en la clínica que prefieras.' },
  },
  {
    slug: 'endodoncia',
    metaTitle: 'Endodoncia: Tratamiento de Conductos sin Dolor | Clínica Dr. Baos',
    metaDescription: 'Endodoncia (tratamiento de conductos) sin dolor para salvar tu diente, en Argés (Toledo) y Majadahonda (Madrid). Diagnóstico con radiología digital y anestesia eficaz. Pide tu valoración por WhatsApp.',
    eyebrow: 'Endodoncia · Argés y Majadahonda',
    h1: 'Endodoncia: salva tu diente sin dolor',
    intro: `Eliminamos la infección desde el interior del diente para conservar tu pieza natural, con anestesia eficaz y técnicas actuales que hacen del tratamiento de conductos un procedimiento cómodo y predecible, ${BOTH}.`,
    facts: ['1–2 sesiones', 'Anestesia local', 'Conserva el diente'],
    image: { src: '/assets/images/tratamientos/endodoncia.jpg', alt: 'Tratamiento de endodoncia en la Clínica Dr. Baos' },
    whatIs: {
      heading: '¿Qué es una endodoncia?',
      body: 'La endodoncia, o tratamiento de conductos, es el procedimiento que elimina el nervio (pulpa) infectado o dañado del interior de un diente para salvarlo, limpiando y sellando sus conductos en lugar de extraer la pieza. Es la mejor forma de conservar tu diente natural cuando la caries o un traumatismo han llegado al nervio.',
      lists: [
        { title: 'El proceso, paso a paso', items: ['Diagnóstico con radiología digital', 'Anestesia local para un tratamiento sin dolor', 'Eliminación de la pulpa infectada', 'Limpieza, conformado y sellado de los conductos', 'Reconstrucción con empaste o corona'] },
        { title: 'Cuándo es necesaria', items: ['Caries profunda que ha llegado al nervio', 'Dolor intenso o espontáneo en un diente', 'Sensibilidad prolongada al frío o al calor', 'Fractura o traumatismo dental', 'Flemón o absceso asociado a una pieza'] },
      ],
    },
    detail: {
      eyebrow: 'Nuestro enfoque',
      heading: 'Tratamientos de endodoncia',
      intro: 'Estudiamos cada diente para conservarlo el mayor tiempo posible.',
      groups: [
        { title: 'Endodoncia unirradicular', items: ['Dientes de un solo conducto (incisivos, caninos)', 'Suele resolverse en una sesión', 'Recuperación rápida'] },
        { title: 'Endodoncia multirradicular', items: ['Muelas y premolares de varios conductos', 'Tratamiento más minucioso y preciso', 'Alta tasa de éxito con técnica actual'] },
        { title: 'Retratamiento de conductos', items: ['Para endodoncias previas que han fallado', 'Reabrimos, limpiamos y volvemos a sellar', 'Una nueva oportunidad antes de extraer'] },
      ],
    },
    faqHeading: 'Preguntas sobre la endodoncia',
    faqIntro: 'Resolvemos las dudas más habituales antes de tu primera visita.',
    faqs: [
      { q: '¿Duele una endodoncia?', a: 'No. La endodoncia se realiza con anestesia local, así que durante el tratamiento no sentirás dolor. De hecho, su objetivo es precisamente eliminar el dolor que provoca la infección del nervio. Tras la sesión puede quedar una ligera molestia que se controla con la medicación habitual y desaparece en pocos días.' },
      { q: '¿Cuántas sesiones necesita una endodoncia?', a: 'Depende del diente y de su número de conductos. Muchas endodoncias se completan en una sola sesión, y otras requieren dos. En la primera visita valoramos el caso con radiología digital y te indicamos cuántas citas necesitarás y cuánto durará cada una.' },
      { q: '¿Qué pasa si no me hago la endodoncia?', a: 'Si una infección del nervio no se trata, el dolor suele aumentar y puede aparecer un flemón o absceso, además de propagarse a hueso y tejidos vecinos. Con el tiempo lo habitual es acabar perdiendo el diente y necesitar una solución más compleja, como un implante. La endodoncia permite conservar tu pieza natural.' },
      { q: '¿Cuánto dura un diente tratado con endodoncia?', a: 'Un diente bien endodonciado y correctamente restaurado puede durar toda la vida. La clave está en protegerlo con el empaste o la corona adecuados y en mantener una buena higiene y revisiones periódicas, igual que con el resto de tus dientes.' },
    ],
    cta: { eyebrow: 'Pide tu valoración', heading: 'Quita ese dolor cuanto antes', intro: 'Rellena el formulario y te contactamos por WhatsApp para tu valoración de endodoncia. ¿Es una urgencia dental? Te atendemos lo antes posible.' },
  },
  {
    slug: 'periodoncia',
    metaTitle: 'Periodoncia: Tratamiento de Encías | Clínica Dr. Baos',
    metaDescription: 'Periodoncia en Argés (Toledo) y Majadahonda (Madrid): tratamiento de encías para frenar la gingivitis y la periodontitis antes de perder dientes. Curetajes y mantenimiento. Pide tu cita por WhatsApp.',
    eyebrow: 'Periodoncia · Argés y Majadahonda',
    h1: 'Periodoncia: cuida tus encías antes de perder los dientes',
    intro: `Las encías son los cimientos de tu sonrisa. Tratamos la gingivitis y la periodontitis para detener la enfermedad a tiempo y mantener tus dientes firmes y sanos, ${BOTH}.`,
    facts: ['1–4 sesiones', 'Mantenimiento continuo', 'Frena la enfermedad'],
    image: { src: '/assets/images/tratamientos/periodoncia2.jpg', alt: 'Revisión periodontal de las encías' },
    whatIs: {
      heading: '¿Qué es la periodoncia?',
      body: 'La periodoncia es la especialidad odontológica que previene, diagnostica y trata las enfermedades de las encías y de los tejidos que sujetan los dientes, como la gingivitis y la periodontitis. Su objetivo es mantener unos cimientos sanos para que tu dentadura se conserve firme durante toda la vida.',
      lists: [
        { title: 'El tratamiento, paso a paso', items: ['Estudio periodontal y sondaje de encías', 'Limpieza profunda: raspado y alisado radicular', 'Curetaje para eliminar el sarro bajo la encía', 'Cirugía periodontal si el caso lo precisa', 'Mantenimiento periódico para estabilizarla'] },
        { title: 'Señales de alarma', items: ['Sangrado al cepillarte o usar el hilo', 'Encías enrojecidas, hinchadas o retraídas', 'Mal aliento persistente', 'Sensibilidad o dientes que parecen más largos', 'Movilidad o separación de los dientes'] },
      ],
    },
    detail: {
      eyebrow: 'Nuestro enfoque',
      heading: 'Tratamientos de encías',
      intro: 'Del primer signo de gingivitis al control de la periodontitis avanzada.',
      groups: [
        { title: 'Tratamiento de la gingivitis', items: ['Para el sangrado y la inflamación inicial', 'Limpieza profesional y pautas de higiene', 'Reversible si se actúa a tiempo'] },
        { title: 'Curetaje (raspado y alisado)', items: ['Elimina el sarro por debajo de la encía', 'Frena el avance de la periodontitis', 'Con anestesia local, por cuadrantes'] },
        { title: 'Mantenimiento periodontal', items: ['Revisiones cada 3–6 meses', 'Mantiene la enfermedad estabilizada', 'Protege el hueso y conserva los dientes'] },
      ],
    },
    faqHeading: 'Preguntas sobre las encías',
    faqIntro: 'Resolvemos las dudas más habituales antes de tu primera visita.',
    faqs: [
      { q: '¿Qué diferencia hay entre gingivitis y periodontitis?', a: 'La gingivitis es la inflamación de la encía (enrojecimiento y sangrado) y es reversible con un tratamiento adecuado. Si no se trata, puede avanzar a periodontitis, en la que se daña el hueso que sujeta el diente; ese daño ya no se recupera, pero sí se puede frenar para evitar la pérdida de piezas. Por eso es clave actuar cuanto antes.' },
      { q: '¿Tiene cura la periodontitis?', a: 'La periodontitis no se «cura» en el sentido de recuperar el hueso perdido, pero sí se controla y se estabiliza para que no siga avanzando. Con el tratamiento adecuado y un buen mantenimiento periódico, la mayoría de pacientes conservan sus dientes y detienen la enfermedad. La constancia en las revisiones es fundamental.' },
      { q: '¿Duele el tratamiento de encías?', a: 'El tratamiento se realiza con anestesia local, por lo que no resulta doloroso. Después puede aparecer una ligera sensibilidad pasajera en las encías o los dientes, que se controla con facilidad. Nuestro objetivo es que estés cómodo durante y después de cada sesión.' },
      { q: '¿Con qué frecuencia debo hacerme una revisión periodontal?', a: 'Para una boca sana suele bastar con una revisión y limpieza al año. Si has tenido periodontitis, lo habitual es un mantenimiento cada 3 a 6 meses para mantener la enfermedad bajo control. En tu visita te indicamos la pauta exacta según tu caso.' },
    ],
    cta: { eyebrow: 'Pide tu valoración', heading: 'Protege la base de tu sonrisa', intro: 'Rellena el formulario y te contactamos por WhatsApp para tu estudio periodontal en la clínica que prefieras.' },
  },
  {
    slug: 'cirugia-oral',
    metaTitle: 'Cirugía Oral y Muelas del Juicio | Clínica Dr. Baos',
    metaDescription: 'Cirugía oral en Argés (Toledo) y Majadahonda (Madrid): extracción de muelas del juicio y cirugías menores con técnicas mínimamente invasivas y postoperatorio guiado. Pide tu cita por WhatsApp.',
    eyebrow: 'Cirugía Oral · Argés y Majadahonda',
    h1: 'Cirugía oral: extracciones sin complicaciones',
    intro: `Resolvemos las muelas del juicio y otras intervenciones de la boca con técnicas seguras y mínimamente invasivas, planificación con radiología 3D y un postoperatorio guiado paso a paso, ${BOTH}.`,
    facts: ['30–90 min', 'Anestesia local', 'Postoperatorio guiado'],
    image: { src: '/assets/images/tratamientos/cirugia.jpg', alt: 'Cirugía oral en la Clínica Dr. Baos' },
    whatIs: {
      heading: '¿Qué es la cirugía oral?',
      body: 'La cirugía oral es la rama de la odontología que realiza intervenciones quirúrgicas en la boca, como la extracción de muelas del juicio, las extracciones complejas o las frenectomías, con técnicas seguras y mínimamente invasivas. La planificación previa con radiología 3D permite intervenir con precisión y una recuperación más rápida.',
      lists: [
        { title: 'El proceso, paso a paso', items: ['Estudio con radiología 3D y planificación', 'Intervención con anestesia local, ambulatoria', 'Técnica mínimamente invasiva y sutura si procede', 'Instrucciones de cuidado por escrito', 'Revisión de control y seguimiento'] },
        { title: 'Cuándo es necesaria', items: ['Muelas del juicio incluidas o que dan problemas', 'Dientes muy dañados que no se pueden conservar', 'Frenillos labiales o linguales (frenectomía)', 'Quistes y pequeñas lesiones de la boca', 'Regeneración ósea previa a un implante'] },
      ],
    },
    detail: {
      eyebrow: 'Qué realizamos',
      heading: 'Intervenciones de cirugía oral',
      intro: 'Procedimientos habituales, siempre con el máximo confort.',
      groups: [
        { title: 'Muelas del juicio', items: ['Extracción de cordales incluidos o erupcionados', 'Planificación con radiografía panorámica', 'Técnica cuidadosa para menor inflamación'] },
        { title: 'Extracciones y cirugía menor', items: ['Dientes no recuperables o restos radiculares', 'Extracción de quistes y pequeñas lesiones', 'Preservación de hueso para futuros implantes'] },
        { title: 'Frenectomías', items: ['Frenillo labial y lingual', 'Mejora del habla, la higiene y la ortodoncia', 'Intervención rápida y sencilla'] },
      ],
    },
    faqHeading: 'Preguntas sobre cirugía oral',
    faqIntro: 'Resolvemos las dudas más habituales antes de tu intervención.',
    faqs: [
      { q: '¿Cuándo hay que extraer las muelas del juicio?', a: 'Se recomienda extraerlas cuando causan o pueden causar problemas: dolor, infecciones de repetición, caries, presión sobre las muelas vecinas, quistes o falta de espacio para que salgan bien. Si están sanas y bien colocadas no siempre hace falta quitarlas. Lo valoramos con una radiografía antes de decidir.' },
      { q: '¿Cómo es la recuperación tras una extracción?', a: 'Los primeros dos o tres días puede haber inflamación y alguna molestia, que se controlan con la medicación pautada y aplicando frío. La mayoría de pacientes hace vida normal al día siguiente. Te entregamos instrucciones por escrito y un teléfono de contacto para cualquier duda durante el postoperatorio.' },
      { q: '¿Se hace con anestesia local?', a: 'Sí. La gran mayoría de las cirugías orales se realizan con anestesia local de forma ambulatoria, por lo que no sentirás dolor durante la intervención y podrás volver a casa el mismo día. En casos concretos valoramos opciones de sedación para tu mayor comodidad.' },
      { q: '¿Puedo comer el mismo día de la extracción?', a: 'Sí, pasadas las primeras horas. Ese día conviene tomar alimentos blandos y fríos o templados, evitar masticar por la zona y no tomar bebidas muy calientes ni alcohol. Te damos una guía sencilla de qué comer los primeros días para que la herida cicatrice bien.' },
    ],
    cta: { eyebrow: 'Pide tu valoración', heading: 'Tu intervención, en buenas manos', intro: 'Rellena el formulario y te contactamos por WhatsApp para tu valoración de cirugía oral. ¿Es una urgencia dental? Te atendemos lo antes posible.' },
  },
  {
    slug: 'odontopediatria',
    metaTitle: 'Odontopediatría: Dentista para Niños | Clínica Dr. Baos',
    metaDescription: 'Odontopediatría en Argés (Toledo) y Majadahonda (Madrid): dentistas especializados en niños en un ambiente cálido y sin miedo. Primera visita, selladores, flúor y prevención. Pide tu cita por WhatsApp.',
    eyebrow: 'Odontopediatría · Argés y Majadahonda',
    h1: 'Odontopediatría: dentistas especializados en niños',
    intro: 'Cuidamos la sonrisa de los más pequeños en un ambiente cálido, cercano y sin miedo, donde aprenden a cuidarse mientras se sienten seguros. La mejor forma de que tu hijo crezca con una boca sana y sin temor al dentista.',
    facts: ['20–40 min', 'Ambiente cálido', 'Desde el primer diente'],
    image: { src: '/assets/images/tratamientos/odontopediatria.jpg', alt: 'Revisión dental infantil en la Clínica Dr. Baos' },
    whatIs: {
      heading: '¿Qué es la odontopediatría?',
      body: 'La odontopediatría es la especialidad dental dedicada al cuidado de la salud bucodental de bebés, niños y adolescentes, desde la prevención y la primera visita hasta el tratamiento de caries y la vigilancia del desarrollo de sus dientes. Acompañamos a las familias para que sus hijos crezcan con hábitos sanos y sin miedo al dentista.',
      lists: [
        { title: 'Qué incluye la visita infantil', items: ['Revisión del desarrollo y la erupción dental', 'Selladores de fosas y fisuras', 'Fluorización para prevenir caries', 'Tratamiento de caries en dientes de leche', 'Educación en higiene y hábitos saludables'] },
        { title: 'Nuestro enfoque con los peques', items: ['Lenguaje adaptado a cada edad', 'Sin prisas, respetando sus tiempos', 'Refuerzo positivo en cada visita', 'Padres siempre acompañando', 'Detección temprana de problemas de ortodoncia'] },
      ],
    },
    detail: {
      eyebrow: 'Para cada etapa',
      heading: 'Cuidamos su sonrisa mientras crece',
      intro: 'Prevención y acompañamiento desde el primer diente hasta la adolescencia.',
      groups: [
        { title: 'Prevención', items: ['Selladores y aplicación de flúor', 'Control de caries y de la dieta', 'Técnicas de cepillado en familia'] },
        { title: 'Tratamiento infantil', items: ['Empastes en dientes de leche', 'Tratamiento de traumatismos', 'Manejo del miedo y la ansiedad'] },
        { title: 'Vigilancia del desarrollo', items: ['Seguimiento de la erupción dental', 'Detección temprana de maloclusiones', 'Derivación a ortodoncia cuando conviene'] },
      ],
    },
    faqHeading: 'Preguntas de padres y madres',
    faqIntro: 'Resolvemos las dudas más habituales sobre la salud dental de tus hijos.',
    faqs: [
      { q: '¿Desde qué edad debe ir el niño al dentista?', a: 'Se recomienda la primera visita en torno al año de edad o cuando salen los primeros dientes. No es para hacer ningún tratamiento, sino para revisar que todo va bien, resolver dudas de los padres y que el niño se familiarice con la consulta. Empezar pronto crea una relación positiva con el dentista para toda la vida.' },
      { q: '¿Cómo preparo a mi hijo para su primera visita?', a: 'Háblale de la visita con naturalidad y en positivo, sin usar palabras como «dolor» o «pinchazo». Puedes contarle que el dentista va a «contar y cuidar» sus dientes. Evita transmitirle tus propios miedos. Nosotros nos encargamos del resto: adaptamos el lenguaje y los tiempos a su edad para que la experiencia sea divertida y sin estrés.' },
      { q: '¿Qué son los selladores de fosas y fisuras?', a: 'Son una fina capa protectora que se coloca sobre las muelas para «sellar» los surcos donde se acumulan los restos de comida y es más fácil que aparezcan caries. Es un tratamiento rápido, indoloro y sin necesidad de anestesia, muy eficaz para prevenir caries en niños y adolescentes.' },
      { q: '¿A qué edad se puede empezar la ortodoncia en niños?', a: 'Conviene una primera revisión de ortodoncia hacia los 6-7 años, cuando conviven dientes de leche y definitivos. En algunos casos interesa una ortodoncia temprana (interceptiva) para guiar el crecimiento y evitar problemas mayores; en otros se espera a que salgan más dientes. Lo valoramos sin compromiso y te explicamos el mejor momento.' },
    ],
    cta: { eyebrow: 'Pide tu cita', heading: 'La primera sonrisa también se cuida', intro: 'Rellena el formulario y te contactamos por WhatsApp para la cita de tu hijo/a en la clínica que prefieras.' },
  },
  {
    slug: 'urgencias-dentales',
    urgent: true,
    metaTitle: 'Urgencias Dentales en Toledo y Majadahonda | Clínica Dr. Baos',
    metaDescription: 'Urgencias dentales: atención rápida ante dolor agudo, flemón, diente roto o traumatismo. Llama a la Clínica Dr. Baos en Argés (Toledo) o Majadahonda (Madrid) y te atendemos lo antes posible.',
    eyebrow: 'Atención urgente · Argés y Majadahonda',
    h1: 'Urgencias dentales: atención rápida cuando más lo necesitas',
    intro: 'Una urgencia dental es cualquier problema bucal que requiere atención inmediata —dolor agudo, un golpe, un diente roto, un flemón o la caída de un empaste— para aliviar el dolor y evitar complicaciones. Llámanos o escríbenos y te atendemos lo antes posible.',
    facts: ['Atención prioritaria', 'Dos sedes', 'El mismo día dentro de nuestro horario'],
    image: { src: '/assets/images/tratamientos/emergencia.jpg', alt: 'Atención de urgencias dentales en la Clínica Dr. Baos' },
    whatIs: {
      heading: '¿Qué se considera una urgencia dental?',
      body: 'No esperes si tienes dolor o un golpe: cuanto antes te atendamos, mejor será el resultado y más fácil conservar tu diente. Estas son las situaciones que tratamos como urgencia y en las que conviene llamarnos sin demora.',
      lists: [
        { title: 'Motivos de urgencia frecuentes', items: ['Dolor de muelas agudo o que no cede', 'Flemón, absceso o inflamación de la cara', 'Diente roto, fisurado o que se ha caído', 'Golpe o traumatismo dental', 'Caída de un empaste, corona o provisional', 'Sangrado o dolor tras una intervención'] },
        { title: 'Cómo te atendemos', items: ['Nos llamas o escribes explicando qué te pasa', 'Valoramos la urgencia y te damos cita prioritaria', 'Diagnóstico con radiología digital', 'Tratamiento para controlar dolor e infección', 'Plan para resolver el problema de raíz'] },
      ],
    },
    detail: {
      eyebrow: 'Primeros auxilios',
      heading: 'Qué hacer mientras llegas',
      intro: 'Pequeños gestos que ayudan hasta que te atendemos.',
      groups: [
        { title: 'Dolor o flemón', items: ['Enjuaga con agua tibia con sal', 'Aplica frío por fuera de la mejilla', 'Analgésico habitual si puedes tomarlo', 'No apliques calor ni revientes el flemón'] },
        { title: 'Diente roto o caído', items: ['Guarda el fragmento o el diente', 'Cógelo por la corona, no por la raíz', 'Consérvalo en leche o saliva', 'Acude en las 2 primeras horas'] },
        { title: 'Golpe o sangrado', items: ['Muerde una gasa limpia para frenar el sangrado', 'Aplica frío para bajar la inflamación', 'Evita enjuagues fuertes las primeras horas', 'Llámanos para valorarte cuanto antes'] },
      ],
    },
    faqHeading: 'Preguntas sobre urgencias dentales',
    faqIntro: 'Lo que más nos preguntáis en una urgencia.',
    faqs: [
      { q: '¿Qué hago si se me cae un diente de golpe?', a: 'Actúa rápido: cógelo por la corona (la parte blanca), nunca por la raíz, y no lo frotes. Si puedes, reponlo en su sitio con cuidado; si no, guárdalo en un vaso con leche o con tu propia saliva y acude de inmediato. Las dos primeras horas son clave para poder reimplantarlo. Llámanos enseguida para que te atendamos cuanto antes.' },
      { q: '¿Es urgente un flemón dental?', a: 'Sí. Un flemón es una infección que puede extenderse y agravarse, por lo que conviene tratarlo cuanto antes. No lo revientes ni te automediques sin control. Contáctanos: valoramos el caso, iniciamos el tratamiento adecuado y, si es necesario, pautamos antibiótico para frenar la infección.' },
      { q: '¿Puedo tomar ibuprofeno para el dolor dental?', a: 'En la mayoría de adultos sin contraindicaciones, el ibuprofeno ayuda a aliviar el dolor dental de forma puntual respetando la dosis del prospecto. Es solo una medida temporal: no soluciona la causa. Si el dolor es intenso o persiste, llámanos para que te atendamos; y si tienes alguna patología o tomas otra medicación, consúltalo antes.' },
      { q: '¿Atendéis urgencias el mismo día?', a: 'Sí. Damos prioridad a las urgencias y, dentro de nuestro horario, buscamos atenderte el mismo día. Llámanos o escríbenos por WhatsApp explicando lo que te pasa y te daremos la primera cita disponible en la clínica de Argés (Toledo) o de Majadahonda (Madrid).' },
    ],
    cta: { eyebrow: 'Contacto urgente', heading: 'Estamos aquí para ayudarte', intro: 'Para una urgencia, lo más rápido es llamarnos o escribirnos por WhatsApp a la sede que te quede más cerca. También puedes dejarnos tus datos y te contactamos de inmediato.' },
  },
];

export const getTreatmentPage = (slug: string) => treatmentPages.find((t) => t.slug === slug);
