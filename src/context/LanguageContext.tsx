import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextValue {
  lang: Language
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'en' ? 'en' : 'es'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)

  if (!ctx) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  }

  return ctx
}