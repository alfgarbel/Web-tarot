import type { Respuesta } from '../arcanos';

export type Rango = 'as' | 'dos' | 'tres' | 'cuatro' | 'cinco' | 'seis' | 'siete' | 'ocho' | 'nueve' | 'diez' | 'sota' | 'caballo' | 'reina' | 'rey';

/** Texto de un arcano menor. El número, el palo y la imagen se calculan en menores/index.ts. */
export interface TextoMenor {
  rango: Rango;
  claves: string[];
  respuesta: Respuesta;
  siNo: string;
  general: string;
  amor: string;
  trabajo: string;
  invertida: string;
  consejo: string;
}
