// Guía para aprender tarot. Cada capítulo se muestra como una sección con su índice.
export interface Enlace { texto: string; href: string }
export interface Capitulo {
  id: string;           // slug corto para el ancla, p. ej. 'que-es'
  titulo: string;
  parrafos: string[];   // párrafos de texto plano; puedes usar **negrita** solo para términos clave
  lista?: string[];     // opcional: pasos o puntos cortos que se muestran como lista tras los párrafos
  enlaces?: Enlace[];   // opcional: enlaces internos relevantes
}

export const entradilla: string =
  'Para aprender tarot no hace falta memorizar 78 significados. Hace falta aprender a mirar unas imágenes y ver qué te cuentan de tu vida. Esta guía para principiantes va paso a paso por qué es la baraja, cómo leer el tarot con tus primeras tiradas y cómo practicar cada día sin agobiarte.';

export const capitulos: Capitulo[] = [
  {
    id: 'que-es',
    titulo: 'Qué es el tarot y qué no es',
    parrafos: [
      'El tarot es una baraja de 78 cartas llenas de símbolos. Cada carta tiene una escena que se reconoce enseguida, alguien que se pone en camino, una torre que se derrumba, una mujer que sujeta a un león sin esfuerzo. Son cosas que todas vivimos tarde o temprano. Dudas, pérdidas, enamoramientos, cambios de trabajo, ganas de empezar de cero.',
      'Por eso sirve tan bien como **herramienta de reflexión**. Cuando sacas una carta y la relacionas con tu pregunta, la imagen te obliga a mirar lo que te pasa desde otro ángulo. Hay veces que confirma algo que ya intuías. Otras te señala justo lo que estabas evitando.',
      'Lo que el tarot no hace es dictar sentencia. Las cartas no deciden por ti ni marcan un **destino fijo**. Enseñan tendencias, cómo están las cosas ahora y hacia dónde pueden ir, y lo que pase luego depende de lo que hagas. Si una tirada te asusta, tómala como algo en lo que pensar, nunca como una condena.',
      'Tampoco sustituye a un médico, a una abogada ni a una terapeuta. Úsalo para escucharte y ordenar ideas, y busca ayuda profesional cuando el tema lo pida.',
    ],
  },
  {
    id: 'la-baraja',
    titulo: 'Cómo es una baraja de tarot',
    parrafos: [
      'Una baraja de tarot completa tiene **78 cartas** repartidas en dos grupos. Conviene entender esto lo primero, porque te da un mapa. Antes de saber qué significa una carta concreta, ya sabes de qué tipo de asunto trata.',
      'Los **arcanos mayores** son 22 cartas numeradas del 0 al XXI, de El Loco a El Mundo. Tocan los temas gordos de la vida, como el amor, el poder, una crisis, la esperanza o el final de una etapa. Cuando salen muchos mayores en una tirada, la situación tiene peso y suele marcar un antes y un después.',
      'Los **arcanos menores** son 56 cartas repartidas en cuatro palos de 14. Van del día a día, una discusión, un pago pendiente, una cita, un proyecto que arranca. Cada palo tiene diez cartas numeradas, del As al Diez, y cuatro **figuras**, que son Sota, Caballo, Reina y Rey.',
      'Cada palo va con un elemento, y saberlo ayuda muchísimo a leer:',
    ],
    lista: [
      '**Bastos**, fuego. La acción, los proyectos y las ganas.',
      '**Copas**, agua. Las emociones, el amor, los vínculos y la intuición.',
      '**Espadas**, aire. La mente, las decisiones, las palabras y los conflictos.',
      '**Oros**, tierra. El dinero, el trabajo, el cuerpo y lo material.',
      'Los números llevan un ritmo. El As es la semilla, el Cinco suele traer tensión y el Diez cierra el ciclo.',
      'Las figuras pueden ser gente de tu entorno o actitudes tuyas. La Sota aprende, el Caballo se mueve, la Reina cuida desde dentro y el Rey dirige desde fuera.',
    ],
    enlaces: [
      { texto: 'Ver las 78 cartas del tarot', href: '/cartas/' },
      { texto: 'El Loco, la primera carta', href: '/cartas/el-loco/' },
      { texto: 'As de Copas', href: '/cartas/as-de-copas/' },
    ],
  },
  {
    id: 'primera-baraja',
    titulo: 'Elegir y cuidar tu primera baraja',
    parrafos: [
      'Para tu primera baraja, te recomendamos una basada en el **Rider-Waite**, ilustrada por Pamela Colman Smith a principios del siglo XX. Es la referencia de casi todos los libros y webs, esta incluida, y para empezar tiene una ventaja enorme. Los arcanos menores traen escenas completas y no solo símbolos repetidos, así que puedes leer el Cinco de Copas mirando a la figura que llora sobre las copas caídas, sin memorizar nada.',
      'Hay quien dice que tu primera baraja te la tiene que regalar otra persona. Es una idea bonita, pero no es ninguna norma. Si te apetece, cómprala tú. Lo que cuenta es que las imágenes te gusten y te den ganas de mirarlas, porque vas a pasar muchas horas con ellas.',
      'Para cuidarla no necesitas rituales complicados. Guárdala en una caja o en una bolsa de tela, lejos de la humedad, y tócala a menudo para que se te haga familiar. Si te ayuda a concentrarte, ten algún pequeño gesto antes de leer, como respirar hondo, encender una vela o barajar unos segundos en silencio. Hazlo porque te sirve. La lectura vale igual sin él.',
    ],
    lista: [
      'Elige imágenes que te digan algo nada más verlas.',
      'Comprueba que trae las 78 cartas y que los menores tienen escenas.',
      'Al principio usa siempre la misma baraja, para ir cogiéndole el tranquillo.',
      'Baraja como te resulte cómodo, mezclando por arriba, en abanico o extendiéndolas sobre la mesa.',
    ],
  },
  {
    id: 'aprender-las-cartas',
    titulo: 'Aprender las cartas sin memorizar',
    parrafos: [
      'El error más común al empezar es querer aprenderse 78 significados de memoria, como para un examen. Se olvidan enseguida y encima te hacen leer de forma rígida. Es más fácil, y más bonito, **mirar la imagen** antes de leer nada sobre ella.',
      'Coge una carta y pregúntate qué ves. Quién aparece, qué hace, cómo está colocado, qué colores mandan, si es de día o de noche, qué hay al fondo. En El Ermitaño ves a alguien solo en lo alto de una montaña, con un farol que ilumina únicamente el paso siguiente. No te hace falta un libro para notar que va de retirarse, de buscar respuestas dentro y de avanzar despacio.',
      'Luego, y solo luego, lee su significado tradicional y compáralo con lo que habías visto tú. Muchas veces coincide. Cuando no, se te queda mucho mejor, porque lo has unido a una imagen y a una sensación.',
      'Lo que más ayuda es llevar un **diario de tarot**. Cada mañana saca una carta del día y apunta qué ves en la imagen y qué crees que te dice para esa jornada. Por la noche, añade qué ha pasado en realidad. En unas semanas tendrás un recuerdo propio de muchas cartas, y eso vale más que cualquier lista.',
    ],
    lista: [
      'Describe la escena en voz alta o por escrito.',
      'Anota tres palabras que te sugiera.',
      'Lee el significado tradicional y apunta en qué se diferencia.',
      'Vuelve por la noche y escribe cómo ha aparecido en tu día.',
    ],
    enlaces: [
      { texto: 'Saca tu carta del día', href: '/carta-del-dia/' },
      { texto: 'El Ermitaño', href: '/cartas/el-ermitano/' },
      { texto: 'Cinco de Copas', href: '/cartas/cinco-de-copas/' },
    ],
  },
  {
    id: 'preguntas',
    titulo: 'Cómo formular preguntas al tarot',
    parrafos: [
      'Una buena lectura empieza por una buena pregunta. Si preguntas algo confuso, la respuesta saldrá igual de confusa. Antes de barajar, piensa un poco qué quieres saber en realidad.',
      'Las mejores preguntas son **abiertas** y te ponen a ti en el centro. En lugar de «¿Me va a llamar?», prueba con «¿Qué necesito saber sobre esta relación?» o «¿Qué puedo hacer para sentirme mejor con esto?». Con la primera te quedas esperando. La segunda te da algo con lo que trabajar.',
      'No preguntes por la vida de otras personas como si pudieras espiarla. El tarot se entiende mejor cuando va sobre ti, sobre lo que sientes, lo que haces y lo que puedes cambiar. Si la pregunta es sobre la otra persona, dale la vuelta. «¿Qué papel tengo yo en esta historia?».',
      'Las preguntas de sí o no tienen su sitio, sobre todo para decisiones concretas, pero úsalas con cabeza. Una carta te orienta y la que decide eres tú. Y no repitas la misma pregunta una y otra vez hasta que salga lo que quieres oír. La primera respuesta suele ser la más sincera.',
    ],
    lista: [
      'Concreta el tema, sea amor, trabajo, una decisión o cómo estás tú.',
      'Usa «qué», «cómo» o «qué puedo hacer» en vez de «cuándo» o «va a».',
      'Ponle un plazo razonable, por ejemplo los próximos meses.',
      'Escribe la pregunta antes de barajar para no cambiarla después.',
    ],
    enlaces: [
      { texto: 'Tirada de tarot sí o no', href: '/tarot-si-o-no/' },
    ],
  },
  {
    id: 'primeras-tiradas',
    titulo: 'Tus primeras tiradas',
    parrafos: [
      'Una **tirada** es una forma de colocar las cartas en la que cada posición significa algo. La misma carta no se lee igual si cae en el sitio del pasado que en el del consejo. Por eso es mejor empezar con tiradas sencillas e ir subiendo.',
      '**Una carta.** Perfecta para empezar. Sirve como carta del día o como respuesta rápida a una pregunta concreta. Como es solo una, le puedes dedicar toda tu atención, mirar la imagen, pensar en la pregunta y escribir lo que te sugiere.',
      '**Tres cartas.** La que más juego da. La versión clásica es pasado, presente y futuro, pero puedes cambiar las posiciones según lo que necesites. Situación, obstáculo y consejo. Tú, la otra persona y la relación. Opción A, opción B y lo que necesitas saber para elegir. Con tres cartas ya empieza a verse una historia, y ahí está la gracia de leer el tarot.',
      '**Cruz celta.** Diez cartas que miran una situación por todos lados. El presente, lo que lo cruza, la raíz, el pasado, lo que tienes en la cabeza, lo que viene, cómo te ves, cómo te ve tu entorno, tus esperanzas y miedos, y el resultado probable. Es preciosa, pero déjala para más adelante. Cuando domines las tres cartas, la cruz celta llegará sola como el paso siguiente.',
    ],
    lista: [
      'Semanas 1 y 2: una carta al día.',
      'Semana 3 en adelante: tres cartas con posiciones que elijas tú.',
      'Cuando te veas cómoda leyendo historias de tres cartas: la cruz celta.',
    ],
    enlaces: [
      { texto: 'Todas las tiradas', href: '/tiradas/' },
      { texto: 'Pasado, presente y futuro', href: '/pasado-presente-futuro/' },
      { texto: 'Cruz celta', href: '/cruz-celta/' },
      { texto: 'Tarot del amor', href: '/tarot-del-amor/' },
    ],
  },
  {
    id: 'invertidas',
    titulo: 'Las cartas invertidas',
    parrafos: [
      'Una carta **invertida** es la que sale boca abajo al darle la vuelta. Hay lectoras que las leen y otras que no, y las dos cosas valen. Si estás empezando, puedes ignorarlas un tiempo y leerlo todo al derecho. Bastante tienes ya con 78 imágenes.',
      'Cuando quieras meterlas, no las veas como «la carta mala» ni como lo contrario exacto. Una invertida suele decir que la carta está **bloqueada, floja o vuelta hacia dentro**. La Fuerza invertida tiene poco de violencia. Es más bien dudar de tu propia fuerza, o contenerte tanto que acabas agotada. El Sol invertido sigue siendo luz, solo que tapada por nubes.',
      'Un truco que funciona. Cuando salga una invertida, pregúntate qué le falta a la carta para expresarse bien, o qué parte de ella estás viviendo en exceso. Esa pregunta suele dar con la clave.',
    ],
    enlaces: [
      { texto: 'La Fuerza', href: '/cartas/la-fuerza/' },
      { texto: 'El Sol', href: '/cartas/el-sol/' },
    ],
  },
  {
    id: 'combinaciones',
    titulo: 'Leer combinaciones de cartas',
    parrafos: [
      'Leer el tarot va más allá de sumar significados sueltos. Las cartas se hablan entre ellas, y aprender a oír esa conversación es lo que convierte una lista de definiciones en una lectura.',
      'Empieza mirando el conjunto antes que los detalles. ¿Hay muchos arcanos mayores? Entonces el tema es importante. ¿Manda un palo? Si salen muchas Copas, el asunto es emocional aunque hayas preguntado por trabajo. Si abundan las Espadas, hay mucho pensamiento, quizá demasiado. Muchas figuras suelen querer decir que hay varias personas metidas.',
      'Después fíjate en cómo se miran las figuras, hacia dónde caminan y qué colores se repiten. Si una carta mira hacia otra, puede que estén relacionadas. Y piensa en cómo cada carta matiza a la de al lado. **La Torre** junto a **La Estrella** cuenta una crisis seguida de esperanza. Algo se rompe, pero lo que viene después te cura. La misma Torre junto al Diez de Espadas apunta a un final más duro, aunque también definitivo.',
      'No te agobies si al principio no ves las conexiones. Salen con la práctica, y cada lectura completa que escribas en tu diario te entrena el ojo.',
    ],
    lista: [
      'Cuenta mayores y menores.',
      'Mira qué palo o elemento domina y cuál falta.',
      'Busca números repetidos. Dos o tres Cincos apuntan a una época de tensión.',
      'Lee las cartas en orden, como si fueran viñetas de una historia.',
    ],
    enlaces: [
      { texto: 'Combinaciones de cartas', href: '/combinaciones/' },
      { texto: 'La Torre', href: '/cartas/la-torre/' },
      { texto: 'La Estrella', href: '/cartas/la-estrella/' },
    ],
  },
  {
    id: 'ejercicio-30-dias',
    titulo: 'Ejercicio de práctica de 30 días',
    parrafos: [
      'Se aprende más siendo constante que leyendo libros. Este plan de un mes está pensado para dedicarle al tarot entre diez y veinte minutos al día. Si un día no puedes, no pasa nada. Lo retomas al siguiente sin culpa.',
      'Lo único imprescindible es escribir, en un cuaderno o en una nota del móvil. Al final del mes, reléelo todo. Te sorprenderá lo que has avanzado y qué cartas se han repetido en tu vida.',
    ],
    lista: [
      'Días 1 a 7: saca una carta del día. Describe la imagen, anota tres palabras y, por la noche, cómo ha aparecido en tu jornada.',
      'Días 8 y 9: separa los 22 arcanos mayores y colócalos en orden, del 0 al XXI. Míralos como un viaje que empieza en El Loco y termina en El Mundo.',
      'Días 10 a 13: dedica un día a cada palo. Mira sus 14 cartas en orden y escribe qué historia cuentan del As al Diez.',
      'Día 14: mezcla las 16 figuras y asocia cada una a alguien que conozcas o a una faceta tuya.',
      'Días 15 a 21: una tirada de tres cartas al día con posiciones sencillas, como situación, obstáculo y consejo.',
      'Días 22 a 25: practica combinaciones. Saca dos cartas y escribe una frase que las una.',
      'Días 26 a 28: haz una tirada de tres cartas a alguien de confianza y pregúntale si tu lectura le ha servido.',
      'Día 29: tu primera cruz celta, sin agobiarte por entenderlo todo.',
      'Día 30: relee tu diario y apunta qué cartas te salen más y cuáles se te siguen resistiendo.',
    ],
    enlaces: [
      { texto: 'Carta del día', href: '/carta-del-dia/' },
      { texto: 'El Mundo', href: '/cartas/el-mundo/' },
    ],
  },
  {
    id: 'errores',
    titulo: 'Errores habituales al empezar',
    parrafos: [
      'Todas hemos caído en ellos, así que no te preocupes si te ves reflejada en alguno. Saber que existen ya ayuda mucho a evitarlos.',
      'El más frecuente es el **miedo a las cartas difíciles**. La Muerte casi nunca va de muerte física. Suele anunciar un final necesario y un cambio grande. El Diablo trata de ataduras y dependencias de las que te puedes librar. Ninguna carta es buena o mala por sí misma. Todo depende de la pregunta, la posición y las cartas que tenga alrededor.',
      'Otro error es preguntar lo mismo una y otra vez hasta que salga la respuesta que quieres. Así la lectura deja de servirte para pensar y se convierte en una forma de calmar la ansiedad que, al final, la aumenta. Si te pasa, deja la baraja unos días.',
      'Y el último, depender del tarot para cada decisión. Las cartas te ayudan a pensar, pero no son una muleta. Si notas que no das un paso sin consultarlas, recuerda que la que decide eres tú.',
    ],
    lista: [
      'Leer con prisa, sin mirar la imagen.',
      'Tomar el significado del libro como verdad absoluta.',
      'Hacer tiradas muy grandes antes de dominar las pequeñas.',
      'Leer cuando estás muy alterada. Mejor espera a estar más tranquila.',
      'Olvidar que el futuro que enseñan las cartas se puede cambiar.',
    ],
    enlaces: [
      { texto: 'La Muerte', href: '/cartas/la-muerte/' },
      { texto: 'El Diablo', href: '/cartas/el-diablo/' },
      { texto: 'Tarot del amor', href: '/tarot-del-amor/' },
    ],
  },
];

