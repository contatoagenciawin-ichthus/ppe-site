import { Check, X } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const bad = [
  'Social media: R$ 1.000/mês',
  'Gestor de tráfego: R$ 2.500/mês',
  'Tráfego pago: R$ 2.000/mês',
  'Custo por 100 mil visualizações: R$ 1.000',
  'Custo por seguidor na saúde: R$ 1 a R$ 3',
  'Conteúdo genérico que não conecta com paciente',
]

const good = [
  'Você no controle da sua autoridade',
  'Conteúdo gravado no celular, em minutos',
  'Crescimento 100% orgânico — R$ 0 em anúncio',
  'Método validado com 653 mil seguidores',
  'IA e ferramentas que multiplicam sua produtividade',
  'Tudo dentro das normas do CFM',
]

export function Cost() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071426] pt-36 pb-28 text-deep-foreground md:pt-40 md:pb-32">
      {/* transição da seção anterior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d1b2a] via-[#071426] to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />

      {/* glows premium próprios desta seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-primary/24 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem] rounded-full bg-gold/18 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-3xl"
      />

      {/* grid técnico sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(247,246,242,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,242,0.18) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <Eyebrow className="justify-center text-gold">
            Faça as contas
          </Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight text-deep-foreground md:text-6xl">
            Quanto isso está{' '}
            <span className="text-gold">te custando?</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-deep-foreground/74">
            Quanto você gastaria para ter esse resultado com agência, social
            media e tráfego pago? Eu fiz essa conta na pele — e ela não fecha.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 text-left lg:grid-cols-2">
          {/* caminho tradicional */}
          <Reveal className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all hover:border-white/20 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative">
              <h3 className="font-heading text-2xl font-semibold text-deep-foreground/72">
                O caminho tradicional
              </h3>

              <ul className="mt-7 divide-y divide-white/10">
                {bad.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-deep-foreground/56 ring-1 ring-white/10">
                      <X className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-sm leading-relaxed text-deep-foreground/82 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-white/12 pt-7">
                <p className="font-heading text-3xl font-semibold text-deep-foreground/80">
                  R$ 100.000 a R$ 300.000
                </p>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-deep-foreground/58">
                  Custo estimado para chegar a 100 mil seguidores — pagando R$
                  5.500 todo mês, para sempre.
                </p>
              </div>
            </div>
          </Reveal>

          {/* caminho PPE */}
          <Reveal
            delay={120}
            className="group relative overflow-hidden rounded-[2rem] border border-gold/55 bg-[linear-gradient(135deg,rgba(212,168,83,0.12),rgba(255,255,255,0.04)_42%,rgba(26,107,82,0.12))] p-8 shadow-2xl shadow-gold/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/80 hover:shadow-gold/20 md:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/16 blur-3xl transition-opacity group-hover:opacity-80"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-primary/18 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,168,83,0.12),transparent_40%)]"
            />

            <div className="relative">
              <div className="mb-6 inline-flex rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Melhor escolha estratégica
              </div>

              <h3 className="font-heading text-2xl font-semibold text-gold">
                O caminho do PPE
              </h3>

              <ul className="mt-7 divide-y divide-white/10">
                {good.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-sm leading-relaxed text-deep-foreground md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-gold/35 pt-7">
                <p className="font-heading text-3xl font-semibold text-gold">
                  Menos de 3 meses de agência
                </p>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-deep-foreground/68">
                  Investido uma única vez, em uma habilidade que é sua para
                  sempre.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-5 text-center shadow-2xl shadow-black/10 backdrop-blur-sm">
            <p className="text-pretty font-heading text-xl font-semibold leading-snug text-deep-foreground md:text-2xl">
              O custo real não é só o dinheiro perdido. É continuar dependendo
              de terceiros para construir a sua própria autoridade.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}