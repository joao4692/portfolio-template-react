import type { Lang } from './context'

// Textos fixos da interface (rótulos, títulos de seção, botões).
// Conteúdo pessoal fica em src/data/.
// As seções seguem a ordem em que aparecem na página.

const pt = {
  app: {
    abrirMenu: 'Abrir menu',
    navProjetos: 'Projetos',
    navSobre: 'Sobre mim',
    navContato: 'Contato',
    heroLabel: 'OLÁ, EU SOU',
    heroBotao: 'ASSISTIR APRESENTAÇÃO',
    rodapeDescricao: 'Portfólio desenvolvido com React, TypeScript e Vite.',
    direitosReservados: 'Todos os direitos reservados',
  },
  projetos: {
    eyebrow: 'Projeto em destaque',
    verDemo: 'Ver demo ao vivo',
    etapa: 'Etapa',
    visaoGeral: 'visão geral',
    detalhe: 'detalhe',
    fechar: 'Fechar',
    imagemPrincipal: 'Proporção 16:9 — imagem principal',
    imagemDetalhe: '16:9 — detalhe',
    verCodigo: 'Ver código',
    verDetalhes: 'Ver detalhes →',
    ampliar: 'Ampliar imagem',
    status: {
      concluido: 'Concluído',
      'em-andamento': 'Em andamento',
      planejado: 'Planejado',
    },
  },
  sobre: {
    label: 'SOBRE MIM',
    titulo: 'Quem está do outro lado do código',
  },
  estudos: {
    label: 'MEUS ESTUDOS',
    titulo: 'O que venho estudando',
    focoLabel: 'Foco atual',
    statusAndamento: 'Em andamento',
    statusConcluido: 'Concluído',
    formacaoLabel: 'Formação acadêmica',
    cursosLabel: 'Cursos e certificações',
    verCertificados: 'Ver certificados',
    nenhumCertificado: 'Nenhum certificado adicionado ainda.',
    fecharModal: 'Fechar',
  },
  divulgar: {
    titulo: 'Me fale sobre seu sistema e eu desenvolvo:',
    botao: 'FALAR COMIGO AGORA',
  },
  contato: {
    label: 'CONTATO',
    titulo: 'Quer conversar? Me encontra aqui.',
    sub: 'Aberto a oportunidades, freelas e parcerias. é só entrar em contato.',
    acoes: {
      linkedin: 'Ver perfil',
      github: 'Ver repositórios',
      instagram: 'Seguir',
      whatsapp: 'Enviar mensagem',
    },
  },
}

// "typeof pt" obriga o inglês a ter exatamente as mesmas chaves do português
const en: typeof pt = {
  app: {
    abrirMenu: 'Open menu',
    navProjetos: 'Projects',
    navSobre: 'About me',
    navContato: 'Contact',
    heroLabel: "HI, I'M",
    heroBotao: 'WATCH MY INTRO',
    rodapeDescricao: 'Portfolio built with React, TypeScript and Vite.',
    direitosReservados: 'All rights reserved',
  },
  projetos: {
    eyebrow: 'Featured project',
    verDemo: 'View live demo',
    etapa: 'Stage',
    visaoGeral: 'overview',
    detalhe: 'detail',
    fechar: 'Close',
    imagemPrincipal: '16:9 ratio — main image',
    imagemDetalhe: '16:9 — detail',
    verCodigo: 'View code',
    verDetalhes: 'View details →',
    ampliar: 'Enlarge image',
    status: {
      concluido: 'Completed',
      'em-andamento': 'In progress',
      planejado: 'Planned',
    },
  },
  sobre: {
    label: 'ABOUT ME',
    titulo: "Who's on the other side of the code",
  },
  estudos: {
    label: 'MY STUDIES',
    titulo: "What I've been studying",
    focoLabel: 'Current focus',
    statusAndamento: 'In progress',
    statusConcluido: 'Completed',
    formacaoLabel: 'Academic background',
    cursosLabel: 'Courses and certifications',
    verCertificados: 'View certificates',
    nenhumCertificado: 'No certificates added yet.',
    fecharModal: 'Close',
  },
  divulgar: {
    titulo: "Tell me about your system and I'll build it:",
    botao: 'TALK TO ME NOW',
  },
  contato: {
    label: 'CONTACT',
    titulo: 'Want to talk? Find me here.',
    sub: 'Open to opportunities, freelance work and partnerships. just  in contact.',
    acoes: {
      linkedin: 'View profile',
      github: 'View repositories',
      instagram: 'Follow',
      whatsapp: 'Send message',
    },
  },
}

export const translations: Record<Lang, typeof pt> = { pt, en }