export const faq: { q: string; r: string }[] = [
  {
    q: '¿Cuánto tiempo se tarda en aprender tarot?',
    r: 'Con un mes de práctica diaria ya puedes leer tiradas sencillas con bastante soltura. Conocer bien las 78 cartas y cómo se combinan lleva más tiempo, y en realidad nunca se acaba de aprender. Cada lectura te enseña algo nuevo.',
  },
  {
    q: '¿Hace falta tener un don para leer el tarot?',
    r: 'No. Leer el tarot se aprende como cualquier otra cosa, con curiosidad, práctica y atención a los símbolos. La intuición ayuda, pero también se entrena mirando las imágenes y escribiendo lo que te sugieren.',
  },
  {
    q: '¿Puedo echarme las cartas a mí misma?',
    r: 'Sí, y es la mejor forma de empezar. Solo intenta ser sincera contigo, porque cuando el tema te toca muy de cerca es fácil leer lo que quieres ver. Si escribes la lectura y la relees unos días después, la mirarás con más distancia.',
  },
  {
    q: '¿El tarot predice el futuro?',
    r: 'El tarot enseña tendencias y hacia dónde pueden ir las cosas según cómo están ahora. Un destino fijo, no. Úsalo para pensar y decidir mejor. Lo que pase después depende en buena parte de lo que hagas.',
  },
  {
    q: '¿Qué tirada es mejor para principiantes?',
    r: 'Empieza con una carta al día y, cuando te veas cómoda, pasa a la tirada de tres cartas, por ejemplo pasado, presente y futuro. La cruz celta es muy completa, pero mejor dejarla para cuando ya leas con soltura historias de tres cartas.',
  },
];
