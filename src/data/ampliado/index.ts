import type { Ampliado } from './tipo';
import { parte1 } from './parte1';
import { parte2 } from './parte2';
import { parte3 } from './parte3';
import { parte4 } from './parte4';

export type { Ampliado };
export const ampliados: Record<string, Ampliado> = { ...parte1, ...parte2, ...parte3, ...parte4 };
