export interface Tag {
  id: string
  es: string
  en: string
}

export const tags: Tag[] = [
  { id: 'ai-ml', es: 'IA / Machine Learning', en: 'AI / Machine Learning' },
  { id: 'game-dev', es: 'Desarrollo de Videojuegos', en: 'Game Development' },
  { id: 'web', es: 'Desarrollo Web', en: 'Web Development' },
  { id: 'software', es: 'Desarrollo de Software', en: 'Software Development' },
  { id: 'design', es: 'Diseño / UX', en: 'Design / UX' },
  { id: 'data', es: 'Análisis de Datos', en: 'Data Analysis' },
]