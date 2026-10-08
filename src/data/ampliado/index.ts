import type { Ampliado } from './tipo';
import { parte1 } from './parte1';
import { parte2 } from './parte2';
import { parte3 } from './parte3';
import { parte4 } from './parte4';
import { bastos } from './bastos';
import { copas } from './copas';
import { espadas } from './espadas';
import { oros } from './oros';

export type { Ampliado };
export const ampliados: Record<string, Ampliado> = { ...parte1, ...parte2, ...parte3, ...parte4, ...bastos, ...copas, ...espadas, ...oros };
