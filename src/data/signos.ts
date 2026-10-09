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
    amor: 'Aries se enamora deprisa y lo demuestra sin rodeos. Le gusta conquistar y proponer planes para que la relación no se apague.',
    necesita: 'Necesita pasión, que le hablen claro y poder seguir haciendo su vida.',
  },
  {
    nombre: 'Tauro',
    slug: 'tauro',
    fechas: '20 de abril al 20 de mayo',
    elemento: 'tierra',
    modalidad: 'fijo',
    regente: 'Venus',
    arcano: 'el-sumo-sacerdote',
    amor: 'Tauro va despacio, pero cuando se entrega es de los signos más leales. Quiere con hechos: cuida, tiene detalles y está ahí.',
    necesita: 'Necesita estabilidad, mucho contacto físico y saber que puede fiarse.',
  },
  {
    nombre: 'Géminis',
    slug: 'geminis',
    fechas: '21 de mayo al 20 de junio',
    elemento: 'aire',
    modalidad: 'mutable',
    regente: 'Mercurio',
    arcano: 'los-enamorados',
    amor: 'Géminis se enamora hablando. Busca a alguien con quien reírse y no aburrirse nunca.',
    necesita: 'Necesita que le hagan pensar, cambiar de planes y una pareja que no le ate en corto.',
  },
  {
    nombre: 'Cáncer',
    slug: 'cancer',
    fechas: '21 de junio al 22 de julio',
    elemento: 'agua',
    modalidad: 'cardinal',
    regente: 'la Luna',
    arcano: 'el-carro',
    amor: 'Cáncer quiere con todo el corazón y hace hogar allí donde está. Es protector y muy fiel a quien le cuida.',
    necesita: 'Necesita sentirse seguro, mucha ternura y saberse parte de una familia.',
  },
  {
    nombre: 'Leo',
    slug: 'leo',
    fechas: '23 de julio al 22 de agosto',
    elemento: 'fuego',
    modalidad: 'fijo',
    regente: 'el Sol',
    arcano: 'la-fuerza',
    amor: 'Leo quiere a lo grande. Es generoso, romántico y presume de pareja. Le gusta celebrar el amor y que se note.',
    necesita: 'Necesita que le admiren, que le sean leales y sentirse orgulloso de lo que tiene.',
  },
  {
    nombre: 'Virgo',
    slug: 'virgo',
    fechas: '23 de agosto al 22 de septiembre',
    elemento: 'tierra',
    modalidad: 'mutable',
    regente: 'Mercurio',
    arcano: 'el-ermitano',
    amor: 'Virgo demuestra el amor en el día a día. Ayuda, cuida los detalles y está cuando hace falta. Tarda en abrirse, pero no falla.',
    necesita: 'Necesita orden, sinceridad y alguien que se dé cuenta de lo que hace sin que tenga que decirlo.',
  },
  {
    nombre: 'Libra',
    slug: 'libra',
    fechas: '23 de septiembre al 22 de octubre',
    elemento: 'aire',
    modalidad: 'cardinal',
    regente: 'Venus',
    arcano: 'la-justicia',
    amor: 'Libra vive para la pareja y la armonía. Es atento, tiene mucho encanto y busca una relación bonita en la que los dos pongan lo mismo.',
    necesita: 'Necesita que le correspondan, rodearse de cosas bonitas y hablar sin gritos.',
  },
  {
    nombre: 'Escorpio',
    slug: 'escorpio',
    fechas: '23 de octubre al 21 de noviembre',
    elemento: 'agua',
    modalidad: 'fijo',
    regente: 'Plutón y Marte',
    arcano: 'la-muerte',
    amor: 'Escorpio quiere con intensidad y no se conforma con medias tintas. Cuando confía, se entrega por completo.',
    necesita: 'Necesita lealtad absoluta y una relación que vaya mucho más allá de la superficie.',
  },
  {
    nombre: 'Sagitario',
    slug: 'sagitario',
    fechas: '22 de noviembre al 21 de diciembre',
    elemento: 'fuego',
    modalidad: 'mutable',
    regente: 'Júpiter',
    arcano: 'la-templanza',
    amor: 'Sagitario busca una compañera o un compañero de aventuras. Es optimista y muy sincero, y con él no hay quien se aburra.',
    necesita: 'Necesita libertad, viajar y una pareja con las mismas ganas de descubrir cosas.',
  },
  {
    nombre: 'Capricornio',
    slug: 'capricornio',
    fechas: '22 de diciembre al 19 de enero',
    elemento: 'tierra',
    modalidad: 'cardinal',
    regente: 'Saturno',
    arcano: 'el-diablo',
    amor: 'Capricornio se toma el amor en serio. Al principio es reservado, pero cuando decide quedarse, se compromete del todo.',
    necesita: 'Necesita respeto y una relación con planes de futuro en común.',
  },
  {
    nombre: 'Acuario',
    slug: 'acuario',
    fechas: '20 de enero al 18 de febrero',
    elemento: 'aire',
    modalidad: 'fijo',
    regente: 'Urano y Saturno',
    arcano: 'la-estrella',
    amor: 'Acuario se enamora desde la amistad. Es leal a su manera y no soporta las relaciones que asfixian.',
    necesita: 'Necesita libertad, alguien con quien pensar en voz alta y una pareja que sea también su amiga.',
  },
  {
    nombre: 'Piscis',
    slug: 'piscis',
    fechas: '19 de febrero al 20 de marzo',
    elemento: 'agua',
    modalidad: 'mutable',
    regente: 'Neptuno y Júpiter',
    arcano: 'la-luna',
    amor: 'Piscis es el signo más romántico del zodiaco. Se entrega tanto que acaba olvidándose de sí.',
    necesita: 'Necesita ternura y alguien que cuide sus sueños sin romperlos.',
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
    texto: 'Os entendéis sin palabras porque os parecéis mucho. Hay complicidad desde el primer día, pero los defectos también se suman. Cuando uno se enfada, el otro se enfada igual.',
    consejo: 'Buscad fuera lo que no tenéis dentro. Amistades y aficiones que os traigan lo que a ninguno de los dos le sale solo.',
  },
  {
    nombre: 'Signos vecinos',
    nota: 56,
    texto: 'Estáis pegados en la rueda, pero miráis el mundo de forma muy distinta. Uno empieza donde el otro termina, y eso os enriquece o os descoloca, según el día.',
    consejo: 'Tened paciencia con lo que no entendéis del otro. Lo que hoy os choca puede ser justo lo que tenéis que aprender.',
  },
  {
    nombre: 'Sextil',
    nota: 84,
    texto: 'Es una combinación fácil. Os entendéis bien, os animáis el uno al otro y la cosa fluye sola. Sois como dos amigos que se gustan.',
    consejo: 'Que lo fácil no se vuelva rutina. Proponed algún plan nuevo de vez en cuando para que la chispa no se duerma.',
  },
  {
    nombre: 'Cuadratura',
    nota: 50,
    texto: 'Hay tensión entre vosotros, os atraéis y os picáis a la vez. Discutís a menudo, y la pasión también aparece a menudo. Esta relación obliga a crecer.',
    consejo: 'Elegid bien las batallas. No todo tiene que ganarse, y ceder de vez en cuando tampoco es perder.',
  },
  {
    nombre: 'Trígono',
    nota: 93,
    texto: 'Es la combinación más armoniosa del zodiaco. Compartís elemento y forma de sentir. Estar juntos os sale solo, como si os conocierais de siempre.',
    consejo: 'Cuidad lo que tenéis aunque parezca que no hace falta. Hasta lo más fácil necesita atención.',
  },
  {
    nombre: 'Quincuncio',
    nota: 45,
    texto: 'Sois muy distintos y os cuesta encajar. Grandes choques no hay, pero sí muchos pequeños ajustes. Sale bien cuando los dos ponen de su parte.',
    consejo: 'Hablad de lo práctico, como los horarios, el dinero o el tiempo juntos. Ahí es donde os la jugáis.',
  },
  {
    nombre: 'Signos opuestos',
    nota: 72,
    texto: 'Estáis en lados opuestos de la rueda y os atraéis como imanes. Cada uno tiene lo que al otro le falta. Puede salir una pareja muy completa o una pelea constante.',
    consejo: 'Lo que os diferencia es lo que os hace fuertes. En lugar de querer cambiar al otro, aprended de él.',
  },
];

