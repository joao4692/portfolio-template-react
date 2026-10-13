import { useState, useEffect, useRef, type ReactNode } from 'react'
import './App.css'
import {
  FaReact,
  FaGitAlt,
  FaJava,
  FaPlay,
  FaBrain,
  FaDatabase,
  FaShieldAlt,
  FaLinux,
  FaAws,
  FaPlug,
  FaAngular,
} from 'react-icons/fa'
import {
  SiSpring,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiFirebase,
  SiGraphql,
} from 'react-icons/si'
import Projetos from './components/Projetos/Projetos'
import Sobre from './components/Sobre/Sobre'
import Estudos from './components/Estudos/Estudos'
import Contato from './components/Contato/Contato'
import Divulgar from './components/Divulgar/Divulgar'
import { useLanguage } from './i18n/useLanguage'
import type { Lang } from './i18n/context'
import LanguageSwitch from './i18n/LanguageSwitch'
import { translations } from './i18n/translations'
import { perfil, trilha } from './data/portfolioData'
import type { TecnologiaId } from './data/types'

// Catálogo da trilha: cada tecnologia carrega ícone, cor (App.css) e nome por idioma.
// A escolha de quais aparecem fica em `trilha`, no portfolioData.
const TECNOLOGIAS: Record<TecnologiaId, { icone: ReactNode; cor: string; nome: Record<Lang, string> }> = {
  java: { icone: <FaJava />, cor: 'arco-java', nome: { pt: 'Java', en: 'Java' } },
  spring: { icone: <SiSpring />, cor: 'arco-spring', nome: { pt: 'Spring', en: 'Spring' } },
  javascript: { icone: <SiJavascript />, cor: 'arco-js', nome: { pt: 'JS', en: 'JS' } },
  react: { icone: <FaReact />, cor: 'arco-react', nome: { pt: 'React', en: 'React' } },
  node: { icone: <SiNodedotjs />, cor: 'arco-node', nome: { pt: 'Node.js', en: 'Node.js' } },
  python: { icone: <SiPython />, cor: 'arco-python', nome: { pt: 'Python', en: 'Python' } },
  sql: { icone: <FaDatabase />, cor: 'arco-sql', nome: { pt: 'SQL', en: 'SQL' } },
  postgres: { icone: <SiPostgresql />, cor: 'arco-postgres', nome: { pt: 'Postgres', en: 'Postgres' } },
  git: { icone: <FaGitAlt />, cor: 'arco-git', nome: { pt: 'Git', en: 'Git' } },
  docker: { icone: <SiDocker />, cor: 'arco-docker', nome: { pt: 'Docker', en: 'Docker' } },
  linux: { icone: <FaLinux />, cor: 'arco-linux', nome: { pt: 'Linux', en: 'Linux' } },
  ia: { icone: <FaBrain />, cor: 'arco-ia', nome: { pt: 'IA', en: 'AI' } },
  ciberseguranca: { icone: <FaShieldAlt />, cor: 'arco-cyber', nome: { pt: 'Cyber Segurança', en: 'Cybersecurity' } },
  aws: { icone: <FaAws />, cor: 'arco-aws', nome: { pt: 'AWS', en: 'AWS' } },
  typescript: { icone: <SiTypescript />, cor: 'arco-ts', nome: { pt: 'TypeScript', en: 'TypeScript' } },
  html: { icone: <SiHtml5 />, cor: 'arco-html', nome: { pt: 'HTML', en: 'HTML' } },
  css: { icone: <SiCss />, cor: 'arco-css', nome: { pt: 'CSS', en: 'CSS' } },
  tailwind: { icone: <SiTailwindcss />, cor: 'arco-tailwind', nome: { pt: 'Tailwind', en: 'Tailwind' } },
  nextjs: { icone: <SiNextdotjs />, cor: 'arco-nextjs', nome: { pt: 'Next.js', en: 'Next.js' } },
  nestjs: { icone: <SiNestjs />, cor: 'arco-nestjs', nome: { pt: 'Nest.js', en: 'Nest.js' } },
  mongodb: { icone: <SiMongodb />, cor: 'arco-mongodb', nome: { pt: 'MongoDB', en: 'MongoDB' } },
  firebase: { icone: <SiFirebase />, cor: 'arco-firebase', nome: { pt: 'Firebase', en: 'Firebase' } },
  graphql: { icone: <SiGraphql />, cor: 'arco-graphql', nome: { pt: 'GraphQL', en: 'GraphQL' } },
  restapi: { icone: <FaPlug />, cor: 'arco-restapi', nome: { pt: 'REST API', en: 'REST API' } },
  angular: { icone: <FaAngular />, cor: 'arco-angular', nome: { pt: 'Angular', en: 'Angular' } },
}

