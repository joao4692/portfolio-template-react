import './Divulgar.css'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../../i18n/useLanguage'
import { contatos, servicos } from '../../data/portfolioData'
import { translations } from '../../i18n/translations'

export default function Divulgar() {
  const { lang } = useLanguage()
  const t = translations[lang].divulgar

  return (
    <section className="divulgar">
      <div className="divulgar-conteudo">
        <p className="divulgar-titulo">{t.titulo}</p>

        <div className="divulgar-servicos">
          {servicos[lang].map(s => (
            <span key={s} className="divulgar-tag">
              {s}
            </span>
          ))}
        </div>

        <a href={contatos.whatsapp} target="_blank" rel="noreferrer" className="divulgar-botao">
          <FaWhatsapp /> {t.botao}
        </a>
      </div>
    </section>
  )
}
