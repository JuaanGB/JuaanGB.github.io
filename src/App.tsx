import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Academic from './pages/Academic'
import Experience from './pages/Experience'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/expediente" element={<Academic />} />
          <Route path="/experiencia" element={<Experience />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>Juan Alejandro González Ballesta — Ingeniero Informático</p>
      </footer>
    </div>
  )
}