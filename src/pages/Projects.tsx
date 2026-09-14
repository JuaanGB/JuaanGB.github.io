import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <div>
      <div className="page-header">
        <p className="page-eyebrow">// build log</p>
        <h1 className="page-title">Proyectos</h1>
        <p className="page-subtitle">
          Una selección de proyectos personales y académicos, con el contexto técnico detrás de cada uno: 
          qué resuelven, qué retos surgieron durante su desarrollo y qué métricas permiten evaluar que el resultado fue
          correcto.
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
