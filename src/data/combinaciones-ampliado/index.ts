import type { CombinacionAmpliada } from './tipo';
import { parte1 } from './parte1';
import { parte2 } from './parte2';

export type { CombinacionAmpliada };
export const combinacionesAmpliadas: Record<string, CombinacionAmpliada> = { ...parte1, ...parte2 };
