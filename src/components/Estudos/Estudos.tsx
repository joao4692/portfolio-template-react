import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Estudos.css'
import { FaGraduationCap, FaCertificate, FaCheckCircle, FaHourglassHalf, FaImage, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../../i18n/useLanguage'
import type { Lang } from '../../i18n/context'
import { translations } from '../../i18n/translations'
import { estudos } from '../../data/portfolioData'
import type { ItemEstudo } from '../../data/types'

type Textos = (typeof translations)[Lang]['estudos']

function CertificadosModal({
  titulo,
  imagens,
  textos,
  onFechar,
}: {
  titulo: string
  imagens: string[]
  textos: Textos
  onFechar: () => void
}) {
  useEffect(() => {
    const aoPressionarTecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar()
    }
    window.addEventListener('keydown', aoPressionarTecla)
    return () => window.removeEventListener('keydown', aoPressionarTecla)
  }, [onFechar])

  return createPortal(
    <div className="cert-modal-fundo" onClick={onFechar}>
      <div
        className="cert-modal"
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        onClick={e => e.stopPropagation()}
      >
        <div className="cert-modal-cabecalho">
          <h4>{titulo}</h4>
          <button type="button" className="cert-modal-fechar" onClick={onFechar} aria-label={textos.fecharModal}>
            <FaTimes />
          </button>
        </div>

        {imagens.length > 0 ? (
          <div className="cert-modal-grade">
            {imagens.map(arquivo => (
              <a
                key={arquivo}
                href={`/certificados/${arquivo}`}
                target="_blank"
                rel="noreferrer"
                className="cert-modal-item"
              >
                <img src={`/certificados/${arquivo.replace(/\.pdf$/i, '.webp')}`} alt={titulo} loading="lazy" />
              </a>
            ))}
          </div>
        ) : (
          <p className="cert-modal-vazio">
            <FaImage />
            {textos.nenhumCertificado}
          </p>
        )}
      </div>
    </div>,
    document.body,
  )
}

function Item({ item, lang, textos, icone }: { item: ItemEstudo; lang: Lang; textos: Textos; icone: ReactNode }) {
  const [aberto, setAberto] = useState(false)
  const titulo = item.titulo[lang]

  return (
    <div className="estudo-card">
      <div className="estudo-card-icone">{icone}</div>
      <div className="estudo-card-corpo">
        <h3 className="estudo-card-titulo">{titulo}</h3>
        {item.instituicao && <span className="estudo-card-instituicao">{item.instituicao[lang]}</span>}
        <div className="estudo-card-rodape">
          <span className={`estudo-status estudo-status-${item.status}`}>
            {item.status === 'andamento' ? <FaHourglassHalf /> : <FaCheckCircle />}
            {item.status === 'andamento' ? textos.statusAndamento : textos.statusConcluido}
          </span>
          <span className="estudo-card-data">{item.data[lang]}</span>
        </div>
      </div>
      <button type="button" className="estudo-card-botao" onClick={() => setAberto(true)}>
        <FaImage />
        {textos.verCertificados}
      </button>
      {aberto && (
        <CertificadosModal
          titulo={titulo}
          imagens={item.certificados ?? []}
          textos={textos}
          onFechar={() => setAberto(false)}
        />
      )}
    </div>
  )
}

export default function Estudos() {
  const { lang } = useLanguage()
  const t = translations[lang].estudos

  return (
    <section id="estudos" className="estudos">
      <div className="estudos-cabecalho">
        <span className="estudos-eyebrow">{t.label}</span>
        <h2 className="estudos-titulo">{t.titulo}</h2>
      </div>

      <div className="estudos-foco">
        <span className="estudos-foco-emojis" aria-hidden="true">
          ☕ 🌱
        </span>
        <div className="estudos-foco-texto">
          <span className="estudos-foco-label">{t.focoLabel}</span>
          <p>{estudos.foco[lang]}</p>
        </div>
      </div>

      <div className="estudos-grupo">
        <h3 className="estudos-grupo-titulo">{t.formacaoLabel}</h3>
        <div className="estudos-lista">
          {estudos.formacao.map(item => (
            <Item key={item.titulo.pt} item={item} lang={lang} textos={t} icone={<FaGraduationCap />} />
          ))}
        </div>
      </div>

      <div className="estudos-grupo">
        <h3 className="estudos-grupo-titulo">{t.cursosLabel}</h3>
        <div className="estudos-lista">
          {estudos.cursos.map(item => (
            <Item key={item.titulo.pt} item={item} lang={lang} textos={t} icone={<FaCertificate />} />
          ))}
        </div>
      </div>
    </section>
  )
}
