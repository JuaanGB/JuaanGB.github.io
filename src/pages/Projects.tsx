import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'

export default function Projects() {
  const { lang } = useLanguage()
  const t = strings[lang]

  return (
    <div>
      <div className="page-header">
        <p className="page-eyebrow">// build log</p>
        <h1 className="page-title">{t.projects.title}</h1>
        <p className="page-subtitle">
          {t.projects.description}
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
