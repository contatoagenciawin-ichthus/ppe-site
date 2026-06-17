const items = [
  { strong: '653 mil', text: 'seguidores' },
  { strong: '20 milhões', text: 'de views/mês' },
  { strong: 'R$ 0', text: 'em tráfego pago' },
  { strong: '17 milhões', text: 'de views em 1 vídeo' },
  { strong: '+200 mil', text: 'seguidores com 1 conteúdo' },
  { strong: '+50 mil', text: 'pacientes atendidos' },
]

export function Marquee() {
  const loop = [...items, ...items]

  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-deep py-5 text-deep-foreground">
      {/* brilho superior sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      {/* brilho de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,168,83,0.12)_0%,transparent_38%)]"
      />

      {/* fade nas laterais */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-deep to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-deep to-transparent"
      />

      <div className="relative flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-medium text-deep-foreground/78"
          >
            <span className="font-heading text-xl font-semibold tracking-tight text-gold">
              {item.strong}
            </span>

            <span>{item.text}</span>

            <span className="ml-7 h-1.5 w-1.5 rounded-full bg-gold/60" />
          </span>
        ))}
      </div>

      {/* brilho inferior sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />
    </section>
  )
}