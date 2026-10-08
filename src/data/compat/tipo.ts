// Texto propio de cada pareja de signos. Se suma al cálculo de signos.ts (nota, aspecto, elementos y ritmo).
export interface TextoPareja {
  /** 2 o 3 frases que presentan a esta pareja en concreto. */
  resumen: string;
  /** 2 párrafos: cómo es la relación de pareja día a día. */
  amor: string[];
  /** 2 o 3 frases: la atracción y la intimidad, con delicadeza. */
  pasion: string;
  amistad: string; // 2 o 3 frases
  trabajo: string; // 2 o 3 frases
  fuertes: string[]; // 3 puntos fuertes, una frase corta cada uno
  roces: string[]; // 3 roces típicos, una frase corta cada uno
  consejo: string; // 1 frase
}
