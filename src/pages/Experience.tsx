import { experience } from '../data/experience'
import './Experience.css'

export default function Experience() {
  return (
    <div>
      <div className="page-header">
        <p className="page-eyebrow">// career.log</p>
        <h1 className="page-title">Trayectoria profesional</h1>
      </div>

      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className="timeline__item">
            <div className="timeline__marker" />
            <div className="timeline__content">
              <span className="timeline__date">
                {entry.startDate} — {entry.endDate}
              </span>
              <h2 className="timeline__company">{entry.company}</h2>
              <p className="timeline__role">{entry.role}</p>
              <ul className="timeline__description">
                {entry.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
