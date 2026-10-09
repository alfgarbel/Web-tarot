// Los 56 arcanos menores. Los textos están en un archivo por palo; aquí se añaden el número,
// el nombre, el slug y el motivo de línea que se dibuja en la carta.
import type { Arcano } from '../arcanos';
import type { Rango, TextoMenor } from './tipo';
import { bastos } from './bastos';
import { copas } from './copas';
import { espadas } from './espadas';
import { oros } from './oros';

export type Palo = 'bastos' | 'copas' | 'espadas' | 'oros';

export const palos: { palo: Palo; nombre: string; elemento: string; tema: string; textos: TextoMenor[] }[] = [
  { palo: 'bastos', nombre: 'Bastos', elemento: 'Fuego', tema: 'la acción, los proyectos y la pasión', textos: bastos },
  { palo: 'copas', nombre: 'Copas', elemento: 'Agua', tema: 'las emociones, el amor y los vínculos', textos: copas },
  { palo: 'espadas', nombre: 'Espadas', elemento: 'Aire', tema: 'la mente, las decisiones y los conflictos', textos: espadas },
  { palo: 'oros', nombre: 'Oros', elemento: 'Tierra', tema: 'el dinero, el trabajo y lo material', textos: oros },
];

const rangos: { rango: Rango; nombre: string; etiqueta: string }[] = [
  { rango: 'as', nombre: 'As', etiqueta: 'As' },
  { rango: 'dos', nombre: 'Dos', etiqueta: 'II' },
  { rango: 'tres', nombre: 'Tres', etiqueta: 'III' },
  { rango: 'cuatro', nombre: 'Cuatro', etiqueta: 'IV' },
  { rango: 'cinco', nombre: 'Cinco', etiqueta: 'V' },
  { rango: 'seis', nombre: 'Seis', etiqueta: 'VI' },
  { rango: 'siete', nombre: 'Siete', etiqueta: 'VII' },
  { rango: 'ocho', nombre: 'Ocho', etiqueta: 'VIII' },
  { rango: 'nueve', nombre: 'Nueve', etiqueta: 'IX' },
  { rango: 'diez', nombre: 'Diez', etiqueta: 'X' },
  { rango: 'sota', nombre: 'Sota', etiqueta: 'Sota' },
  { rango: 'caballo', nombre: 'Caballo', etiqueta: 'Caballo' },
  { rango: 'reina', nombre: 'Reina', etiqueta: 'Reina' },
  { rango: 'rey', nombre: 'Rey', etiqueta: 'Rey' },
];

// Símbolo de cada palo, centrado en 0,0 y de unas 22 unidades de alto.
const simbolos: Record<Palo, string> = {
  bastos: '<path d="M0 -11 V11"/><path d="M0 -6 l-4 -3 M0 -1 l4 -3 M0 4 l-4 -3"/><circle cx="0" cy="-11" r="1.6" class="f"/>',
  copas: '<path d="M-7 -9 H7 Q7 2 0 3 Q-7 2 -7 -9 Z"/><path d="M0 3 V8 M-5 10 H5"/>',
  espadas: '<path d="M0 -12 L2 -9 V4 H-2 V-9 Z"/><path d="M-6 4 H6 M0 4 V9"/><circle cx="0" cy="10.5" r="1.5" class="f"/>',
  oros: '<circle r="8.5"/><polygon points="0,-6 1.4,-1.9 5.7,-1.9 2.2,0.7 3.5,4.9 0,2.4 -3.5,4.9 -2.2,0.7 -5.7,-1.9 -1.4,-1.9"/>',
};

const usar = (palo: Palo, x: number, y: number, escala: number) =>
  `<g transform="translate(${x} ${y}) scale(${escala})">${simbolos[palo]}</g>`;

// Posiciones de los símbolos para las cartas numeradas, sobre la caja de 100 x 100.
const pips: Record<number, [number, number][]> = {
  2: [[50, 28], [50, 72]],
  3: [[50, 22], [50, 50], [50, 78]],
  4: [[33, 30], [67, 30], [33, 70], [67, 70]],
  5: [[33, 28], [67, 28], [50, 50], [33, 72], [67, 72]],
  6: [[33, 22], [67, 22], [33, 50], [67, 50], [33, 78], [67, 78]],
  7: [[33, 22], [67, 22], [50, 36], [33, 50], [67, 50], [33, 78], [67, 78]],
  8: [[33, 18], [67, 18], [33, 39], [67, 39], [33, 61], [67, 61], [33, 82], [67, 82]],
  9: [[33, 18], [67, 18], [33, 39], [67, 39], [50, 50], [33, 61], [67, 61], [33, 82], [67, 82]],
  10: [[33, 18], [67, 18], [50, 29], [33, 39], [67, 39], [33, 61], [67, 61], [50, 71], [33, 82], [67, 82]],
};

const coronas: Record<string, string> = {
  sota: '<polygon points="50,14 52,20 58,22 52,24 50,30 48,24 42,22 48,20"/>',
  caballo: '<path d="M40 30 A10 10 0 1 1 60 30"/><circle cx="40" cy="30" r="1.6" class="f"/><circle cx="60" cy="30" r="1.6" class="f"/>',
  reina: '<path d="M38 30 L38 20 L44 25 L50 15 L56 25 L62 20 L62 30 Z"/><circle cx="50" cy="15" r="1.6" class="f"/>',
  rey: '<path d="M36 30 L36 18 L42 24 L46 14 L50 22 L54 14 L58 24 L64 18 L64 30 Z M36 34 H64"/>',
};

const motivoMenor = (palo: Palo, i: number, rango: Rango) => {
  if (rango === 'as') return usar(palo, 50, 50, 2.6) + '<circle cx="50" cy="50" r="40" stroke-dasharray="1 4"/>';
  if (coronas[rango]) return coronas[rango] + usar(palo, 50, 62, 1.7);
  const n = i + 1;
  const escala = n <= 3 ? 1 : n <= 6 ? 0.85 : 0.68;
  return pips[n].map(([x, y]) => usar(palo, x, y, escala)).join('');
};

export const menores: Arcano[] = palos.flatMap(({ palo, nombre, textos }, p) =>
  textos.map((t, i) => {
    const r = rangos[i];
    if (r.rango !== t.rango) throw new Error(`Orden incorrecto en ${palo}: ${t.rango}`);
    const nombreCarta = `${r.nombre} de ${nombre}`;
    return {
      ...t,
      numero: 22 + p * 14 + i,
      romano: r.etiqueta,
      nombre: nombreCarta,
      slug: `${r.nombre.toLowerCase()}-de-${palo}`,
      simbolo: '',
      palo,
      motivo: motivoMenor(palo, i, r.rango),
    };
  }),
);
