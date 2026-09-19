import { Link } from 'react-router-dom'
import './Home.css'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings.ts'


export default function Home() {
  const { lang } = useLanguage()
  const t = strings[lang]

  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-text">
          <p className="page-eyebrow">// whoami</p>
          <h1 className="home__name">
            Juan Alejandro <br />
            González Ballesta
          </h1>
          <p className="home__role">
            {t.home.role}
          </p>
          <p className="home__bio">
            {t.home.bio1}
          </p>
          <p className="home__bio">
            {t.home.bio2}
          </p>
          <p className='home__bio'>
            {t.home.bio3}
          </p>
          <div className="home__actions">
            <Link to="/proyectos" className="btn btn--primary">
              {t.home.viewProjects}
            </Link>
            <a href={`/cv-juan-gonzalez-${lang}.pdf`} download className="btn btn--ghost">
              {t.home.downloadCv}
            </a>
            <div className="home__socials">
              <a
                href="https://www.linkedin.com/in/juan-alejandro-gonz%C3%A1lez-ballesta-a64916430/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="home__social-link"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>

              <a
                href="mailto:juanalejandro.gonzalezb@gmail.com"
                aria-label="Enviar correo"
                className="home__social-link"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>

            </div>
          </div>
        </div>
        <div className="home__hero-panel" aria-hidden="true">
          <div className="home__hero-panel-glow" />
          <pre className="home__code">
            <code>
              <span className="tok-kw">class</span> <span className="tok-cls">Engineer</span>:{'\n'}
              {'    '}<span className="tok-kw">def</span> <span className="tok-fn">__init__</span>(self):{'\n'}
              {'      '}self.focus = [<span className="tok-str">"Computer Vision"</span>, <span className="tok-str">"Web Development"</span>]{'\n'}
              {'      '}self.gpa = <span className="tok-num">8.63</span>{'\n'}
              {'      '}self.lookingForJob = <span className="tok-kw">true</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="home__facts">
        <div className="home__fact">
          <span className="home__fact-value">8.63</span>
          <span className="home__fact-label">{t.home.facts.average}</span>
        </div>
        <div className="home__fact">
          <span className="home__fact-value">14</span>
          <span className="home__fact-label">{t.home.facts.honors}</span>
        </div>
        <div className="home__fact">
          <span className="home__fact-value">B1 / A2</span>
          <span className="home__fact-label">{t.home.facts.languages}</span>
        </div>
      </section>
    </div>
  )
}
