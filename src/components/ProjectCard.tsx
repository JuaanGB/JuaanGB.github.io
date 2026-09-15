import { useState } from 'react'
import type { Project } from '../types'
import './ProjectCard.css'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [activeImage, setActiveImage] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})

  return (
    <article className={'project-card' + (project.featured ? ' project-card--featured' : '')}>
      <div className="project-card__media">
        <img
          src={project.images[activeImage]}
          alt={`Captura de ${project.title}`}
          loading="lazy"
          decoding="async"
          className={'project-card__img' + (loaded[activeImage] ? ' project-card__img--loaded' : '')}
          onLoad={() => setLoaded((prev) => ({ ...prev, [activeImage]: true }))}
        />
        {project.images.length > 1 && (
          <div className="project-card__dots">
            {project.images.map((_, i) => (
              <button
                key={i}
                className={'project-card__dot' + (i === activeImage ? ' project-card__dot--active' : '')}
                aria-label={`Ver imagen ${i + 1} de ${project.title}`}
                onClick={() => setActiveImage(i)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <h3 className="project-card__title">{project.title}</h3>
          <span className="project-card__year">{project.year}</span>
        </div>

        <div className="project-card__badges">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <dl className="project-card__fields">
          <div className="project-card__field">
            <dt>Qué es</dt>
            <dd>{project.whatItIs}</dd>
          </div>
          <div className="project-card__field">
            <dt>Retos enfrentados</dt>
            <dd>
              <ul className="project-card__list">
                {project.challenges.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="project-card__field">
            <dt>Métricas de buen rendimiento</dt>
            <dd>
              <ul className="project-card__list">
                {project.metrics.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {(project.link || project.repo) && (
          <div className="project-card__links">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="project-card__link">
                Ver código
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
                Ver demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
