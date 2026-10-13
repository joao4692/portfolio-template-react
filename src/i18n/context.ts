import { createContext } from 'react'

export type Lang = 'pt' | 'en'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
