import type { CombinacionAmpliada } from './tipo';

export const parte2: Record<string, CombinacionAmpliada> = {
  'justicia-y-rueda-de-la-fortuna': {
    ejemplo: 'Imagina que preguntas por una plaza a la que te presentaste hace meses y salen La Justicia y La Rueda de la Fortuna. El resultado ya está en marcha y depende sobre todo de lo que hiciste entonces, de cómo te preparaste, de si presentaste bien los papeles y de cómo fue la entrevista. La Rueda dice que el movimiento llega pronto, aunque no lo controles tú. Si fuiste rigurosa, la balanza se inclina a tu favor. Si dejaste algo a medias, ahora se nota.',
    posiciones: {
      pasado: 'Hubo un giro que vino directamente de decisiones anteriores, tuyas o de otras personas. Explica buena parte de dónde estás hoy.',
      presente: 'Algo se está moviendo ahora y reparte a cada cual lo suyo. Mira qué sembraste y qué estás recogiendo.',
      futuro: 'Llegará un cambio que responderá a cómo actúes desde hoy. Lo que decidas en las próximas semanas pesa más de lo que parece.',
    },
    invertidas: 'Si La Justicia sale invertida, el giro puede sentirse injusto o venir de un error ajeno, así que revisa contratos y condiciones. Si la invertida es La Rueda, el cambio se retrasa o se repite una situación que creías superada. Con las dos del revés, asume tu parte sin cargar con la de los demás.',
    faq: [
      { q: '¿La Justicia y La Rueda de la Fortuna es buena señal?', r: 'Más que buena o mala, es justa. Devuelve lo que corresponde, y si has actuado con coherencia suele traer un resultado favorable.' },
      { q: '¿Esta combinación habla de karma?', r: 'Sí, entendido como causa y efecto, que es como lo usa el tarot tradicional. Nada de castigos. Los actos tienen consecuencias y ya está.' },
    ],
  },

  'justicia-y-juicio': {
    ejemplo: 'Supón que preguntas si deberías volver a hablar con alguien de quien te distanciaste y te salen La Justicia y El Juicio. Ya toca mirar lo que pasó con honradez, sin adornarlo ni culparte de más. El Juicio trae una llamada clara, que puede ser un mensaje que llega o tus propias ganas de cerrar el tema. La conversación tiene sentido si vas a escuchar y también a decir lo tuyo. Lo que salga de ahí será definitivo, para bien o para dejarlo atrás.',
    posiciones: {
      pasado: 'Hay una decisión importante ya tomada, un antes y un después que sigue pesando. Un fallo, una separación o una elección que te cambió el rumbo.',
      presente: 'Te toca rendir cuentas contigo misma. No hay forma de mirar hacia otro lado. Hay que elegir y comprometerse.',
      futuro: 'Llegará una respuesta firme cuando le toque. Recíbela con serenidad, porque cerrará algo que tenías abierto.',
    },
    invertidas: 'Con La Justicia invertida, el veredicto puede llegar sesgado o con información incompleta, y conviene pedir aclaraciones. Con El Juicio invertido, tientan las ganas de aplazar la decisión o de juzgarte con dureza. Si salen las dos al revés, no decidas desde la culpa.',
    faq: [
      { q: '¿La Justicia y El Juicio anuncian un resultado legal favorable?', r: 'Anuncian una resolución clara, pero hacia qué lado cae depende de las cartas que las acompañen y de tu situación real. Tú prepara bien tu parte.' },
      { q: '¿Qué significa esta pareja si pregunto por una expareja?', r: 'Suele salir cuando queda una conversación pendiente para cerrar sin trampas. Reconciliación no promete. Lo que trae es un final o un nuevo acuerdo con las cuentas claras.' },
    ],
  },

  'ermitano-y-colgado': {
    ejemplo: 'Si preguntas si ya toca cambiar de trabajo y aparecen El Ermitaño y El Colgado, la respuesta es que todavía no. La idea puede ser buena, pero aún no tienes claro qué quieres. Infórmate, habla con gente del sector o prueba algo pequeño antes de dar el paso. Eso que hoy te parece estancamiento es tiempo de maduración. Cuando lo tengas claro, te moverás sin dudar.',
    posiciones: {
      pasado: 'Hubo un tiempo de retiro o de espera que te sirvió para conocerte mejor. Quizá entonces te pareció tiempo perdido, pero te dio respuestas.',
      presente: 'Quietud y paciencia. Lo que buscas aparece cuando te paras a mirar con otros ojos, no corriendo.',
      futuro: 'Llegará una pausa, elegida o impuesta. Tómala como un descanso útil y no como un fracaso.',
    },
    invertidas: 'Si El Ermitaño sale invertido, la soledad puede volverse aislamiento y te cuesta pedir ayuda. Si es El Colgado, la espera se alarga sin sentido o te niegas a cambiar de punto de vista. Con las dos invertidas, ya has pensado bastante y toca moverse. Y si salen a su lado cartas más activas, la pausa está a punto de terminar.',
    faq: [
      { q: '¿El Ermitaño y El Colgado significan que algo no va a pasar?', r: 'Significan que no va a pasar todavía. Son tiempos lentos, no un no definitivo.' },
      { q: '¿Qué hacer cuando salen juntas en una tirada de amor?', r: 'Darte aire y no presionar a la otra persona. Una relación que necesita pausa se aclara mejor sin agobios.' },
    ],
  },

  'ermitano-y-estrella': {
    ejemplo: 'Imagina que llevas un tiempo apagada tras una mala racha y preguntas qué te espera. Salen El Ermitaño y La Estrella. Es un proceso tranquilo. Primero te recoges y cuidas tus rutinas, y después la esperanza vuelve casi sin que te des cuenta. No hace falta forzar la alegría ni llenar la agenda. Vas bien aunque el ritmo sea suave. Si alguien te ofrece compañía o ayuda estos días, acéptala sin sentir que pierdes tu sitio.',
    posiciones: {
      pasado: 'Pasaste una temporada de soledad que te ayudó a recuperarte. Lo que aprendiste ahí sigue siendo tu brújula.',
      presente: 'Te estás curando y empiezas a ver las cosas más claras. Fíate de las pequeñas señales que te dicen hacia dónde ir.',
      futuro: 'Después de mucho buscar, tendrás una dirección clara. Y tendrá que ver con lo que más te importa.',
    },
    invertidas: 'Con El Ermitaño invertido, la búsqueda se vuelve encierro y cuesta salir de tu cabeza. Con La Estrella invertida, la esperanza flojea y dudas de que algo vaya a mejorar. Si salen las dos invertidas, busca compañía y apoyo cerca en lugar de esperar la luz a solas. Cada uno lleva su ritmo con estas cartas, así que no te compares con nadie.',
    faq: [
      { q: '¿El Ermitaño y La Estrella es buena combinación?', r: 'Sí, es amable y esperanzadora. Anuncia recuperación y que vuelves a encontrarle sentido a las cosas, aunque sin correr.' },
      { q: '¿Significa que voy a estar sola mucho tiempo?', r: 'Es una temporada de recogimiento, no soledad para siempre. Ese tiempo contigo misma prepara el terreno para relaciones más sanas.' },
    ],
  },

  'rueda-de-la-fortuna-y-muerte': {
    ejemplo: 'Supón que preguntas por el futuro de tu empresa y aparecen La Rueda de la Fortuna y La Muerte. Los cambios vienen de fuera. Una reestructuración, una venta o un giro del mercado acaba con la forma en que funcionaban las cosas. No puedes frenarlo, pero sí prepararte. Actualiza el currículum, cuida tus contactos y mira qué oportunidades trae lo nuevo. Quien se adapta pronto suele salir mejor parada.',
    posiciones: {
      pasado: 'Algo terminó por las circunstancias, sin que tú lo eligieras. Ese cierre te obligó a empezar otra etapa que todavía estás construyendo.',
      presente: 'La rueda está girando ahora mismo. Algo termina a tu alrededor, así que fíjate en qué puerta se abre.',
      futuro: 'Se acerca un cambio de ciclo. Si vas dejando ya lo que no funciona, el paso será más ligero.',
    },
    invertidas: 'Si La Rueda sale invertida, el cambio se retrasa o se vive como mala suerte, y cuesta verle lo bueno. Si la invertida es La Muerte, te resistes a cerrar y el final se alarga más de lo necesario. Con las dos invertidas, acepta que la etapa ya terminó aunque sigas sosteniéndola.',
    faq: [
      { q: '¿La Rueda de la Fortuna y La Muerte son mala señal?', r: 'Anuncian un cambio fuerte, y eso puede asustar. Pero en el tarot La Muerte es cambio y no desgracia, y La Rueda recuerda que todo vuelve a girar.' },
      { q: '¿Esta combinación habla de una muerte física?', r: 'No. En el tarot tradicional La Muerte es el final de una etapa, y aquí ese final llega empujado por las circunstancias.' },
    ],
  },

  'rueda-de-la-fortuna-y-mundo': {
    ejemplo: 'Si preguntas por un proyecto en el que llevas años trabajando y salen La Rueda de la Fortuna y El Mundo, alégrate. Llega una oportunidad justo cuando el trabajo está maduro, en forma de propuesta, de cliente o de puerta inesperada que lo remata. A veces tiene que ver con otro país o con un público más amplio. Tú ten preparado el sí para cuando aparezca. Lo que has construido ya está a la altura.',
    posiciones: {
      pasado: 'Conseguiste algo importante con buena suerte y en el momento justo. Ese éxito te dio una base sólida en la que todavía te apoyas.',
      presente: 'Si tienes algo a punto de cerrar, ahora sale bien. Las circunstancias te acompañan, así que aprovéchalas.',
      futuro: 'Un giro a favor te ayudará a cerrar un ciclo. Sigue trabajando con constancia, que el remate está cerca.',
    },
    invertidas: 'Con La Rueda invertida, la oportunidad tarda o llega con condiciones que no esperabas. Con El Mundo invertido, falta un último paso y cuesta rematar. Con las dos invertidas el éxito no se pierde, solo se retrasa, así que revisa qué cabos sueltos quedan. El ciclo tiende a cerrarse bien.',
    faq: [
      { q: '¿La Rueda de la Fortuna y El Mundo es una combinación de suerte?', r: 'Sí, de las más favorables del tarot. Junta la buena fortuna con la sensación de meta alcanzada.' },
      { q: '¿Puede hablar de viajes?', r: 'Puede, porque El Mundo se asocia a horizontes amplios y La Rueda al movimiento. Si preguntas por un traslado o un viaje, es buena señal.' },
    ],
  },

  'fuerza-y-diablo': {
    ejemplo: 'Imagina que preguntas por un hábito que quieres dejar, como gastar de más o volver una y otra vez a alguien que no te conviene, y salen La Fuerza y El Diablo. El tirón es fuerte y no es fácil, eso está claro. Pero La Fuerza dice que puedes con ello, a base de paciencia y de tratarte bien, sin castigos. Marcarte límites claros y cambiar tu entorno te ayudará más que la fuerza de voluntad a secas. Cada pequeña victoria cuenta.',
    posiciones: {
      pasado: 'Hubo una dependencia o una tentación que lograste vencer, o que todavía te dejó huella. Lo que aprendiste entonces te sirve ahora.',
      presente: 'Hay una pelea interna en marcha entre lo que deseas y lo que te conviene. Puedes elegir más de lo que crees.',
      futuro: 'Se acerca una prueba. Si te preparas y conoces tus puntos débiles, saldrás reforzada.',
    },
    invertidas: 'Si La Fuerza sale invertida, la voluntad flojea y el impulso gana terreno, así que pide apoyo. Si la invertida es El Diablo, buena noticia, porque empiezas a soltar las cadenas. Con las dos invertidas puedes liberarte, pero todavía es frágil y necesita constancia. Una recaída no borra lo que ya has avanzado.',
    faq: [
      { q: '¿La Fuerza y El Diablo juntas son mala señal?', r: 'Hay un conflicto, pero La Fuerza inclina la balanza a tu favor. Es una combinación de superación más que de derrota.' },
      { q: '¿Qué dice esta pareja en el amor?', r: 'Una atracción muy intensa que puede volverse posesiva si no se cuida. Pasión, sí, pero con límites y respeto por los dos lados.' },
    ],
  },

  'colgado-y-muerte': {
    ejemplo: 'Si preguntas por una relación que lleva meses en punto muerto y salen El Colgado y La Muerte, las cartas son bastante claras. Esa espera ya ha servido para lo que tenía que servir, que era enseñarte lo que necesitabas ver. Ahora toca aceptar que la relación, tal como está, no va a volver a ser la de antes. Puede que eso signifique terminar, o cambiar de raíz la forma de estar juntos. Lo que no funciona es seguir esperando a que algo cambie solo.',
    posiciones: {
      pasado: 'Una larga espera acabó en un cierre. Aunque doliera, te sacó de una situación estancada.',
      presente: 'Estás en el punto justo de soltar. Rendirte aquí significa dejar de pelear contra lo que ya ha pasado, y eso no es perder.',
      futuro: 'La pausa de ahora acabará en un cambio de fondo. Prepárate para cerrar sin aspavientos lo que ya no da más de sí.',
    },
    invertidas: 'Con El Colgado invertido, la espera ya no sirve de nada y estás sacrificando más de lo que deberías. Con La Muerte invertida, te resistes a un final que ya es evidente. Si salen las dos invertidas, el bloqueo viene de no querer soltar. Pregúntate qué miedo te mantiene esperando.',
    faq: [
      { q: '¿El Colgado y La Muerte significan ruptura?', r: 'Pueden ser una ruptura, o un cambio de raíz en la relación. Lo seguro es que no seguirá igual que ahora.' },
      { q: '¿Cuánto durará esta etapa de estancamiento?', r: 'El tarot no da plazos exactos. Con esta pareja, el estancamiento se acaba cuando aceptas el cambio, así que la salida depende más de tu decisión que del calendario.' },
    ],
  },

  'muerte-y-templanza': {
    ejemplo: 'Supón que acabas de dejar una ciudad o un trabajo y preguntas cómo será tu adaptación. Salen La Muerte y La Templanza. El cambio hacía falta y lo irás asimilando. No esperes sentirte en casa en dos semanas. La Templanza mezcla lo viejo con lo nuevo hasta encontrar tu medida. Cuida tus rutinas, tu descanso y a la gente que te hace bien, y ve ajustando. Si alguien cercano te ofrece ayuda práctica, con una mudanza o un trámite, dile que sí.',
    posiciones: {
      pasado: 'Atravesaste un final importante con bastante serenidad. Aprendiste que puedes recomponerte.',
      presente: 'Estás reconstruyéndote después de un cambio. Ve despacio y no te exijas estar al cien por cien.',
      futuro: 'Tras el cierre que se acerca vendrán unos meses de calma y recuperación. La transición será más suave de lo que temes.',
    },
    invertidas: 'Si La Muerte sale invertida, el final se estanca y cuesta pasar página. Si la invertida es La Templanza, hay prisa por estar bien o excesos para tapar el malestar. Con las dos invertidas, para, acepta el duelo y vuelve a hábitos sencillos. Con esta pareja el final nunca es brusco, se puede digerir.',
    faq: [
      { q: '¿La Muerte y La Templanza es buena combinación?', r: 'Sí, es de las formas más amables de ver La Muerte. La Templanza suaviza el cambio y anuncia una recuperación tranquila.' },
      { q: '¿Puede indicar reconciliación?', r: 'Puede, si la relación cambia y se reconstruye más despacio. Tampoco será volver a lo de antes. Será empezar algo más compensado.' },
    ],
  },

  'muerte-y-torre': {
    ejemplo: 'Imagina que preguntas por tu situación laboral y salen La Muerte y La Torre. Llega un cambio brusco y sin vuelta atrás, un cierre, una reorganización o una decisión que te saca de donde estabas. Asusta, pero esa estructura llevaba tiempo tambaleándose. No gastes fuerzas en salvar lo que ya cayó. Haz inventario de lo que sabes hacer y de quién puede ayudarte con el siguiente paso.',
    posiciones: {
      pasado: 'Una crisis fuerte lo cambió todo. Lo que eres hoy está construido en parte sobre esos escombros.',
      presente: 'Estás en mitad de una buena sacudida. Céntrate en lo básico y deja lo demás para cuando pase la tormenta.',
      futuro: 'Se avecina un cambio radical. Saberlo te permite revisar ya qué bases son frágiles.',
    },
    invertidas: 'Con La Muerte invertida, te aferras a algo que ya se está cayendo y alargas el proceso. Con La Torre invertida, la crisis se vive por dentro o se evita a medias, sin resolverse del todo. Si salen las dos invertidas, el cambio sigue pendiente, y mejor afrontarlo tú que esperar a que te arrastre. Pedir ayuda ahora es sentido común.',
    faq: [
      { q: '¿La Muerte y La Torre es la peor combinación del tarot?', r: 'Es de las más intensas, pero no la peor. Anuncia un cambio radical que, una vez pasado, deja sitio a algo más auténtico.' },
      { q: '¿Se puede evitar lo que anuncian?', r: 'El tarot muestra tendencias, no destinos cerrados. Lo que sí eliges es cómo te preparas y cómo respondes al cambio.' },
    ],
  },

  'muerte-y-estrella': {
    ejemplo: 'Si preguntas por tu vida amorosa después de una separación y salen La Muerte y La Estrella, puedes respirar. Esa historia está cerrada y no hace falta volver a abrirla. La Estrella añade que la ilusión vuelve y que te sentirás más tú que antes. No corras hacia una relación nueva. Deja que la esperanza crezca y, cuando aparezca alguien, lo verás con ojos más limpios. Mientras, rodéate de amistades que te recuerden quién eres.',
    posiciones: {
      pasado: 'Un final que con el tiempo resultó ser una liberación. Aquel cierre te dejó más ligera.',
      presente: 'Estás saliendo de un duelo y empiezas a ver luz. Cuida esa esperanza nueva.',
      futuro: 'El cambio que se acerca traerá algo mejor. Aunque cueste soltar, lo que viene te encaja más.',
    },
    invertidas: 'Si La Muerte sale invertida, te cuesta aceptar el final y la esperanza tarda en llegar. Si la invertida es La Estrella, el cierre ya ha ocurrido pero sientes desánimo o desconfianza. Con las dos invertidas, deja que la tristeza esté antes de exigirte ilusión. Aun así, la tendencia de fondo es buena. La luz está ahí aunque hoy cueste verla.',
    faq: [
      { q: '¿La Muerte y La Estrella es buena señal?', r: 'Sí, es una combinación de volver a empezar. El final es real, pero lo que llega después trae esperanza.' },
      { q: '¿Qué significan en una pregunta de trabajo?', r: 'Un cierre que da paso a una oportunidad más a tu medida. Suele ser el cambio a algo que te ilusiona en serio.' },
    ],
  },

  'templanza-y-estrella': {
    ejemplo: 'Supón que preguntas si merece la pena volver a intentarlo con alguien tras una época de distancia, y salen La Templanza y La Estrella. Es un acercamiento tranquilo en el que los dos han aprendido algo. Aquí no hay fuegos artificiales. La confianza se va recuperando. Si avanzáis con paciencia y sinceridad, la relación puede ser más sana que antes, y la señal es claramente favorable. Hablad de lo que pasó sin reproches y poned acuerdos sencillos que podáis cumplir.',
    posiciones: {
      pasado: 'Te recuperaste y volviste a estar en paz. Puedes volver a aquella calma cuando la necesites.',
      presente: 'Estás serena y con esperanza. Cuida lo que funciona y no lo compliques.',
      futuro: 'Vienen meses de calma y de confianza recuperada. Lo que hoy cuesta encontrará su punto con el tiempo.',
    },
    invertidas: 'Con La Templanza invertida, hay impaciencia o das mucho más de lo que recibes. Con La Estrella invertida, la esperanza se apaga un poco y cuesta confiar. Si salen las dos invertidas, vuelve a lo básico, que es descansar, decir que no cuando toca y ponerte metas pequeñas. Son cartas tan suaves que, incluso del revés, rara vez anuncian algo grave.',
    faq: [
      { q: '¿La Templanza y La Estrella es buena combinación para el amor?', r: 'Sí, de las más dulces. Un amor sereno, una reconciliación tranquila o una relación que cuida.' },
      { q: '¿Indican que algo se cumplirá pronto?', r: 'Indican que se cumplirá, pero a su ritmo. Son cartas de paciencia, así que el resultado no llega corriendo.' },
    ],
  },

  'diablo-y-torre': {
    ejemplo: 'Imagina que preguntas por un ambiente de trabajo donde te sientes atrapada y salen El Diablo y La Torre. Esa situación no aguanta mucho más. Puede destaparse algo poco limpio o llegar un cambio que te saque de ahí. Es incómodo, pero te libra de algo que te estaba quitando mucho. Si puedes, adelántate y prepara tu salida. Lo que viene después será más sano, aunque el paso sea brusco. Habla con alguien de confianza para no decidir sola y en caliente.',
    posiciones: {
      pasado: 'Rompiste con algo que te ataba, quizá una relación o un hábito. Aquella sacudida te devolvió la libertad.',
      presente: 'Algo que te tenía enganchada está a punto de romperse o ya se está rompiendo. Déjalo caer.',
      futuro: 'Una situación de dependencia terminará de repente. Cuanto antes la reconozcas, menos te costará.',
    },
    invertidas: 'Si El Diablo sale invertido, ya estás soltando las cadenas y la ruptura será menos violenta. Si la invertida es La Torre, la crisis se aplaza y la situación tóxica se alarga. Con las dos invertidas sabes lo que tienes que dejar, pero te falta dar el paso. En cualquier caso, lo que te ata no es para siempre.',
    faq: [
      { q: '¿El Diablo y La Torre son una combinación negativa?', r: 'Son intensas y anuncian una ruptura, pero el resultado suele ser liberador. Rompen lo que te ataba.' },
      { q: '¿Qué significan si pregunto por mi pareja?', r: 'Pueden ser celos, control o dependencia que estallan. Pasada la crisis, toca decidir si la relación puede ser libre o no.' },
    ],
  },

  'diablo-y-luna': {
    ejemplo: 'Supón que preguntas si alguien es sincero contigo y salen El Diablo y La Luna. Ve con cuidado. Hay algo que no se ve del todo, y tus propios miedos pueden estar agrandándolo. Antes de acusar o de cortar, busca hechos concretos y observa. Si hay señales repetidas que no cuadran, no las ignores. Si solo hay inquietud sin pruebas, trabaja esa ansiedad antes de decidir. Hablar claro de lo que te preocupa suele desactivar más de un fantasma.',
    posiciones: {
      pasado: 'Un engaño o una obsesión te dejó desconfiada. Esa herida puede estar tiñendo cómo ves lo de ahora.',
      presente: 'Hay confusión y apego a la vez. Antes de cualquier decisión importante, aclara qué está pasando.',
      futuro: 'Se acercan dudas o información engañosa. Ve con los ojos abiertos y pídelo todo por escrito.',
    },
    invertidas: 'Con El Diablo invertido, empiezas a soltar la obsesión y el engaño pierde fuerza. Con La Luna invertida, la verdad empieza a salir y los miedos se aclaran. Si salen las dos invertidas, buena noticia, porque la niebla se disipa y recuperas el control. Con una sola invertida la situación mejora, pero sigue yendo con cuidado.',
    faq: [
      { q: '¿El Diablo y La Luna significan infidelidad?', r: 'Pueden señalar secretos o desconfianza, pero por sí solas no confirman una infidelidad. A veces el engaño está en los propios miedos.' },
      { q: '¿Qué hacer si salen en una pregunta de dinero?', r: 'Revisar bien contratos, inversiones y promesas que suenan demasiado bien. Toca cautela y leer la letra pequeña.' },
    ],
  },

  'torre-y-estrella': {
    ejemplo: 'Imagina que preguntas qué te espera tras un año muy duro y salen La Torre y La Estrella. Las cartas cuentan la historia entera. Lo que se derrumbó tenía que caer, y ahora llega la calma. Con La Estrella recuperas la confianza, vuelves a soñar y te rodeas de lo que te hace bien. Tampoco se trata de reconstruir igual que antes. Levanta algo más sincero. Lo peor ya ha quedado atrás, así que empieza por algo pequeño que te ilusione.',
    posiciones: {
      pasado: 'Superaste una crisis y después llegó la esperanza. Hoy puedes mirar aquello con cierta paz.',
      presente: 'Acabas de pasar una sacudida y empiezas a respirar. Descansa antes de hacer planes.',
      futuro: 'Si llega una crisis, detrás vendrán el alivio y nuevas oportunidades. Después del derrumbe, la cosa sigue.',
    },
    invertidas: 'Si La Torre sale invertida, la crisis fue menos brusca o aún no ha terminado de estallar. Si la invertida es La Estrella, la calma llega, pero te cuesta fiarte de ella. Con las dos invertidas, la recuperación existe, aunque necesita que te cuides y pidas apoyo. En esta pareja la esperanza siempre tiene la última palabra.',
    faq: [
      { q: '¿La Torre y La Estrella es buena señal?', r: 'Sí, a pesar de La Torre. La Estrella indica que lo peor ha pasado y que vienen tiempos de esperanza.' },
      { q: '¿Puede significar volver con una ex pareja?', r: 'Puede, si los dos reconstruyen sobre bases nuevas. O puede ser ilusión con alguien distinto tras la ruptura.' },
    ],
  },

  'torre-y-luna': {
    ejemplo: 'Si preguntas por un proyecto en el que algo no te cuadra y salen La Torre y La Luna, prepárate para una sorpresa. Lo que estaba en la sombra va a salir de golpe, ya sea un error escondido, un dato que faltaba o un interés que nadie había contado. Será incómodo, pero te ahorra seguir trabajando sobre algo falso. Cuando pase, no reacciones en caliente. Recoge los datos y decide con la cabeza fría. Si afecta a más gente, cuéntalo con tacto.',
    posiciones: {
      pasado: 'Algo que descubriste te abrió los ojos de golpe. Desde entonces confías de otra manera.',
      presente: 'Algo oculto está saliendo a la superficie. Aunque te desconcierte, es el paso previo a verlo todo claro.',
      futuro: 'Una duda que llevas tiempo arrastrando se resolverá de repente. Lo que descubras te ayudará a decidir.',
    },
    invertidas: 'Con La Torre invertida, la verdad se intuye pero no acaba de salir, y la tensión se acumula. Con La Luna invertida, la confusión empieza a despejarse sola. Si salen las dos invertidas, hay algo que ya sabes y que estás evitando mirar. Ponerle nombre a esa sospecha suele quitarle buena parte de su peso.',
    faq: [
      { q: '¿La Torre y La Luna anuncian una traición?', r: 'Pueden señalar un engaño que se descubre, o un miedo propio que se desmonta. En los dos casos la verdad aparece.' },
      { q: '¿Es mejor no preguntar más cuando salen juntas?', r: 'Al contrario, es buen momento para pedir aclaraciones directas. Estas cartas favorecen que lo oculto salga a la luz.' },
    ],
  },

  'estrella-y-sol': {
    ejemplo: 'Supón que preguntas si un proyecto personal que te ilusiona va a salir adelante y aparecen La Estrella y El Sol. El tarot pocas veces es tan claro. Sí, y con alegría. Con La Estrella tu intuición iba bien encaminada, y con El Sol el resultado se verá y te lo van a reconocer. Enseña lo que haces, preséntalo con confianza y deja que la gente lo conozca. Brilla sin pedir perdón. Si te llegan felicitaciones o propuestas, acéptalas con naturalidad, que te las has ganado.',
    posiciones: {
      pasado: 'Hubo una época feliz en la que se cumplió un sueño. Acordarte de ella te devuelve la confianza en ti.',
      presente: 'Todo está luminoso y optimista. Lo que deseabas va tomando forma, así que disfrútalo.',
      futuro: 'Éxito y alegría después de mantener la esperanza. Lo que hoy siembras con ilusión dará fruto.',
    },
    invertidas: 'Si La Estrella sale invertida, dudas de ti y te cuesta creer en lo bueno que llega. Si la invertida es El Sol, la alegría está, pero algo más apagada o con retraso. Incluso con las dos invertidas la tendencia sigue siendo positiva, y solo falta recuperar el optimismo. Mira si le estás quitando valor a tus logros por miedo a que no duren.',
    faq: [
      { q: '¿La Estrella y El Sol significan un sí?', r: 'Sí, es de las combinaciones más claras a favor. Si preguntas por algo concreto, la respuesta tiende a ser afirmativa.' },
      { q: '¿Qué dicen sobre el amor?', r: 'Un amor sincero, alegre y correspondido. Si estás sola, alguien que llega para sumar luz.' },
    ],
  },

  'luna-y-sol': {
    ejemplo: 'Imagina que llevas semanas sin saber qué siente la otra persona y preguntas por ello. Salen La Luna y El Sol. Esa incertidumbre tiene fecha de caducidad, y pronto habrá una conversación o un gesto que lo aclare. Mientras tanto, no intentes interpretar cada silencio. Cuando llegue la respuesta, sabrás qué hacer sin tener que adivinar. Si puedes, pregunta con naturalidad en vez de esperar a que te lo digan. Así suele llegar antes.',
    posiciones: {
      pasado: 'Pasaste una época de dudas que acabó con algo muy claro. Desde entonces te fías más de los hechos.',
      presente: 'Estás saliendo de la confusión. Lo que antes parecía amenazante ahora se ve más pequeño.',
      futuro: 'Lo que hoy no entiendes se aclarará. Ten paciencia, que la respuesta llega sola.',
    },
    invertidas: 'Con La Luna invertida, los miedos pierden fuerza y la verdad se adelanta. Con El Sol invertido, las cosas se aclaran, pero quizá no con la respuesta que esperabas. Si salen las dos invertidas, la confusión dura un poco más, y mejor no decidir en caliente. Aun así, vas de la noche al día y de la duda a la certeza.',
    faq: [
      { q: '¿La Luna y El Sol es buena combinación?', r: 'Sí, porque el Sol vence a la Luna. Las dudas se resuelven y la situación se ilumina.' },
      { q: '¿Cuánto tardará en aclararse lo que pregunto?', r: 'El tarot no fija fechas, pero con esta pareja la cosa avanza hacia la claridad. Suele ser algo que no se alarga demasiado.' },
    ],
  },

  'sol-y-mundo': {
    ejemplo: 'Si preguntas por el resultado de unas oposiciones, un máster o un proyecto grande y salen El Sol y El Mundo, puedes respirar tranquila. Es un final redondo. Lo consigues y además lo vives con alegría. El Mundo añade la sensación de haber cerrado una etapa entera, y no solo una tarea. Tómate tiempo para celebrarlo antes de lanzarte a lo siguiente, que el reconocimiento también forma parte del logro. Y da las gracias a quien te ha acompañado, porque es una alegría para compartir y de las que se recuerdan años después.',
    posiciones: {
      pasado: 'Un gran logro te dio seguridad y alegría. Todavía te apoyas en él.',
      presente: 'Estás en plenitud. Las cosas encajan y te sientes en tu sitio.',
      futuro: 'Lo que estás construyendo saldrá bien del todo. Sigue adelante, que el final es feliz.',
    },
    invertidas: 'Si El Sol sale invertido, el éxito llega pero lo disfrutas menos de lo que mereces. Si la invertida es El Mundo, falta un último paso para rematar o sientes que algo queda incompleto. Con las dos invertidas el logro está cerca y solo falta que termines lo pendiente. Nada de esto cambia lo principal. Es una pareja de éxito.',
    faq: [
      { q: '¿El Sol y El Mundo es la mejor combinación del tarot?', r: 'Está entre las mejores. Junta la alegría del Sol con la meta cumplida del Mundo, y eso es un éxito completo.' },
      { q: '¿Pueden hablar de boda o compromiso?', r: 'Pueden, porque señalan plenitud en pareja y un paso importante que sale bien. Lo confirmarían otras cartas de la tirada.' },
    ],
  },

  'juicio-y-mundo': {
    ejemplo: 'Supón que preguntas si deberías dedicarte por fin a lo que siempre te ha llamado, y salen El Juicio y El Mundo. La respuesta es rotunda. Esa llamada es real y estás preparada para atenderla. El Juicio es despertar y reconocer quién eres, y El Mundo es llegar adonde tenías que llegar. Lejos de ser un capricho, es el remate de muchos años de recorrido. Da el paso tranquila, porque tiene sentido. Y si te asaltan dudas, repasa todo lo que has hecho hasta aquí.',
    posiciones: {
      pasado: 'Cerraste algo importante y te quedaste en paz con tu historia. Aquello te dio una identidad más firme.',
      presente: 'Estás en un punto de culminación y de despertar. Escucha lo que te reclama este momento y contesta.',
      futuro: 'Un ciclo largo se cerrará con sentido. Lo que haces ahora te prepara para ese día.',
    },
    invertidas: 'Con El Juicio invertido, dudas de tu llamada o te juzgas con demasiada dureza. Con El Mundo invertido, el cierre se resiste y cuesta pasar a lo siguiente. Si salen las dos invertidas, la meta sigue ahí, pero tienes que soltar viejas exigencias para llegar. Mira lo que ya has conseguido y reconoce que has hecho un buen trabajo.',
    faq: [
      { q: '¿El Juicio y El Mundo son buena señal?', r: 'Sí, son una pareja muy favorable. Culminación, propósito y la sensación de estar en el lugar adecuado.' },
      { q: '¿Pueden anunciar el regreso de alguien?', r: 'Pueden, porque El Juicio se asocia a los reencuentros y El Mundo a cerrar ciclos. Si vuelve, será para completar algo con sentido.' },
    ],
  },
};
