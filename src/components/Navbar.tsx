import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'

const links = [
  { to: '/', key: 'home' as const },
  { to: '/proyectos', key: 'projects' as const },
  { to: '/experiencia', key: 'experience' as const },
  { to: '/expediente', key: 'academic' as const },
]

function FlagES() {
  return (
    <svg viewBox="0 0 28 20" width="24" height="17">
      <rect width="28" height="20" fill="#AA151B" />
      <rect y="5" width="28" height="10" fill="#F1BF00" />
    </svg>
  )
}

function FlagUK() {
  return (
    <svg viewBox="0 0 28 20" width="24" height="17">
      <rect width="28" height="20" fill="#012169" />
      <path d="M0 0 28 20 M28 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 28 20 M28 0 0 20" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M14 0 14 20 M0 10 28 10" stroke="#fff" strokeWidth="6" />
      <path d="M14 0 14 20 M0 10 28 10" stroke="#C8102E" strokeWidth="3.5" />
    </svg>
  )
}

function LangToggle({ className }: { className: string }) {
  const { lang, toggleLang } = useLanguage()
  return (
    <button
      className={className}
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      {lang === 'es' ? <FlagUK /> : <FlagES />}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang } = useLanguage()
  const t = strings[lang]

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          jgb<span className="navbar__brand-dot">.</span>
        </NavLink>

        <nav className="navbar__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              {t.nav[link.key]}
            </NavLink>
          ))}
          <LangToggle className="navbar__lang" />
        </nav>

        <div className="navbar__mobile-actions">
          <LangToggle className="navbar__lang navbar__lang--mobile" />
          <button
            className={'navbar__toggle' + (open ? ' navbar__toggle--open' : '')}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={'navbar__mobile' + (open ? ' navbar__mobile--open' : '')}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              'navbar__mobile-link' + (isActive ? ' navbar__mobile-link--active' : '')
            }
          >
            {t.nav[link.key]}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}