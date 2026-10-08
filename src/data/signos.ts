// Los doce signos y su compatibilidad. Cada signo lleva el arcano mayor que la tradición
// (Golden Dawn) le asocia, para mostrarlo con las barajas de la web.

export type Elemento = 'fuego' | 'tierra' | 'aire' | 'agua';
export type Modalidad = 'cardinal' | 'fijo' | 'mutable';

export interface Signo {
  nombre: string;
  slug: string;
  fechas: string;
  elemento: Elemento;
  modalidad: Modalidad;
  regente: string;
  arcano: string;
  amor: string;
  necesita: string;
}

export const signos: Signo[] = [
  {
    nombre: 'Aries',
    slug: 'aries',
    fechas: '21 de marzo al 19 de abril',
    elemento: 'fuego',
    modalidad: 'cardinal',
    regente: 'Marte',
    arcano: 'el-emperador',
    amor: 'Aries se enamora deprisa y lo demuestra sin rodeos. Le gusta conquistar, proponer planes y sentir que la relación está viva.',
    necesita: 'Necesita pasión, sinceridad directa y espacio para seguir siendo independiente.',
  },
  {
    nombre: 'Tauro',
    slug: 'tauro',
    fechas: '20 de abril al 20 de mayo',
    elemento: 'tierra',
    modalidad: 'fijo',
    regente: 'Venus',
    arcano: 'el-sumo-sacerdote',
    amor: 'Tauro va despacio, pero cuando se entrega es de los signos más leales. Demuestra el amor con cuidados, detalles y presencia.',
    necesita: 'Necesita estabilidad, contacto físico y saber que puede confiar.',
  },
  {
    nombre: 'Géminis',
    slug: 'geminis',
    fechas: '21 de mayo al 20 de junio',
    elemento: 'aire',
    modalidad: 'mutable',
    regente: 'Mercurio',
    arcano: 'los-enamorados',
    amor: 'Géminis se enamora a través de la conversación. Busca a alguien con quien reírse, aprender y no aburrirse nunca.',
    necesita: 'Necesita estímulo mental, variedad y una pareja que no le ate en corto.',
  },
  {
    nombre: 'Cáncer',
    slug: 'cancer',
    fechas: '21 de junio al 22 de julio',
    elemento: 'agua',
    modalidad: 'cardinal',
    regente: 'la Luna',
    arcano: 'el-carro',
    amor: 'Cáncer ama con todo el corazón y construye hogar allí donde está. Es protector, sensible y muy fiel a quien le cuida.',
    necesita: 'Necesita seguridad emocional, ternura y sentirse parte de una familia.',
  },
  {
    nombre: 'Leo',
    slug: 'leo',
    fechas: '23 de julio al 22 de agosto',
    elemento: 'fuego',
    modalidad: 'fijo',
    regente: 'el Sol',
    arcano: 'la-fuerza',
    amor: 'Leo ama a lo grande: es generoso, romántico y orgulloso de su pareja. Le gusta celebrar el amor y que se note.',
    necesita: 'Necesita admiración, lealtad y una relación de la que pueda presumir.',
  },
  {
    nombre: 'Virgo',
    slug: 'virgo',
    fechas: '23 de agosto al 22 de septiembre',
    elemento: 'tierra',
    modalidad: 'mutable',
    regente: 'Mercurio',
    arcano: 'el-ermitano',
    amor: 'Virgo demuestra el amor en lo cotidiano: ayuda, cuida los detalles y está cuando hace falta. Tarda en abrirse, pero es muy constante.',
    necesita: 'Necesita orden, sinceridad y alguien que valore lo que hace sin pedírselo.',
  },
  {
    nombre: 'Libra',
    slug: 'libra',
    fechas: '23 de septiembre al 22 de octubre',
    elemento: 'aire',
    modalidad: 'cardinal',
    regente: 'Venus',
    arcano: 'la-justicia',
    amor: 'Libra vive para la pareja y la armonía. Es encantador, atento y busca una relación equilibrada y bonita.',
    necesita: 'Necesita reciprocidad, belleza y conversaciones sin gritos.',
  },
  {
    nombre: 'Escorpio',
    slug: 'escorpio',
    fechas: '23 de octubre al 21 de noviembre',
    elemento: 'agua',
    modalidad: 'fijo',
    regente: 'Plutón y Marte',
    arcano: 'la-muerte',
    amor: 'Escorpio ama con intensidad y no se conforma con medias tintas. Cuando confía, se entrega por completo.',
    necesita: 'Necesita profundidad, lealtad absoluta y una conexión que vaya más allá de lo superficial.',
  },
  {
    nombre: 'Sagitario',
    slug: 'sagitario',
    fechas: '22 de noviembre al 21 de diciembre',
    elemento: 'fuego',
    modalidad: 'mutable',
    regente: 'Júpiter',
    arcano: 'la-templanza',
    amor: 'Sagitario busca una compañera o un compañero de aventuras. Es optimista, divertido y muy sincero.',
    necesita: 'Necesita libertad, viajes, risas y una pareja que comparta sus ganas de descubrir.',
  },
  {
    nombre: 'Capricornio',
    slug: 'capricornio',
    fechas: '22 de diciembre al 19 de enero',
    elemento: 'tierra',
    modalidad: 'cardinal',
    regente: 'Saturno',
    arcano: 'el-diablo',
    amor: 'Capricornio se toma el amor en serio. Es reservado al principio, pero muy comprometido cuando decide quedarse.',
    necesita: 'Necesita respeto, metas compartidas y una relación con futuro.',
  },
  {
    nombre: 'Acuario',
    slug: 'acuario',
    fechas: '20 de enero al 18 de febrero',
    elemento: 'aire',
    modalidad: 'fijo',
    regente: 'Urano y Saturno',
    arcano: 'la-estrella',
    amor: 'Acuario ama desde la amistad. Es original, leal a su manera y no soporta las relaciones que asfixian.',
    necesita: 'Necesita libertad, complicidad intelectual y una pareja que sea también su amiga.',
  },
  {
    nombre: 'Piscis',
    slug: 'piscis',
    fechas: '19 de febrero al 20 de marzo',
    elemento: 'agua',
    modalidad: 'mutable',
    regente: 'Neptuno y Júpiter',
    arcano: 'la-luna',
    amor: 'Piscis es el más romántico del zodiaco. Ama con imaginación, empatía y una entrega que a veces le hace olvidarse de sí.',
    necesita: 'Necesita ternura, comprensión y alguien que cuide sus sueños sin romperlos.',
  },
];

