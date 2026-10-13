// Tipos dos dados do portfólio. Normalmente você não precisa editar este arquivo.

import type { Lang } from '../i18n/context'

// Texto com uma versão para cada idioma.
export type Traduzido = Record<Lang, string>

// Tecnologias disponíveis para a trilha do topo.
// Para adicionar uma nova, inclua o id aqui e no catálogo TECNOLOGIAS do App.tsx.
export type TecnologiaId =
  | 'java'
  | 'spring'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'angular'
  | 'nextjs'
  | 'node'
  | 'nestjs'
  | 'python'
  | 'html'
  | 'css'
  | 'tailwind'
  | 'sql'
  | 'postgres'
  | 'mongodb'
  | 'firebase'
  | 'graphql'
  | 'restapi'
  | 'git'
  | 'docker'
  | 'linux'
  | 'aws'
  | 'ia'
  | 'ciberseguranca'

// Seção "Estudos".
export interface ItemEstudo {
  titulo: Traduzido
  instituicao?: Traduzido
  status: 'andamento' | 'concluido'
  data: Traduzido
  // Caminhos dentro de public/certificados/ (ex.: 'card-1/certificado.svg').
  // Pode ser imagem ou PDF; para PDF, coloque ao lado uma prévia .webp
  // com o mesmo nome (ex.: diploma.pdf + diploma.webp).
  certificados?: string[]
}

// Seção "Projetos": um cabeçalho + cards. Cada card pode ser um projeto,
// uma ideia ou uma etapa de um projeto maior.
// Campos com "?" são opcionais: apague a linha no projetoData e a parte some do site.
export type StatusEtapa = 'concluido' | 'em-andamento' | 'planejado'

export interface Topico {
  titulo: string
  conteudo: string
}

export interface EtapaTexto {
  titulo: string
  // descrição curta que aparece no card
  resumo: string
  // blocos de texto (subtítulo + conteúdo) exibidos ao abrir o card
  topicos?: Topico[]
}

export interface Etapa {
  numero: string
  status?: StatusEtapa
  // ferramentas usadas; as que estão no catálogo TECH_ICONS (Projetos.tsx) ganham ícone
  tecnologias?: string[]
  // Caminhos dentro de public/projetos/ (ex.: 'card-1/principal.svg').
  // O 1º é a imagem principal (1200×675), os próximos até 2 são detalhes (800×450).
  fotos?: string[]
  // true = esse card não vai ter fotos; esconde o molde de imagens no modal.
  semFotos?: boolean
  github?: string
  textos: Record<Lang, EtapaTexto>
}

export interface ProjetoDestaque {
  titulo: Traduzido
  descricao: Traduzido
  notaDemo?: Traduzido
  tecnologias?: string[]
  github?: string
  demo?: string
  etapas: Etapa[]
}
