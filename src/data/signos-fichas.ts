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
    intro: 'Aries abre la rueda del zodiaco y tiene el empuje de todo lo que empieza. Es fuego cardinal, con ganas de ir siempre primero. Donde hay un reto, allí aparece.',
    luces: ['Valentía ante lo nuevo', 'Iniciativa constante', 'Sinceridad sin dobleces', 'Entusiasmo contagioso'],
    sombras: ['Impaciencia', 'Prisa por decidir', 'Enfados rápidos', 'Poca constancia al final'],
    personalidad: 'A Aries le cuesta esperar. Prefiere equivocarse actuando que acertar sin moverse, y así abre caminos que otras personas no se atreven a pisar. Su franqueza suena brusca, pero rara vez hay mala intención detrás. Se enciende deprisa y se le pasa igual de rápido. Lo que tiene pendiente es terminar lo que empieza.',
    trabajo: 'Brilla al frente de proyectos nuevos, con autonomía y en sitios donde se premia decidir rápido. Con el dinero va por impulsos: gana con ganas y gasta con la misma alegría. Le viene bien tener cerca a alguien que se ocupe de los detalles.',
    amistad: 'Es quien propone el plan y la primera persona en defenderte si alguien te falla. No guarda rencor, eso sí, necesita que le hablen claro.',
    carta: 'La tradición une a Aries con El Emperador porque los dos van de mando y de la fuerza de Marte puesta al servicio de una voluntad. La carta le enseña que el impulso necesita estructura. Empujar sabe cualquiera; lo difícil es sostener lo que se ha creado.',
    consejo: 'Antes de lanzarte a lo siguiente, cierra bien lo que tienes entre manos.',
  },
  tauro: {
    intro: 'Tauro es tierra fija, constante y con los pies bien puestos en el suelo. Disfruta de lo sencillo y construye despacio, pero lo que levanta suele durar.',
    luces: ['Paciencia a prueba', 'Lealtad duradera', 'Sentido práctico', 'Disfrute de lo sencillo'],
    sombras: ['Terquedad', 'Resistencia al cambio', 'Apego a lo material', 'Rencor silencioso'],
    personalidad: 'Tauro necesita tiempo para decidir, para confiar y para cambiar de opinión. Esa lentitud tiene más de prudencia que de pereza. Le gustan la comodidad, la buena mesa, la música y salir al campo. Si le presionan, se cierra en banda y no hay quien le mueva. A cambio, su palabra vale como un contrato.',
    trabajo: 'Rinde en trabajos estables, con resultados que se ven y un ritmo que pueda aguantar. Es de los signos que mejor llevan el dinero: ahorra, invierte con cabeza y le gusta tener un colchón. Arriesgar le cuesta, aunque alguna vez le convendría.',
    amistad: 'Tiene pocas amistades, pero para toda la vida. Es quien te invita a cenar a su casa cuando has tenido un mal día.',
    carta: 'Se le asocia con El Sumo Sacerdote, la carta de la tradición y de lo que se transmite con paciencia y aguanta el paso del tiempo. Su firmeza puede ser sabiduría si sabe escuchar, y cabezonería si se niega a aprender nada nuevo.',
    consejo: 'Prueba un cambio pequeño. No todo lo nuevo amenaza lo que has construido.',
  },
  geminis: {
    intro: 'Géminis es aire mutable, todo curiosidad y palabra. Le interesa casi todo y aprende deprisa. Su cabeza nunca se está quieta.',
    luces: ['Curiosidad sin fin', 'Ingenio rápido', 'Facilidad para comunicar', 'Capacidad de adaptación'],
    sombras: ['Dispersión', 'Inconstancia', 'Nerviosismo', 'Dificultad para comprometerse'],
    personalidad: 'Géminis piensa en voz alta y salta de un tema a otro con una soltura que desconcierta. Tiene muchas caras porque tiene muchos intereses, y eso no lo hace falso. La rutina le aburre y necesita cosas nuevas para sentir que la vida avanza. Le cuesta quedarse en algo el tiempo suficiente para dominarlo, y ahí está su reto.',
    trabajo: 'Destaca en la comunicación, la enseñanza, las ventas, la escritura y en cualquier trabajo con variedad. Con el dinero es ágil pero desordenado: le entra por un lado y le sale por otro. Le va bien tener más de una fuente de ingresos.',
    amistad: 'Con Géminis no te aburres nunca, siempre trae una anécdota o una idea loca. Es una amistad ligera y divertida que también sabe escuchar cuando hace falta.',
    carta: 'La tradición le asocia con Los Enamorados, la carta de la dualidad y de la elección entre dos. Le enseña que no puede tenerlo todo a la vez. Elegir algo es decir que no a otras cosas, y el compromiso empieza justo ahí.',
    consejo: 'Elige una sola cosa esta semana y llévala hasta el final.',
  },
  cancer: {
    intro: 'Cáncer es agua cardinal. Siente mucho y se mueve para proteger lo que quiere, sobre todo la familia y su casa. Bajo el caparazón hay muchísima ternura.',
    luces: ['Instinto protector', 'Memoria afectiva', 'Intuición fina', 'Capacidad de cuidar'],
    sombras: ['Susceptibilidad', 'Cambios de humor', 'Apego al pasado', 'Tendencia a encerrarse'],
    personalidad: 'Cáncer nota cómo está el ambiente antes de que nadie abra la boca. Va como el cangrejo, de lado y tanteando, y solo se muestra del todo cuando se siente a salvo. Se acuerda de los detalles, de los gestos y también de las heridas. Su humor sube y baja como las mareas que mueve la Luna. Cuando confía, pocas personas del zodiaco son tan cálidas.',
    trabajo: 'Trabaja bien cuidando a otras personas, en la educación, la hostelería o en cualquier sitio que sienta como una segunda casa. Con el dinero es previsor. Ahorra pensando en los suyos y le tranquiliza tener reservas.',
    amistad: 'Convierte a sus amistades en familia y se acuerda de cada cumpleaños. Si le fallas, tarda en perdonar, porque todo le llega muy hondo.',
    carta: 'Se le asocia con El Carro porque en la carta alguien avanza decidido dentro de una armadura, igual que el cangrejo con su caparazón. Le enseña que ser sensible no le impide llevar las riendas. Puede sentir mucho y aun así saber adónde va.',
    consejo: 'Cuídate con la misma ternura con la que cuidas a los demás.',
  },
  leo: {
    intro: 'Leo es fuego fijo y lo rige el Sol. Tiene presencia, calor y un corazón grande que no esconde. Allí donde entra, se nota.',
    luces: ['Generosidad', 'Confianza en sí', 'Creatividad', 'Lealtad a los suyos'],
    sombras: ['Orgullo herido', 'Necesidad de aplauso', 'Dramatismo', 'Dificultad para ceder'],
    personalidad: 'Leo vive la vida como un escenario, más por ganas de compartir que por vanidad. Le gusta celebrar, organizar, animar a la gente y que se lo reconozcan. Su punto flaco es el orgullo, porque le cuesta pedir perdón y encajar una crítica. Cuando se siente valorado, saca lo mejor de quien tiene alrededor.',
    trabajo: 'Encaja en puestos de mando, en el mundo creativo y en todo lo que tenga público. Con el dinero tiene la mano abierta, le encanta darse caprichos e invitar. Un presupuesto le ayuda a seguir siendo generoso sin quedarse a cero.',
    amistad: 'Es la amistad que te hace sentir importante y celebra tus logros como si fueran suyos. A cambio pide lealtad y un poco de atención.',
    carta: 'La tradición le asocia con La Fuerza, la carta en la que una figura amansa a un león con suavidad. El poder de Leo no necesita rugir. Si domina su orgullo sin brusquedad, es mucho más fuerte que imponiéndose.',
    consejo: 'Brilla sin esperar aplausos. Tu luz no depende de que alguien la mire.',
  },
  virgo: {
    intro: 'Virgo es tierra mutable. Observa, analiza y mejora todo lo que toca. Le gusta ser útil y encuentra soluciones donde los demás solo ven lío.',
    luces: ['Atención al detalle', 'Sentido del servicio', 'Mente analítica', 'Trabajo constante'],
    sombras: ['Perfeccionismo', 'Autoexigencia excesiva', 'Crítica fácil', 'Preocupación constante'],
    personalidad: 'Virgo se fija en todo, también en sus propios fallos, y por eso se exige tanto. Prefiere los hechos a las promesas y la discreción a las grandes palabras. Le calman el orden, las listas y las rutinas que funcionan. Parece frío, pero se preocupa mucho por los demás. Le queda aprender que lo bastante bueno también vale.',
    trabajo: 'Destaca en la sanidad, la gestión, la edición, el análisis y en cualquier trabajo que pida precisión. Con el dinero es muy cuidadoso. Compara, ahorra y rara vez se deja llevar por un capricho.',
    amistad: 'Es quien te ayuda con la mudanza, te revisa el currículum y se acuerda de lo que le contaste hace meses. Quiere estando ahí.',
    carta: 'Se le asocia con El Ermitaño, la carta del estudio paciente y de la lámpara que alumbra paso a paso. Le enseña que retirarse un tiempo no le aísla. En silencio ve claro lo que el ruido le tapa.',
    consejo: 'Sé contigo tan comprensiva como lo eres con las personas que quieres.',
  },
  libra: {
    intro: 'Libra es aire cardinal y lo rige Venus. Busca armonía, belleza y justicia. Tiene mano para tratar con la gente y ve los dos lados de cada asunto.',
    luces: ['Diplomacia', 'Sentido de la justicia', 'Buen gusto', 'Facilidad para conectar'],
    sombras: ['Indecisión', 'Miedo al conflicto', 'Dependencia de la aprobación', 'Complacer en exceso'],
    personalidad: 'Libra necesita que las cosas estén compensadas, en casa y en sus relaciones. Escucha todas las versiones antes de opinar, y eso le da sentido de la justicia, aunque luego le cuesta decidir. Las discusiones le incomodan y más de una vez se calla lo que piensa por no romper la paz. Disfruta de todo lo bonito. Su reto es elegir aunque alguien se quede descontento.',
    trabajo: 'Encaja en el derecho, la mediación, el diseño, las relaciones públicas y el trabajo en equipo. Con el dinero se le va la mano en cosas bonitas, aunque regatea un precio como nadie.',
    amistad: 'Pone paz en el grupo y siempre tiene una palabra amable. Le cuesta decir que no, así que pregúntale qué le apetece y espera a que conteste.',
    carta: 'La tradición le asocia con La Justicia, la carta de la balanza y la espada. Le enseña que equilibrar las cosas consiste en decidir con honradez y asumir lo que venga, aunque no contente a todo el mundo.',
    consejo: 'Di lo que piensas con amabilidad, pero dilo.',
  },
  escorpio: {
    intro: 'Escorpio es agua fija. Siente con mucha hondura, tiene una voluntad firme y una mirada que llega hasta el fondo. Nada en su forma de ser es superficial.',
    luces: ['Intensidad emocional', 'Capacidad de regenerarse', 'Intuición penetrante', 'Determinación'],
    sombras: ['Desconfianza', 'Celos', 'Tendencia al control', 'Dificultad para perdonar'],
    personalidad: 'Escorpio observa mucho y enseña poco. Le cuesta abrirse porque sabe lo que duele una traición, y pone a prueba a quien se le acerca. Le atraen los misterios y las verdades incómodas. Se levanta de las caídas como pocos, y sale de ellas cambiado. Le toca aprender a confiar sin vigilar.',
    trabajo: 'Rinde en la investigación, la psicología, la medicina, las finanzas y en cualquier trabajo que pida llegar al fondo. Con el dinero es estratega y discreto, y sabe gestionar recursos propios y ajenos.',
    amistad: 'Tiene pocas amistades íntimas, pero por ellas da la cara en cualquier situación. Guarda tus secretos como si fueran suyos.',
    carta: 'Se le asocia con La Muerte, que en el tarot casi nunca es un final literal. Algo termina para que otra cosa pueda nacer. La carta le enseña a no aferrarse a lo que ya cumplió su ciclo, porque dejarlo ir también le da poder.',
    consejo: 'Deja ir algo que ya no te sirve y mira qué ocupa su lugar.',
  },
  sagitario: {
    intro: 'Sagitario es fuego mutable y lo rige Júpiter. Es optimista, aventurero y siempre mira más allá del horizonte. Le mueven las preguntas grandes.',
    luces: ['Optimismo', 'Espíritu aventurero', 'Sinceridad', 'Amplitud de miras'],
    sombras: ['Impaciencia con la rutina', 'Exceso de franqueza', 'Promesas que no cumple', 'Tendencia a huir'],
    personalidad: 'Sagitario necesita moverse, viajar, aprender y encontrarle un porqué a la vida. Contagia buen humor y le saca el lado bueno hasta a los días malos. Dice lo que piensa sin filtro, con más verdad que tacto. Los límites y las obligaciones repetitivas le agobian. Su reto es comprometerse sin sentir que pierde libertad.',
    trabajo: 'Encaja en la enseñanza, los viajes, la edición, el deporte o cualquier trabajo con horizonte amplio. Con el dinero tiene la mano abierta y suele ser demasiado optimista con lo que vendrá.',
    amistad: 'Es la amistad que te arrastra a un viaje improvisado y te hace reír hasta llorar. Si desaparece una temporada, tranquila, que vuelve con mil historias.',
    carta: 'La tradición le asocia con La Templanza, la carta del ángel que pasa el agua de una copa a otra. Le enseña a medir su fuego. La aventura sale mejor cuando mezcla entusiasmo y paciencia.',
    consejo: 'Antes de buscar fuera, mira bien lo que ya tienes.',
  },
  capricornio: {
    intro: 'Capricornio es tierra cardinal y lo rige Saturno. Ambicioso y disciplinado, sube la montaña paso a paso y no se rinde. Madura pronto y mejora con los años.',
    luces: ['Disciplina', 'Responsabilidad', 'Visión a largo plazo', 'Resistencia'],
    sombras: ['Rigidez', 'Exceso de control', 'Dificultad para descansar', 'Frialdad aparente'],
    personalidad: 'Capricornio se toma la vida en serio desde muy joven. Sabe esperar, planificar y trabajar sin ver resultados enseguida. Le cuesta enseñar lo que siente y parece distante, aunque tiene un humor seco que pilla por sorpresa. Se exige demasiado. Le falta disfrutar de la subida y no solo de la cima.',
    trabajo: 'Rinde en la empresa, la administración, la arquitectura, la política o en cualquier puesto con responsabilidad. Con el dinero es de los signos más sólidos. Planifica, invierte con cautela y va levantando patrimonio año a año.',
    amistad: 'Siempre cumple y da consejos prácticos cuando todo se tuerce. Tarda en abrirse, pero cuando se compromete es para siempre.',
    carta: 'Se le asocia con El Diablo, la carta del mundo material, la ambición y las cadenas que uno mismo se pone. Su éxito puede acabar en cárcel. Pero las cadenas de la carta están flojas, y puede quitárselas cuando quiera.',
    consejo: 'Tómate un descanso sin sentir que tienes que ganártelo.',
  },
  acuario: {
    intro: 'Acuario es aire fijo. Tiene ideas propias, va por libre y mira al futuro. Piensa distinto sin ningún miedo, y le importa el grupo tanto como su libertad.',
    luces: ['Originalidad', 'Mente abierta', 'Espíritu solidario', 'Visión de futuro'],
    sombras: ['Distancia emocional', 'Rebeldía sin causa', 'Terquedad con sus ideas', 'Imprevisibilidad'],
    personalidad: 'Acuario va a su ritmo y le da igual salirse de lo establecido. Tiene ideales firmes y defiende causas colectivas con pasión. Con las emociones cercanas se maneja peor y tiende a refugiarse en la razón. Es fiel a sus convicciones hasta la cabezonería. Le toca acercarse al corazón sin sentir que pierde su libertad.',
    trabajo: 'Destaca en la tecnología, la ciencia, las causas sociales y en cualquier trabajo que le deje inventar. Con el dinero es poco convencional. O pasa bastante de él o apuesta por proyectos que nadie más ve.',
    amistad: 'La amistad es su terreno. Tiene amistades de todo tipo y las trata a todas como iguales. Respeta tu sitio y espera que respetes el suyo.',
    carta: 'La tradición le asocia con La Estrella, la carta de la figura que vierte agua bajo un cielo estrellado. Lo que ve Acuario cobra sentido cuando lo comparte. La esperanza que lleva dentro está hecha para repartirse.',
    consejo: 'Deja que alguien cercano vea también lo que sientes, no solo lo que piensas.',
  },
  piscis: {
    intro: 'Piscis es agua mutable y cierra la rueda del zodiaco. Tiene una sensibilidad enorme y una imaginación sin límites. Vive a medio camino entre el mundo real y el de los sueños.',
    luces: ['Empatía', 'Imaginación', 'Compasión', 'Intuición'],
    sombras: ['Tendencia a evadirse', 'Límites difusos', 'Exceso de sacrificio', 'Confusión'],
    personalidad: 'Piscis absorbe lo que sienten los demás como una esponja, y le cuesta separar lo suyo de lo ajeno. Tiene alma de artista y entiende a quien nadie entiende. Lo práctico se le atraganta y, cuando la realidad pesa demasiado, se escapa. Necesita ratos a solas para recargarse. Su reto es decir que no sin cerrarse.',
    trabajo: 'Encaja en el arte, la música, la terapia, el cuidado de otras personas y en trabajos con un lado humano o espiritual. Con el dinero tiene poca cabeza y mucho corazón, así que le vienen bien unas cuentas claras y alguien de confianza que le ponga orden.',
    amistad: 'Te escucha durante horas sin juzgarte. Se pierde en sus mundos, pero siempre vuelve cuando le necesitas.',
    carta: 'Se le asocia con La Luna, la carta de los sueños, la intuición y los caminos que se ven a medias. Le enseña a fiarse de su intuición sin perderse en sus miedos. La luz de la luna engaña, pero también guía a quien sabe mirar.',
    consejo: 'Pon los pies en la tierra un rato cada día, sin dejar de soñar.',
  },
};