/** Relación según la distancia entre los dos signos en la rueda del zodiaco. */
interface Aspecto {
  nombre: string;
  nota: number;
  texto: string;
  consejo: string;
}

const aspectos: Aspecto[] = [
  {
    nombre: 'El mismo signo',
    nota: 74,
    texto: 'Os entendéis sin palabras porque os parecéis mucho. Eso da complicidad desde el primer día, pero también hace que vuestros defectos se multipliquen: cuando uno se enfada, el otro se enfada igual.',
    consejo: 'Buscad fuera lo que no tenéis dentro: amistades, planes y aficiones que os aporten lo que ninguno de los dos trae.',
  },
  {
    nombre: 'Signos vecinos',
    nota: 56,
    texto: 'Estáis uno al lado del otro en la rueda, pero miráis el mundo de forma muy distinta. Uno empieza donde el otro termina, y eso puede ser enriquecedor o desconcertante.',
    consejo: 'Tened paciencia con lo que no entendéis del otro. Lo que hoy os choca puede ser justo lo que el otro viene a enseñaros.',
  },
  {
    nombre: 'Sextil',
    nota: 84,
    texto: 'Es una combinación amable y fácil. Os entendéis bien, os animáis el uno al otro y la relación fluye sin demasiados dramas. Es una unión de amigos que se gustan.',
    consejo: 'Que lo fácil no se vuelva rutina. Proponed planes nuevos de vez en cuando para que la chispa no se duerma.',
  },
  {
    nombre: 'Cuadratura',
    nota: 50,
    texto: 'Hay tensión entre vosotros: os atraéis y os desafiáis a la vez. Las discusiones pueden ser frecuentes, pero también la pasión. Es una relación que obliga a crecer.',
    consejo: 'Elegid bien las batallas. No todo tiene que ganarse, y ceder a veces no es perder.',
  },
  {
    nombre: 'Trígono',
    nota: 93,
    texto: 'Es la combinación más armoniosa del zodiaco. Compartís elemento, ritmo y forma de sentir. Estar juntos resulta natural, como si os conocierais de siempre.',
    consejo: 'Cuidad lo que tenéis aunque parezca que no hace falta. Hasta lo más fácil necesita atención.',
  },
  {
    nombre: 'Quincuncio',
    nota: 45,
    texto: 'Sois muy distintos y no siempre sabéis cómo encajar. No hay grandes choques, pero sí muchos pequeños ajustes. Funciona cuando los dos están dispuestos a adaptarse.',
    consejo: 'Hablad de lo práctico: horarios, dinero, tiempo juntos. Es ahí donde se juega vuestra relación.',
  },
  {
    nombre: 'Signos opuestos',
    nota: 72,
    texto: 'Estáis en lados opuestos de la rueda, y por eso os atraéis como imanes. Cada uno tiene lo que al otro le falta. Puede ser una pareja muy completa o una lucha constante.',
    consejo: 'Vuestra diferencia es vuestra fuerza. En lugar de querer cambiar al otro, aprended de él.',
  },
];

