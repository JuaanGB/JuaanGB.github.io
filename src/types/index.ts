export interface Project {
  id: string
  title: { es: string; en: string }
  year: number
  images: string[]
  technologies: string[]
  whatItIs: { es: string; en: string }
  challenges: { es: string; en: string }[]
  metrics: { es: string; en: string }[]
  repo?: string
  featured?: boolean
}

export interface AcademicEntry {
  subject: { es: string; en: string }
  course: number
  grade: number
  honors?: boolean
}

export interface ExperienceEntry {
  id: string
  company: { es: string; en: string }
  role: { es: string; en: string }
  startDate: { es: string; en: string }
  endDate: { es: string; en: string }
  description: { es: string; en: string }[]
}
