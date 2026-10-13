// Converte trechos entre **asteriscos duplos** em <strong>.
// Ex.: 'Sou dev **full stack**' → Sou dev <strong>full stack</strong>
export default function TextoComDestaque({ texto }: { texto: string }) {
  // o split com grupo de captura deixa os trechos destacados nas posições ímpares
  const partes = texto.split(/\*\*(.+?)\*\*/g)

  return <>{partes.map((parte, i) => (i % 2 === 1 ? <strong key={i}>{parte}</strong> : parte))}</>
}
