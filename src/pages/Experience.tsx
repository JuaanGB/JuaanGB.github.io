import { experience } from '../data/experience'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'
import './Experience.css'

export default function Experience() {
  const { lang } = useLanguage()
  const t = strings[lang]

  return (
    <div>
      <div className="page-header">
        <p className="page-eyebrow">// career.log</p>
        <h1 className="page-title">{t.experience.title}</h1>
      </div>

      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className="timeline__item">
            <div className="timeline__marker" />
            <div className="timeline__content">
              <span className="timeline__date">
                {entry.startDate[lang]} — {entry.endDate[lang]}
              </span>
              <h2 className="timeline__company">{entry.company[lang]}</h2>
              <p className="timeline__role">{entry.role[lang]}</p>
              <ul className="timeline__description">
                {entry.description.map((line, i) => (
                  <li key={i}>{line[lang]}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}