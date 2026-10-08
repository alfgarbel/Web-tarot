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
  'Aprender tarot no consiste en memorizar 78 significados, sino en aprender a mirar unas imágenes y escuchar lo que te dicen sobre tu vida. Esta guía para principiantes te acompaña paso a paso: qué es la baraja, cómo leer el tarot con tus primeras tiradas y cómo practicar cada día sin agobiarte.';

export const capitulos: Capitulo[] = [
  {
    id: 'que-es',
    titulo: 'Qué es el tarot y qué no es',
    parrafos: [
      'El tarot es una baraja de 78 cartas llenas de símbolos. Cada carta cuenta una escena reconocible: alguien que empieza un viaje, una torre que se derrumba, una mujer que sostiene a un león con calma. Esas escenas hablan de cosas que todas vivimos en algún momento: dudas, pérdidas, enamoramientos, cambios de trabajo, ganas de empezar de cero.',
      'Por eso funciona tan bien como **herramienta de reflexión**. Cuando sacas una carta y la relacionas con tu pregunta, la imagen te obliga a mirar tu situación desde otro ángulo. A veces confirma algo que ya intuías. Otras veces te señala justo lo que estabas evitando.',
      'Lo que el tarot no es: una sentencia. Las cartas no deciden por ti ni marcan un **destino fijo**. Muestran tendencias, energías del momento y posibles caminos, pero lo que pase después depende de lo que hagas. Si una tirada te asusta, recuerda que es una invitación a pensar, no una condena.',
      'Tampoco sustituye a un médico, a una abogada ni a una terapeuta. Úsalo para escucharte y ordenar ideas, y busca ayuda profesional cuando el tema lo necesite.',
    ],
  },
  {
    id: 'la-baraja',
    titulo: 'Cómo es una baraja de tarot',
    parrafos: [
      'Una baraja de tarot completa tiene **78 cartas** divididas en dos grupos. Entender esta estructura es el primer paso para aprender tarot, porque te da un mapa: antes de saber qué significa una carta concreta, ya sabes de qué tipo de asunto habla.',
      'Los **arcanos mayores** son 22 cartas numeradas del 0 al XXI, desde El Loco hasta El Mundo. Representan los grandes temas de la vida: el amor, el poder, la crisis, la esperanza, el final de una etapa. Cuando aparecen muchos mayores en una tirada, la situación tiene peso y suele marcar un antes y un después.',
      'Los **arcanos menores** son 56 cartas repartidas en cuatro palos de 14 cartas cada uno. Hablan del día a día: una discusión, un pago pendiente, una cita, un proyecto que arranca. Cada palo tiene diez cartas numeradas, del As al Diez, y cuatro **figuras**: Sota, Caballo, Reina y Rey.',
      'Cada palo se asocia con un elemento, y esa asociación te ayuda muchísimo a leer:',
    ],
    lista: [
      '**Bastos**, fuego: la acción, los proyectos, la pasión y las ganas.',
      '**Copas**, agua: las emociones, el amor, los vínculos y la intuición.',
      '**Espadas**, aire: la mente, las decisiones, las palabras y los conflictos.',
      '**Oros**, tierra: el dinero, el trabajo, el cuerpo y lo material.',
      'Los números siguen un ritmo: el As es la semilla, el Cinco suele traer tensión y el Diez cierra el ciclo.',
      'Las figuras pueden ser personas de tu entorno o actitudes tuyas: la Sota aprende, el Caballo se mueve, la Reina cuida desde dentro y el Rey dirige desde fuera.',
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
      'Si es tu primera baraja, te recomendamos una basada en el **Rider-Waite**, ilustrada por Pamela Colman Smith a principios del siglo XX. Es la referencia de casi todos los libros y webs, incluida esta, y tiene una ventaja enorme para principiantes: los arcanos menores tienen escenas completas, no solo símbolos repetidos. Así puedes leer el Cinco de Copas mirando a la figura que llora sobre las copas caídas, sin tener que memorizar nada.',
      'Existe la creencia de que tu primera baraja te la tiene que regalar otra persona. Es bonita, pero no es una norma. Cómprala tú si te apetece. Lo importante es que las imágenes te gusten y te inviten a mirarlas, porque vas a pasar muchas horas con ellas.',
      'Para cuidarla no necesitas rituales complicados. Guárdala en una caja o una bolsa de tela, lejos de la humedad, y tócala a menudo para que se convierta en algo familiar. Si te ayuda a concentrarte, puedes tener un pequeño gesto antes de leer: respirar hondo, encender una vela o barajar en silencio unos segundos. Hazlo porque te sirve, no porque sin él la lectura no valga.',
    ],
    lista: [
      'Elige imágenes que te digan algo nada más verlas.',
      'Comprueba que trae las 78 cartas y que los menores tienen escenas.',
      'Usa siempre la misma baraja al principio para crear vínculo con ella.',
      'Baraja como te resulte cómodo: mezclando por arriba, en abanico o extendiéndolas sobre la mesa.',
    ],
  },
  {
    id: 'aprender-las-cartas',
    titulo: 'Aprender las cartas sin memorizar',
    parrafos: [
      'El error más común al empezar es intentar aprenderse 78 significados de memoria, como si fuera un examen. Así se olvidan enseguida y, además, se lee de forma rígida. Hay un camino más fácil y más bonito: **mirar la imagen** antes de leer nada sobre ella.',
      'Coge una carta y pregúntate qué ves. Quién aparece, qué hace, cómo es su postura, qué colores dominan, si es de día o de noche, qué hay al fondo. En El Ermitaño ves a alguien solo en lo alto de una montaña, con un farol que ilumina solo el paso siguiente. No hace falta un libro para sentir que habla de retirarse, de buscar respuestas dentro y de avanzar despacio.',
      'Después, y solo después, lee su significado tradicional y compáralo con lo que tú habías visto. Muchas veces coincide. Cuando no coincide, lo que has aprendido se te queda mucho mejor, porque lo has unido a una imagen y a una sensación.',
      'La herramienta que más ayuda es un **diario de tarot**. Cada mañana saca una carta del día y apunta tres cosas: qué ves en la imagen, qué crees que te dice para esa jornada y, por la noche, qué ha pasado de verdad. En unas semanas tendrás un recuerdo personal de muchas cartas, y eso vale más que cualquier lista.',
    ],
    lista: [
      'Describe la escena en voz alta o por escrito.',
      'Anota tres palabras clave que te sugiera.',
      'Lee el significado tradicional y apunta las diferencias.',
      'Vuelve por la noche y escribe cómo se ha reflejado en tu día.',
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
      'Una buena lectura empieza por una buena pregunta. Si preguntas algo confuso, la respuesta también lo será. Dedica un momento a pensar qué quieres saber de verdad antes de barajar.',
      'Las mejores preguntas son **abiertas** y te ponen a ti en el centro. En lugar de «¿Me va a llamar?», prueba con «¿Qué necesito saber sobre esta relación?» o «¿Qué puedo hacer para sentirme mejor con esta situación?». La primera te deja esperando. La segunda te da algo con lo que trabajar.',
      'Evita preguntar por la vida de otras personas como si pudieras espiarla. El tarot habla mejor de ti: de lo que sientes, de lo que haces y de lo que puedes cambiar. Si la pregunta es sobre la otra persona, dale la vuelta: «¿Qué papel tengo yo en esta historia?».',
      'Las preguntas de sí o no tienen su sitio, sobre todo para decisiones concretas, pero úsalas con cabeza. Una carta puede orientarte, no decidir por ti. Y no repitas la misma pregunta una y otra vez hasta que salga lo que quieres oír: la primera respuesta suele ser la más honesta.',
    ],
    lista: [
      'Concreta el tema: amor, trabajo, una decisión, cómo estás tú.',
      'Usa «qué», «cómo» o «qué puedo hacer» en vez de «cuándo» o «va a».',
      'Pon un marco de tiempo razonable, por ejemplo los próximos meses.',
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
      'Una **tirada** es una forma de colocar las cartas en la que cada posición tiene un significado. La misma carta no se lee igual si cae en el lugar del pasado que en el del consejo. Por eso conviene empezar con tiradas sencillas y avanzar poco a poco.',
      '**Una carta.** Es la tirada perfecta para empezar. Sirve como carta del día o como respuesta rápida a una pregunta concreta. Al ser solo una, puedes dedicarle toda tu atención: mirar la imagen, pensar en tu pregunta y escribir lo que te sugiere.',
      '**Tres cartas.** La más versátil. La versión clásica es pasado, presente y futuro, pero puedes cambiar las posiciones según lo que necesites: situación, obstáculo y consejo; tú, la otra persona y la relación; opción A, opción B y lo que necesitas saber para elegir. Con tres cartas ya empiezas a ver una historia, y ahí está la gracia de leer el tarot.',
      '**Cruz celta.** Diez cartas que miran una situación desde todos sus ángulos: el presente, lo que lo cruza, la raíz, el pasado, lo que está en tu mente, lo que viene, cómo te ves, cómo te ve tu entorno, tus esperanzas y miedos, y el resultado probable. Es preciosa, pero no la uses en tus primeras semanas. Cuando domines las tres cartas, la cruz celta será tu siguiente paso natural.',
    ],
    lista: [
      'Semana 1 y 2: una carta al día.',
      'Semana 3 en adelante: tres cartas con posiciones que tú elijas.',
      'Cuando te sientas cómoda leyendo historias de tres cartas: la cruz celta.',
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
      'Una carta **invertida** es la que sale boca abajo al darle la vuelta. Hay lectoras que las leen y otras que no, y las dos opciones son válidas. Si estás empezando, puedes ignorarlas durante un tiempo y leer todas las cartas al derecho. Ya tienes bastante con 78 imágenes.',
      'Cuando quieras incorporarlas, no pienses en ellas como «la carta mala» o lo contrario exacto. Una invertida suele indicar que la energía de la carta está **bloqueada, debilitada o vuelta hacia dentro**. La Fuerza invertida no es violencia: es dudar de tu propia fuerza, o contenerte tanto que acabas agotada. El Sol invertido sigue siendo luz, pero tapada por nubes.',
      'Un truco útil: cuando salga una invertida, pregúntate qué le falta a la carta para expresarse bien, o qué parte de ella estás viviendo en exceso. Esa pregunta suele dar la clave.',
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
      'Leer el tarot no es sumar significados sueltos. Las cartas se hablan entre sí, y aprender a escuchar esa conversación es lo que convierte una lista de definiciones en una lectura de verdad.',
      'Empieza por mirar el conjunto antes de los detalles. ¿Hay muchos arcanos mayores? Entonces el tema es importante. ¿Domina un palo? Si salen muchas Copas, la clave es emocional aunque hayas preguntado por trabajo. Si abundan las Espadas, hay mucho pensamiento, quizá demasiado. Muchas figuras pueden señalar que hay varias personas implicadas.',
      'Luego fíjate en cómo se miran las figuras, hacia dónde caminan, qué colores se repiten. Si una carta mira hacia otra, puede haber una relación entre ambas. Y piensa en cómo una carta matiza a la de al lado. **La Torre** junto a **La Estrella** cuenta una historia de crisis seguida de esperanza: algo se rompe, pero lo que viene después te sana. La misma Torre junto al Diez de Espadas habla de un final más duro, aunque también definitivo.',
      'No te agobies si al principio no ves las conexiones. Llegan con la práctica, y cada vez que escribas una lectura completa en tu diario estarás entrenando esa mirada.',
    ],
    lista: [
      'Cuenta mayores y menores.',
      'Mira qué palo o elemento domina y cuál falta.',
      'Busca números repetidos: dos o tres Cincos hablan de un momento de tensión.',
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
      'La constancia enseña más que cualquier libro. Este plan de un mes está pensado para que aprendas tarot dedicándole entre diez y veinte minutos al día. No pasa nada si un día no puedes: retómalo al siguiente sin culpa.',
      'Lo único imprescindible es escribir. Un cuaderno o una nota en el móvil sirve. Al final del mes, relee todo: te sorprenderá cuánto has avanzado y qué cartas se han repetido en tu vida.',
    ],
    lista: [
      'Días 1 a 7: saca una carta del día. Describe la imagen, anota tres palabras y, por la noche, cómo se ha reflejado en tu jornada.',
      'Días 8 y 9: separa los 22 arcanos mayores y colócalos en orden, del 0 al XXI. Míralos como un viaje que empieza en El Loco y termina en El Mundo.',
      'Días 10 a 13: dedica un día a cada palo. Mira sus 14 cartas en orden y escribe qué historia cuentan del As al Diez.',
      'Día 14: mezcla las 16 figuras y asocia cada una a alguien que conozcas o a una faceta tuya.',
      'Días 15 a 21: tirada de tres cartas al día con posiciones sencillas, como situación, obstáculo y consejo.',
      'Días 22 a 25: practica combinaciones. Saca dos cartas y escribe una frase que las una.',
      'Días 26 a 28: haz una tirada de tres cartas para otra persona de confianza y pídele que te diga si tu lectura le ha servido.',
      'Día 29: tu primera cruz celta, con calma y sin prisa por entenderlo todo.',
      'Día 30: relee tu diario y anota qué cartas te salen más y cuáles todavía se te resisten.',
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
      'Todas pasamos por ellos, así que no te preocupes si te reconoces en alguno. Saber que existen ya es la mitad del camino para evitarlos.',
      'El más frecuente es el **miedo a las cartas difíciles**. La Muerte casi nunca habla de muerte física, sino de un final necesario y de una transformación. El Diablo habla de ataduras y dependencias que puedes soltar. Ninguna carta es buena o mala por sí misma: todo depende de la pregunta, la posición y las cartas que la rodean.',
      'Otro error es preguntar lo mismo una y otra vez hasta que salga la respuesta deseada. Si lo haces, la lectura deja de servirte para reflexionar y se convierte en una forma de calmar la ansiedad que, al final, la aumenta. Si te pasa, deja la baraja unos días.',
      'Y el último: depender del tarot para cada decisión. Las cartas son una ayuda para pensar, no una muleta. Si notas que no das un paso sin consultarlas, es momento de recordar que la que decide eres tú.',
    ],
    lista: [
      'Leer con prisa, sin mirar la imagen.',
      'Tomar el significado del libro como verdad absoluta.',
      'Hacer tiradas muy grandes antes de dominar las pequeñas.',
      'Leer cuando estás muy alterada: espera a estar más tranquila.',
      'Olvidar que el futuro que muestran las cartas se puede cambiar.',
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
    r: 'En un mes de práctica diaria puedes leer tiradas sencillas con bastante soltura. Conocer bien las 78 cartas y sus combinaciones lleva más tiempo, y la verdad es que nunca se termina de aprender: cada lectura te enseña algo nuevo.',
  },
  {
    q: '¿Hace falta tener un don para leer el tarot?',
    r: 'No. Leer el tarot es una habilidad que se aprende como cualquier otra: con curiosidad, práctica y atención a los símbolos. La intuición ayuda, pero también se entrena mirando las imágenes y escribiendo lo que te sugieren.',
  },
  {
    q: '¿Puedo echarme las cartas a mí misma?',
    r: 'Sí, y es la mejor forma de empezar. Solo intenta ser honesta: cuando el tema te toca muy de cerca, es fácil leer lo que quieres ver. Escribir la lectura y releerla días después te ayuda a mirarla con más distancia.',
  },
  {
    q: '¿El tarot predice el futuro?',
    r: 'El tarot muestra tendencias y posibles caminos según cómo están las cosas ahora, no un destino fijo. Tómalo como una herramienta para reflexionar y decidir mejor. Lo que pase después depende, en gran parte, de lo que hagas.',
  },
  {
    q: '¿Qué tirada es mejor para principiantes?',
    r: 'Empieza con una carta al día y, cuando te sientas cómoda, pasa a la tirada de tres cartas, como pasado, presente y futuro. La cruz celta es muy completa, pero conviene dejarla para cuando ya leas con soltura historias de tres cartas.',
  },
];
