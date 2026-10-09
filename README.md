# Arcanaia

Web de tarot gratuita hecha con [Astro](https://astro.build). Las lecturas se montan con textos propios escritos de antemano (sin IA).

Nombre provisional. Diseño: noche morada con un único acento dorado, Bodoni Moda para titulares y Figtree para el texto.

## Qué incluye

- Portada (`/`)
- Tirada **Tarot Sí o No** (`/tarot-si-o-no/`): barajar, elegir carta, girarla y ver la respuesta con su explicación
- Significado de los 22 Arcanos Mayores (`/cartas/` y `/cartas/<carta>/`)
- Aviso legal (borrador)
- Sitemap y datos estructurados para SEO

Los textos de las cartas están en `src/data/arcanos.ts`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la web en dist/
```

## Publicar en Cloudflare Pages

1. En Cloudflare, Workers & Pages → Create → Pages → conectar este repositorio.
2. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
3. Cuando tengas dominio, cámbialo en `astro.config.mjs` (`site`).

## Barajas

La persona puede elegir entre tres barajas (se recuerda en su navegador):

- **Línea dorada**: dibujo vectorial propio (`src/components/Carta.astro` y `src/data/motivos.ts`).
- **Azulejo**: el mismo dibujo en cal y azul cobalto (variables en `src/styles/global.css`).
- **Ilustrada**: 78 láminas pintadas (22 mayores y 56 menores) generadas para esta web, en `public/barajas/ilustrada/`.
