// Genera las imágenes para compartir de Arcanaia con el renderizador de plantillas de OGsmith.
// Uso: npx tsx scripts/arcanaia.tsx <paginas.json> <carpeta-cartas> <carpeta-fuentes> <salida>
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { renderSpecImage } from "../src/lib/og/render-spec";
import { templateSpecSchema, type Layer } from "../src/lib/og/spec";

const [manifest, cartasDir, fuentesDir, outDir] = process.argv.slice(2);
type Pagina = { ruta: string; titulo: string; sub: string; cartas: string[]; lineas: number; size: number };

const ORO = "#c9a45c", ORO_CLARO = "#e3cc94", TEXTO = "#eee6f2", SUAVE = "#b6a7c0", NOCHE = "#170c20";

function carta(id: string, slug: string, x: number, y: number, w: number, rotate = 0): Layer[] {
  const h = Math.round(w * 1.25), b = 5;
  return [
    { id: id + "-sombra", type: "box", x: x + 8, y: y + 14, w, h, color: "rgba(0,0,0,0.45)", radius: 14, opacity: 1, rotate },
    { id: id + "-marco", type: "box", x, y, w, h, color: ORO, radius: 14, opacity: 1, rotate },
    { id, type: "image", assetId: "carta:" + slug, x: x + b, y: y + b, w: w - 2 * b, h: h - 2 * b, fit: "cover", radius: 10, opacity: 1, rotate },
  ];
}

function capasCartas(cartas: string[]): { capas: Layer[]; anchoTexto: number } {
  if (cartas.length === 1) return { capas: carta("c1", cartas[0], 744, 52, 420), anchoTexto: 600 };
  if (cartas.length === 2)
    return { capas: [...carta("c1", cartas[0], 660, 120, 330, -6), ...carta("c2", cartas[1], 840, 78, 330, 5)], anchoTexto: 520 };
  return {
    capas: [...carta("c1", cartas[0], 590, 150, 290, -9), ...carta("c3", cartas[2], 878, 150, 290, 9), ...carta("c2", cartas[1], 734, 92, 290)],
    anchoTexto: 480,
  };
}

async function main() {
  const paginas: Pagina[] = JSON.parse(await readFile(manifest, "utf8"));
  const fuente = async (id: string, file: string, family: string, weight: number) => ({
    id, kind: "font", mimeType: "font/woff", data: await readFile(join(fuentesDir, file)), fontFamily: family, fontWeight: weight, fontStyle: "normal",
  });
  const base = new Map<string, any>();
  for (const f of [
    await fuente("f400", "bodoni-moda-latin-400-normal.woff", "Bodoni Moda", 400),
    await fuente("f500", "bodoni-moda-latin-500-normal.woff", "Bodoni Moda", 500),
    await fuente("fit", "bodoni-moda-latin-400-italic.woff", "Bodoni Moda Italic", 400),
  ]) base.set(f.id, f);

  for (const p of paginas) {
    const assets = new Map(base);
    for (const c of p.cartas)
      assets.set("carta:" + c, { id: "carta:" + c, kind: "image", mimeType: "image/jpeg", data: await readFile(join(cartasDir, c + ".jpg")), fontFamily: null, fontWeight: null, fontStyle: null });
    const { capas, anchoTexto } = capasCartas(p.cartas);
    const size = p.size;
    const yTitulo = 168;
    const ySub = yTitulo + p.lineas * size * 1.08 + 30;
    const spec = templateSpecSchema.parse({
      version: 1,
      background: { type: "gradient", from: "#24122f", to: NOCHE, angle: 160 },
      layers: [
        { id: "marca", type: "text", text: "ARCANAIA", x: 76, y: 76, w: 400, fontFamily: "Bodoni Moda", fontSize: 24, fontWeight: 500, color: ORO, letterSpacing: 7, autoFit: false },
        { id: "raya", type: "box", x: 78, y: 126, w: 64, h: 2, color: ORO },
        { id: "titulo", type: "text", text: p.titulo, x: 72, y: yTitulo, w: anchoTexto, fontFamily: "Bodoni Moda", fontSize: size, fontWeight: 400, color: TEXTO, lineHeight: 1.08, autoFit: false },
        { id: "sub", type: "text", text: p.sub, x: 76, y: ySub, w: anchoTexto - 20, fontFamily: "Bodoni Moda Italic", fontSize: 29, fontWeight: 400, color: ORO_CLARO, lineHeight: 1.3, autoFit: false },
        { id: "web", type: "text", text: "arcanaia.com", x: 76, y: 548, w: 400, fontFamily: "Bodoni Moda", fontSize: 24, fontWeight: 400, color: SUAVE, letterSpacing: 1, autoFit: false },
        ...capas,
      ],
    });
    const res = await renderSpecImage(spec, { watermark: false, values: new URLSearchParams(), assets });
    const nombre = p.ruta === "/" ? "inicio" : p.ruta.replace(/^\/|\/$/g, "");
    const out = join(outDir, nombre + ".png");
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, Buffer.from(await res.arrayBuffer()));
  }
  console.log("hechas", paginas.length);
}
main();
