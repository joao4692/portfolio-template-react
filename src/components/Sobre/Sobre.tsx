import type { CSSProperties } from 'react'
import './Sobre.css'
import { useLanguage } from '../../i18n/useLanguage'
import { translations } from '../../i18n/translations'
import { sobre } from '../../data/portfolioData'
import TextoComDestaque from '../TextoComDestaque/TextoComDestaque'

export default function Sobre() {
  const { lang } = useLanguage()
  const t = translations[lang].sobre

  // a imagem vem do portfolioData e chega ao CSS pela variável --sobre-bg
  const estiloFundo = { '--sobre-bg': `url('/perfil/${sobre.imagemFundo}')` } as CSSProperties

  return (
    <section id="sobre" className="sobre" style={estiloFundo}>
      <div className="sobre-overlay" />

      <div className="sobre-conteudo">
        <span className="sobre-label">{t.label}</span>
        <h2 className="sobre-titulo">{t.titulo}</h2>

        <div className="sobre-texto">
          {sobre.paragrafos[lang].map(paragrafo => (
            <p key={paragrafo}>
              <TextoComDestaque texto={paragrafo} />
            </p>
          ))}

          <p className="sobre-lema">{sobre.lema[lang]}</p>
        </div>
      </div>
    </section>
  )
}
