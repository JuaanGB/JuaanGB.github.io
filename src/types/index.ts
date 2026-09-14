export interface Project {
  id: string
  title: string
  year: number
  images: string[]
  technologies: string[]
  whatItIs: string
  challenges: string[]
  metrics: string[]
  link?: string
  repo?: string
  featured?: boolean
}

export interface AcademicEntry {
  subject: string
  course: number
  grade: number
  honors?: boolean
}

export interface ExperienceEntry {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  description: string[]
}