const elementos: Record<string, string> = {
  'fuego-fuego': 'Dos fuegos juntos dan una relación intensa y apasionada. El reto es que ninguno quiera apagar al otro para brillar más.',
  'fuego-tierra': 'El fuego pone el entusiasmo y la tierra, la constancia. Juntos construyen mucho, aunque el fuego note que la tierra le frena y la tierra, que el fuego va demasiado rápido.',
  'aire-fuego': 'El aire aviva el fuego. Hay ideas y ganas de hacer cosas, y no os aburrís nunca.',
  'agua-fuego': 'El agua y el fuego se atraen y se temen. Hay pasión, pero también vapor. El fuego nota que el agua le apaga y el agua, que el fuego la quema.',
  'tierra-tierra': 'Dos signos de tierra levantan una relación sólida y fiel. Les une la seguridad, y el peligro es caer en la rutina.',
  'aire-tierra': 'El aire piensa y la tierra hace. Se complementan muy bien si se respetan, aunque de vez en cuando parece que hablan idiomas distintos.',
  'agua-tierra': 'El agua riega la tierra y la tierra le da forma al agua. Pocas combinaciones del zodiaco son tan tiernas y estables.',
  'aire-aire': 'Dos signos de aire se entienden hablando. Hay complicidad y conversación para rato, aunque les cuesta bajar a lo que sienten.',
  'agua-aire': 'El aire razona y el agua siente. Se fascinan, pero no siempre entienden cómo vive el otro lo que le pasa por dentro.',
  'agua-agua': 'Dos signos de agua se sienten a fondo y se entienden sin hablar. El peligro es ahogarse juntos en los mismos miedos.',
};

const modalidades: Record<string, string> = {
  'cardinal-cardinal': 'Los dos queréis llevar la iniciativa. Os sobran ganas de empezar cosas, pero os conviene turnaros el volante.',
  'cardinal-fijo': 'Uno propone y el otro sostiene. Funciona si el signo cardinal respeta los tiempos del fijo y el fijo se deja mover de vez en cuando.',
  'cardinal-mutable': 'Uno marca el rumbo y el otro se adapta. El reparto es cómodo mientras el signo mutable no sienta que cede siempre él.',
  'fijo-fijo': 'Los dos sois constantes y testarudos. Lo que construyáis durará, pero las discusiones se enquistan si nadie da su brazo a torcer.',
  'fijo-mutable': 'Uno pone la firmeza y el otro, la cintura. El fijo da seguridad y el mutable trae aire fresco.',
  'mutable-mutable': 'Los dos sois flexibles y curiosos. Os adaptáis bien el uno al otro, aunque echáis en falta a alguien que decida.',
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
