import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Sobre mí' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/expediente', label: 'Expediente académico' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
              {link.label}
            </NavLink>
          ))}
        </nav>

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
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}