import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const cards = [
  {
    q: 'Por que alguns médicos têm agenda lotada...',
    a: '...enquanto outros ficam só esperando o paciente ligar?',
  },
  {
    q: 'Por que você passou anos estudando...',
    a: '...e ainda depende do boca a boca para encher a agenda?',
  },
  {
    q: 'Por que profissionais com menos experiência são mais reconhecidos...',
    a: '...mesmo você tendo certeza de que é melhor?',
  },
]

export function Pain() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground md:py-32">
      {/* Brilhos radiais atmosféricos refinados */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(14,165,233,0.12)_0%,rgba(14,165,233,0)_100%)] blur-3xl opacity-60"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[40rem] w-[40rem] rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(212,175,55,0.08)_0%,rgba(212,175,55,0)_100%)] blur-3xl opacity-50"
      />

      {/* Grid técnico com opacidade ultra suave para não competir com o texto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(247,246,242,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,242,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <Eyebrow className="justify-center text-gold/90 tracking-[0.25em] uppercase text-xs font-medium">
            Reflita comigo
          </Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance font-heading text-4xl font-bold tracking-tight text-deep-foreground md:text-6xl leading-[1.1]">
            Você já se{' '}
            <span className="text-gold [text-shadow:0_2px_20px_rgba(212,175,55,0.15)]">perguntou</span>:
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={i}
              delay={i * 120}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 text-center shadow-[xl_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:bg-white/[0.04] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
            >
              {/* Linha de luz responsiva no topo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              {/* Micro número editorial */}
              <span className="mb-6 block font-heading text-xs font-bold tracking-widest text-white/30 transition-colors duration-500 group-hover:text-gold/60">
                0{i + 1}
              </span>

              <p className="font-heading text-xl font-bold leading-snug text-deep-foreground transition-colors duration-300 group-hover:text-white md:text-2xl">
                {card.q}
              </p>

              <p className="mt-6 text-base font-normal italic leading-relaxed text-gold/90 md:text-lg">
                {card.a}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mx-auto mt-20 max-w-5xl border-t border-white/[0.06] pt-12">
            <p className="text-pretty font-heading text-2xl font-bold leading-snug text-deep-foreground md:text-3xl">
              A resposta é simples:{' '}
              <span className="text-gold [text-shadow:0_2px_15px_rgba(212,175,55,0.1)]">
                8 em cada 10 pacientes pesquisam o profissional no Instagram antes de consultar.
              </span>
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-pretty font-heading text-lg font-medium leading-relaxed text-deep-foreground/70 md:text-xl">
              Com 134 milhões de usuários ativos, o Instagram já é o maior
              <span className="text-deep-foreground font-semibold"> “consultório” </span> do Brasil.
            </p>

            <p className="mt-8 font-heading text-2xl font-bold tracking-tight text-deep-foreground md:text-3xl">
              A pergunta é:{' '}
              <span className="relative inline-block text-gold after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:bg-gold/30">
                você vai ficar de fora?
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}