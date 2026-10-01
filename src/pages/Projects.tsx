import { useState, useMemo } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'

const PROJECTS_PER_PAGE = 4

export default function Projects() {
  const { lang } = useLanguage()
  const t = strings[lang]
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)

  const visibleProjects = useMemo(() => {
    const start = (page - 1) * PROJECTS_PER_PAGE
    return projects.slice(start, start + PROJECTS_PER_PAGE)
  }, [page])

  const goToPage = (next: number) => {
    const clamped = Math.min(Math.max(next, 1), totalPages)
    setPage(clamped)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="page-header">
        <p className="page-eyebrow">// build log</p>
        <h1 className="page-title">{t.projects.title}</h1>
        <p className="page-subtitle">{t.projects.description}</p>
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination__arrow"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            aria-label={t.projects.prevPage}
          >
            &lt;
          </button>

          <span className="pagination__status">
            {page} / {totalPages}
          </span>

          <button
            className="pagination__arrow"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            aria-label={t.projects.nextPage}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  )
}