const elementos: Record<string, string> = {
  'fuego-fuego': 'Dos fuegos juntos dan una relación intensa, apasionada y llena de energía. El reto es que ninguno quiera apagar al otro para brillar más.',
  'fuego-tierra': 'El fuego aporta entusiasmo y la tierra, constancia. Juntos pueden construir mucho, aunque el fuego a veces sienta que la tierra le frena y la tierra, que el fuego va demasiado rápido.',
  'aire-fuego': 'El aire aviva el fuego: hay ideas, risas y ganas de hacer cosas. Es una combinación estimulante y llena de vida.',
  'agua-fuego': 'El agua y el fuego se atraen y se temen. Hay pasión, pero también vapor: el fuego puede sentir que el agua le apaga y el agua, que el fuego la quema.',
  'tierra-tierra': 'Dos signos de tierra construyen una relación sólida, práctica y fiel. Les une la seguridad; el riesgo es caer en la rutina.',
  'aire-tierra': 'El aire piensa y la tierra hace. Pueden complementarse muy bien si se respetan, pero a veces hablan idiomas distintos.',
  'agua-tierra': 'El agua nutre la tierra y la tierra da forma al agua. Es una de las combinaciones más tiernas y estables del zodiaco.',
  'aire-aire': 'Dos signos de aire se entienden hablando. Hay complicidad, libertad y conversación sin fin; a veces falta algo de profundidad emocional.',
  'agua-aire': 'El aire razona y el agua siente. Se fascinan mutuamente, pero pueden no entender cómo procesa el otro las emociones.',
  'agua-agua': 'Dos signos de agua se sienten de verdad. La conexión emocional es profunda; el riesgo es ahogarse juntos en los mismos miedos.',
};

const modalidades: Record<string, string> = {
  'cardinal-cardinal': 'Los dos queréis llevar la iniciativa. Hay mucha energía para empezar cosas, pero conviene turnarse el volante.',
  'cardinal-fijo': 'Uno propone y el otro sostiene. Funciona si el signo cardinal respeta los tiempos del fijo y el fijo se deja mover de vez en cuando.',
  'cardinal-mutable': 'Uno marca el rumbo y el otro se adapta. Es un reparto cómodo, siempre que el signo mutable no sienta que siempre cede.',
  'fijo-fijo': 'Los dos sois constantes y testarudos. Lo que construyáis será duradero, pero las discusiones pueden enquistarse si nadie da su brazo a torcer.',
  'fijo-mutable': 'Uno aporta firmeza y el otro, flexibilidad. El fijo da seguridad; el mutable, aire fresco.',
  'mutable-mutable': 'Los dos sois flexibles y curiosos. Os adaptáis bien el uno al otro, aunque a veces falta alguien que tome las decisiones.',
};

const nombresElemento: Record<Elemento, string> = { fuego: 'Fuego', tierra: 'Tierra', aire: 'Aire', agua: 'Agua' };
const nombresModalidad: Record<Modalidad, string> = { cardinal: 'Cardinal', fijo: 'Fijo', mutable: 'Mutable' };

/** Pequeño ajuste de la nota según lo bien que se llevan los elementos. */
const ajustes: Record<string, number> = {
  'aire-fuego': 3,
  'agua-tierra': 3,
  'fuego-tierra': -1,
  'aire-tierra': -2,
  'agua-aire': -2,
  'agua-fuego': -4,
};
const ordenModalidades: Modalidad[] = ['cardinal', 'fijo', 'mutable'];

export const nombreElemento = (e: Elemento) => nombresElemento[e];
export const nombreModalidad = (m: Modalidad) => nombresModalidad[m];

/** Slug de la pareja, siempre en el orden del zodiaco: «aries-y-tauro». */
export const slugPareja = (a: Signo, b: Signo) => {
  const [x, y] = signos.indexOf(a) <= signos.indexOf(b) ? [a, b] : [b, a];
  return `${x.slug}-y-${y.slug}`;
};

export const compatibilidad = (a: Signo, b: Signo) => {
  const d = Math.abs(signos.indexOf(a) - signos.indexOf(b));
  const aspecto = aspectos[Math.min(d, 12 - d)];
  const elementosPar = elementos[`${a.elemento}-${b.elemento}`] ?? elementos[`${b.elemento}-${a.elemento}`];
  const ajuste = ajustes[`${a.elemento}-${b.elemento}`] ?? ajustes[`${b.elemento}-${a.elemento}`] ?? 0;
  const claveModalidades = [a.modalidad, b.modalidad]
    .sort((x, y) => ordenModalidades.indexOf(x) - ordenModalidades.indexOf(y))
    .join('-');
  const nota = Math.min(97, aspecto.nota + ajuste);
  const nivel = nota >= 85 ? 'Muy alta' : nota >= 70 ? 'Alta' : nota >= 55 ? 'Media' : 'Con retos';
  return {
    nota,
    nivel,
    aspecto,
    elementos: elementosPar,
    modalidades: modalidades[claveModalidades],
  };
};

export const parejas = signos.flatMap((a, i) => signos.slice(i).map((b) => ({ a, b, slug: slugPareja(a, b) })));
