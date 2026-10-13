import { useEffect, useState, type ReactNode } from 'react'
import './Projetos.css'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaTools, FaRegCircle, FaExpand } from 'react-icons/fa'
import {
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiJsonwebtokens,
  SiAngular,
  SiOpencv,
  SiZod,
  SiRender,
} from 'react-icons/si'
import { useLanguage } from '../../i18n/useLanguage'
import { translations } from '../../i18n/translations'
import { projetoDestaque } from '../../data/projetoData'
import type { Etapa, StatusEtapa } from '../../data/types'

const STATUS_ICONS: Record<StatusEtapa, ReactNode> = {
  concluido: <FaCheckCircle />,
  'em-andamento': <FaTools />,
  planejado: <FaRegCircle />,
}

// ── BADGE DE STATUS ────────────────────────────────────────
function StatusBadge({ status }: { status: StatusEtapa }) {
  const { lang } = useLanguage()
  return (
    <span className={`status-badge status-badge-${status}`}>
      {STATUS_ICONS[status]} {translations[lang].projetos.status[status]}
    </span>
  )
}

// ── ÍCONES DE TECNOLOGIA ───────────────────────────────────
const TECH_ICONS: Record<string, ReactNode> = {
  'Node.js': <SiNodedotjs />,
  PostgreSQL: <SiPostgresql />,
  Docker: <SiDocker />,
  'Docker Compose': <SiDocker />,
  Python: <SiPython />,
  TypeScript: <SiTypescript />,
  Express: <SiExpress />,
  Prisma: <SiPrisma />,
  JWT: <SiJsonwebtokens />,
  Angular: <SiAngular />,
  OpenCV: <SiOpencv />,
  Zod: <SiZod />,
  Render: <SiRender />,
}

function TechTag({ tech, className = 'card-tag' }: { tech: string; className?: string }) {
  return (
    <span className={className}>
      {TECH_ICONS[tech]}
      {tech}
    </span>
  )
}

