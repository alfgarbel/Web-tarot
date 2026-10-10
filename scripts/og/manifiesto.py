# Lee dist/ de Arcanaia y saca, por página: ruta, título, subtítulo y cartas a mostrar.
import re, html, glob, json, os, sys
from PIL import Image
RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
TMP = sys.argv[1]  # carpeta de trabajo: deja paginas.json y cartas/
D = RAIZ + '/dist'
fijas = {
  '/': ['la-luna', 'la-estrella', 'el-sol'],
  '/tiradas/': ['la-sacerdotisa', 'la-luna', 'el-mago'],
  '/cartas/': ['el-loco', 'el-mago', 'el-mundo'],
  '/signos/': ['el-sol', 'la-estrella', 'la-luna'],
  '/horoscopo/': ['la-rueda-de-la-fortuna', 'la-estrella', 'la-luna'],
  '/compatibilidad/': ['los-enamorados', 'dos-de-copas'],
  '/combinaciones/': ['el-sol', 'la-luna'],
  '/tarot-si-o-no/': ['la-rueda-de-la-fortuna'],
  '/tarot-del-amor/': ['los-enamorados'],
  '/volvera-mi-ex/': ['el-juicio'],
  '/pasado-presente-futuro/': ['el-ermitano', 'la-rueda-de-la-fortuna', 'el-mundo'],
  '/cruz-celta/': ['la-sacerdotisa', 'la-estrella', 'el-mundo'],
  '/carta-del-dia/': ['el-sol'],
  '/tarot-del-trabajo/': ['ocho-de-oros'],
  '/tarot-de-la-salud/': ['la-templanza'],
  '/dos-caminos/': ['dos-de-espadas'],
  '/aprender-tarot/': ['as-de-bastos', 'as-de-copas', 'as-de-espadas'],
  '/aviso-legal/': ['la-justicia'],
}
arcano_signo = {}
subs = {
  '/tiradas/': 'Todas las tiradas gratis, del tarot del amor al sí o no.',
  '/cartas/': 'Qué dice cada una de las 78 cartas en el amor, el trabajo y la salud.',
  '/combinaciones/': 'Las 40 parejas de arcanos mayores más consultadas y qué dicen juntas.',
  '/compatibilidad/': 'Tu signo y el de tu pareja: afinidad, elementos y consejos para las 78 parejas.',
  '/horoscopo/': 'Cada día, una carta del tarot para cada uno de los doce signos.',
}
paginas = []
for f in sorted(glob.glob(D + '/**/index.html', recursive=True)):
    ruta = f[len(D):-len('index.html')]
    t = open(f).read()
    main = re.search(r'<main.*?</main>', t, re.S).group(0)
    h1 = html.unescape(re.sub(r'<[^>]+>', '', re.findall(r'<h1[^>]*>(.*?)</h1>', main, re.S)[0])).strip()
    h1 = re.sub(r'\s+', ' ', h1).rstrip('.')
    desc = html.unescape(re.search(r'<meta name="description" content="([^"]*)"', t).group(1))
    imgs = re.findall(r'/barajas/ilustrada/([a-z0-9-]+)\.webp', main)
    partes = ruta.strip('/').split('/')
    if ruta in fijas: cartas = fijas[ruta]
    elif partes[0] in ('cartas', 'signos'): cartas = imgs[:1]
    elif partes[0] in ('combinaciones', 'compatibilidad'): cartas = imgs[:2]
    elif partes[0] == 'horoscopo': cartas = None  # se rellena con la carta del signo
    else: raise SystemExit('sin cartas: ' + ruta)
    if partes[0] == 'signos' and len(partes) == 2: arcano_signo[partes[1]] = imgs[0]
    # Subtítulo: la primera frase de la descripción, si cabe; si no, corte por palabra.
    sub = re.split(r'(?<=[.!?])\s', desc)[0]
    if len(sub) > 125:
        coma = sub[:125].rfind(',')
        sub = sub[:coma] + '.' if coma > 50 else sub[:124].rsplit(' ', 1)[0].rstrip(',;:') + '…'
    m = re.match(r'(?:Cómo es|Horóscopo diario de) [^(]+\(([^)]+)\)', desc)
    if partes[0] == 'signos' and m: sub = f'Del {m.group(1)}. Cómo es, cómo quiere y cuál es su carta del tarot.'
    if partes[0] == 'horoscopo' and m: sub = f'Del {m.group(1)}. Tu carta del tarot para hoy en el amor, el trabajo y la salud.'
    sub = subs.get(ruta, sub)
    if ruta == '/':  # el titular entero no cabe: la segunda frase pasa al subtítulo
        h1, sub = 'Para esa pregunta que no te sacas de la cabeza', 'Las cartas te responden. Tiradas de tarot gratis y sin registro.'
    paginas.append({'ruta': ruta, 'titulo': h1, 'sub': sub, 'cartas': cartas})
for p in paginas:
    if p['cartas'] is None: p['cartas'] = [arcano_signo[p['ruta'].strip('/').split('/')[1]]]
# Satori no lee webp: copia en PNG de cada carta usada.
os.makedirs(TMP + '/cartas', exist_ok=True)
for c in {c for p in paginas for c in p['cartas']}:
    Image.open(f'{RAIZ}/public/barajas/ilustrada/{c}.webp').convert('RGB').save(f'{TMP}/cartas/{c}.jpg', quality=92)
# Líneas reales del título, medidas con la misma fuente, para colocar el subtítulo debajo.
from PIL import ImageFont
FUENTE = RAIZ + '/node_modules/@fontsource/bodoni-moda/files/bodoni-moda-latin-400-normal.woff'
for p in paginas:
    ancho = {1: 600, 2: 520}.get(len(p['cartas']), 480) * 0.98
    for size in ([62] if len(p['titulo']) > 26 else [72, 62]) + [54]:
        f = ImageFont.truetype(FUENTE, size)
        n, linea = 1, ''
        for w in p['titulo'].split():
            prueba = (linea + ' ' + w).strip()
            if f.getlength(prueba) > ancho and linea: n, linea = n + 1, w
            else: linea = prueba
        if n <= 2: break
    p['lineas'], p['size'] = n, size
json.dump(paginas, open(TMP + '/paginas.json', 'w'), ensure_ascii=False, indent=1)
print(len(paginas))