function TrilhaNo({ id, lang }: { id: TecnologiaId; lang: Lang }) {
  const tec = TECNOLOGIAS[id]
  return (
    <div className="trilha-no">
      <span className={`trilha-icone ${tec.cor}`}>{tec.icone}</span>
      <span className="trilha-nome">{tec.nome[lang]}</span>
    </div>
  )
}

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rodapeVisivel, setRodapeVisivel] = useState(false)
  const rodapeRef = useRef<HTMLElement>(null)
  const { lang } = useLanguage()
  const t = translations[lang].app

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const el = rodapeRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setRodapeVisivel(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <div className="layout">
      {/* painel escuro esquerdo — só fundo, sem imagem */}
      <div className="coluna-foto"></div>

      <div className="coluna-conteudo">
        <nav className="navbar">
          <button
            className={`hamburger${menuAberto ? ' hamburger-ativo' : ''}`}
            onClick={() => setMenuAberto(v => !v)}
            aria-label={t.abrirMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`navbar-links${menuAberto ? ' navbar-links-aberta' : ''}`}>
            <a href="#projetos" className="navbar-link" onClick={fecharMenu}>
              {t.navProjetos}
            </a>
            <a href="#sobre" className="navbar-link" onClick={fecharMenu}>
              {t.navSobre}
            </a>
            <a href="#contato" className="navbar-link" onClick={fecharMenu}>
              {t.navContato}
            </a>
            <LanguageSwitch />
          </div>
        </nav>

        <div className="hero">
          {/* foto: fixa na divisa das colunas no desktop; no mobile preenche o hero até a base */}
          <img src={`/perfil/${perfil.foto}`} alt={perfil.nome[lang]} className="foto-perfil" />
          <div className="hero-conteudo">
            <p className="hero-label">{t.heroLabel}</p>
            <h1 className="hero-nome">{perfil.nome[lang]}</h1>
            <p className="hero-descricao">{perfil.descricao[lang]}</p>
            <a href={perfil.videoApresentacao} target="_blank" rel="noopener noreferrer" className="hero-botao">
              <span className="hero-botao-icone">
                <FaPlay />
              </span>
              {t.heroBotao}
            </a>
          </div>

          <div className="hero-trilha">
            {trilha.map(([a, b]) => (
              <div className="trilha-par" key={`${a}-${b}`}>
                <TrilhaNo id={a} lang={lang} />
                <span className="trilha-linha" aria-hidden="true" />
                <TrilhaNo id={b} lang={lang} />
              </div>
            ))}
          </div>
        </div>

        <Projetos />
        <Sobre />
        <Estudos />
        <Divulgar />
        <Contato />

        <footer className="rodape" ref={rodapeRef}>
          <p className="rodape-marca">
            {perfil.marca[lang]}
            <span className="rodape-marca-destaque">.</span>
          </p>
          <p className="rodape-descricao">{t.rodapeDescricao}</p>
          <p className="rodape-copy">
            © {new Date().getFullYear()} {perfil.nome[lang]} — {t.direitosReservados}
          </p>
        </footer>
      </div>

      {/* seletor de idioma flutuante — visível só no mobile, já que a navbar some */}
      <div className="mobile-lang-switch">
        <LanguageSwitch />
      </div>

      {/* botão do vídeo flutuante — visível só no mobile. Some no rodapé e com modal aberto */}
      <a
        href={perfil.videoApresentacao}
        target="_blank"
        rel="noopener noreferrer"
        className={`hero-botao mobile-video${rodapeVisivel ? ' mobile-video-oculto' : ''}`}
      >
        <span className="hero-botao-icone">
          <FaPlay />
        </span>
        {t.heroBotao}
      </a>
    </div>
  )
}

export default App
