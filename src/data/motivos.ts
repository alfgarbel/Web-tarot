// Motivo de línea dorada de cada arcano, dibujado sobre una caja de 100 x 100.
// Inspiración: barajas de trazo fino sobre fondo oscuro (Golden Thread Tarot) y marcos
// Art Déco (Tarot Décoratif). Solo geometría: sin figuras humanas.
// "f" marca un relleno sólido en oro; el resto es trazo.

const estrella = (cx: number, cy: number, r: number, puntas = 4, interior = 0.38) => {
  const pts: string[] = [];
  for (let i = 0; i < puntas * 2; i++) {
    const rr = i % 2 === 0 ? r : r * interior;
    const a = (Math.PI / puntas) * i - Math.PI / 2;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
  }
  return `<polygon points="${pts.join(' ')}"/>`;
};

const rayos = (cx: number, cy: number, r1: number, r2: number, n: number, desfase = 0) => {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = ((Math.PI * 2) / n) * i + desfase;
    d += `M${(cx + r1 * Math.cos(a)).toFixed(2)} ${(cy + r1 * Math.sin(a)).toFixed(2)}L${(cx + r2 * Math.cos(a)).toFixed(2)} ${(cy + r2 * Math.sin(a)).toFixed(2)}`;
  }
  return `<path d="${d}"/>`;
};

