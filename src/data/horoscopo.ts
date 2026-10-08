// Reparto diario de cartas del horóscopo. Cada día se baraja el mazo de 22 arcanos mayores
// con la fecha como semilla y se da una carta distinta a cada signo, así dos signos nunca
// comparten carta ni texto el mismo día. Lo usan la compilación y el navegador.

export const fechaMadrid = (d: Date) => d.toLocaleDateString('sv-SE', { timeZone: 'Europe/Madrid' });

const semilla = (texto: string) => {
  let h = 2166136261;
  for (const c of texto) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return h;
};

/** Índices de arcano (0 a 21) para los 12 signos, en el orden de signos.ts. */
export const repartoDelDia = (fecha: string): number[] => {
  let s = semilla(`horoscopo|${fecha}`);
  const azar = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
  const mazo = Array.from({ length: 22 }, (_, i) => i);
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(azar() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
  }
  return mazo.slice(0, 12);
};
