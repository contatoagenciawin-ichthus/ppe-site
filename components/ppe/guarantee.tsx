import { ShieldCheck } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

export function Guarantee() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-28">
      {/* glows suaves em fundo claro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-primary/6 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-gold/16 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">Risco zero</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Garantia{' '}
              <span className="italic text-primary">incondicional</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
            <div className="relative grid gap-8 p-8 md:grid-cols-[180px_1fr] md:items-center md:p-12">
              {/* gloss superior */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/12 blur-3xl"
              />

              {/* selo */}
              <div className="relative flex justify-center md:justify-start">
                <div className="relative flex h-36 w-36 shrink-0 flex-col items-center justify-center rounded-full border border-gold/45 bg-[radial-gradient(circle_at_35%_25%,#ffffff_0%,#f7f6f2_34%,#e9e3d5_100%)] text-center shadow-[0_24px_70px_rgba(13,27,42,0.14)]">
                  {/* anéis do selo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-3 rounded-full border border-primary/18"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-6 rounded-full border border-gold/35"
                  />

                  {/* brilho do selo */}
                  <div
                    aria-hidden="true"
                    className="absolute left-5 top-4 h-12 w-20 rounded-full bg-white/70 blur-xl"
                  />

                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <ShieldCheck className="h-5 w-5 text-gold" />
                  </div>

                  <span className="relative z-10 mt-2 font-heading text-5xl font-semibold leading-none text-primary">
                    7
                  </span>

                  <span className="relative z-10 mt-1 max-w-24 text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-foreground/70">
                    dias de garantia
                  </span>
                </div>
              </div>

              {/* texto */}
              <div className="relative text-center md:text-left">
                <div className="mb-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  Entre sem risco
                </div>

                <h3 className="font-heading text-3xl font-semibold leading-snug text-foreground">
                  Entre, participe e decida depois.
                </h3>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Você tem 7 dias para acessar a plataforma, conhecer o material
                  e sentir como funciona a mentoria. Se decidir que não é para
                  você, basta um e-mail: devolvo 100% do valor, sem perguntas e
                  sem burocracia.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  O risco é todo meu — como sempre foi, desde o primeiro vídeo de{' '}
                  <span className="font-semibold text-primary">R$ 4,50</span>.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}