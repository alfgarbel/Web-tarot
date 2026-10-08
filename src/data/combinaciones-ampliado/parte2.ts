import type { CombinacionAmpliada } from './tipo';

export const parte2: Record<string, CombinacionAmpliada> = {
  'justicia-y-rueda-de-la-fortuna': {
    ejemplo: 'Imagina que preguntas por una plaza a la que te presentaste hace meses y salen La Justicia y La Rueda de la Fortuna. La lectura es que el resultado ya está en marcha y depende sobre todo de lo que hiciste entonces: la preparación, los papeles bien presentados, la forma en que te comportaste en la entrevista. La Rueda indica que el movimiento llega pronto, aunque no lo controles tú. Si fuiste rigurosa, la balanza se inclina a tu favor; si dejaste algo a medias, ahora se nota.',
    posiciones: {
      pasado: 'En el pasado señalan un giro que fue consecuencia directa de decisiones anteriores, tuyas o de otras personas. Ese momento explica buena parte de dónde estás hoy.',
      presente: 'En el presente hablan de un movimiento que está ocurriendo ahora y que reparte a cada cual lo suyo. Es buen momento para revisar qué has sembrado y qué estás recogiendo.',
      futuro: 'En el futuro anuncian un cambio que llegará como respuesta a cómo actúes desde hoy. Lo que decidas en las próximas semanas pesa más de lo que parece.',
    },
    invertidas: 'Si La Justicia sale invertida, el giro puede sentirse injusto o venir de un error ajeno, y conviene revisar contratos y condiciones. Si es La Rueda la que se invierte, el cambio se retrasa o se repite una situación que creías superada. Las dos invertidas piden asumir tu parte sin cargar con la de los demás.',
    faq: [
      { q: '¿La Justicia y La Rueda de la Fortuna es buena señal?', r: 'Es una señal justa más que buena o mala: devuelve lo que corresponde. Si has actuado con coherencia, suele traer un resultado favorable.' },
      { q: '¿Esta combinación habla de karma?', r: 'Sí, en el sentido de causa y efecto que usa el tarot tradicional. No es un castigo, sino la lógica de que los actos tienen consecuencias.' },
    ],
  },

  'justicia-y-juicio': {
    ejemplo: 'Supón que preguntas si deberías volver a hablar con alguien con quien te distanciaste y te salen La Justicia y El Juicio. Las cartas dicen que ha llegado el momento de mirar lo que pasó con honradez, sin adornarlo ni culparte de más. El Juicio trae una llamada clara: puede ser un mensaje que llega o una necesidad tuya de cerrar el tema. La conversación tiene sentido si vas a escuchar y también a decir tu verdad. Lo que salga de ahí será definitivo, para bien o para dejarlo atrás.',
    posiciones: {
      pasado: 'En el pasado marcan una decisión importante ya tomada, un antes y un después que sigue influyendo. Puede ser un fallo, una separación o una elección que te cambió el rumbo.',
      presente: 'En el presente indican que estás ante un momento de rendir cuentas contigo misma. No hay forma de mirar hacia otro lado: toca elegir y comprometerte.',
      futuro: 'En el futuro anuncian una respuesta firme que llegará en su momento. Prepárate para recibirla con serenidad, porque cerrará una cuestión abierta.',
    },
    invertidas: 'Con La Justicia invertida, el veredicto puede llegar sesgado o con información incompleta, y conviene pedir aclaraciones. Con El Juicio invertido, aparece la tentación de aplazar la decisión o de juzgarte con dureza. Si salen las dos al revés, el consejo es no decidir desde la culpa.',
    faq: [
      { q: '¿La Justicia y El Juicio anuncian un resultado legal favorable?', r: 'Hablan de una resolución clara, pero el sentido depende de las cartas que las acompañen y de tu situación real. Tómalas como invitación a preparar bien tu parte.' },
      { q: '¿Qué significa esta pareja si pregunto por una expareja?', r: 'Suele señalar una conversación pendiente para cerrar con honestidad. No promete reconciliación, sino un final o un nuevo acuerdo con las cuentas claras.' },
    ],
  },

  'ermitano-y-colgado': {
    ejemplo: 'Si preguntas si es buen momento para cambiar de trabajo y aparecen El Ermitaño y El Colgado, la respuesta es que todavía no. Las cartas no dicen que la idea sea mala, sino que te falta claridad sobre qué quieres de verdad. Es un periodo para informarte, hablar con gente del sector o probar algo pequeño antes de dar el paso. Lo que hoy ves como estancamiento es un tiempo de maduración. Cuando lo tengas claro, sabrás moverte sin dudar.',
    posiciones: {
      pasado: 'En el pasado hablan de una etapa de retiro o de espera que te sirvió para conocerte mejor. Quizás entonces te pareció tiempo perdido, pero te dio respuestas.',
      presente: 'En el presente piden quietud y paciencia. Lo que buscas no aparece corriendo, sino cuando te detienes a observar con otros ojos.',
      futuro: 'En el futuro anuncian una pausa que llegará, elegida o impuesta. Conviene recibirla como un descanso útil y no como un fracaso.',
    },
    invertidas: 'Si El Ermitaño sale invertido, la soledad puede convertirse en aislamiento y te cuesta pedir ayuda. Si es El Colgado, la espera se alarga sin sentido o te resistes a cambiar de punto de vista. Las dos invertidas avisan de que ya has reflexionado bastante y toca moverse. Si en la tirada aparecen cartas más activas a su lado, la pausa está a punto de terminar.',
    faq: [
      { q: '¿El Ermitaño y El Colgado significan que algo no va a pasar?', r: 'No necesariamente: significan que no va a pasar todavía. Hablan de tiempos lentos, no de un no definitivo.' },
      { q: '¿Qué hacer cuando salen juntas en una tirada de amor?', r: 'Darte espacio y no presionar a la otra persona. Una relación que necesita pausa se aclara mejor con calma que con prisas.' },
    ],
  },

  'ermitano-y-estrella': {
    ejemplo: 'Imagina que llevas un tiempo apagada tras una mala racha y preguntas qué te espera. Salen El Ermitaño y La Estrella. Las cartas describen un proceso tranquilo: primero el recogimiento, cuidar tus rutinas y tus espacios, y después una esperanza que vuelve casi sin darte cuenta. No hace falta forzar la alegría ni llenar la agenda. La señal es que vas por buen camino aunque el ritmo sea suave. Si alguien te ofrece compañía o ayuda en este tiempo, acéptala sin sentir que pierdes tu espacio.',
    posiciones: {
      pasado: 'En el pasado señalan un periodo de soledad que te ayudó a recuperarte. Lo que aprendiste ahí sigue siendo tu brújula.',
      presente: 'En el presente indican que estás sanando y que la claridad empieza a llegar. Fíate de las pequeñas señales que te dicen hacia dónde ir.',
      futuro: 'En el futuro prometen una dirección clara después de una etapa de búsqueda. Lo que encuentres tendrá que ver con lo que de verdad te importa.',
    },
    invertidas: 'Con El Ermitaño invertido, la búsqueda se vuelve encierro y cuesta salir de tu cabeza. Con La Estrella invertida, la esperanza flojea y dudas de que algo vaya a mejorar. Si salen las dos invertidas, conviene buscar compañía y apoyo cercano en lugar de esperar la luz en solitario. Es una pareja que habla de tiempos propios, así que no te compares con el ritmo de nadie.',
    faq: [
      { q: '¿El Ermitaño y La Estrella es buena combinación?', r: 'Sí, es una combinación amable y esperanzadora. Habla de recuperación y de encontrar sentido, aunque sin prisas.' },
      { q: '¿Significa que voy a estar sola mucho tiempo?', r: 'Indica una etapa de recogimiento, no una soledad para siempre. Ese tiempo contigo misma prepara el terreno para relaciones más sanas.' },
    ],
  },

  'rueda-de-la-fortuna-y-muerte': {
    ejemplo: 'Supón que preguntas por el futuro de tu empresa y aparecen La Rueda de la Fortuna y La Muerte. La lectura apunta a cambios que vienen de fuera: una reestructuración, una venta o un giro del mercado que pone fin a cómo funcionaban las cosas. No es algo que puedas frenar, pero sí puedes prepararte. Actualiza tu currículum, cuida tus contactos y mira qué oportunidades trae el nuevo escenario. Quien se adapta pronto suele salir mejor parada.',
    posiciones: {
      pasado: 'En el pasado hablan de un final que llegó por las circunstancias y que no elegiste. Ese cierre te obligó a empezar otra etapa que todavía estás construyendo.',
      presente: 'En el presente indican que la rueda está girando ahora mismo. Algo termina a tu alrededor y lo útil es mirar qué puerta se abre.',
      futuro: 'En el futuro anuncian un cambio de ciclo que se acerca. Ir soltando poco a poco lo que ya no funciona hará el paso más ligero.',
    },
    invertidas: 'Si La Rueda sale invertida, el cambio se retrasa o se vive como mala suerte, y cuesta ver lo positivo. Si La Muerte se invierte, hay resistencia a cerrar y el final se alarga más de lo necesario. Las dos invertidas piden aceptar que la etapa ya terminó aunque sigas sosteniéndola.',
    faq: [
      { q: '¿La Rueda de la Fortuna y La Muerte son mala señal?', r: 'Anuncian un cambio fuerte, y eso puede asustar. Pero en el tarot La Muerte es transformación, no desgracia, y La Rueda recuerda que todo vuelve a girar.' },
      { q: '¿Esta combinación habla de una muerte física?', r: 'No. En el tarot tradicional La Muerte simboliza el final de una etapa, y aquí ese final viene empujado por las circunstancias.' },
    ],
  },

  'rueda-de-la-fortuna-y-mundo': {
    ejemplo: 'Si preguntas por un proyecto en el que llevas años trabajando y salen La Rueda de la Fortuna y El Mundo, es una señal muy luminosa. Las cartas hablan de una oportunidad que llega justo cuando el trabajo está maduro: una propuesta, un cliente o una puerta inesperada que lo culmina. A veces esa oportunidad tiene que ver con otro país o con un público más amplio. La clave es estar lista para decir que sí cuando aparezca. Lo que has construido ya está a la altura.',
    posiciones: {
      pasado: 'En el pasado señalan un logro importante que llegó con buena suerte y en el momento oportuno. Ese éxito te dio una base sólida sobre la que sigues apoyándote.',
      presente: 'En el presente indican que estás en un buen momento para cerrar algo con éxito. Las circunstancias te acompañan, así que aprovéchalas.',
      futuro: 'En el futuro anuncian la culminación de un ciclo gracias a un giro favorable. Sigue trabajando con constancia, porque el remate está cerca.',
    },
    invertidas: 'Con La Rueda invertida, la oportunidad tarda o llega con condiciones que no esperabas. Con El Mundo invertido, falta un último paso para cerrar del todo y cuesta rematar. Si salen las dos invertidas, el éxito no se pierde, pero se retrasa: revisa qué cabos sueltos quedan. Mantén la confianza, porque el ciclo tiende a cerrarse bien.',
    faq: [
      { q: '¿La Rueda de la Fortuna y El Mundo es una combinación de suerte?', r: 'Sí, es de las más favorables del tarot. Une la buena fortuna con la sensación de meta alcanzada.' },
      { q: '¿Puede hablar de viajes?', r: 'Puede, porque El Mundo se asocia a horizontes amplios y La Rueda a movimiento. Si preguntas por un traslado o un viaje, es buena señal.' },
    ],
  },

  'fuerza-y-diablo': {
    ejemplo: 'Imagina que preguntas por un hábito que quieres dejar, como gastar de más o volver una y otra vez a alguien que no te conviene, y salen La Fuerza y El Diablo. Las cartas reconocen que el tirón es fuerte y que no es fácil. Pero La Fuerza indica que tienes la capacidad de dominarlo, no con castigos sino con paciencia y amabilidad hacia ti. Ponerte límites claros y cambiar el entorno te ayudará más que la fuerza de voluntad a solas. Cada pequeña victoria cuenta.',
    posiciones: {
      pasado: 'En el pasado hablan de una dependencia o una tentación que lograste vencer, o que todavía te dejó huella. Lo que aprendiste entonces te sirve ahora.',
      presente: 'En el presente indican una lucha interna activa entre lo que deseas y lo que te conviene. Tienes más poder del que crees para elegir.',
      futuro: 'En el futuro avisan de una prueba que se acerca. Si te preparas y conoces tus puntos débiles, saldrás reforzada.',
    },
    invertidas: 'Si La Fuerza sale invertida, la voluntad flojea y el impulso gana terreno, así que conviene pedir apoyo. Si El Diablo se invierte, es buena noticia: empiezas a soltar las cadenas. Con las dos invertidas, la liberación es posible pero frágil, y necesita constancia. Recuerda que una recaída no borra todo el camino recorrido.',
    faq: [
      { q: '¿La Fuerza y El Diablo juntas son mala señal?', r: 'Señalan un conflicto, pero la presencia de La Fuerza inclina la balanza a tu favor. Es una combinación de superación más que de derrota.' },
      { q: '¿Qué dice esta pareja en el amor?', r: 'Habla de una atracción muy intensa que puede volverse posesiva si no se cuida. Pide pasión con límites y respeto mutuo.' },
    ],
  },

  'colgado-y-muerte': {
    ejemplo: 'Si preguntas por una relación que lleva meses en punto muerto y salen El Colgado y La Muerte, las cartas son bastante claras. Ese tiempo de espera ya ha cumplido su función: te ha mostrado lo que necesitabas ver. Ahora toca aceptar que la relación, tal como está, no va a volver a ser la de antes. Eso puede significar terminar o transformar la forma de estar juntos de raíz. Lo que no funciona es seguir esperando a que algo cambie por sí solo.',
    posiciones: {
      pasado: 'En el pasado señalan una larga espera que terminó en un cierre. Ese final, aunque doliera, te liberó de una situación estancada.',
      presente: 'En el presente indican que estás en el punto exacto de soltar. Rendirte aquí no es perder, es dejar de luchar contra lo que ya ha pasado.',
      futuro: 'En el futuro anuncian que la pausa actual desembocará en un cambio profundo. Prepárate para cerrar con calma lo que ya no tiene recorrido.',
    },
    invertidas: 'Con El Colgado invertido, la espera se vuelve inútil y estás sacrificando más de lo que deberías. Con La Muerte invertida, te resistes a un final que ya es evidente. Si salen las dos invertidas, el mensaje es directo: el bloqueo viene de no querer soltar. Pregúntate qué miedo te mantiene en esa espera.',
    faq: [
      { q: '¿El Colgado y La Muerte significan ruptura?', r: 'Pueden hablar de ruptura, pero también de una transformación profunda de la relación. Lo seguro es que no seguirá igual que ahora.' },
      { q: '¿Cuánto durará esta etapa de estancamiento?', r: 'El tarot no da plazos exactos, pero esta pareja dice que el estancamiento se acaba cuando aceptas el cambio. La salida depende más de tu decisión que del tiempo.' },
    ],
  },

  'muerte-y-templanza': {
    ejemplo: 'Supón que acabas de dejar una ciudad o un trabajo y preguntas cómo será tu adaptación. Salen La Muerte y La Templanza. Las cartas confirman que el cambio era necesario y que lo vas a ir integrando poco a poco. No esperes sentirte en casa en dos semanas: la Templanza habla de mezclar lo viejo con lo nuevo hasta encontrar tu medida. Cuida tus rutinas, tu descanso y a la gente que te hace bien. El equilibrio llega a fuerza de pequeños ajustes. Si alguien cercano te propone ayuda práctica, como una mudanza o un trámite, dile que sí.',
    posiciones: {
      pasado: 'En el pasado hablan de un final importante que lograste atravesar con bastante serenidad. Esa experiencia te enseñó que puedes recomponerte.',
      presente: 'En el presente indican que estás en plena reconstrucción tras un cambio. Ve despacio y no te exijas estar al cien por cien.',
      futuro: 'En el futuro anuncian que, tras el cierre que se acerca, vendrá un periodo de calma y recuperación. La transición será más suave de lo que temes.',
    },
    invertidas: 'Si La Muerte sale invertida, el final se estanca y cuesta pasar página. Si La Templanza se invierte, hay prisa por estar bien o excesos para tapar el malestar. Con las dos invertidas, conviene parar, aceptar el duelo y recuperar hábitos sencillos. En cualquier caso, esta pareja nunca anuncia un final brusco, sino uno que se puede digerir.',
    faq: [
      { q: '¿La Muerte y La Templanza es buena combinación?', r: 'Sí, es de las formas más amables de ver La Muerte. La Templanza suaviza el cambio y anuncia una recuperación tranquila.' },
      { q: '¿Puede indicar reconciliación?', r: 'Puede, si la relación se transforma y se reconstruye con más calma. No será volver a lo de antes, sino empezar algo más equilibrado.' },
    ],
  },

  'muerte-y-torre': {
    ejemplo: 'Imagina que preguntas por tu situación laboral y salen La Muerte y La Torre. La lectura habla de un cambio brusco y sin vuelta atrás: un cierre, una reorganización o una decisión que te saca de donde estabas. Asusta, pero estas cartas también dicen que esa estructura llevaba tiempo tambaleándose. Lo útil ahora es no gastar energía en salvar lo que ya cayó. Haz inventario de lo que sabes hacer y de quién puede ayudarte a dar el siguiente paso.',
    posiciones: {
      pasado: 'En el pasado señalan una crisis fuerte que lo cambió todo. Lo que hoy eres se construyó en parte sobre esos escombros.',
      presente: 'En el presente indican que estás en medio de una sacudida importante. Céntrate en lo esencial y deja lo demás para cuando pase la tormenta.',
      futuro: 'En el futuro avisan de un cambio radical en el camino. Saberlo te permite revisar desde ya qué bases son frágiles.',
    },
    invertidas: 'Con La Muerte invertida, te aferras a algo que ya se está cayendo y alargas el proceso. Con La Torre invertida, la crisis se vive por dentro o se evita a medias, sin resolverse del todo. Si salen las dos invertidas, el cambio sigue pendiente: mejor afrontarlo tú que esperar a que te arrastre. Pedir ayuda en esta etapa no es debilidad, es sentido común.',
    faq: [
      { q: '¿La Muerte y La Torre es la peor combinación del tarot?', r: 'Es de las más intensas, pero no la peor. Anuncia un cambio radical que, una vez pasado, deja espacio para algo más auténtico.' },
      { q: '¿Se puede evitar lo que anuncian?', r: 'El tarot muestra tendencias, no destinos cerrados. Lo que sí puedes elegir es cómo te preparas y cómo respondes al cambio.' },
    ],
  },

  'muerte-y-estrella': {
    ejemplo: 'Si preguntas por tu vida amorosa después de una separación y salen La Muerte y La Estrella, es un mensaje de alivio. Las cartas confirman que esa historia está cerrada y que no hace falta volver a abrirla. Al mismo tiempo, La Estrella dice que la ilusión vuelve y que te sentirás más tú que antes. No hay que correr hacia una relación nueva: basta con dejar que la esperanza crezca. Cuando aparezca alguien, lo verás con ojos más limpios. Mientras tanto, rodéate de amistades que te recuerden quién eres.',
    posiciones: {
      pasado: 'En el pasado hablan de un final que, con el tiempo, resultó ser una liberación. Aquel cierre te abrió a una etapa más ligera.',
      presente: 'En el presente indican que estás saliendo de un duelo y empiezas a ver luz. Cuida esa esperanza nueva como algo valioso.',
      futuro: 'En el futuro anuncian que el cambio que se acerca traerá algo mejor. Aunque cueste soltar, lo que viene te encaja más.',
    },
    invertidas: 'Si La Muerte sale invertida, te cuesta aceptar el final y la esperanza tarda en llegar. Si La Estrella se invierte, el cierre ya ha ocurrido pero sientes desánimo o desconfianza. Con las dos invertidas, date permiso para estar triste antes de exigirte ilusión. Aun así, la tendencia de fondo es buena: la luz está ahí aunque hoy cueste verla.',
    faq: [
      { q: '¿La Muerte y La Estrella es buena señal?', r: 'Sí, es una combinación de renacer. El final es real, pero lo que llega después es esperanzador.' },
      { q: '¿Qué significan en una pregunta de trabajo?', r: 'Un cierre que da paso a una oportunidad más acorde contigo. Suele hablar de cambiar a algo que te ilusiona de verdad.' },
    ],
  },

  'templanza-y-estrella': {
    ejemplo: 'Supón que preguntas si merece la pena volver a intentarlo con alguien tras una época de distancia, y salen La Templanza y La Estrella. Las cartas hablan de un acercamiento tranquilo, sin dramas, en el que ambas partes han aprendido algo. No es un reencuentro de fuegos artificiales, sino de confianza que se recupera poco a poco. Si avanzáis con paciencia y sinceridad, la relación puede ser más sana que antes. La señal es claramente favorable. Hablad de lo que pasó sin reproches y poned acuerdos sencillos que podáis cumplir.',
    posiciones: {
      pasado: 'En el pasado señalan una etapa de recuperación que te devolvió la paz. Aquella calma es un recurso al que puedes volver.',
      presente: 'En el presente indican que estás en un momento sereno y esperanzado. Es buen momento para cuidar lo que funciona y no complicarlo.',
      futuro: 'En el futuro anuncian una etapa de equilibrio y confianza renovada. Lo que hoy cuesta encontrará su punto con el tiempo.',
    },
    invertidas: 'Con La Templanza invertida, hay impaciencia o desequilibrio entre lo que das y lo que recibes. Con La Estrella invertida, la esperanza se apaga un poco y cuesta confiar. Si salen las dos invertidas, conviene volver a lo básico: descanso, límites y pequeñas metas alcanzables. Son cartas tan suaves que, incluso invertidas, rara vez anuncian algo grave.',
    faq: [
      { q: '¿La Templanza y La Estrella es buena combinación para el amor?', r: 'Sí, es de las más dulces. Habla de un amor sereno, de reconciliación tranquila o de una relación que cuida.' },
      { q: '¿Indican que algo se cumplirá pronto?', r: 'Indican que se cumplirá, pero a su ritmo. Son cartas de paciencia, así que el resultado llega sin prisas.' },
    ],
  },

  'diablo-y-torre': {
    ejemplo: 'Imagina que preguntas por un ambiente de trabajo donde te sientes atrapada y salen El Diablo y La Torre. Las cartas avisan de que esa situación no aguanta mucho más: puede destaparse algo poco limpio o puede llegar un cambio que te saque de ahí. Es incómodo, pero te libera de algo que te estaba restando. Si puedes, anticípate y prepara tu salida. Lo que viene después será más sano, aunque el paso sea brusco. Habla con alguien de confianza para no tomar decisiones a solas y en caliente.',
    posiciones: {
      pasado: 'En el pasado hablan de una ruptura con algo que te ataba, quizás una relación o un hábito. Aquella sacudida te devolvió la libertad.',
      presente: 'En el presente indican que algo que te tenía enganchada está a punto de romperse o se está rompiendo. Déjalo caer.',
      futuro: 'En el futuro anuncian que una situación de dependencia terminará de forma repentina. Cuanto antes la reconozcas, menos te costará.',
    },
    invertidas: 'Si El Diablo sale invertido, ya estás soltando las cadenas y la ruptura será menos violenta. Si La Torre se invierte, la crisis se aplaza y la situación tóxica se alarga. Con las dos invertidas, sabes lo que tienes que dejar, pero te falta dar el paso. En todos los casos, el mensaje de fondo es el mismo: lo que te ata no es para siempre.',
    faq: [
      { q: '¿El Diablo y La Torre son una combinación negativa?', r: 'Son intensas y anuncian una ruptura, pero el resultado suele ser liberador. Rompen lo que te ataba.' },
      { q: '¿Qué significan si pregunto por mi pareja?', r: 'Pueden señalar celos, control o dependencia que estallan. Después de la crisis, toca decidir si la relación puede ser libre o no.' },
    ],
  },

  'diablo-y-luna': {
    ejemplo: 'Supón que preguntas si alguien es sincero contigo y salen El Diablo y La Luna. Las cartas piden prudencia: hay algo que no se ve del todo, y además tus propios miedos pueden estar agrandándolo. Antes de acusar o de cortar, busca hechos concretos y observa con calma. Si hay señales repetidas que no cuadran, no las ignores. Si solo hay inquietud sin pruebas, trabaja esa ansiedad antes de tomar una decisión. Hablar abiertamente de lo que te preocupa suele desactivar más de un fantasma.',
    posiciones: {
      pasado: 'En el pasado señalan una situación de engaño o de obsesión que te dejó desconfiada. Esa herida puede estar tiñendo cómo ves el presente.',
      presente: 'En el presente indican confusión y apego al mismo tiempo. No es buen momento para decisiones importantes sin aclarar antes lo que pasa.',
      futuro: 'En el futuro avisan de un periodo de dudas o de información engañosa. Ir con los ojos abiertos y pedirlo todo por escrito te protege.',
    },
    invertidas: 'Con El Diablo invertido, empiezas a soltar la obsesión y el engaño pierde fuerza. Con La Luna invertida, la verdad empieza a salir y los miedos se aclaran. Si salen las dos invertidas, es una buena noticia: la niebla se disipa y recuperas el control. Si solo una está invertida, la situación mejora, pero aún conviene ir con cuidado.',
    faq: [
      { q: '¿El Diablo y La Luna significan infidelidad?', r: 'Pueden hablar de secretos o de desconfianza, pero no confirman una infidelidad por sí solas. A veces el engaño está en los propios miedos.' },
      { q: '¿Qué hacer si salen en una pregunta de dinero?', r: 'Revisar bien contratos, inversiones y promesas que suenan demasiado bien. Es una combinación que pide cautela y letra pequeña.' },
    ],
  },

  'torre-y-estrella': {
    ejemplo: 'Imagina que preguntas qué te espera tras un año muy duro y salen La Torre y La Estrella. Las cartas cuentan la historia completa: lo que se derrumbó tenía que caer, y ahora llega la calma. La Estrella habla de recuperar la confianza, de volver a soñar y de rodearte de lo que te hace bien. No es momento de reconstruir igual que antes, sino de levantar algo más sincero. La peor parte ya ha quedado atrás. Agradece lo que aprendiste y empieza por algo pequeño que te ilusione.',
    posiciones: {
      pasado: 'En el pasado hablan de una crisis superada que dio paso a una etapa de esperanza. Hoy puedes mirar aquello con cierta paz.',
      presente: 'En el presente indican que acabas de atravesar una sacudida y empiezas a respirar. Permítete descansar antes de planificar.',
      futuro: 'En el futuro anuncian que, si llega una crisis, vendrá seguida de alivio y nuevas oportunidades. El camino no termina en el derrumbe.',
    },
    invertidas: 'Si La Torre sale invertida, la crisis fue menos brusca o aún no ha terminado de estallar. Si La Estrella se invierte, la calma llega, pero te cuesta confiar en ella. Con las dos invertidas, la recuperación existe, aunque necesita que te cuides y pidas apoyo. En esta pareja la esperanza siempre tiene la última palabra.',
    faq: [
      { q: '¿La Torre y La Estrella es buena señal?', r: 'Sí, a pesar de La Torre. La Estrella indica que lo peor ha pasado y que viene una etapa de esperanza.' },
      { q: '¿Puede significar volver con una ex pareja?', r: 'Puede, si ambas personas reconstruyen sobre bases nuevas. También puede hablar de ilusión con alguien distinto tras la ruptura.' },
    ],
  },

  'torre-y-luna': {
    ejemplo: 'Si preguntas por un proyecto en el que algo no te cuadra y salen La Torre y La Luna, prepárate para una sorpresa. Las cartas dicen que lo que se mantenía en la sombra va a salir de golpe: un error escondido, una información que faltaba o un interés que no se había contado. Puede ser incómodo, pero te ahorra seguir trabajando sobre algo falso. Cuando ocurra, no reacciones en caliente. Recoge los datos y decide con la cabeza fría. Si la noticia afecta a otras personas, cuéntala con tacto y con datos.',
    posiciones: {
      pasado: 'En el pasado señalan una revelación que te abrió los ojos de golpe. Aquella verdad cambió tu forma de confiar.',
      presente: 'En el presente indican que algo oculto está saliendo a la superficie. Aunque te desconcierte, es el paso previo a la claridad.',
      futuro: 'En el futuro anuncian que una duda que llevas tiempo arrastrando se resolverá de forma repentina. Lo que descubras te ayudará a decidir.',
    },
    invertidas: 'Con La Torre invertida, la verdad se intuye pero no termina de salir, y la tensión se acumula. Con La Luna invertida, la confusión empieza a despejarse por sí sola. Si salen las dos invertidas, hay algo que ya sabes y que estás evitando mirar. Ponerle nombre a esa sospecha suele quitarle buena parte de su peso.',
    faq: [
      { q: '¿La Torre y La Luna anuncian una traición?', r: 'Pueden señalar un engaño que se descubre, pero también un miedo propio que se desmonta. Lo importante es que la verdad aparece.' },
      { q: '¿Es mejor no preguntar más cuando salen juntas?', r: 'Al contrario, es buen momento para pedir aclaraciones directas. Estas cartas favorecen que lo oculto salga a la luz.' },
    ],
  },

  'estrella-y-sol': {
    ejemplo: 'Supón que preguntas si un proyecto personal que te ilusiona va a salir adelante y aparecen La Estrella y El Sol. Es de las respuestas más claras que da el tarot: sí, y con alegría. La Estrella dice que tu intuición iba bien encaminada, y El Sol que el resultado se verá y será reconocido. Comparte lo que haces, preséntalo con confianza y deja que otras personas lo conozcan. Es un momento para brillar sin pedir perdón. Si te llegan felicitaciones o propuestas, acéptalas con naturalidad, porque te las has ganado.',
    posiciones: {
      pasado: 'En el pasado hablan de una época feliz en la que un sueño se hizo realidad. Recordarla te devuelve la confianza en tus capacidades.',
      presente: 'En el presente indican un momento luminoso y optimista. Lo que deseabas está tomando forma, disfrútalo.',
      futuro: 'En el futuro anuncian éxito y alegría después de mantener la esperanza. Lo que hoy siembras con ilusión dará fruto.',
    },
    invertidas: 'Si La Estrella sale invertida, dudas de ti y te cuesta creer en lo bueno que llega. Si El Sol se invierte, la alegría está, pero algo más apagada o con retraso. Incluso con las dos invertidas, la tendencia sigue siendo positiva: solo pide recuperar el optimismo. Revisa si estás quitándole valor a tus logros por miedo a que no duren.',
    faq: [
      { q: '¿La Estrella y El Sol significan un sí?', r: 'Sí, es una de las combinaciones más claras a favor. Si preguntas por algo concreto, la respuesta tiende a ser afirmativa.' },
      { q: '¿Qué dicen sobre el amor?', r: 'Hablan de un amor sincero, alegre y correspondido. Si estás sola, de alguien que llega para sumar luz.' },
    ],
  },

  'luna-y-sol': {
    ejemplo: 'Imagina que llevas semanas sin saber qué siente la otra persona y preguntas por ello. Salen La Luna y El Sol. Las cartas dicen que esa incertidumbre tiene fecha de caducidad: pronto habrá una conversación o un gesto que lo aclare. Mientras tanto, evita interpretar cada silencio. Cuando llegue la claridad, sabrás qué hacer sin tener que adivinar. Si puedes, pregunta con naturalidad en lugar de esperar a que te lo digan. Esa sencillez suele traer la respuesta antes.',
    posiciones: {
      pasado: 'En el pasado señalan una época de dudas que terminó con una revelación clara. Aquel momento te enseñó a fiarte de los hechos.',
      presente: 'En el presente indican que estás saliendo de la confusión. Lo que antes parecía amenazante se ve ahora más pequeño.',
      futuro: 'En el futuro anuncian que lo que hoy no entiendes se aclarará. Ten paciencia, porque la respuesta llega con luz propia.',
    },
    invertidas: 'Con La Luna invertida, los miedos pierden fuerza y la verdad se adelanta. Con El Sol invertido, la claridad llega, pero quizás no con la respuesta que esperabas. Si salen las dos invertidas, la confusión se alarga un poco más, y conviene no tomar decisiones en caliente. Aun así, la dirección es clara: de la noche al día, de la duda a la certeza.',
    faq: [
      { q: '¿La Luna y El Sol es buena combinación?', r: 'Sí, porque el Sol vence a la Luna. Indican que las dudas se resuelven y la situación se ilumina.' },
      { q: '¿Cuánto tardará en aclararse lo que pregunto?', r: 'El tarot no fija fechas, pero esta pareja habla de un proceso que avanza hacia la claridad. Suele tratarse de algo que no se alarga demasiado.' },
    ],
  },

  'sol-y-mundo': {
    ejemplo: 'Si preguntas por el resultado de unas oposiciones, un máster o un proyecto grande y salen El Sol y El Mundo, puedes respirar tranquila. Las cartas describen un final redondo: lo consigues y además lo vives con alegría. El Mundo añade la sensación de haber cerrado una etapa entera, no solo una tarea. Tómate tiempo para celebrarlo antes de lanzarte a lo siguiente. Ese reconocimiento también es parte del logro. Agradece también a quienes te han acompañado, porque esta combinación habla de una alegría que se comparte. Es el tipo de logro que se recuerda años después.',
    posiciones: {
      pasado: 'En el pasado hablan de un gran logro que te dio seguridad y alegría. Ese éxito sigue siendo un punto de apoyo.',
      presente: 'En el presente indican que estás viviendo un momento de plenitud. Las cosas encajan y te sientes en tu sitio.',
      futuro: 'En el futuro anuncian el éxito completo de algo que estás construyendo. Sigue adelante, porque el final es feliz.',
    },
    invertidas: 'Si El Sol sale invertido, el éxito llega pero lo disfrutas menos de lo que mereces. Si El Mundo se invierte, falta un último paso para culminar o sientes que algo queda incompleto. Con las dos invertidas, el logro está cerca y solo necesita que termines lo pendiente. Ninguna de estas variantes cambia lo esencial: es una pareja de éxito.',
    faq: [
      { q: '¿El Sol y El Mundo es la mejor combinación del tarot?', r: 'Está entre las mejores. Une la alegría del Sol con la culminación del Mundo, un éxito completo.' },
      { q: '¿Pueden hablar de boda o compromiso?', r: 'Pueden, porque señalan plenitud en pareja y un paso importante que sale bien. Lo confirmarían otras cartas de la tirada.' },
    ],
  },

  'juicio-y-mundo': {
    ejemplo: 'Supón que preguntas si deberías dedicarte por fin a lo que siempre te ha llamado, y salen El Juicio y El Mundo. Las cartas responden con fuerza: esa llamada es real y estás preparada para atenderla. El Juicio habla de un despertar, de reconocer quién eres, y El Mundo de llegar a donde tenías que llegar. No es un capricho, sino la culminación de un camino largo. Da el paso con la tranquilidad de que tiene sentido. Si te asaltan dudas, recuerda todo lo que has recorrido hasta aquí.',
    posiciones: {
      pasado: 'En el pasado señalan un cierre importante que te hizo sentir en paz con tu historia. Aquella etapa completa te dio una identidad más firme.',
      presente: 'En el presente indican que estás en un punto de culminación y de despertar. Escucha lo que te pide esta etapa y respóndele.',
      futuro: 'En el futuro anuncian que un ciclo largo se cerrará con sentido. Lo que estás haciendo ahora te prepara para ese momento.',
    },
    invertidas: 'Con El Juicio invertido, dudas de tu llamada o te juzgas con demasiada dureza. Con El Mundo invertido, el cierre se resiste y cuesta pasar a la etapa siguiente. Si salen las dos invertidas, la meta sigue ahí, pero necesitas soltar viejas exigencias para alcanzarla. Mira lo que ya has conseguido y reconoce que has hecho un buen trabajo.',
    faq: [
      { q: '¿El Juicio y El Mundo son buena señal?', r: 'Sí, son una pareja muy favorable. Hablan de culminación, de propósito y de estar en el lugar adecuado.' },
      { q: '¿Pueden anunciar el regreso de alguien?', r: 'Pueden, porque El Juicio se asocia a reencuentros y El Mundo a cerrar ciclos. Si vuelve, será para completar algo con sentido.' },
    ],
  },
};
