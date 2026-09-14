import { mkdirSync, copyFileSync } from 'node:fs'
import { join } from 'node:path'

const distDir = 'dist'
const indexFile = join(distDir, 'index.html')

// Aquí va cada ruta definida en App.tsx (menos "/",que es dist/index.html)
const routes = ['proyectos', 'expediente', 'experiencia']

for (const route of routes) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(indexFile, join(routeDir, 'index.html'))
}

console.log(`Copiado index.html a: ${routes.join(', ')}`)