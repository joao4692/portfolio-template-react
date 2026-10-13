import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext, type Lang } from './context'

const STORAGE_KEY = 'idioma'

function idiomaInicial(): Lang {
  const salvo = localStorage.getItem(STORAGE_KEY)
  return salvo === 'en' ? 'en' : 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(idiomaInicial)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}
