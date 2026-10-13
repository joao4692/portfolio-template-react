import { useLanguage } from './useLanguage'
import './LanguageSwitch.css'

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label="Idioma / Language">
      <button
        className={`lang-switch-btn${lang === 'pt' ? ' lang-switch-ativo' : ''}`}
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
      >
        PT
      </button>
      <button
        className={`lang-switch-btn${lang === 'en' ? ' lang-switch-ativo' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
