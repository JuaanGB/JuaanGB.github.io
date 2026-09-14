# Portfolio — Juan Alejandro González Ballesta

Proyecto en React + TypeScript + Vite. Tema oscuro tipo "editor de código" con acentos neón (cian-menta y violeta).

## Cómo arrancarlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/   → Navbar, ProjectCard (reutilizables)
  pages/        → Home, Projects, Academic, Experience (una por ruta)
  data/         → projects.ts, academic.ts, experience.ts (EDITA AQUÍ tu contenido real)
  types/        → interfaces TypeScript compartidas
  styles/       → theme.css (variables globales de color/tipografía)
```

## Qué tienes que personalizar

1. **`src/data/projects.ts`** — sustituye los proyectos de ejemplo por los tuyos. Las imágenes pueden ser URLs o archivos que coloques en `public/` (ej. `/proyectos/mi-imagen.png`).
2. **`src/data/academic.ts`** — sustituye por tus asignaturas y notas reales (los datos actuales son un ejemplo inventado, no reflejan tu expediente real).
3. **`src/data/experience.ts`** — rellena tus dos experiencias reales.
4. **CV descargable** — coloca tu PDF en `public/cv-juan-gonzalez.pdf` (el botón "Descargar CV" en Home ya apunta a esa ruta).
5. **`index.html`** — ajusta el `<title>` y `<meta description>` si quieres.

## Notas de diseño

- Tipografías: Space Grotesk (títulos), Inter (cuerpo), JetBrains Mono (metadatos: fechas, notas, badges).
- Acento principal `#5ee6d0` (cian-menta) reservado para el elemento con más peso de cada vista (CTA, nodo activo de la timeline, borde on-hover de tarjeta). Acento secundario `#c792ea` usado con moderación.
- Respeta `prefers-reduced-motion`.
