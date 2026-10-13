// Seção "Projetos": um cabeçalho e os cards logo abaixo.
// Cada card pode ser um projeto, uma ideia ou uma etapa de um projeto maior.
//
// Para usar o template, edite os 3 cards de exemplo. Para ter mais cards, copie
// um bloco inteiro (de "{" até "},") dentro de "etapas"; para ter menos, apague um.
//
// Fotos: cada card tem sua pasta em public/projetos/ (card-1, card-2, card-3).
//   Troque os arquivos de exemplo pelos seus e escreva aqui o caminho dentro de
//   public/projetos/. O 1º é a imagem principal (1200×675 px); os próximos até 2
//   são detalhes (800×450 px).
//
// Opcionais: status, tecnologias, fotos, github e topicos. Apague a linha e a
//   parte some do site. Só "numero", "titulo" e "resumo" são obrigatórios.
//   status aceita: 'concluido', 'em-andamento' ou 'planejado'.

import type { ProjetoDestaque } from './types'

export const projetoDestaque: ProjetoDestaque = {
  // ── Cabeçalho da seção ──
  titulo: {
    pt: 'NOME DO SEU PROJETO AQUI',
    en: 'YOUR PROJECT NAME HERE',
  },
  descricao: {
    pt: 'Descreva aqui, em uma ou duas frases, o que é o seu projeto e qual problema ele resolve.',
    en: 'Describe here, in one or two sentences, what your project is and which problem it solves.',
  },
  tecnologias: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  github: 'https://github.com/seu-usuario/seu-projeto',
  demo: 'https://seu-projeto.exemplo.com',
  notaDemo: {
    pt: 'Observação opcional sobre a demo (ex.: hospedagem gratuita pode demorar a carregar).',
    en: 'Optional note about the demo (e.g. free hosting may take a while to load).',
  },

  // ── Cards ──
  etapas: [
    {
      numero: '01',
      status: 'concluido',
      tecnologias: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      // arquivos em public/projetos/card-1/
      fotos: ['card-1/principal.svg', 'card-1/detalhe-1.svg', 'card-1/detalhe-2.svg'],
      github: 'https://github.com/seu-usuario/seu-projeto',
      textos: {
        pt: {
          titulo: 'Título do primeiro card',
          resumo: 'Resumo curto que aparece no card. Conte em duas linhas o que foi feito aqui.',
          topicos: [
            {
              titulo: 'Objetivo',
              conteudo: 'Explique o que você queria resolver ou aprender com este projeto.',
            },
            {
              titulo: 'Como foi feito',
              conteudo: 'Conte as decisões que você tomou, as ferramentas escolhidas e o motivo.',
            },
            {
              titulo: 'Aprendizados',
              conteudo: 'Registre o que deu certo, o que deu errado e o que você faria diferente.',
            },
          ],
        },
        en: {
          titulo: 'First card title',
          resumo: 'Short summary shown on the card. Tell in two lines what was done here.',
          topicos: [
            {
              titulo: 'Objective',
              conteudo: 'Explain what you wanted to solve or learn with this project.',
            },
            {
              titulo: 'How it was built',
              conteudo: 'Share the decisions you made, the tools you chose and why.',
            },
            {
              titulo: 'Learnings',
              conteudo: 'Write down what worked, what went wrong and what you would do differently.',
            },
          ],
        },
      },
    },
    {
      numero: '02',
      status: 'em-andamento',
      tecnologias: ['Angular', 'TypeScript', 'Docker'],
      // arquivos em public/projetos/card-2/
      fotos: ['card-2/principal.svg', 'card-2/detalhe-1.svg', 'card-2/detalhe-2.svg'],
      github: 'https://github.com/seu-usuario/seu-projeto',
      textos: {
        pt: {
          titulo: 'Título do segundo card',
          resumo: 'Este card mostra um trabalho em andamento. Diga em que ponto ele está hoje.',
          topicos: [
            {
              titulo: 'O que já está pronto',
              conteudo: 'Liste as partes concluídas até agora.',
            },
            {
              titulo: 'Próximos passos',
              conteudo: 'Liste o que ainda falta fazer.',
            },
          ],
        },
        en: {
          titulo: 'Second card title',
          resumo: 'This card shows work in progress. Say where it stands today.',
          topicos: [
            {
              titulo: 'What is ready',
              conteudo: 'List the parts finished so far.',
            },
            {
              titulo: 'Next steps',
              conteudo: 'List what is still left to do.',
            },
          ],
        },
      },
    },
    {
      // Exemplo de card enxuto: sem tecnologias e sem link do GitHub.
      numero: '03',
      status: 'planejado',
      // arquivos em public/projetos/card-3/
      fotos: ['card-3/principal.svg', 'card-3/detalhe-1.svg', 'card-3/detalhe-2.svg'],
      textos: {
        pt: {
          titulo: 'Título do terceiro card',
          resumo: 'Use este card para uma ideia que você ainda vai tirar do papel.',
          topicos: [
            {
              titulo: 'A ideia',
              conteudo: 'Descreva o que você pretende construir e por quê.',
            },
          ],
        },
        en: {
          titulo: 'Third card title',
          resumo: 'Use this card for an idea you have not built yet.',
          topicos: [
            {
              titulo: 'The idea',
              conteudo: 'Describe what you plan to build and why.',
            },
          ],
        },
      },
    },
  ],
}
