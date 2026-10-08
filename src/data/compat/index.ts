import type { TextoPareja } from './tipo';
import { parte1 } from './parte1';
import { parte2 } from './parte2';
import { parte3 } from './parte3';

export type { TextoPareja };
export const textosParejas: Record<string, TextoPareja> = { ...parte1, ...parte2, ...parte3 };
