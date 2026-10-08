// Textos de la ficha de cada signo. Los datos básicos (fechas, elemento, regente, arcano) están en signos.ts.
export interface FichaSigno {
  intro: string; // 2 o 3 frases: cómo es el signo en general
  luces: string[]; // 4 virtudes, 2 a 5 palabras cada una
  sombras: string[]; // 4 puntos débiles, 2 a 5 palabras cada una
  personalidad: string; // párrafo de 3 a 5 frases
  trabajo: string; // 2 o 3 frases: trabajo y dinero
  amistad: string; // 2 frases
  carta: string; // 2 o 3 frases: por qué la tradición le asocia su arcano mayor (el de signos.ts) y qué le enseña esa carta
  consejo: string; // 1 frase
}

export const fichasSignos: Record<string, FichaSigno> = {
  aries: {
    intro: 'Aries abre la rueda del zodiaco y tiene la energía de todo lo que empieza. Es fuego cardinal: impulso, valentía y ganas de ir primero. Donde hay un reto, allí aparece.',
    luces: ['Valentía ante lo nuevo', 'Iniciativa constante', 'Sinceridad sin dobleces', 'Energía contagiosa'],
    sombras: ['Impaciencia', 'Prisa por decidir', 'Enfados rápidos', 'Poca constancia al final'],
    personalidad: 'Aries vive en presente y le cuesta esperar. Prefiere equivocarse actuando que acertar sin moverse, y eso le lleva a abrir caminos que otras personas no se atreven a pisar. Su franqueza puede sonar brusca, pero rara vez hay mala intención detrás. Se enciende deprisa y se calma igual de rápido. Su gran aprendizaje es terminar lo que empieza.',
    trabajo: 'Aries brilla al frente de proyectos nuevos, en puestos con autonomía y en entornos donde se premia la decisión. Con el dinero se deja llevar por el impulso: gana con energía y gasta con la misma alegría. Le conviene tener a alguien que se ocupe de los detalles.',
    amistad: 'Como amistad, Aries es la persona que propone el plan y la primera en defenderte si alguien te falla. No guarda rencor, pero necesita que le hablen claro.',
    carta: 'La tradición une a Aries con El Emperador porque los dos hablan de mando, iniciativa y de la fuerza de Marte puesta al servicio de una voluntad. La carta le enseña que el impulso necesita estructura: el poder de verdad no está en empujar, sino en sostener lo que se ha creado.',
    consejo: 'Antes de lanzarte a lo siguiente, cierra bien lo que tienes entre manos.',
  },
  tauro: {
    intro: 'Tauro es tierra fija: calma, constancia y los pies bien puestos en el suelo. Disfruta de lo sencillo y construye despacio, pero lo que levanta suele durar.',
    luces: ['Paciencia a prueba', 'Lealtad duradera', 'Sentido práctico', 'Disfrute de lo sencillo'],
    sombras: ['Terquedad', 'Resistencia al cambio', 'Apego a lo material', 'Rencor silencioso'],
    personalidad: 'Tauro necesita tiempo para todo: para decidir, para confiar y para cambiar de opinión. Esa lentitud no es pereza, es prudencia. Valora la comodidad, la buena mesa, la música y el contacto con la naturaleza. Cuando siente presión se cierra en banda, y hace falta mucha paciencia para moverle. A cambio, su palabra vale como un contrato.',
    trabajo: 'Tauro rinde en trabajos estables, con resultados visibles y un ritmo que pueda sostener. Es de los signos que mejor administran el dinero: ahorra, invierte con cabeza y le gusta saber que tiene un colchón. Le cuesta arriesgar, aunque a veces convendría.',
    amistad: 'Tauro tiene pocas amistades, pero para toda la vida. Es la persona que te invita a cenar a su casa cuando tienes un mal día.',
    carta: 'Tauro se asocia con El Sumo Sacerdote porque la carta representa la tradición, lo que se transmite con paciencia y lo que se sostiene en el tiempo. Le enseña que su firmeza puede ser sabiduría si sabe escuchar, y obstinación si se niega a aprender algo nuevo.',
    consejo: 'Permítete un cambio pequeño: no todo lo nuevo amenaza lo que has construido.',
  },
  geminis: {
    intro: 'Géminis es aire mutable: curiosidad, palabra y movimiento. Le interesa casi todo y aprende deprisa. Su mente nunca se queda quieta.',
    luces: ['Curiosidad sin fin', 'Ingenio rápido', 'Facilidad para comunicar', 'Capacidad de adaptación'],
    sombras: ['Dispersión', 'Inconstancia', 'Nerviosismo', 'Dificultad para comprometerse'],
    personalidad: 'Géminis piensa en voz alta y salta de un tema a otro con una facilidad que a veces desconcierta. Tiene muchas caras porque tiene muchos intereses, no por falsedad. Le aburre la rutina y necesita estímulos nuevos para sentir que la vida avanza. Su reto es profundizar: quedarse lo suficiente en algo como para dominarlo.',
    trabajo: 'Géminis destaca en la comunicación, la enseñanza, las ventas, la escritura y cualquier trabajo con variedad. Con el dinero es ágil pero poco ordenado: entra por un lado y sale por otro. Le ayuda tener más de una fuente de ingresos.',
    amistad: 'Con Géminis nunca te aburres: siempre tiene una anécdota, un plan o una idea loca. Es una amistad ligera y divertida que también sabe escuchar cuando hace falta.',
    carta: 'La tradición asocia a Géminis con Los Enamorados porque la carta habla de dualidad, de encuentro entre dos y de la elección. Le enseña que no puede tenerlo todo a la vez: elegir algo también es decir que no a otras cosas, y ahí empieza el compromiso.',
    consejo: 'Elige una sola cosa esta semana y llévala hasta el final.',
  },
  cancer: {
    intro: 'Cáncer es agua cardinal: siente mucho y actúa para proteger lo que quiere. Su mundo gira en torno a la familia, el hogar y la memoria. Bajo su caparazón hay una enorme ternura.',
    luces: ['Instinto protector', 'Memoria afectiva', 'Intuición fina', 'Capacidad de cuidar'],
    sombras: ['Susceptibilidad', 'Cambios de humor', 'Apego al pasado', 'Tendencia a encerrarse'],
    personalidad: 'Cáncer percibe el ambiente antes de que nadie diga nada. Se mueve como el cangrejo: avanza de lado, tantea y solo se muestra del todo cuando se siente a salvo. Recuerda los detalles, los gestos y también las heridas. Su humor cambia con facilidad, como las mareas que gobierna la Luna. Cuando confía, es de las presencias más cálidas del zodiaco.',
    trabajo: 'Cáncer trabaja bien en profesiones de cuidado, en la educación, la hostelería o cualquier entorno que sienta como una segunda casa. Con el dinero tiene previsión: ahorra pensando en los suyos y le tranquiliza tener reservas.',
    amistad: 'Cáncer convierte a sus amistades en familia y se acuerda de cada cumpleaños. Si le fallas, tarda en perdonar, porque lo siente todo muy hondo.',
    carta: 'Cáncer se asocia con El Carro porque la carta muestra a alguien protegido por una armadura que avanza con determinación, igual que el cangrejo con su caparazón. Le enseña que la sensibilidad no está reñida con la dirección: puede sentir mucho y, aun así, llevar las riendas de su camino.',
    consejo: 'Cuídate con la misma ternura con la que cuidas a los demás.',
  },
  leo: {
    intro: 'Leo es fuego fijo, regido por el Sol: calor, presencia y ganas de brillar. Tiene un corazón grande y no lo esconde. Allí donde entra, se nota.',
    luces: ['Generosidad', 'Confianza en sí', 'Creatividad', 'Lealtad a los suyos'],
    sombras: ['Orgullo herido', 'Necesidad de aplauso', 'Dramatismo', 'Dificultad para ceder'],
    personalidad: 'Leo vive la vida como un escenario, y no por vanidad sino porque disfruta compartiendo su luz. Le gusta celebrar, organizar, animar a la gente y sentirse reconocido. Su orgullo es su punto débil: le cuesta pedir perdón y aceptar críticas. Cuando se siente valorado, saca lo mejor de quienes le rodean.',
    trabajo: 'Leo encaja en puestos de liderazgo, en el mundo creativo y en todo lo que tenga público. Con el dinero tiene la mano abierta: le gusta darse caprichos e invitar, así que le conviene un presupuesto que proteja su generosidad.',
    amistad: 'Leo es la amistad que te hace sentir especial y que celebra tus logros como si fueran suyos. Pide a cambio lealtad y un poco de atención.',
    carta: 'La tradición asocia a Leo con La Fuerza, la carta en la que una figura amansa a un león con suavidad. Le enseña que el poder verdadero no necesita rugir: dominar su orgullo y su impulso con calma le hace mucho más fuerte que imponerse.',
    consejo: 'Brilla sin esperar aplausos: tu luz no depende de que alguien la mire.',
  },
  virgo: {
    intro: 'Virgo es tierra mutable: observa, analiza y mejora lo que toca. Le gusta ser útil y hacer las cosas bien. Su mente práctica encuentra soluciones donde otros ven caos.',
    luces: ['Atención al detalle', 'Sentido del servicio', 'Mente analítica', 'Trabajo constante'],
    sombras: ['Perfeccionismo', 'Autoexigencia excesiva', 'Crítica fácil', 'Preocupación constante'],
    personalidad: 'Virgo se fija en todo, también en sus propios fallos, y eso le hace muy exigente consigo. Prefiere los hechos a las promesas y la discreción a las grandes palabras. Le tranquilizan el orden, las listas y las rutinas que funcionan. Detrás de su aparente frialdad hay alguien que se preocupa mucho por los demás. Su aprendizaje es aceptar que lo suficientemente bueno también vale.',
    trabajo: 'Virgo destaca en la salud, la gestión, la edición, el análisis y cualquier trabajo que pida precisión. Con el dinero tiene mucho cuidado: compara, ahorra y rara vez se deja llevar por un impulso.',
    amistad: 'Virgo es la amistad que te ayuda a mudarte, revisa tu currículum y se acuerda de lo que le contaste hace meses. Su forma de querer es estar presente.',
    carta: 'Virgo se asocia con El Ermitaño porque la carta representa la búsqueda interior, el estudio paciente y la lámpara que ilumina paso a paso. Le enseña que retirarse un tiempo no es aislarse: en el silencio encuentra la claridad que el ruido le quita.',
    consejo: 'Sé contigo tan comprensiva como lo eres con las personas que quieres.',
  },
  libra: {
    intro: 'Libra es aire cardinal, regido por Venus: busca armonía, belleza y justicia. Tiene un don para el trato con la gente y para ver los dos lados de cada asunto.',
    luces: ['Diplomacia', 'Sentido de la justicia', 'Buen gusto', 'Facilidad para conectar'],
    sombras: ['Indecisión', 'Miedo al conflicto', 'Dependencia de la aprobación', 'Complacer en exceso'],
    personalidad: 'Libra necesita que las cosas estén en equilibrio, tanto en su casa como en sus relaciones. Escucha todas las versiones antes de opinar y eso le da un gran sentido de la justicia, aunque también le cuesta decidir. Le incomodan las discusiones y a veces calla lo que piensa por no romper la paz. Tiene sensibilidad estética y disfruta de todo lo bonito. Su reto es aprender a elegir aunque alguien quede descontento.',
    trabajo: 'Libra encaja en el derecho, la mediación, el diseño, las relaciones públicas y los trabajos en equipo. Con el dinero puede gastar en belleza y caprichos, pero también sabe negociar muy bien un precio.',
    amistad: 'Libra es la amistad que pone paz en el grupo y siempre tiene una palabra amable. Le cuesta decir que no, así que conviene preguntarle de verdad qué le apetece.',
    carta: 'La tradición asocia a Libra con La Justicia, la carta de la balanza y la espada. Le enseña que el equilibrio no consiste en contentar a todo el mundo, sino en decidir con honestidad y asumir las consecuencias de lo que elige.',
    consejo: 'Di lo que piensas con amabilidad, pero dilo.',
  },
  escorpio: {
    intro: 'Escorpio es agua fija: emociones profundas, voluntad firme y una mirada que llega hasta el fondo. No hay nada superficial en su forma de ser. Vive cada cosa con intensidad.',
    luces: ['Intensidad emocional', 'Capacidad de regenerarse', 'Intuición penetrante', 'Determinación'],
    sombras: ['Desconfianza', 'Celos', 'Tendencia al control', 'Dificultad para perdonar'],
    personalidad: 'Escorpio observa mucho y muestra poco. Le cuesta abrirse porque sabe lo que duele una traición, y por eso pone a prueba a quien se le acerca. Le atraen los misterios, lo oculto y las verdades incómodas. Tiene una enorme capacidad para levantarse después de una caída y salir transformado. Su reto es soltar el control y confiar sin vigilar.',
    trabajo: 'Escorpio rinde en la investigación, la psicología, la medicina, las finanzas y cualquier trabajo que pida ir al fondo de las cosas. Con el dinero tiene estrategia y discreción: sabe gestionar recursos, propios y ajenos.',
    amistad: 'Escorpio tiene pocas amistades íntimas, pero darían la cara por ti en cualquier situación. Guarda tus secretos como si fueran suyos.',
    carta: 'Escorpio se asocia con La Muerte porque la carta no habla de un final literal, sino de transformación: algo termina para que otra cosa pueda nacer. Le enseña que no tiene que aferrarse a lo que ya cumplió su ciclo, porque soltar también es una forma de poder.',
    consejo: 'Deja ir algo que ya no te sirve y mira qué ocupa su lugar.',
  },
  sagitario: {
    intro: 'Sagitario es fuego mutable, regido por Júpiter: optimismo, aventura y sed de sentido. Mira siempre más allá del horizonte. Le mueven las preguntas grandes.',
    luces: ['Optimismo', 'Espíritu aventurero', 'Sinceridad', 'Amplitud de miras'],
    sombras: ['Impaciencia con la rutina', 'Exceso de franqueza', 'Promesas que no cumple', 'Tendencia a huir'],
    personalidad: 'Sagitario necesita moverse, viajar, aprender y encontrarle un porqué a la vida. Contagia buen humor y suele ver la parte positiva incluso en los momentos difíciles. Dice lo que piensa sin filtro, a veces con más verdad que tacto. Le agobian los límites y las obligaciones repetitivas. Su reto es comprometerse sin sentir que pierde libertad.',
    trabajo: 'Sagitario encaja en la enseñanza, los viajes, la edición, la filosofía, el deporte o cualquier trabajo con horizonte amplio. Con el dinero tiene la mano abierta y a veces demasiado optimismo con lo que vendrá.',
    amistad: 'Sagitario es la amistad que te arrastra a un viaje improvisado y te hace reír hasta llorar. Si desaparece una temporada, no es desinterés: volverá con mil historias.',
    carta: 'La tradición asocia a Sagitario con La Templanza, la carta del ángel que mezcla el agua entre dos copas. Le enseña que su fuego necesita medida: la aventura gana sentido cuando sabe combinar entusiasmo y paciencia.',
    consejo: 'Antes de buscar fuera, encuentra el equilibrio en lo que ya tienes.',
  },
  capricornio: {
    intro: 'Capricornio es tierra cardinal, regido por Saturno: ambición, disciplina y visión a largo plazo. Sube la montaña paso a paso y no se rinde. Madura pronto y mejora con los años.',
    luces: ['Disciplina', 'Responsabilidad', 'Visión a largo plazo', 'Resistencia'],
    sombras: ['Rigidez', 'Exceso de control', 'Dificultad para descansar', 'Frialdad aparente'],
    personalidad: 'Capricornio se toma la vida en serio desde muy temprano. Sabe esperar, planificar y trabajar sin ver resultados inmediatos. Le cuesta mostrar sus emociones y a veces parece distante, aunque tiene un humor seco que sorprende. Puede volverse demasiado exigente con su propio rendimiento. Su reto es permitirse disfrutar del camino, no solo de la cima.',
    trabajo: 'Capricornio rinde en la empresa, la administración, la arquitectura, la política o cualquier puesto con responsabilidad y estructura. Con el dinero es de los signos más sólidos: planifica, invierte con cautela y construye patrimonio con paciencia.',
    amistad: 'Capricornio es la amistad que siempre cumple y da consejos prácticos cuando todo se tuerce. Tarda en abrirse, pero su compromiso es para siempre.',
    carta: 'Capricornio se asocia con El Diablo porque la carta habla del mundo material, de la ambición y de las cadenas que uno mismo se pone. Le enseña que el éxito no debe convertirse en prisión: las cadenas de la carta están flojas, y puede quitárselas cuando decida.',
    consejo: 'Tómate un descanso sin sentir que tienes que ganártelo.',
  },
  acuario: {
    intro: 'Acuario es aire fijo: ideas propias, independencia y mirada hacia el futuro. Piensa distinto y no tiene miedo de hacerlo. Le importa el grupo tanto como su libertad.',
    luces: ['Originalidad', 'Mente abierta', 'Espíritu solidario', 'Visión de futuro'],
    sombras: ['Distancia emocional', 'Rebeldía sin causa', 'Terquedad con sus ideas', 'Imprevisibilidad'],
    personalidad: 'Acuario va a su ritmo y no le importa salirse de lo establecido. Tiene ideales firmes y defiende causas colectivas con pasión. Sin embargo, le cuesta gestionar las emociones cercanas y a veces se refugia en la razón. Es fiel a sus convicciones, a veces hasta la terquedad. Su reto es acercarse al corazón sin sentir que pierde su libertad.',
    trabajo: 'Acuario destaca en la tecnología, la ciencia, la innovación, las causas sociales y cualquier trabajo que le deje inventar. Con el dinero es poco convencional: puede ser muy despegado o apostar por proyectos que nadie más ve.',
    amistad: 'La amistad es el terreno natural de Acuario: tiene amistades muy variadas y las trata a todas como iguales. Respeta tu espacio y espera que respetes el suyo.',
    carta: 'La tradición asocia a Acuario con La Estrella, la carta de la figura que vierte agua bajo un cielo estrellado. Le enseña que su visión tiene sentido cuando se comparte: la esperanza que lleva dentro está hecha para repartirse.',
    consejo: 'Deja que alguien cercano vea también lo que sientes, no solo lo que piensas.',
  },
  piscis: {
    intro: 'Piscis es agua mutable y cierra la rueda del zodiaco. Tiene una sensibilidad enorme, imaginación sin límites y una empatía que le conecta con todo. Vive entre el mundo real y el de los sueños.',
    luces: ['Empatía profunda', 'Imaginación', 'Compasión', 'Intuición'],
    sombras: ['Tendencia a evadirse', 'Límites difusos', 'Exceso de sacrificio', 'Confusión'],
    personalidad: 'Piscis absorbe las emociones de su entorno como una esponja, y a veces no distingue lo suyo de lo ajeno. Tiene alma de artista y una gran compasión, capaz de entender a quien nadie entiende. Le cuesta enfrentarse a lo práctico y tiende a escaparse cuando la realidad pesa demasiado. Necesita ratos de soledad para recargarse. Su reto es poner límites sin cerrar el corazón.',
    trabajo: 'Piscis encaja en el arte, la música, la terapia, el cuidado de otras personas y cualquier trabajo con una dimensión humana o espiritual. Con el dinero tiene poca cabeza y mucho corazón, así que le ayuda tener cuentas claras y alguien de confianza que le ordene.',
    amistad: 'Piscis es la amistad que te escucha durante horas sin juzgarte. A veces se pierde en sus propios mundos, pero siempre vuelve cuando le necesitas.',
    carta: 'Piscis se asocia con La Luna, la carta de los sueños, la intuición y los caminos que se ven a medias. Le enseña a confiar en su intuición sin perderse en sus miedos: la luz de la luna engaña a veces, pero también guía a quien sabe mirar.',
    consejo: 'Pon los pies en la tierra un momento cada día sin dejar de soñar.',
  },
};
