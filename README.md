# El Tarot de Aurora

Web de tarot gratuita hecha con [Astro](https://astro.build). Las lecturas se montan con textos propios escritos de antemano (sin IA).

## Qué incluye

- Portada (`/`)
- Tirada **Tarot Sí o No** (`/tarot-si-o-no/`): barajar, elegir carta, girarla y ver la respuesta con su explicación
- Significado de los 22 Arcanos Mayores (`/cartas/` y `/cartas/<carta>/`)
- Sobre Aurora y aviso legal (borrador)
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
