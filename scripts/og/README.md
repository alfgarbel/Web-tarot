# Imágenes para compartir

Cada página tiene su imagen de 1200 × 630 en `public/og/`, con el título, una frase y sus cartas
de la baraja Ilustrada. Las pinta el renderizador de plantillas de OGsmith (`renderSpecImage`,
en el repositorio alfgarbel/Misc), sin pasar por su API: no hace falta clave ni gasta renders.

Para regenerarlas, por ejemplo después de añadir páginas o cambiar títulos:

```bash
npm run build
python3 scripts/og/manifiesto.py /tmp/og                 # lista de páginas y cartas en JPEG
cp scripts/og/render.tsx <ruta-de-Misc>/scripts/arcanaia.tsx
cd <ruta-de-Misc> && npm ci && npx tsx scripts/arcanaia.tsx /tmp/og/paginas.json /tmp/og/cartas \
  <ruta-de-web-tarot>/node_modules/@fontsource/bodoni-moda/files /tmp/og/png
```

Después se pasan los PNG a JPEG (calidad 82) en `public/og/`, con la misma ruta que la página
(`/cartas/el-loco/` → `public/og/cartas/el-loco.jpg`, la portada → `public/og/inicio.jpg`).
`src/layouts/Base.astro` usa la imagen de la página si existe y, si no, `portada.webp`.
