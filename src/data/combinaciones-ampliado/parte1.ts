import type { CombinacionAmpliada } from './tipo';

export const parte1: Record<string, CombinacionAmpliada> = {
  'loco-y-mago': {
    ejemplo: 'Imagina que preguntas si deberías montar esa tienda online que llevas meses pensando y te salen El Loco y El Mago. La lectura es muy directa. Las ganas ya las tienes y las herramientas también, así que solo falta moverte. Con El Loco no hace falta tenerlo todo resuelto, y El Mago deja claro que sabes más de lo que crees. Ponte una acción concreta para esta semana, como registrar el nombre.',
    posiciones: {
      pasado: 'Ya diste un primer paso hace tiempo y todavía marca tu situación. Seguramente empezaste algo con mucha ilusión y buenos recursos, y hoy recoges lo que sembraste entonces.',
      presente: 'Si estabas esperando la señal para arrancar, es esta. Tienes la puerta abierta y las capacidades a punto, y esperar más solo enfría las ganas.',
      futuro: 'Viene una oportunidad para estrenar algo en lo que tu talento va a contar mucho. Ve preparándote para que te pille con las manos listas.',
    },
    invertidas: 'Con El Loco invertido, el riesgo es lanzarte sin plan y fiarlo todo a tu labia. Si el que sale del revés es El Mago, hay talento, pero te frena la inseguridad o alguien promete más de lo que puede dar. Con las dos invertidas, para. El inicio no es tan bueno como parece y merece la pena revisar los números y las intenciones antes de moverte.',
    faq: [
      { q: '¿El Loco y El Mago es buena señal?', r: 'Sí, es de las combinaciones más claras para empezar algo. La ilusión viene con capacidad real, así que el resultado depende sobre todo de que te pongas en marcha.' },
      { q: '¿Qué significan El Loco y El Mago en el amor?', r: 'Un comienzo con chispa en el que alguien se atreve a dar el paso. Si dudas entre escribir o proponer un plan, hazlo con naturalidad.' },
    ],
  },
  'loco-y-muerte': {
    ejemplo: 'Supón que preguntas qué hacer con un trabajo que ya no te llena y aparecen La Muerte y El Loco. Esa etapa ya se ha cerrado por dentro, aunque por fuera sigas yendo cada mañana. El Loco añade que lo siguiente no tiene por qué parecerse a lo anterior y que está bien no saber todavía qué será. Nadie te dice que dimitas mañana sin red. Se trata de dejar de alargar algo que ya terminó y empezar a moverte hacia otra cosa.',
    posiciones: {
      pasado: 'Viviste un final importante que te obligó a reinventarte. Mucho de lo que eres hoy nace de aquella despedida y del salto que diste después.',
      presente: 'Estás justo en el umbral, con algo que acaba y otra cosa que asoma. Es normal sentir vértigo, pero quedarte en medio cuesta más que avanzar.',
      futuro: 'Después de cerrar una etapa llegará un cambio de rumbo. Lo que viene será muy distinto a lo que conoces, así que mejor ir ligera de equipaje.',
    },
    invertidas: 'Con La Muerte invertida, el final se resiste. Te cuesta soltar y el cambio se alarga más de la cuenta. Si el invertido es El Loco, el riesgo es huir hacia delante sin haber cerrado bien lo anterior. Con las dos del revés hay estancamiento y miedo a moverse, y el trabajo está en aceptar lo que ya no está.',
    faq: [
      { q: '¿La Muerte y El Loco es mala señal?', r: 'No tiene por qué. La Muerte se refiere a un cambio y no a algo literal, y junto al Loco suele indicar un final que abre la puerta a una vida nueva.' },
      { q: '¿Esta combinación anuncia una ruptura?', r: 'Puede ser el fin de una relación o de una forma de vivirla. Si seguís juntos, lo que acaba es una etapa, y lo que empieza depende de que los dos quieran reinventarse.' },
    ],
  },
  'loco-y-mundo': {
    ejemplo: 'Pongamos que preguntas si aceptar una beca para estudiar fuera y salen El Mundo y El Loco. Es casi una respuesta de manual. Cierras un ciclo con buena nota y se te abre algo nuevo lejos de casa. El Mundo confirma que lo que dejas está completo, así que no te vas a mitad de nada. El Loco pone la aventura y ese no saber del todo qué te espera, que aquí es parte de la gracia.',
    posiciones: {
      pasado: 'Completaste un ciclo y hubo un viaje o un cambio de lugar que te marcó. Aquello te abrió la mirada, y lo sigues notando.',
      presente: 'Estás entre un final bien hecho y un principio que ya asoma. Párate un momento a reconocer lo conseguido antes de cambiar de pantalla.',
      futuro: 'Un viaje, una mudanza o una aventura después de terminar algo con éxito. Lo que hoy cuesta se cerrará bien y dejará sitio a lo nuevo.',
    },
    invertidas: 'Con El Mundo invertido, algo queda sin terminar y te tienta saltar a lo siguiente antes de tiempo. Con El Loco del revés, el viaje o el cambio se hace sin preparación o por pura huida. Si salen las dos invertidas, cierra los cabos sueltos antes de comprar el billete.',
    faq: [
      { q: '¿El Loco y El Mundo hablan de un viaje?', r: 'Es de las lecturas más habituales de esta pareja. Puede ser un viaje literal, una mudanza o un cambio de vida tan grande que se siente como empezar en otro sitio.' },
      { q: '¿Es buena combinación para cambiar de trabajo?', r: 'Sí, sobre todo si has terminado bien una etapa. Te vas en buen momento, y lo nuevo puede ser muy distinto y estimulante.' },
    ],
  },
  'mago-y-sacerdotisa': {
    ejemplo: 'Si preguntas cómo plantear una negociación de sueldo y te salen El Mago y La Sacerdotisa, lo suyo es ir en dos tiempos. Primero escuchas qué dice la otra parte, qué se calla y qué margen intuyes. Después hablas con seguridad y con datos, porque El Mago sabe presentar bien lo que vale. No hay que elegir entre cabeza e intuición. Basta con usarlas en el orden adecuado.',
    posiciones: {
      pasado: 'Te preparaste en silencio, estudiando u observando, y eso hoy te da ventaja. Supiste mirar primero y actuar después, y todavía da fruto.',
      presente: 'Tienes información que otros no ven y sabes usarla. Prepara el terreno con discreción antes de enseñar tus cartas.',
      futuro: 'Se acerca una situación en la que tu intuición marcará la diferencia. Saber cuándo hablar y cuándo callar contará tanto como lo que digas.',
    },
    invertidas: 'Con El Mago invertido, puedes tener la intuición correcta y no atreverte a actuar, o alguien usa lo que sabe para manipular. Con La Sacerdotisa del revés, ignoras una corazonada o hay secretos que enturbian la situación. Si las dos salen invertidas, desconfía de la información que te llega y no decidas a la carrera.',
    faq: [
      { q: '¿El Mago y La Sacerdotisa es buena combinación?', r: 'Sí, es una pareja muy compensada entre acción e intuición. Va especialmente bien para estudiar, investigar, negociar o cualquier tarea que pida preparación y buen olfato.' },
      { q: '¿Qué dicen en el amor?', r: 'Suelen salir con una atracción que tiene mucho por descubrir. Hay interés, pero conviene observar antes de lanzarte y fiarte de lo que ves en los gestos.' },
    ],
  },
  'mago-y-enamorados': {
    ejemplo: 'Pongamos que preguntas si proponer a alguien vivir juntos y salen El Mago y Los Enamorados. La decisión es tuya, y la forma de plantearla cuenta mucho. Desearlo no basta. Hace falta decirlo claro y escuchar la respuesta. Prepara esa conversación, elige bien cuándo tenerla y sé sincera sobre lo que esperas.',
    posiciones: {
      pasado: 'Tomaste por tu cuenta una decisión importante, o hubo una conquista que marcó una etapa. Eso explica buena parte de cómo estás hoy en el amor.',
      presente: 'Tienes delante una elección y puedes influir en cómo sale. Tus palabras y tu actitud van a pesar más de lo que piensas.',
      futuro: 'Llegará una propuesta, una declaración o una asociación en la que tendrás que decidir. Te irá mejor si antes tienes claro lo que quieres.',
    },
    invertidas: 'Si El Mago sale invertido, cuidado con las palabras bonitas que no se sostienen, tuyas o de otra persona. Con Los Enamorados del revés, la elección se complica por dudas, desequilibrio o valores que no encajan. Con las dos invertidas hay más seducción que sinceridad, así que mira los hechos antes de comprometerte.',
    faq: [
      { q: '¿El Mago y Los Enamorados anuncian una relación?', r: 'Anuncian un acercamiento o una conquista, sobre todo si alguien toma la iniciativa. Que se convierta en relación depende de que la elección sea mutua y no una buena estrategia.' },
      { q: '¿Qué significa esta pareja si dudo entre dos opciones?', r: 'La decisión está en tu mano y tienes recursos para tomarla bien. Ponerla en palabras, aunque sea para ti misma, te ayudará a ver cuál es la tuya.' },
    ],
  },
  'mago-y-diablo': {
    ejemplo: 'Si preguntas por una oferta de negocio que suena demasiado bien y salen El Mago y El Diablo, toca ir con pies de plomo. Hay talento y mucha capacidad de convencer, pero quizá al servicio de intereses que no son los tuyos. Lee la letra pequeña, pregunta qué pasa si sale mal y no te dejes llevar por la prisa que te meten. Puede que también vaya por ti, por la tentación de usar tu encanto para algo que en el fondo no te conviene.',
    posiciones: {
      pasado: 'Alguien te convenció con promesas que luego no cumplió, o fuiste tú quien cedió a una ambición poco sana. Reconocerlo ayuda a no repetirlo.',
      presente: 'Hay un juego de poder o una tentación muy atractiva sobre la mesa. Tienes habilidad para salir bien parada, siempre que mires en frío lo que te ofrecen.',
      futuro: 'Cuidado con una propuesta seductora que puede atarte más de lo que parece. Prepárate para hacer preguntas incómodas antes de aceptar.',
    },
    invertidas: 'Con El Diablo invertido, empiezas a ver el truco y a librarte de una dinámica que te ataba. Si el invertido es El Mago, la manipulación se nota más o el talento se pierde en excusas. Con las dos del revés, la trampa queda al descubierto y ya puedes cortar.',
    faq: [
      { q: '¿El Mago y El Diablo es mala combinación?', r: 'Es más una alerta que mala suerte. Avisa de manipulación o ambición desmedida, y tu propio ingenio es lo que te salva de caer en ella.' },
      { q: '¿Esta pareja habla de alguien que miente?', r: 'Puede ser alguien que dice lo que quieres oír para conseguir algo. Fíjate durante un tiempo en si lo que hace coincide con lo que dice.' },
    ],
  },
  'sacerdotisa-y-ermitano': {
    ejemplo: 'Si preguntas si ya toca buscar pareja después de una relación larga y salen La Sacerdotisa y El Ermitaño, la respuesta es que aún necesitas tiempo para ti. Tampoco es un no para siempre. Es una pausa para entender qué quieres. Aprovecha para escribir, leer o pasear sola y fijarte en lo que vas sintiendo. Cuando vuelvas a abrirte, sabrás mejor quién eres y qué no quieres repetir.',
    posiciones: {
      pasado: 'Hubo un tiempo de retiro o de estudio que te dejó una sabiduría que hoy usas. Aquel silencio no fue tiempo perdido.',
      presente: 'La respuesta está en ti, más que fuera. Baja el ritmo, quita ruido y no te metas prisa.',
      futuro: 'Se acerca una temporada más tranquila y de mirar hacia dentro, quizá ligada a una formación o a un cambio interior. Te servirá para decidir más de acuerdo contigo.',
    },
    invertidas: 'Con La Sacerdotisa invertida, desoyes tu intuición o te llenas de ruido para no escucharte. Si El Ermitaño sale del revés, la soledad deja de ser elegida y se vuelve aislamiento. Con las dos invertidas, busca apoyo en alguien de confianza en vez de encerrarte.',
    faq: [
      { q: '¿La Sacerdotisa y El Ermitaño significan soledad?', r: 'Más bien un tiempo para estar contigo, sin tristeza de fondo. Esa soledad sirve para entenderte y prepararte para lo siguiente.' },
      { q: '¿Es buena combinación para estudiar?', r: 'Sí, de las mejores para estudio, investigación u oposiciones. Ayuda a concentrarte y a trabajar con constancia lejos de distracciones.' },
    ],
  },
  'sacerdotisa-y-luna': {
    ejemplo: 'Imagina que preguntas si la otra persona te oculta algo y salen La Sacerdotisa y La Luna. Sí, hay cosas sin decir, pero tu imaginación puede estar rellenando los huecos. Lo sensato es apuntar lo que percibes y separarlo de lo que temes. Y después, mejor una conversación tranquila que una conclusión sacada de noche y con el corazón acelerado.',
    posiciones: {
      pasado: 'Hubo una época de confusión o un secreto que entonces no supiste ver. Hoy puedes mirarlo con más perspectiva y entender qué te decía tu intuición.',
      presente: 'Tienes la sensibilidad a flor de piel y captas más de lo que se dice. Hazle caso, pero no lo tomes por certeza hasta tener datos.',
      futuro: 'Acabará saliendo información oculta, o tendrás sueños y corazonadas que te darán pistas. No te adelantes a los hechos.',
    },
    invertidas: 'Con La Luna invertida, la niebla empieza a levantarse y un engaño o un miedo pierde fuerza. Si es La Sacerdotisa la invertida, te cuesta fiarte de lo que sientes o alguien guarda un secreto con mala intención. Con las dos invertidas hay mucha confusión, y lo prudente es no decidir nada importante hasta verlo más claro.',
    faq: [
      { q: '¿La Sacerdotisa y La Luna hablan de engaño?', r: 'Pueden señalar secretos o información que no se muestra, y no siempre con mala intención. Ojo también con tus miedos, que pueden hacerte ver más de lo que hay.' },
      { q: '¿Qué hago si me sale esta combinación?', r: 'Observa, apunta lo que sientes y espera a tener hechos antes de actuar. Esta pareja premia la paciencia y castiga las conclusiones precipitadas.' },
    ],
  },
  'emperatriz-y-emperador': {
    ejemplo: 'Supón que preguntas si una relación tiene futuro y salen La Emperatriz y El Emperador. Es una respuesta muy esperanzadora. Hay cariño y también ganas de construir algo con orden y compromiso. Toca hablar de planes concretos, como convivir, organizar el dinero o pensar en familia. Si uno pone todo el afecto y el otro toda la estructura, el reto es que cada uno aprenda un poco del papel del otro.',
    posiciones: {
      pasado: 'Aquí entran tu familia de origen y los modelos de pareja que aprendiste. O una época estable que te dio raíces.',
      presente: 'Tienes una base sólida sobre la que construir. Si hay acuerdos que formalizar o tareas que repartir, ahora sale bien.',
      futuro: 'Estabilidad, compromiso o un proyecto común que crece con cuidado y organización. Lo que sembréis juntos tiene opciones de durar.',
    },
    invertidas: 'Con La Emperatriz invertida, falta ternura o alguien se descuida por cuidar a los demás. Si El Emperador sale del revés, aparecen el exceso de control o la rigidez. Con las dos invertidas, la relación puede caer en luchas de poder, y conviene revisar quién decide qué y por qué.',
    faq: [
      { q: '¿La Emperatriz y El Emperador anuncian boda o familia?', r: 'Es una de las combinaciones clásicas de pareja estable y familia. No pone fechas, pero hay terreno firme para dar pasos importantes.' },
      { q: '¿Qué dicen en el trabajo?', r: 'Creatividad y gestión bien repartidas. Funciona muy bien en negocios familiares o equipos donde uno tiene las ideas y otro organiza.' },
    ],
  },
  'emperatriz-y-enamorados': {
    ejemplo: 'Pongamos que preguntas cómo va a evolucionar una relación que acaba de empezar y salen La Emperatriz y Los Enamorados. Es una tirada muy cálida. Lo que hay es real y tiene todo para crecer. Disfrútalo sin agobios, cuida los detalles y deja que la confianza se asiente. Si llevas tiempo en pareja, puede ser un nuevo impulso, como un proyecto común o una ilusión compartida.',
    posiciones: {
      pasado: 'Tuviste una relación muy querida que te enseñó lo que es sentirte cuidada. Todavía influye en lo que buscas hoy.',
      presente: 'El amor está fértil y generoso. Lo que siembres ahora, en gestos y en palabras, tiene muchas opciones de florecer.',
      futuro: 'Una unión que crece, un paso importante en pareja o la llegada de alguien nuevo a la familia. Lo que viene es alegre y lleno de cariño.',
    },
    invertidas: 'Si La Emperatriz sale invertida, el cariño puede volverse dependencia o descuido de una misma. Con Los Enamorados del revés, hay dudas o uno aporta mucho más que el otro. Con las dos invertidas la ilusión existe, pero hace falta más reciprocidad para que se sostenga.',
    faq: [
      { q: '¿La Emperatriz y Los Enamorados anuncian embarazo?', r: 'Tradicionalmente se asocia a la fertilidad y a la familia. Aun así, tómalo como una tendencia simbólica y no como una predicción literal.' },
      { q: '¿Es buena señal si estoy sola?', r: 'Sí. Estás abierta al amor y a encuentros con mucha ternura. Si te tratas bien, atraerás a gente que también te trate bien.' },
    ],
  },
  'emperatriz-y-sol': {
    ejemplo: 'Imagina que preguntas por un proyecto creativo, como abrir un pequeño taller, y salen La Emperatriz y El Sol. Difícil pedir una respuesta mejor. Lo que pones en marcha tiene vida, crece y además se ve. Enseña tu trabajo sin esconderte y disfruta haciéndolo. Si la pregunta iba de familia, trae alegría y buen ambiente en casa.',
    posiciones: {
      pasado: 'Hubo una época feliz, quizá en la infancia o en un momento de mucha creatividad. Ese recuerdo te da fuerza y puedes volver a él.',
      presente: 'Estás en una temporada luminosa en la que las cosas florecen. Aprovéchala para crear, compartir y celebrar.',
      futuro: 'Buenas noticias, crecimiento y alegría, muchas veces ligadas a la familia o a un proyecto propio. Lo que cuidas ahora dará frutos visibles.',
    },
    invertidas: 'Con El Sol invertido, la alegría llega más apagada o con algo de retraso. Si La Emperatriz sale del revés, te faltan fuerzas para cuidar lo que crece o te vuelcas tanto en otros que te olvidas de ti. Con las dos invertidas lo bueno sigue ahí, aunque pide más paciencia y menos exigencia.',
    faq: [
      { q: '¿La Emperatriz y El Sol es buena combinación?', r: 'De las más positivas del tarot. Une abundancia y alegría, y suele anunciar buenas noticias y proyectos que crecen.' },
      { q: '¿Qué significan para la familia?', r: 'Un hogar alegre, reuniones felices y a veces la llegada de un nuevo miembro. También una buena época con los hijos o con la infancia en general.' },
    ],
  },
  'emperador-y-justicia': {
    ejemplo: 'Supón que preguntas por un trámite con la administración o un contrato de alquiler y salen El Emperador y La Justicia. Todo va a depender de los hechos y de los papeles. Si lo tienes en regla, el asunto se resolverá de forma justa, aunque quizá tarde algo. En la práctica, reúne documentos, revisa plazos y no dejes nada a la improvisación. Si hay otra parte implicada, ponlo todo por escrito desde el principio.',
    posiciones: {
      pasado: 'Un acuerdo, una sentencia o una norma marcó tu situación actual. Sus consecuencias siguen ahí y conviene conocerlas bien.',
      presente: 'Te toca tomar decisiones serias y formales. Si actúas con orden y honradez, partes en buena posición.',
      futuro: 'Un contrato, una resolución o una autoridad que decidirá sobre algo tuyo. Si te preparas bien, puedes esperar un resultado justo.',
    },
    invertidas: 'Si La Justicia sale invertida, puede haber un trato injusto, retrasos o falta de objetividad. Con El Emperador del revés, la autoridad se vuelve rígida o abusa de su posición. Con las dos invertidas, asesórate bien y no firmes nada que no entiendas.',
    faq: [
      { q: '¿El Emperador y La Justicia es buena señal en un juicio?', r: 'Es favorable si tienes razón y los papeles en orden. Se van a valorar los hechos, así que tu preparación será clave.' },
      { q: '¿Qué dicen en el amor?', r: 'La relación necesita acuerdos claros y responsabilidad. También pueden salir temas legales, como convivencia, separación de bienes o custodia.' },
    ],
  },
  'emperador-y-torre': {
    ejemplo: 'Pongamos que preguntas por la estabilidad de tu empresa y salen El Emperador y La Torre. Se viene una sacudida en la estructura, con cambios en la dirección, reorganización o decisiones que nadie esperaba. No te aferres a cómo eran las cosas y ve preparando alternativas. Si la pregunta era personal, quizá el problema sea tu propia necesidad de control, que ya empieza a no servirte.',
    posiciones: {
      pasado: 'Se vino abajo algo que parecía muy sólido, como un trabajo, una autoridad o una forma de vida. Te obligó a reconstruir desde otra base.',
      presente: 'Una estructura rígida está crujiendo. Cuanto más intentes sostenerla a la fuerza, más brusco será el cambio.',
      futuro: 'Algo que dabas por seguro va a cambiar de repente. Con un plan B y algo de flexibilidad saldrás más fuerte.',
    },
    invertidas: 'Con La Torre invertida, el cambio llega más despacio o lo vas esquivando sin resolverlo. Si El Emperador sale del revés, el problema es el exceso de control o una autoridad que no sabe ceder. Con las dos invertidas la crisis se aplaza, pero lo que no funciona sigue ahí.',
    faq: [
      { q: '¿El Emperador y La Torre es mala señal?', r: 'Anuncian un cambio brusco, y eso suele incomodar. Pero lo que cae es lo que estaba demasiado rígido, y deja sitio a algo más sano.' },
      { q: '¿Hablan de despido?', r: 'Pueden salir con cambios en la empresa, reorganizaciones o salidas inesperadas. No es seguro, aunque no está de más cuidar tus contactos y tus opciones.' },
    ],
  },
  'sumo-sacerdote-y-enamorados': {
    ejemplo: 'Imagina que preguntas si tu pareja quiere comprometerse y salen El Sumo Sacerdote y Los Enamorados. Hay ganas de formalizar la relación y de compartir valores a largo plazo. Puede ser una pedida, mudaros juntos o presentar a la otra persona a la familia. Merece la pena hablar de qué significa el compromiso para cada uno, porque no todo el mundo lo entiende igual.',
    posiciones: {
      pasado: 'Asumiste un compromiso, o tu entorno te transmitió unas ideas sobre el amor. Esos valores siguen pesando en lo que eliges.',
      presente: 'La relación pide pasos claros y coherentes con lo que crees. Si hay que hablar de futuro, hazlo con sinceridad.',
      futuro: 'Una unión que se hace oficial, un acuerdo serio o una decisión tomada desde tus principios. Lo que elijas tendrá base firme.',
    },
    invertidas: 'Si El Sumo Sacerdote sale invertido, el compromiso se vive como una obligación o choca con lo que esperan los demás. Con Los Enamorados del revés, hay dudas sobre la elección o valores que no encajan. Con las dos invertidas, pregúntate si quieres comprometerte o si sientes que debes hacerlo.',
    faq: [
      { q: '¿El Sumo Sacerdote y Los Enamorados anuncian boda?', r: 'Es la combinación tradicional de la boda o el compromiso formal. No pone fechas, pero la relación tiende a hacerse oficial.' },
      { q: '¿Qué significa si no tengo pareja?', r: 'Puede venir alguien con valores parecidos a los tuyos, o una relación que nace con intención seria. Antes de elegir, ten claro qué buscas.' },
    ],
  },
  'enamorados-y-muerte': {
    ejemplo: 'Supón que preguntas si deberías intentar volver con tu ex y salen Los Enamorados y La Muerte. Aquella historia, tal como era, ya ha terminado. Si hubiera un reencuentro, tendría que ser algo nuevo y no una vuelta a lo de antes. La pregunta honesta es qué echas de menos, si a la persona o a quien eras tú en esa relación.',
    posiciones: {
      pasado: 'Terminó una relación o una elección que te cambió por dentro. Ese cierre te dejó cosas aprendidas que hoy pesan en tus decisiones.',
      presente: 'Una relación o un acuerdo está cambiando de arriba abajo. Lo que fue ya no vuelve, y lo que venga depende de lo que elijas ahora.',
      futuro: 'Tomarás una decisión que cerrará una etapa, en el amor o en el trabajo. Ese final deja sitio a algo que encaja mejor con quien eres.',
    },
    invertidas: 'Con La Muerte invertida, el final se alarga y se sigue juntos por costumbre o por miedo al vacío. Si los invertidos son Los Enamorados, la decisión no llega o se toma desde la duda. Las dos del revés señalan una relación estancada, y hace falta valor para cerrarla o para cambiarla a fondo.',
    faq: [
      { q: '¿Los Enamorados y La Muerte significan ruptura?', r: 'Pueden indicar una ruptura, pero también una relación que cambia tanto que parece otra. Lo que siempre marcan es el final de una forma de estar juntos.' },
      { q: '¿Hay esperanza de reconciliación?', r: 'Solo si los dos aceptan empezar de nuevo sin repetir lo anterior. Esta pareja de cartas no favorece volver atrás. Favorece cambiar.' },
    ],
  },
  'enamorados-y-diablo': {
    ejemplo: 'Pongamos que preguntas por qué no consigues olvidar a alguien que te hace daño y salen Los Enamorados y El Diablo. Es un vínculo con mucha atracción y poca libertad. Hay amor y también enganche, y por eso cuesta tanto soltar. Mira qué te da esa relación y qué te quita, y busca apoyo si sientes que sola no puedes.',
    posiciones: {
      pasado: 'Viviste una relación muy intensa que te ató más de lo que querías. Entender aquel enganche te ayuda a no repetirlo.',
      presente: 'Una pasión o una tentación muy fuerte está condicionando tus decisiones. Pregúntate si eliges con libertad o por miedo a perder.',
      futuro: 'Cuidado con una atracción intensa que puede volverse dependencia. Entra con los ojos abiertos y marca tus límites desde el principio.',
    },
    invertidas: 'Con El Diablo invertido, empiezas a romper las cadenas y a recuperar tu libertad. Si los invertidos son Los Enamorados, la relación se desequilibra y aparecen reproches o celos. Con las dos invertidas la dependencia salta a la vista, y es buen punto para decidir alejarte.',
    faq: [
      { q: '¿Los Enamorados y El Diablo hablan de infidelidad?', r: 'Pueden señalar una tentación o un triángulo, aunque no siempre. Lo más habitual es una relación con mucha química en la que falta libertad.' },
      { q: '¿Es una relación tóxica?', r: 'Hay riesgo de dependencia o control, así que fíjate en cómo te sientes en ese vínculo. Si te sientes pequeña o atrapada, ponte tú primero.' },
    ],
  },
  'enamorados-y-torre': {
    ejemplo: 'Imagina que preguntas cómo va tu relación y salen Los Enamorados y La Torre. Se viene una sacudida, ya sea una discusión fuerte, un descubrimiento o una verdad que no se puede seguir esquivando. Eso no quiere decir que todo se acabe. Lo que estaba mal sujeto va a caer. Prepárate para hablar con sinceridad y no tomes decisiones definitivas en caliente.',
    posiciones: {
      pasado: 'Una ruptura repentina o un desengaño te sacudió. Te obligó a replantearte qué quieres en el amor.',
      presente: 'Hay una crisis abierta o a punto de estallar. Mirar la verdad de frente, aunque duela, es lo que te permitirá decidir bien.',
      futuro: 'Viene un cambio inesperado en una relación o una asociación. Cuando caiga lo que tenga que caer, verás qué merece la pena reconstruir.',
    },
    invertidas: 'Si La Torre sale invertida, la crisis se contiene o se aplaza, pero el problema sigue ahí. Con Los Enamorados del revés, la duda y el desequilibrio pesan más que el amor. Con las dos invertidas se evita la conversación difícil, y eso alarga el malestar.',
    faq: [
      { q: '¿Los Enamorados y La Torre significan ruptura?', r: 'Pueden anunciarla, sobre todo si la relación ya tenía grietas. Otras veces es una crisis que, bien llevada, deja una relación más sincera.' },
      { q: '¿Qué hago si me sale esta combinación?', r: 'Escucha lo que salga a la luz sin reaccionar en el acto. Si te das tiempo antes de decidir, elegirás con la cabeza y no con la rabia.' },
    ],
  },
  'enamorados-y-sol': {
    ejemplo: 'Supón que preguntas si la persona que te gusta siente lo mismo y salen Los Enamorados y El Sol. Pocas respuestas son tan claras. Hay interés real y no hace falta jugar a adivinar. Muéstrate tal como eres y disfrútalo sin miedo. Si ya tienes pareja, es una temporada feliz, con planes y risas compartidas.',
    posiciones: {
      pasado: 'Hubo una historia de amor feliz o una decisión acertada que te trajo alegría. Te sirve para acordarte de lo que mereces.',
      presente: 'El amor se vive con sinceridad y ligereza. Da pasos, celebra y di lo que sientes.',
      futuro: 'Un encuentro feliz, una relación que se asienta o una elección que te hará sonreír. En el amor, lo que viene pinta muy bien.',
    },
    invertidas: 'Con El Sol invertido, la alegría está, pero algo la empaña, como unas expectativas muy altas o pequeños malentendidos. Si Los Enamorados salen invertidos, hay dudas o desequilibrio en la elección. Con las dos invertidas, al amor le falta sinceridad para recuperar su brillo.',
    faq: [
      { q: '¿Los Enamorados y El Sol significan que me quiere?', r: 'Es de las combinaciones más favorables para el amor correspondido. Hay sinceridad y alegría compartida, así que la respuesta suele ser un sí.' },
      { q: '¿Es buena combinación para el trabajo?', r: 'Sí. Colaboraciones que funcionan y la elección de algo que te ilusiona. Cuando trabajas en lo que te gusta, se nota en los resultados.' },
    ],
  },
  'carro-y-fuerza': {
    ejemplo: 'Pongamos que preguntas si vas a aprobar unas oposiciones que llevas años preparando y salen El Carro y La Fuerza. Es una victoria que se gana con constancia y sangre fría. La suerte pinta poco aquí. Lo que cuenta es seguir adelante sin que los nervios te desborden. Cuida el ritmo, mantén la rutina y confía en todo lo que ya has hecho. Descansar bien también es prepararse.',
    posiciones: {
      pasado: 'Superaste un reto difícil a base de voluntad y paciencia. Es la prueba de lo que eres capaz de conseguir.',
      presente: 'Estás en plena carrera hacia una meta y tienes fuerza para llegar. Se trata de manejar los nervios, no de tragártelos.',
      futuro: 'Un logro que llegará después de un esfuerzo largo. Si no pierdes la calma ni el rumbo, la victoria está cerca.',
    },
    invertidas: 'Si El Carro sale invertido, el avance se frena porque te dispersas o quieres ir demasiado rápido. Con La Fuerza del revés, la inseguridad o la impaciencia te quitan fuelle. Con las dos invertidas, para, recupera fuerzas y reorganiza el plan antes de seguir.',
    faq: [
      { q: '¿El Carro y La Fuerza es buena señal para un examen?', r: 'Sí, de las mejores combinaciones para retos largos y exámenes. Tu constancia y tu forma de controlar los nervios te llevarán al resultado.' },
      { q: '¿Qué dicen en el amor?', r: 'Una relación que supera dificultades con paciencia y firmeza. También saber marcar el rumbo sin imponerte a la otra persona.' },
    ],
  },
  'carro-y-sol': {
    ejemplo: 'Imagina que preguntas si conseguirás el ascenso por el que llevas meses trabajando y salen El Carro y El Sol. La tirada es muy optimista. Hay avance, hay éxito y además se va a notar. Sigue con decisión, enseña tus logros y no esperes a que otros te den el empujón. Si la pregunta era sobre un viaje, lo pinta alegre y sin grandes contratiempos.',
    posiciones: {
      pasado: 'Un triunfo o un viaje feliz te dio confianza. Lo que lograste entonces todavía te empuja.',
      presente: 'El viento sopla a favor y las cosas avanzan bien. Muévete, decide y celebra lo que sale bien.',
      futuro: 'Una meta alcanzada, un reconocimiento o un viaje que te traerá alegría. Vas bien encaminada.',
    },
    invertidas: 'Con El Carro invertido, el éxito llega con retrasos o te falta dirección para aprovecharlo. Si El Sol sale del revés, la alegría se apaga un poco por cansancio o por expectativas demasiado altas. Con las dos invertidas el logro sigue a tu alcance, pero baja el ritmo y revisa el rumbo.',
    faq: [
      { q: '¿El Carro y El Sol es buena combinación?', r: 'Es de las más positivas para el éxito y los logros. Anuncia avance, buen ánimo y resultados visibles.' },
      { q: '¿Hablan de un viaje?', r: 'Sí, a menudo salen con un viaje feliz o un reencuentro tras un tiempo lejos. También con un cambio de lugar que llega en buen momento.' },
    ],
  },
};
