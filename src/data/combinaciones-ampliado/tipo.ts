// Texto ampliado de cada combinación de dos arcanos mayores.
export interface CombinacionAmpliada {
  /** 1 párrafo: un ejemplo de tirada realista y cómo se leería. */
  ejemplo: string;
  /** Qué cambia según la posición en una tirada de pasado, presente y futuro. */
  posiciones: { pasado: string; presente: string; futuro: string };
  /** 2 o 3 frases: si sale una o las dos invertidas. */
  invertidas: string;
  /** 2 preguntas frecuentes reales sobre esta pareja de cartas. */
  faq: { q: string; r: string }[];
}