export const motivos: Record<string, string> = {
  'el-loco': `
    <circle cx="50" cy="50" r="30"/>
    <path d="M14 78 H58 L66 70" />
    <path d="M30 78 Q40 60 52 58 T76 40" stroke-dasharray="2 3"/>
    <circle cx="76" cy="40" r="3" class="f"/>
    ${rayos(76, 40, 6, 11, 8)}
    ${estrella(30, 32, 5)}`,
  'el-mago': `
    <path d="M30 26 C30 16 46 16 50 26 C54 36 70 36 70 26 C70 16 54 16 50 26 C46 36 30 36 30 26 Z"/>
    <path d="M50 40 V82"/>
    <circle cx="50" cy="40" r="3" class="f"/>
    <path d="M22 70 H78 M26 70 V82 M74 70 V82"/>
    <circle cx="34" cy="62" r="4"/><path d="M62 58 h8 v8 h-8 Z"/>`,
  'la-sacerdotisa': `
    <path d="M22 84 V30 M32 84 V30 M18 30 H36 M18 84 H36 M68 84 V30 M78 84 V30 M64 30 H82 M64 84 H82"/>
    <path d="M56 40 A14 14 0 1 0 56 64 A11 11 0 1 1 56 40 Z" class="f"/>
    <circle cx="50" cy="52" r="20" stroke-dasharray="1 3"/>`,
  'la-emperatriz': `
    <circle cx="50" cy="44" r="14"/>
    <path d="M50 58 V84 M40 72 H60"/>
    ${[...Array(9)].map((_, i) => { const a = Math.PI + (Math.PI / 8) * i; return estrella(50 + 30 * Math.cos(a), 44 + 30 * Math.sin(a), 3.2); }).join('')}
    <path d="M28 84 Q50 74 72 84"/>`,
  'el-emperador': `
    <path d="M30 40 H70 V82 H30 Z M36 46 H64 V82"/>
    <path d="M30 40 C18 40 14 28 22 22 C28 18 34 24 30 30"/>
    <path d="M70 40 C82 40 86 28 78 22 C72 18 66 24 70 30"/>
    <path d="M50 52 L56 62 L50 72 L44 62 Z" class="f"/>`,
  'el-sumo-sacerdote': `
    <path d="M50 16 V86 M40 28 H60 M36 38 H64 M32 48 H68"/>
    <circle cx="50" cy="16" r="3" class="f"/>
    <circle cx="34" cy="74" r="6"/><path d="M38 70 L52 56 M48 60 l3 3 M45 63 l3 3"/>
    <circle cx="66" cy="74" r="6"/><path d="M62 70 L48 56"/>`,
  'los-enamorados': `
    <circle cx="40" cy="58" r="20"/><circle cx="60" cy="58" r="20"/>
    <path d="M50 42 V74" stroke-dasharray="2 2"/>
    <circle cx="50" cy="22" r="6" class="f"/>
    ${rayos(50, 22, 9, 14, 12)}`,
  'el-carro': `
    <path d="M26 30 H74 L68 40 H32 Z"/>
    <path d="M32 40 V66 H68 V40"/>
    <circle cx="34" cy="74" r="9"/><circle cx="66" cy="74" r="9"/>
    <circle cx="34" cy="74" r="2" class="f"/><circle cx="66" cy="74" r="2" class="f"/>
    ${estrella(50, 20, 6, 8, 0.45)}
    ${estrella(50, 53, 6, 4)}`,
  'la-justicia': `
    <path d="M50 18 V82 M38 82 H62 M24 32 H76"/>
    <circle cx="50" cy="18" r="3" class="f"/>
    <path d="M24 32 L16 56 M24 32 L32 56 M14 56 H34 Q24 66 14 56"/>
    <path d="M76 32 L68 56 M76 32 L84 56 M66 56 H86 Q76 66 66 56"/>`,
  'el-ermitano': `
    <path d="M50 14 V30"/>
    <path d="M38 34 H62 L66 46 V64 L62 72 H38 L34 64 V46 Z"/>
    <path d="M42 30 H58 L62 34 H38 Z"/>
    ${estrella(50, 55, 9, 6, 0.5)}
    <path d="M44 72 L42 82 H58 L56 72"/>`,
  'la-rueda-de-la-fortuna': `
    <circle cx="50" cy="50" r="32"/><circle cx="50" cy="50" r="24"/><circle cx="50" cy="50" r="6" class="f"/>
    ${rayos(50, 50, 6, 24, 8)}
    ${rayos(50, 50, 32, 37, 8, Math.PI / 8)}`,
  'la-fuerza': `
    <path d="M30 22 C30 12 46 12 50 22 C54 32 70 32 70 22 C70 12 54 12 50 22 C46 32 30 32 30 22 Z"/>
    <circle cx="50" cy="62" r="14"/>
    ${[...Array(16)].map((_, i) => { const a = ((Math.PI * 2) / 16) * i; const x1 = 50 + 17 * Math.cos(a), y1 = 62 + 17 * Math.sin(a), x2 = 50 + 24 * Math.cos(a + 0.12), y2 = 62 + 24 * Math.sin(a + 0.12); return `<path d="M${x1.toFixed(2)} ${y1.toFixed(2)} Q${(50 + 22 * Math.cos(a - 0.1)).toFixed(2)} ${(62 + 22 * Math.sin(a - 0.1)).toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}"/>`; }).join('')}`,
  'el-colgado': `
    <path d="M20 18 H80 M30 18 V86 M70 18 V86"/>
    <path d="M50 18 V34"/>
    <path d="M38 34 H62 L50 60 Z"/>
    <circle cx="50" cy="70" r="8"/>
    ${rayos(50, 70, 11, 15, 12)}`,
  'la-muerte': `
    ${[0, 1, 2, 3, 4].map((i) => { const a = -Math.PI / 2 + ((Math.PI * 2) / 5) * i; return `<circle cx="${(50 + 11 * Math.cos(a)).toFixed(2)}" cy="${(46 + 11 * Math.sin(a)).toFixed(2)}" r="11"/>`; }).join('')}
    <circle cx="50" cy="46" r="5" class="f"/>
    <path d="M50 68 V88 M50 78 Q40 74 36 80 M50 82 Q60 78 64 84"/>
    <path d="M14 88 H86"/>`,
  'la-templanza': `
    <path d="M18 28 H40 L36 46 H22 Z"/>
    <path d="M60 58 H82 L78 76 H64 Z"/>
    <path d="M36 42 C46 46 52 48 54 52 C56 56 60 58 64 60" stroke-dasharray="2 2.5"/>
    <path d="M50 14 L60 30 H40 Z"/>
    <path d="M30 84 H70"/>`,
  'el-diablo': `
    ${estrella(50, 44, 26, 5, 0.38).replace('<polygon', '<polygon transform="rotate(180 50 44)"')}
    <circle cx="50" cy="44" r="28"/>
    <path d="M30 78 h6 v6 h-6 Z M38 80 h6 v6 h-6 Z M56 80 h6 v6 h-6 Z M64 78 h6 v6 h-6 Z"/>`,
  'la-torre': `
    <path d="M36 88 V34 H64 V88 M30 88 H70"/>
    <path d="M46 88 V76 Q50 70 54 76 V88 M44 50 h4 v8 h-4 Z M52 50 h4 v8 h-4 Z"/>
    <path d="M38 28 L42 18 L46 26 L50 16 L54 26 L58 18 L62 28" transform="rotate(-18 50 22) translate(10 -6)"/>
    <path d="M72 8 L58 30 L68 30 L54 52" class="g"/>`,
  'la-estrella': `
    ${estrella(50, 42, 22, 8, 0.4)}
    ${[[20, 22], [80, 22], [16, 50], [84, 50], [24, 74], [76, 74], [50, 8]].map(([x, y]) => estrella(x, y, 4)).join('')}
    <path d="M18 84 q8 -5 16 0 t16 0 t16 0 t16 0 M26 92 q8 -5 16 0 t16 0 t16 0"/>`,
  'la-luna': `
    <circle cx="50" cy="34" r="20"/>
    <path d="M56 18 A16 16 0 1 0 56 50 A20 20 0 0 1 56 18 Z" class="f"/>
    <path d="M14 88 V62 L20 56 L26 62 V88 M74 88 V62 L80 56 L86 62 V88"/>
    <path d="M34 72 Q50 62 66 72 M30 88 Q50 76 70 88"/>
    <path d="M42 58 l2 4 M50 60 l0 4 M58 58 l-2 4"/>`,
  'el-sol': `
    <circle cx="50" cy="50" r="16" class="f"/>
    <circle cx="50" cy="50" r="20"/>
    ${rayos(50, 50, 24, 38, 12)}
    ${[...Array(12)].map((_, i) => { const a = ((Math.PI * 2) / 12) * i + Math.PI / 12; const x1 = 50 + 24 * Math.cos(a), y1 = 50 + 24 * Math.sin(a), x2 = 50 + 33 * Math.cos(a), y2 = 50 + 33 * Math.sin(a); const n = 3 * Math.cos(a + Math.PI / 2), m = 3 * Math.sin(a + Math.PI / 2); return `<path d="M${x1.toFixed(2)} ${y1.toFixed(2)} Q${((x1 + x2) / 2 + n).toFixed(2)} ${((y1 + y2) / 2 + m).toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}"/>`; }).join('')}`,
  'el-juicio': `
    <path d="M22 30 L66 46 L66 54 L22 40 Z"/>
    <path d="M66 46 Q78 42 82 50 Q78 58 66 54"/>
    <path d="M38 44 V60 H56 V50" stroke-dasharray="0"/>
    <path d="M44 52 h6 M47 48 v10"/>
    <path d="M24 88 V74 M40 88 V68 M56 88 V70 M72 88 V76 M18 88 H82"/>
    ${estrella(80, 22, 5)}`,
  'el-mundo': `
    <ellipse cx="50" cy="50" rx="22" ry="32"/>
    ${[...Array(14)].map((_, i) => { const t = (Math.PI * 2 * i) / 14; const x = 50 + 22 * Math.cos(t), y = 50 + 32 * Math.sin(t); return `<ellipse cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" rx="2" ry="4" transform="rotate(${((t * 180) / Math.PI).toFixed(1)} ${x.toFixed(2)} ${y.toFixed(2)})"/>`; }).join('')}
    ${estrella(50, 50, 8, 4)}
    <circle cx="16" cy="16" r="4"/><circle cx="84" cy="16" r="4"/><circle cx="16" cy="84" r="4"/><circle cx="84" cy="84" r="4"/>`,
};
