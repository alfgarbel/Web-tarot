// Resumen de la web para buscadores y asistentes con IA (formato llms.txt).
import type { APIRoute } from 'astro';
import { arcanos } from '../data/arcanos';
import { menores } from '../data/menores';
import { signos } from '../data/signos';
import { combinaciones, slugCombinacion } from '../data/combinaciones';

export const GET: APIRoute = ({ site }) => {
  const u = (ruta: string) => new URL(ruta, site).href;
  const nombre = (slug: string) => arcanos.find((a) => a.slug === slug)!.nombre;
  const lineas = [
    '# Arcanaia',
    '',
    '> Web gratuita de tarot en español. Explica el significado de las 78 cartas (amor, trabajo, salud, invertida y sí o no), ofrece tiradas gratis con textos fijos, compatibilidad de signos y una guía para aprender. Las lecturas son una herramienta de reflexión, no predicciones.',
    '',
    '## Tiradas',
    `- [Tarot Sí o No](${u('/tarot-si-o-no/')}): una carta y una respuesta`,
    `- [Tarot del amor](${u('/tarot-del-amor/')}): tres cartas sobre una relación`,
    `- [¿Volverá mi ex?](${u('/volvera-mi-ex/')})`,
    `- [Pasado, presente y futuro](${u('/pasado-presente-futuro/')})`,
    `- [Cruz celta](${u('/cruz-celta/')}): diez cartas`,
    `- [Trabajo y dinero](${u('/tarot-del-trabajo/')})`,
    `- [Salud y bienestar](${u('/tarot-de-la-salud/')})`,
    `- [Decidir entre dos caminos](${u('/dos-caminos/')})`,
    `- [Carta del día](${u('/carta-del-dia/')})`,
    '',
    '## Aprender',
    `- [Cómo aprender tarot](${u('/aprender-tarot/')}): guía para principiantes`,
    `- [Combinaciones de cartas](${u('/combinaciones/')})`,
    '',
    '## Arcanos mayores',
    ...arcanos.map((a) => `- [${a.nombre}](${u(`/cartas/${a.slug}/`)}): ${a.claves.join(', ')}`),
    '',
    '## Arcanos menores',
    ...menores.map((a) => `- [${a.nombre}](${u(`/cartas/${a.slug}/`)}): ${a.claves.join(', ')}`),
    '',
    '## Signos del zodiaco',
    `- [Horóscopo de hoy](${u('/horoscopo/')})`,
    `- [Compatibilidad de signos](${u('/compatibilidad/')})`,
    ...signos.map((s) => `- [${s.nombre}](${u(`/signos/${s.slug}/`)}): ${s.fechas}`),
    '',
    '## Optional',
    ...combinaciones.map((c) => `- [${nombre(c.a)} y ${nombre(c.b)}](${u(`/combinaciones/${slugCombinacion(c)}/`)})`),
    '',
  ];
  return new Response(lineas.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
