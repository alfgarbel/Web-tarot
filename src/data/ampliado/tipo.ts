// Texto ampliado de la ficha de un arcano mayor. Se suma a los campos cortos de arcanos.ts.
export interface Ampliado {
  /** 2 párrafos: qué se ve en la carta (Rider-Waite) y qué simboliza cada elemento. */
  imagen: string[];
  /** 2 párrafos: el significado al derecho, más desarrollado que `general`. */
  significado: string[];
  amor: {
    pareja: string; // si tienes pareja
    sola: string; // si estás sola
    ex: string; // si piensas en tu ex
  };
  trabajo: string; // empleo, proyectos, estudios
  dinero: string; // dinero y economía
  como: {
    sentimiento: string; // qué siente la otra persona
    persona: string; // qué tipo de persona representa
    futuro: string; // si sale en la posición de futuro
  };
  /** 2 párrafos: invertida en general y en el amor y el trabajo. */
  invertida: string[];
  /** 4 preguntas frecuentes reales sobre la carta, con respuesta de 2 o 3 frases. */
  faq: { q: string; r: string }[];
}