// ── MODAL ──────────────────────────────────────────────────
function Modal({ etapa, onFechar }: { etapa: Etapa; onFechar: () => void }) {
  const { lang } = useLanguage()
  const tu = translations[lang].projetos
  const texto = etapa.textos[lang]
  const [fotoAmpliada, setFotoAmpliada] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-aberto')
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (fotoAmpliada) setFotoAmpliada(null)
      else onFechar()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-aberto')
      window.removeEventListener('keydown', onKey)
    }
  }, [onFechar, fotoAmpliada])

  // fotos ficam em public/projetos/; no projetoData vai só o caminho dentro dessa pasta
  const tecnologias = etapa.tecnologias ?? []
  const [principal, ...detalhes] = (etapa.fotos ?? []).map(foto => `/projetos/${foto}`)

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-conteudo" onClick={e => e.stopPropagation()}>
        <button className="modal-fechar" onClick={onFechar} aria-label={tu.fechar}>
          <FaTimes />
        </button>

        <span className="modal-numero">
          {tu.etapa} {etapa.numero}
        </span>
        <h2 className="modal-titulo">{texto.titulo}</h2>

        {principal ? (
          <div className="modal-fotos-guia">
            <button className="modal-foto-btn" onClick={() => setFotoAmpliada(principal)} aria-label={tu.ampliar}>
              <img src={principal} alt={`${texto.titulo} — ${tu.visaoGeral}`} className="modal-foto-principal" />
              <span className="modal-foto-zoom">
                <FaExpand />
              </span>
            </button>
            {detalhes.length > 0 && (
              <div className="modal-fotos-secundarias">
                {detalhes.slice(0, 2).map((foto, i) => (
                  <button
                    key={i}
                    className="modal-foto-btn"
                    onClick={() => setFotoAmpliada(foto)}
                    aria-label={tu.ampliar}
                  >
                    <img
                      src={foto}
                      alt={`${texto.titulo} — ${tu.detalhe} ${i + 1}`}
                      className="modal-foto-secundaria"
                    />
                    <span className="modal-foto-zoom">
                      <FaExpand />
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : !etapa.semFotos ? (
          <div className="modal-fotos-guia">
            <div className="foto-placeholder foto-placeholder-principal">
              <span className="foto-placeholder-dim">1200 × 675 px</span>
              <span className="foto-placeholder-prop">{tu.imagemPrincipal}</span>
            </div>
            <div className="modal-fotos-secundarias">
              <div className="foto-placeholder foto-placeholder-secundaria">
                <span className="foto-placeholder-dim">800 × 450 px</span>
                <span className="foto-placeholder-prop">{tu.imagemDetalhe}</span>
              </div>
              <div className="foto-placeholder foto-placeholder-secundaria">
                <span className="foto-placeholder-dim">800 × 450 px</span>
                <span className="foto-placeholder-prop">{tu.imagemDetalhe}</span>
              </div>
            </div>
          </div>
        ) : null}

        {(etapa.status || tecnologias.length > 0) && (
          <div className="modal-meta">
            {etapa.status && <StatusBadge status={etapa.status} />}
            <div className="modal-tags">
              {tecnologias.map(t => (
                <TechTag key={t} tech={t} className="modal-tag" />
              ))}
            </div>
          </div>
        )}

        <div className="modal-topicos">
          {(texto.topicos ?? []).map((t, i) => (
            <div key={i} className="modal-topico">
              <h3 className="modal-topico-titulo">{t.titulo}</h3>
              <p className="modal-topico-conteudo">{t.conteudo}</p>
            </div>
          ))}
        </div>

        {etapa.github && (
          <div className="modal-links">
            <a href={etapa.github} target="_blank" rel="noreferrer" className="modal-link modal-link-github">
              <FaGithub /> {tu.verCodigo}
            </a>
          </div>
        )}
      </div>

      {fotoAmpliada && (
        <div
          className="lightbox-overlay"
          onClick={e => {
            e.stopPropagation()
            setFotoAmpliada(null)
          }}
        >
          <button className="lightbox-fechar" onClick={() => setFotoAmpliada(null)} aria-label={tu.fechar}>
            <FaTimes />
          </button>
          <img src={fotoAmpliada} alt={texto.titulo} className="lightbox-imagem" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}

// ── CARD ───────────────────────────────────────────────────
function Card({ etapa, onClick }: { etapa: Etapa; onClick: () => void }) {
  const { lang } = useLanguage()
  const tu = translations[lang].projetos
  const texto = etapa.textos[lang]
  const tecnologias = etapa.tecnologias ?? []

  return (
    <div className="projeto-card" onClick={onClick}>
      <div className="card-topo">
        <div className="card-topo-linha">
          <span className="card-numero">{etapa.numero}</span>
          {etapa.status && <StatusBadge status={etapa.status} />}
        </div>
        <h3 className="card-titulo">{texto.titulo}</h3>
      </div>
      <p className="card-descricao">{texto.resumo}</p>
      {tecnologias.length > 0 && (
        <div className="card-tags">
          {tecnologias.slice(0, 3).map(t => (
            <TechTag key={t} tech={t} />
          ))}
          {tecnologias.length > 3 && <span className="card-tag card-tag-extra">+{tecnologias.length - 3}</span>}
        </div>
      )}
      <div className="card-rodape">
        <span className="card-ver">{tu.verDetalhes}</span>
      </div>
    </div>
  )
}

// ── SEÇÃO PRINCIPAL ────────────────────────────────────────
export default function Projetos() {
  // índice da etapa aberta no modal (null = nenhuma)
  const [abertoIndice, setAbertoIndice] = useState<number | null>(null)
  const { lang } = useLanguage()
  const tu = translations[lang].projetos
  const projeto = projetoDestaque
  const aberto = abertoIndice === null ? null : projeto.etapas[abertoIndice]

  return (
    <section id="projetos" className="projetos">
      <div className="projeto-header">
        <span className="projeto-eyebrow">{tu.eyebrow}</span>
        <h2 className="projetos-titulo projetos-titulo-animado">{projeto.titulo[lang]}</h2>
        <p className="projetos-subtitulo">{projeto.descricao[lang]}</p>

        {projeto.tecnologias && projeto.tecnologias.length > 0 && (
          <div className="projeto-header-tags">
            {projeto.tecnologias.map(t => (
              <TechTag key={t} tech={t} className="modal-tag" />
            ))}
          </div>
        )}

        {(projeto.github || projeto.demo) && (
          <div className="projeto-header-links">
            {projeto.github && (
              <a href={projeto.github} target="_blank" rel="noreferrer" className="modal-link modal-link-github">
                <FaGithub /> GitHub
              </a>
            )}
            {projeto.demo && (
              <a href={projeto.demo} target="_blank" rel="noreferrer" className="modal-link modal-link-demo">
                <FaExternalLinkAlt /> {tu.verDemo}
              </a>
            )}
          </div>
        )}
        {projeto.notaDemo && <p className="projeto-header-nota">{projeto.notaDemo[lang]}</p>}
      </div>

      <div className="etapas-grid">
        {projeto.etapas.map((e, i) => (
          <Card key={e.numero} etapa={e} onClick={() => setAbertoIndice(i)} />
        ))}
      </div>

      {aberto && <Modal etapa={aberto} onFechar={() => setAbertoIndice(null)} />}
    </section>
  )
}
