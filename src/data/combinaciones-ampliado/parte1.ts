import type { CombinacionAmpliada } from './tipo';

export const parte1: Record<string, CombinacionAmpliada> = {
  'loco-y-mago': {
    ejemplo: 'Imagina que preguntas si debes montar esa tienda online que llevas meses pensando y te salen El Loco y El Mago. La lectura es muy directa: las ganas ya las tienes y las herramientas también, así que lo que falta es el primer movimiento. El Loco te recuerda que no hace falta tenerlo todo resuelto, y El Mago que ya sabes más de lo que crees. Léelo como una invitación a fijar una acción concreta esta semana, como registrar el nombre.',
    posiciones: {
      pasado: 'En el pasado, esta pareja habla de un comienzo que ya diste y que sigue marcando tu situación actual. Quizá empezaste algo con mucha ilusión y recursos, y hoy recoges lo que sembraste entonces.',
      presente: 'En el presente, el momento de arrancar es ahora mismo. Tienes la puerta abierta y las capacidades a punto, así que esperar más solo enfría las ganas.',
      futuro: 'En el futuro, anuncia una oportunidad para estrenar algo en lo que tu talento va a contar mucho. Prepárate desde ya para que, cuando llegue, la pilles con las manos listas.',
    },
    invertidas: 'Si El Loco sale invertido, el riesgo es lanzarte sin plan y confiar demasiado en tu labia. Si es El Mago el que aparece del revés, hay talento, pero te frena la inseguridad o alguien promete más de lo que puede dar. Con las dos invertidas, conviene parar: no es el inicio que parece y merece la pena revisar los números y las intenciones antes de moverte.',
    faq: [
      { q: '¿El Loco y El Mago es buena señal?', r: 'Sí, es una de las combinaciones más claras para empezar algo. Indica que la ilusión viene acompañada de capacidad real, así que el resultado depende sobre todo de que te pongas en marcha.' },
      { q: '¿Qué significan El Loco y El Mago en el amor?', r: 'Hablan de un comienzo con chispa en el que alguien se atreve a dar el paso. Si tienes dudas sobre si escribir o proponer un plan, la tirada te anima a hacerlo con naturalidad.' },
    ],
  },
  'loco-y-muerte': {
    ejemplo: 'Supón que preguntas qué hacer con un trabajo que ya no te llena y aparecen La Muerte y El Loco. La lectura dice que esa etapa ya se ha cerrado por dentro, aunque por fuera sigas yendo cada mañana. El Loco señala que lo siguiente no tiene por qué parecerse a lo anterior y que está bien no saber todavía qué será. No es una invitación a dimitir mañana sin red, sino a dejar de alargar algo que ya terminó y empezar a moverte hacia otra cosa.',
    posiciones: {
      pasado: 'En el pasado, cuentan que viviste un final importante que te obligó a reinventarte. Mucho de lo que eres hoy nace de aquella despedida y del salto que diste después.',
      presente: 'En el presente, estás justo en el umbral: algo acaba y otra cosa pide paso. Es normal sentir vértigo, pero quedarte en medio cuesta más que avanzar.',
      futuro: 'En el futuro, anuncian un cambio de rumbo que llegará tras cerrar una etapa. Lo que viene será muy distinto a lo que conoces y te pedirá ir ligera de equipaje.',
    },
    invertidas: 'Con La Muerte invertida, el final se resiste: te cuesta soltar y el cambio se alarga más de la cuenta. Si es El Loco el invertido, el riesgo es huir hacia delante sin haber cerrado bien lo anterior. Con las dos del revés, hay estancamiento y miedo a moverse, así que el trabajo está en aceptar lo que ya no está.',
    faq: [
      { q: '¿La Muerte y El Loco es mala señal?', r: 'No necesariamente. La Muerte habla de transformación y no de algo literal, y junto al Loco suele indicar un final que abre la puerta a una vida nueva.' },
      { q: '¿Esta combinación anuncia una ruptura?', r: 'Puede hablar del fin de una relación o de una forma de vivirla. Si seguís juntos, lo que acaba es una etapa, y lo que empieza depende de que las dos partes quieran reinventarse.' },
    ],
  },
  'loco-y-mundo': {
    ejemplo: 'Pongamos que preguntas si aceptar una beca para estudiar fuera y salen El Mundo y El Loco. Es casi una respuesta de manual: estás cerrando un ciclo con buena nota y la vida te ofrece un camino nuevo y lejos de casa. El Mundo confirma que lo que dejas está completo, así que no te vas a mitad de nada. El Loco añade la aventura y la sensación de no saber del todo qué te espera, que en este caso es parte de lo bonito.',
    posiciones: {
      pasado: 'En el pasado, hablan de un ciclo que completaste y de un viaje o un cambio de lugar que te marcó. Esa experiencia te dio una visión más amplia que hoy sigue contigo.',
      presente: 'En el presente, estás entre un final logrado y un principio que ya asoma. Tómate un momento para reconocer lo conseguido antes de cambiar de pantalla.',
      futuro: 'En el futuro, anuncian un viaje, una mudanza o una aventura después de terminar algo con éxito. Lo que hoy cuesta se cerrará bien y dejará sitio a lo nuevo.',
    },
    invertidas: 'Si El Mundo sale invertido, algo queda sin terminar y te tienta saltar a lo siguiente antes de tiempo. Con El Loco del revés, el viaje o el cambio puede hacerse sin preparación o por pura huida. Si salen las dos invertidas, conviene cerrar cabos sueltos antes de comprar el billete.',
    faq: [
      { q: '¿El Loco y El Mundo hablan de un viaje?', r: 'Es una de las lecturas más habituales de esta pareja. Puede ser un viaje literal, una mudanza o un cambio de vida tan grande que se siente como empezar en otro sitio.' },
      { q: '¿Es buena combinación para cambiar de trabajo?', r: 'Sí, sobre todo si has terminado bien una etapa. Indica que te vas en buen momento y que lo nuevo puede ser muy distinto y estimulante.' },
    ],
  },
  'mago-y-sacerdotisa': {
    ejemplo: 'Si preguntas cómo plantear una negociación de sueldo y te salen El Mago y La Sacerdotisa, la tirada te propone dos tiempos. Primero escuchar: qué dice la otra parte, qué se calla, qué margen intuyes. Después hablar con seguridad y con datos, porque El Mago sabe presentar bien lo que vale. Leída así, la combinación no te pide elegir entre cabeza e intuición, sino usarlas en el orden adecuado.',
    posiciones: {
      pasado: 'En el pasado, hablan de un aprendizaje o una preparación que hiciste en silencio y que hoy te da ventaja. Supiste observar y luego actuar, y eso sigue dando fruto.',
      presente: 'En el presente, tienes información que otros no ven y capacidad para usarla. Es buen momento para preparar el terreno con discreción antes de mostrar tus cartas.',
      futuro: 'En el futuro, anuncian una situación en la que tu intuición marcará la diferencia. Saber cuándo hablar y cuándo callar será tan importante como lo que digas.',
    },
    invertidas: 'Con El Mago invertido, puedes tener la intuición correcta pero no atreverte a actuar, o alguien puede usar lo que sabe para manipular. Con La Sacerdotisa del revés, ignoras una corazonada o hay secretos que enturbian la situación. Si las dos salen invertidas, desconfía de la información que te llega y no tomes decisiones con prisa.',
    faq: [
      { q: '¿El Mago y La Sacerdotisa es buena combinación?', r: 'Sí, es una pareja muy equilibrada entre acción e intuición. Funciona especialmente bien para estudiar, investigar, negociar o cualquier tarea que pida preparación y buen olfato.' },
      { q: '¿Qué dicen en el amor?', r: 'Suelen hablar de una atracción con mucho por descubrir. Hay interés, pero conviene observar antes de lanzarte y fiarte de lo que percibes en los gestos.' },
    ],
  },
  'mago-y-enamorados': {
    ejemplo: 'Pongamos que preguntas si proponer a alguien vivir juntos y salen El Mago y Los Enamorados. La tirada te dice que la decisión es tuya y que la forma de plantearla cuenta mucho. No basta con desearlo: hace falta decirlo con claridad y escuchar la respuesta. Una buena lectura sería preparar esa conversación con calma, eligiendo el momento y siendo honesta sobre lo que esperas.',
    posiciones: {
      pasado: 'En el pasado, hablan de una elección importante que tomaste por iniciativa propia o de una conquista que marcó una etapa. Aquella decisión explica buena parte de tu presente afectivo.',
      presente: 'En el presente, tienes delante una elección y la capacidad de influir en cómo sale. Tus palabras y tu actitud van a pesar más de lo que piensas.',
      futuro: 'En el futuro, anuncian una propuesta, una declaración o una asociación en la que tendrás que decidir. Llegará mejor si antes tienes claro lo que quieres.',
    },
    invertidas: 'Si El Mago sale invertido, cuidado con las palabras bonitas que no se sostienen, tuyas o de otra persona. Con Los Enamorados del revés, la elección se complica por dudas, desequilibrio o valores que no encajan. Con las dos invertidas, hay más seducción que sinceridad, y conviene mirar los hechos antes de comprometerte.',
    faq: [
      { q: '¿El Mago y Los Enamorados anuncian una relación?', r: 'Pueden anunciar un acercamiento o una conquista, sobre todo si alguien toma la iniciativa. La relación depende de que la elección sea mutua y no solo una buena estrategia.' },
      { q: '¿Qué significa esta pareja si dudo entre dos opciones?', r: 'Te dice que la decisión está en tu mano y que tienes recursos para tomarla bien. Ponerla en palabras, aunque sea para ti misma, te ayudará a ver cuál es la tuya.' },
    ],
  },
  'mago-y-diablo': {
    ejemplo: 'Si preguntas por una oferta de negocio que suena demasiado bien y salen El Mago y El Diablo, la tirada pide prudencia. Hay talento y mucha capacidad de convencer, pero puede estar al servicio de intereses que no son los tuyos. Lee la letra pequeña, pregunta qué pasa si sale mal y no te dejes llevar por la prisa que te meten. También puede hablar de ti: de la tentación de usar tu encanto para conseguir algo que en el fondo no te conviene.',
    posiciones: {
      pasado: 'En el pasado, señalan una situación en la que alguien te convenció con promesas que luego no se cumplieron, o en la que tú cediste a una ambición poco sana. Reconocerlo te ayuda a no repetirlo.',
      presente: 'En el presente, hay un juego de poder o una tentación muy atractiva sobre la mesa. Tienes la habilidad para salir bien parada, siempre que mires con frialdad lo que te ofrecen.',
      futuro: 'En el futuro, avisan de una propuesta seductora que puede atarte más de lo que parece. Prepárate para hacer preguntas incómodas antes de aceptar.',
    },
    invertidas: 'Con El Diablo invertido, empiezas a ver el truco y a liberarte de una dinámica que te ataba. Si es El Mago el invertido, la manipulación es más evidente o el talento se pierde en excusas. Con las dos del revés, la trampa queda al descubierto y es buen momento para cortar.',
    faq: [
      { q: '¿El Mago y El Diablo es mala combinación?', r: 'Es una combinación de alerta más que de mala suerte. Avisa de manipulación o ambición desmedida, y te invita a usar tu propio ingenio para no caer en ella.' },
      { q: '¿Esta pareja habla de alguien que miente?', r: 'Puede señalar a alguien que dice lo que quieres oír para conseguir algo. Fíjate en si lo que hace coincide con lo que dice durante un tiempo.' },
    ],
  },
  'sacerdotisa-y-ermitano': {
    ejemplo: 'Si preguntas si es momento de buscar pareja después de una relación larga y salen La Sacerdotisa y El Ermitaño, la tirada te pide algo de tiempo para ti. No es un no para siempre, sino una pausa para entender qué quieres de verdad. Puede ser una buena etapa para escribir, leer o pasear sola y escuchar lo que vas sintiendo. Cuando vuelvas a abrirte, lo harás con más claridad sobre ti misma y sobre lo que no quieres repetir.',
    posiciones: {
      pasado: 'En el pasado, hablan de un periodo de retiro o estudio que te dio una sabiduría que hoy usas. Aquel silencio no fue tiempo perdido.',
      presente: 'En el presente, la respuesta no está fuera, sino en ti. Baja el ritmo, reduce el ruido y date permiso para no tener prisa.',
      futuro: 'En el futuro, anuncian una etapa más tranquila e introspectiva, quizá ligada a formación o a un cambio interior. Te servirá para tomar decisiones más alineadas contigo.',
    },
    invertidas: 'Con La Sacerdotisa invertida, desoyes tu intuición o te llenas de ruido para no escucharte. Si El Ermitaño sale del revés, la soledad deja de ser elegida y se vuelve aislamiento. Con las dos invertidas, conviene buscar apoyo en alguien de confianza en vez de encerrarte.',
    faq: [
      { q: '¿La Sacerdotisa y El Ermitaño significan soledad?', r: 'Hablan de un tiempo para estar contigo, más que de soledad triste. Es una soledad que sirve para comprenderte y prepararte para lo siguiente.' },
      { q: '¿Es buena combinación para estudiar?', r: 'Sí, es de las mejores para estudio, investigación u oposiciones. Favorece la concentración y el trabajo constante lejos de distracciones.' },
    ],
  },
  'sacerdotisa-y-luna': {
    ejemplo: 'Imagina que preguntas si la otra persona te oculta algo y salen La Sacerdotisa y La Luna. La tirada confirma que hay cosas sin decir, pero también avisa de que tu imaginación puede estar rellenando los huecos. Lo sensato es apuntar lo que percibes y separarlo de lo que temes. Después, mejor una conversación tranquila que una conclusión sacada de noche y con el corazón acelerado.',
    posiciones: {
      pasado: 'En el pasado, señalan una etapa de confusión o un secreto que entonces no supiste ver. Hoy puedes mirarlo con más perspectiva y entender qué te decía tu intuición.',
      presente: 'En el presente, tu sensibilidad está muy despierta y captas más de lo que se dice. Escúchala, pero no la confundas con certezas hasta tener datos.',
      futuro: 'En el futuro, anuncian información oculta que acabará saliendo, o sueños y corazonadas que te darán pistas. Ve con calma y no te adelantes a los hechos.',
    },
    invertidas: 'Con La Luna invertida, la niebla empieza a levantarse y un engaño o un miedo pierde fuerza. Si es La Sacerdotisa la invertida, te cuesta fiarte de lo que sientes o alguien guarda un secreto con mala intención. Con las dos invertidas, hay mucha confusión y conviene no decidir nada importante hasta tener las cosas más claras.',
    faq: [
      { q: '¿La Sacerdotisa y La Luna hablan de engaño?', r: 'Pueden señalar secretos o información que no se muestra, aunque no siempre con mala intención. También avisan de que tus miedos pueden hacerte ver más de lo que hay.' },
      { q: '¿Qué hago si me sale esta combinación?', r: 'Observa, apunta tus sensaciones y espera a tener hechos antes de actuar. Es una pareja que premia la paciencia y castiga las conclusiones precipitadas.' },
    ],
  },
  'emperatriz-y-emperador': {
    ejemplo: 'Supón que preguntas si una relación tiene futuro y salen La Emperatriz y El Emperador. Es una respuesta muy esperanzadora: hay cariño y también ganas de construir algo con orden y compromiso. La lectura invita a hablar de planes concretos, como convivir, organizar la economía o pensar en familia. Si una de las dos partes pone todo el afecto y la otra toda la estructura, el reto es que ambas aprendan un poco del papel de la otra.',
    posiciones: {
      pasado: 'En el pasado, pueden hablar de la familia de origen y de los modelos de pareja que aprendiste. También de una etapa estable que te dio raíces.',
      presente: 'En el presente, hay una base sólida sobre la que construir. Es buen momento para formalizar acuerdos y repartir responsabilidades con equilibrio.',
      futuro: 'En el futuro, anuncian estabilidad, compromiso o un proyecto común que crece con cuidado y organización. Lo que sembréis juntos tiene opciones de durar.',
    },
    invertidas: 'Con La Emperatriz invertida, falta ternura o alguien se descuida a sí misma por cuidar a los demás. Si El Emperador sale del revés, aparece el exceso de control o la rigidez. Con las dos invertidas, la relación puede caer en luchas de poder, y conviene revisar quién decide qué y por qué.',
    faq: [
      { q: '¿La Emperatriz y El Emperador anuncian boda o familia?', r: 'Es una de las combinaciones clásicas de pareja estable y familia. No fija fechas, pero sí indica que hay terreno firme para dar pasos importantes.' },
      { q: '¿Qué dicen en el trabajo?', r: 'Hablan de un equilibrio entre creatividad y gestión. Funciona muy bien en negocios familiares o equipos donde una parte idea y otra organiza.' },
    ],
  },
  'emperatriz-y-enamorados': {
    ejemplo: 'Pongamos que preguntas cómo va a evolucionar una relación que acaba de empezar y salen La Emperatriz y Los Enamorados. Es una tirada muy cálida: la conexión es real y tiene todo para crecer. La lectura invita a disfrutar sin prisa, cuidando los detalles y dejando que la confianza se asiente. Si llevas tiempo en pareja, puede señalar un nuevo impulso, como un proyecto común o una ilusión compartida.',
    posiciones: {
      pasado: 'En el pasado, hablan de una relación muy querida que te enseñó lo que es sentirte cuidada. Su huella sigue influyendo en lo que buscas hoy.',
      presente: 'En el presente, el amor está en un momento fértil y generoso. Lo que siembres ahora, en gestos y en palabras, tiene muchas opciones de florecer.',
      futuro: 'En el futuro, anuncian una unión que crece, un paso importante en pareja o la llegada de algo nuevo a la familia. Es un horizonte alegre y lleno de cariño.',
    },
    invertidas: 'Si La Emperatriz sale invertida, el cariño puede volverse dependencia o descuido de una misma. Con Los Enamorados del revés, hay dudas o desequilibrio en lo que cada persona aporta. Con las dos invertidas, la ilusión existe pero necesita más reciprocidad para sostenerse.',
    faq: [
      { q: '¿La Emperatriz y Los Enamorados anuncian embarazo?', r: 'Es una de las combinaciones que tradicionalmente se asocian a fertilidad y familia. Aun así, tómalo como una tendencia simbólica y no como una predicción literal.' },
      { q: '¿Es buena señal si estoy sola?', r: 'Sí, indica un momento abierto al amor y a encuentros con mucha ternura. Cuidarte y sentirte bien contigo atraerá vínculos que te hagan bien.' },
    ],
  },
  'emperatriz-y-sol': {
    ejemplo: 'Imagina que preguntas por un proyecto creativo, como abrir un pequeño taller, y salen La Emperatriz y El Sol. Es una de las mejores respuestas posibles: lo que pones en marcha tiene vida, crece y además se ve. La lectura te anima a mostrar tu trabajo sin esconderte y a disfrutar del proceso. Si la pregunta era sobre la familia, la combinación trae alegría en casa y buen ambiente.',
    posiciones: {
      pasado: 'En el pasado, hablan de una etapa feliz, quizá en la infancia o en un momento de mucha creatividad. Ese recuerdo es una fuente de fuerza a la que puedes volver.',
      presente: 'En el presente, vives un periodo luminoso en el que las cosas florecen. Aprovéchalo para crear, compartir y celebrar.',
      futuro: 'En el futuro, anuncian buenas noticias, crecimiento y alegría, muchas veces ligadas a la familia o a un proyecto propio. Lo que cuidas ahora dará frutos visibles.',
    },
    invertidas: 'Con El Sol invertido, la alegría llega más apagada o con algo de retraso. Si La Emperatriz sale del revés, puede faltar energía para cuidar lo que crece o te vuelcas tanto en otros que te olvidas de ti. Con las dos invertidas, lo bueno sigue ahí, pero necesita más paciencia y menos exigencia.',
    faq: [
      { q: '¿La Emperatriz y El Sol es buena combinación?', r: 'Es de las más positivas del tarot. Une abundancia y alegría, y suele anunciar buenas noticias y proyectos que crecen.' },
      { q: '¿Qué significan para la familia?', r: 'Hablan de un hogar alegre, de reuniones felices y a veces de la llegada de un nuevo miembro. También de una buena etapa con hijos o con la infancia en general.' },
    ],
  },
  'emperador-y-justicia': {
    ejemplo: 'Supón que preguntas por un trámite con la administración o un contrato de alquiler y salen El Emperador y La Justicia. La tirada te dice que el resultado dependerá de los hechos y de los papeles. Si todo está en regla, el asunto se resolverá de forma justa, aunque quizá con algo de lentitud. La lectura práctica es reunir documentos, revisar plazos y no dejar nada a la improvisación. Si hay otra parte implicada, mejor ponerlo todo por escrito desde el principio.',
    posiciones: {
      pasado: 'En el pasado, hablan de un acuerdo, una sentencia o una norma que marcó tu situación actual. Sus consecuencias siguen presentes y conviene conocerlas bien.',
      presente: 'En el presente, estás en un momento de decisiones serias y formales. Actuar con orden y honestidad te pone en buena posición.',
      futuro: 'En el futuro, anuncian un contrato, una resolución o una autoridad que decidirá sobre algo tuyo. Si te preparas bien, puedes esperar un resultado equilibrado.',
    },
    invertidas: 'Si La Justicia sale invertida, puede haber un trato injusto, retrasos o falta de objetividad. Con El Emperador del revés, la autoridad se vuelve rígida o abusa de su posición. Con las dos invertidas, conviene asesorarse bien y no firmar nada sin entenderlo.',
    faq: [
      { q: '¿El Emperador y La Justicia es buena señal en un juicio?', r: 'Es favorable si tienes la razón y los papeles en orden. Indica que se van a valorar los hechos, así que tu preparación será clave.' },
      { q: '¿Qué dicen en el amor?', r: 'Hablan de una relación que necesita acuerdos claros y responsabilidad. También pueden señalar temas legales, como convivencia, separación de bienes o custodia.' },
    ],
  },
  'emperador-y-torre': {
    ejemplo: 'Pongamos que preguntas por la estabilidad de tu empresa y salen El Emperador y La Torre. La tirada avisa de una sacudida en la estructura: cambios en la dirección, reorganización o decisiones que nadie esperaba. Lo útil es no aferrarte a cómo eran las cosas y preparar alternativas desde ya. Si la pregunta era personal, puede hablar de tu propia necesidad de control, que empieza a no servirte.',
    posiciones: {
      pasado: 'En el pasado, señalan una caída de algo que parecía muy sólido, como un trabajo, una autoridad o una forma de vida. Aquello te obligó a reconstruir desde otra base.',
      presente: 'En el presente, una estructura rígida está crujiendo. Cuanto más intentes sostenerla a la fuerza, más brusco será el cambio.',
      futuro: 'En el futuro, avisan de un cambio repentino en algo que dabas por seguro. Tener un plan B y algo de flexibilidad te ayudará a salir más fuerte.',
    },
    invertidas: 'Con La Torre invertida, el cambio llega de forma más lenta o lo vas esquivando sin resolverlo. Si El Emperador sale del revés, el problema es el exceso de control o una autoridad que no sabe ceder. Con las dos invertidas, la crisis se aplaza, pero lo que no funciona sigue ahí pidiendo atención.',
    faq: [
      { q: '¿El Emperador y La Torre es mala señal?', r: 'Anuncian un cambio brusco, y eso suele incomodar. Sin embargo, lo que cae es lo que estaba demasiado rígido, y deja sitio a algo más sano.' },
      { q: '¿Hablan de despido?', r: 'Pueden señalar cambios en la empresa, reorganizaciones o salidas inesperadas. No es una certeza, pero sí una invitación a cuidar tu red de contactos y tus opciones.' },
    ],
  },
  'sumo-sacerdote-y-enamorados': {
    ejemplo: 'Imagina que preguntas si tu pareja quiere comprometerse y salen El Sumo Sacerdote y Los Enamorados. La tirada habla de un deseo de formalizar la relación y de compartir valores a largo plazo. Puede ser una pedida, mudaros juntos o presentar a la otra persona a la familia. La lectura invita a hablar de qué significa el compromiso para cada una de las partes, porque no siempre es lo mismo para todo el mundo.',
    posiciones: {
      pasado: 'En el pasado, hablan de un compromiso que asumiste o de las ideas sobre el amor que te transmitió tu entorno. Esos valores siguen pesando en tus elecciones.',
      presente: 'En el presente, la relación pide pasos claros y coherentes con lo que crees. Es buen momento para hablar de futuro con sinceridad.',
      futuro: 'En el futuro, anuncian una unión que se hace oficial, un acuerdo serio o una decisión tomada desde tus principios. Lo que elijas tendrá base firme.',
    },
    invertidas: 'Si El Sumo Sacerdote sale invertido, el compromiso se vive como una obligación o choca con lo que esperan los demás. Con Los Enamorados del revés, hay dudas sobre la elección o valores que no encajan. Con las dos invertidas, conviene preguntarte si quieres comprometerte o si sientes que debes hacerlo.',
    faq: [
      { q: '¿El Sumo Sacerdote y Los Enamorados anuncian boda?', r: 'Es la combinación tradicional de la boda o el compromiso formal. No fija fechas, pero indica que la relación tiende a hacerse oficial.' },
      { q: '¿Qué significa si no tengo pareja?', r: 'Puede anunciar a alguien con valores parecidos a los tuyos o una relación que nace con intención seria. También te anima a tener claro qué buscas antes de elegir.' },
    ],
  },
  'enamorados-y-muerte': {
    ejemplo: 'Supón que preguntas si deberías intentar volver con una expareja y salen Los Enamorados y La Muerte. La tirada sugiere que aquella historia ya ha terminado tal como era. Si hubiera un reencuentro, tendría que ser algo nuevo, no una vuelta a lo de antes. La lectura más honesta es preguntarte qué echas de menos de verdad: a la persona o a quien eras tú en esa relación.',
    posiciones: {
      pasado: 'En el pasado, hablan de una relación o una elección que terminó y que te cambió por dentro. Ese cierre te dejó aprendizajes que hoy pesan en tus decisiones.',
      presente: 'En el presente, una relación o un acuerdo está en plena transformación. Lo que fue ya no vuelve, y lo que venga depende de lo que elijas ahora.',
      futuro: 'En el futuro, anuncian una decisión que cerrará una etapa afectiva o profesional. Será un final que deja espacio para algo más acorde con quien eres.',
    },
    invertidas: 'Con La Muerte invertida, el final se alarga: se sigue juntos por costumbre o miedo al vacío. Si son Los Enamorados los invertidos, la decisión no llega o se toma desde la duda. Con las dos del revés, hay una relación estancada que pide valentía para cerrarla o para cambiarla de verdad.',
    faq: [
      { q: '¿Los Enamorados y La Muerte significan ruptura?', r: 'Pueden indicar una ruptura, pero también una relación que cambia tanto que parece otra. Lo que siempre señalan es el final de una forma de estar juntos.' },
      { q: '¿Hay esperanza de reconciliación?', r: 'Solo si ambas partes aceptan empezar de nuevo y no repetir lo anterior. Esta pareja de cartas no favorece volver atrás, sino transformarse.' },
    ],
  },
  'enamorados-y-diablo': {
    ejemplo: 'Pongamos que preguntas por qué no consigues olvidar a alguien que te hace daño y salen Los Enamorados y El Diablo. La tirada habla de un vínculo con mucha atracción y poca libertad. No es solo amor, es también enganche, y eso explica por qué cuesta tanto soltar. La lectura invita a mirar qué te da esa relación y qué te quita, y a buscar apoyo si sientes que sola no puedes.',
    posiciones: {
      pasado: 'En el pasado, señalan una relación muy intensa que te ató más de lo que querías. Entender aquel enganche te ayuda a no repetirlo.',
      presente: 'En el presente, hay una pasión o una tentación muy fuerte que condiciona tus decisiones. Pregúntate si eliges con libertad o desde el miedo a perder.',
      futuro: 'En el futuro, avisan de una atracción intensa que puede convertirse en dependencia. Entra con los ojos abiertos y cuida tus límites desde el principio.',
    },
    invertidas: 'Con El Diablo invertido, empiezas a romper las cadenas y a recuperar tu libertad. Si son Los Enamorados los invertidos, la relación pierde equilibrio y aparecen reproches o celos. Con las dos invertidas, la dependencia se ve con claridad y es buen momento para decidir alejarte.',
    faq: [
      { q: '¿Los Enamorados y El Diablo hablan de infidelidad?', r: 'Pueden señalar una tentación o un triángulo, aunque no siempre. A menudo hablan de una relación con mucha química en la que falta libertad.' },
      { q: '¿Es una relación tóxica?', r: 'Indican riesgo de dependencia o control, así que conviene observar cómo te sientes en ese vínculo. Si te sientes pequeña o atrapada, la tirada te anima a priorizarte.' },
    ],
  },
  'enamorados-y-torre': {
    ejemplo: 'Imagina que preguntas cómo va tu relación y salen Los Enamorados y La Torre. La tirada avisa de una sacudida: una discusión fuerte, un descubrimiento o una verdad que no se puede seguir esquivando. No significa automáticamente que todo se acabe, sino que lo que estaba mal sujeto va a caer. La lectura útil es prepararte para hablar con sinceridad y no tomar decisiones definitivas en caliente.',
    posiciones: {
      pasado: 'En el pasado, hablan de una ruptura repentina o un desengaño que te sacudió. Lo que pasó entonces te obligó a replantearte qué quieres en el amor.',
      presente: 'En el presente, hay una crisis abierta o a punto de estallar. Mirar la verdad de frente, aunque duela, es lo que te permitirá decidir bien.',
      futuro: 'En el futuro, avisan de un cambio inesperado en una relación o una asociación. Lo que se rompa dejará ver con claridad qué merece la pena reconstruir.',
    },
    invertidas: 'Si La Torre sale invertida, la crisis se contiene o se aplaza, pero el problema sigue ahí. Con Los Enamorados del revés, la duda y el desequilibrio pesan más que el amor. Con las dos invertidas, se evita la conversación difícil y eso alarga el malestar.',
    faq: [
      { q: '¿Los Enamorados y La Torre significan ruptura?', r: 'Pueden anunciar una ruptura, sobre todo si la relación ya tenía grietas. Otras veces hablan de una crisis que, bien llevada, deja una relación más honesta.' },
      { q: '¿Qué hago si me sale esta combinación?', r: 'Escucha lo que salga a la luz sin reaccionar de inmediato. Darte tiempo antes de decidir te ayudará a elegir desde la claridad y no desde la rabia.' },
    ],
  },
  'enamorados-y-sol': {
    ejemplo: 'Supón que preguntas si la persona que te gusta siente lo mismo y salen Los Enamorados y El Sol. Es una de las respuestas más claras y luminosas: hay interés real y no hace falta jugar a adivinar. La lectura te anima a mostrarte tal como eres y a disfrutar de ese momento sin miedo. Si ya tienes pareja, la combinación habla de una etapa feliz, con planes y risas compartidas.',
    posiciones: {
      pasado: 'En el pasado, hablan de una historia de amor feliz o de una decisión acertada que te trajo alegría. Ese recuerdo te recuerda lo que mereces.',
      presente: 'En el presente, el amor se vive con sinceridad y ligereza. Es un buen momento para dar pasos, celebrar y compartir lo que sientes.',
      futuro: 'En el futuro, anuncian un encuentro feliz, una relación que se consolida o una elección que te hará sonreír. El horizonte afectivo es muy favorable.',
    },
    invertidas: 'Con El Sol invertido, la alegría está, pero algo empaña el momento, como un exceso de expectativas o pequeños malentendidos. Si Los Enamorados salen invertidos, hay dudas o falta de equilibrio en la elección. Con las dos invertidas, el amor necesita más honestidad para recuperar su brillo.',
    faq: [
      { q: '¿Los Enamorados y El Sol significan que me quiere?', r: 'Es una de las combinaciones más favorables para el amor correspondido. Indica sinceridad y alegría compartida, así que la respuesta suele ser un sí.' },
      { q: '¿Es buena combinación para el trabajo?', r: 'Sí, habla de colaboraciones que funcionan y de elegir un camino que te ilusiona. Trabajar en algo que te gusta se nota en los resultados.' },
    ],
  },
  'carro-y-fuerza': {
    ejemplo: 'Pongamos que preguntas si vas a aprobar unas oposiciones que llevas años preparando y salen El Carro y La Fuerza. La tirada habla de una victoria que se gana con constancia y sangre fría. No es cuestión de suerte, sino de seguir adelante sin dejar que los nervios te desborden. La lectura práctica es cuidar el ritmo, mantener la rutina y confiar en todo el trabajo hecho. Descansar bien también forma parte de la preparación.',
    posiciones: {
      pasado: 'En el pasado, señalan un reto difícil que superaste con voluntad y paciencia. Esa experiencia es una prueba de lo que eres capaz de lograr.',
      presente: 'En el presente, estás en plena carrera hacia una meta y tienes la fuerza para llegar. La clave está en dominar las emociones, no en reprimirlas.',
      futuro: 'En el futuro, anuncian un logro que llegará tras un esfuerzo sostenido. Si mantienes la calma y el rumbo, la victoria está cerca.',
    },
    invertidas: 'Si El Carro sale invertido, el avance se frena por dispersión o por querer ir demasiado rápido. Con La Fuerza del revés, la inseguridad o la impaciencia te restan energía. Con las dos invertidas, conviene parar, recuperar fuerzas y reorganizar el plan antes de seguir.',
    faq: [
      { q: '¿El Carro y La Fuerza es buena señal para un examen?', r: 'Sí, es de las mejores combinaciones para retos largos y exámenes. Indica que tu constancia y tu control de los nervios te llevarán al resultado.' },
      { q: '¿Qué dicen en el amor?', r: 'Hablan de una relación que supera dificultades con paciencia y firmeza. También de saber marcar el rumbo sin imponerse a la otra persona.' },
    ],
  },
  'carro-y-sol': {
    ejemplo: 'Imagina que preguntas si conseguirás el ascenso por el que llevas meses trabajando y salen El Carro y El Sol. La tirada es muy optimista: hay avance, hay éxito y además se va a notar. La lectura te anima a seguir con decisión, a mostrar tus logros y a no esperar a que otros te den el empujón. Si la pregunta era sobre un viaje, la combinación lo pinta alegre y sin grandes contratiempos.',
    posiciones: {
      pasado: 'En el pasado, hablan de un triunfo o un viaje feliz que te dio confianza. Lo que lograste entonces sigue siendo un buen impulso.',
      presente: 'En el presente, el viento sopla a favor y las cosas avanzan con buena energía. Es momento de moverte, decidir y celebrar lo que sale bien.',
      futuro: 'En el futuro, anuncian una meta alcanzada, un reconocimiento o un desplazamiento que te traerá alegría. El camino que estás haciendo lleva a buen puerto.',
    },
    invertidas: 'Con El Carro invertido, el éxito llega con retrasos o te falta dirección para aprovecharlo. Si El Sol sale del revés, la alegría se apaga un poco por cansancio o expectativas demasiado altas. Con las dos invertidas, el logro sigue posible, pero conviene bajar el ritmo y revisar el rumbo.',
    faq: [
      { q: '¿El Carro y El Sol es buena combinación?', r: 'Es de las más positivas para el éxito y los logros. Anuncia avance, buen ánimo y resultados visibles.' },
      { q: '¿Hablan de un viaje?', r: 'Sí, a menudo señalan un viaje feliz o un reencuentro tras una distancia. También pueden hablar de un cambio de lugar que llega en buen momento.' },
    ],
  },
};
