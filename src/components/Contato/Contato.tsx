import './Contato.css'
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../../i18n/useLanguage'
import { translations } from '../../i18n/translations'
import { contatos } from '../../data/portfolioData'

export default function Contato() {
  const { lang } = useLanguage()
  const t = translations[lang].contato
  const acoes = t.acoes

  const redes = [
    {
      nome: 'LinkedIn',
      acao: acoes.linkedin,
      icon: <FaLinkedinIn />,
      href: contatos.linkedin,
      classe: 'contato-linkedin',
    },
    {
      nome: 'GitHub',
      acao: acoes.github,
      icon: <FaGithub />,
      href: contatos.github,
      classe: 'contato-github',
    },
    {
      nome: 'Instagram',
      acao: acoes.instagram,
      icon: <FaInstagram />,
      href: contatos.instagram,
      classe: 'contato-instagram',
    },
    {
      nome: 'WhatsApp',
      acao: acoes.whatsapp,
      icon: <FaWhatsapp />,
      href: contatos.whatsapp,
      classe: 'contato-whatsapp',
    },
  ]

  return (
    <section id="contato" className="contato">
      <span className="contato-label">{t.label}</span>
      <h2 className="contato-titulo">{t.titulo}</h2>
      <p className="contato-sub">{t.sub}</p>

      <div className="contato-grid">
        {redes.map(rede => (
          <a
            key={rede.nome}
            href={rede.href}
            target="_blank"
            rel="noreferrer"
            className={`contato-card ${rede.classe}`}
          >
            <div className="contato-icon-wrap">{rede.icon}</div>
            <span className="contato-nome">{rede.nome}</span>
            <span className="contato-acao">{rede.acao} →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
