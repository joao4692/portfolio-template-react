// Fonte única dos dados pessoais do portfólio.
// Para usar o template, edite este arquivo e o projetoData.ts.
//
// Arquivos (fotos, PDFs) ficam em public/ — aqui você escreve só o NOME do arquivo:
//   public/perfil/        → foto do topo e fundo do "Sobre"
//   public/certificados/  → certificados dos estudos (uma pasta por card)
//   public/projetos/      → fotos dos projetos (uma pasta por card)
//
// Textos com { pt, en } têm uma versão para cada idioma do site.

import type { ItemEstudo, TecnologiaId, Traduzido } from './types'

export const perfil = {
  nome: {
    pt: 'Seu Nome',
    en: 'Your Name',
  },
  // aparece no rodapé, seguido de um ponto colorido
  marca: {
    pt: 'Marca do seu portfólio',
    en: 'Your portfolio brand',
  },
  videoApresentacao: 'https://www.youtube.com/watch?v=SEU_VIDEO_ID',
  descricao: {
    pt: 'Escreva aqui uma frase curta sobre você: o que você faz, com quais tecnologias trabalha e o que te move.',
    en: 'Write here a short sentence about yourself: what you do, which technologies you work with and what drives you.',
  },
  // arquivo em public/perfil/
  foto: 'foto.webp',
}

// Pares exibidos na trilha (esquerda → direita).
// Os ids disponíveis estão em TecnologiaId, no types.ts.
export const trilha: [TecnologiaId, TecnologiaId][] = [
  ['java', 'spring'],
  ['javascript', 'node'],
  ['react', 'angular'],
  ['sql', 'postgres'],
  ['git', 'docker'],
  ['linux', 'ia'],
]

// Seção "Sobre mim". Use **asteriscos duplos** para destacar em negrito.
// Cada item da lista vira um parágrafo.
export const sobre = {
  // arquivo em public/perfil/
  imagemFundo: 'sobre-bg.jpg',
  paragrafos: {
    pt: [
      'Este é o primeiro parágrafo da sua apresentação. Conte **quem você é** e o que te trouxe para a área de tecnologia.',
      'No segundo parágrafo, fale sobre **como você trabalha e aprende**: suas ferramentas preferidas, sua forma de resolver problemas e o que você valoriza em um projeto.',
      'Feche dizendo **o que você busca agora**: o tipo de oportunidade, de time ou de desafio que faz sentido para você.',
    ],
    en: [
      'This is the first paragraph of your introduction. Tell **who you are** and what brought you to the tech field.',
      'In the second paragraph, talk about **how you work and learn**: your favorite tools, your way of solving problems and what you value in a project.',
      'Close by saying **what you are looking for now**: the kind of opportunity, team or challenge that makes sense for you.',
    ],
  },
  lema: {
    pt: 'Sua frase de efeito aqui.',
    en: 'Your motto here.',
  },
}

// Seção "Estudos": cada item da lista vira um card.
// status aceita 'andamento' ou 'concluido'. "instituicao" e "certificados" são opcionais.
//
// Certificados: cada card tem sua pasta em public/certificados/ (card-1, card-2, card-3).
//   Troque o arquivo de exemplo pelos seus e escreva aqui o caminho dentro de
//   public/certificados/. Um card pode ter vários certificados.
//   - Imagem (.webp, .png, .jpg): basta o arquivo.
//   - PDF: coloque ao lado uma miniatura .webp com o mesmo nome
//     (ex.: card-1/diploma.pdf + card-1/diploma.webp).
export const estudos: { foco: Traduzido; formacao: ItemEstudo[]; cursos: ItemEstudo[] } = {
  foco: {
    pt: 'Conte aqui o que você está estudando no momento e por quê.',
    en: 'Tell here what you are studying right now and why.',
  },
  formacao: [
    {
      titulo: {
        pt: 'Nome do seu curso superior',
        en: 'Name of your degree',
      },
      instituicao: { pt: 'Nome da instituição', en: 'Name of the institution' },
      status: 'andamento',
      data: { pt: 'Previsão de conclusão: mês de ano', en: 'Expected completion: month year' },
      // arquivos em public/certificados/card-1/
      certificados: ['card-1/certificado.svg'],
    },
  ],
  cursos: [
    {
      titulo: { pt: 'Curso em andamento', en: 'Course in progress' },
      instituicao: { pt: 'Plataforma do curso', en: 'Course platform' },
      status: 'andamento',
      data: { pt: 'Início em mês de ano', en: 'Started in month year' },
      // arquivos em public/certificados/card-2/
      certificados: ['card-2/certificado.svg'],
    },
    {
      titulo: { pt: 'Curso concluído', en: 'Completed course' },
      instituicao: { pt: 'Plataforma do curso', en: 'Course platform' },
      status: 'concluido',
      data: { pt: 'Concluído em mês de ano', en: 'Completed in month year' },
      // arquivos em public/certificados/card-3/
      certificados: ['card-3/certificado.svg'],
    },
  ],
}

// Serviços exibidos na faixa de divulgação. As duas listas devem ter os mesmos itens.
export const servicos = {
  pt: ['Sites e Landing Pages', 'Sistemas Web', 'APIs e Integrações', 'Dashboards e Painéis', 'Automações'],
  en: ['Websites and Landing Pages', 'Web Systems', 'APIs and Integrations', 'Dashboards and Panels', 'Automations'],
}

// Links da seção "Contato". No WhatsApp, use código do país + DDD + número, só dígitos.
export const contatos = {
  linkedin: 'https://www.linkedin.com/in/seu-usuario',
  github: 'https://github.com/seu-usuario',
  instagram: 'https://instagram.com/seu-usuario',
  whatsapp: 'https://wa.me/5500000000000',
}
