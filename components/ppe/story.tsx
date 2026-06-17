import Image from 'next/image'
import { BadgeCheck, Eye, TrendingUp } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const timeline = [
  {
    year: '2012 – 2019',
    text: (
      <>
        Postava quando dava, do jeito que dava. Arte bonitinha, foto de cirurgia,
        texto técnico.{' '}
        <strong className="text-foreground">
          Resultado: 900... depois 1.300 seguidores.
        </strong>{' '}
        Em 7 anos.
      </>
    ),
    badge: '7 anos estagnado',
    turn: false,
  },
  {
    year: '2019 – 2025',
    text: (
      <>
        Resolvi &quot;fazer direito&quot;: contratei social media. Depois outro.
        E outro.{' '}
        <strong className="text-foreground">
          Foram 5 profissionais e agências
        </strong>
        , milhares de reais por mês em posts genéricos que ninguém assistia.
        Vídeos com 218, 233, 282 visualizações. Terceirizar a sua autoridade é
        como terceirizar a sua cirurgia — não funciona.
      </>
    ),
    badge: '5 social medias • R$ 5.500/mês • 10 mil seguidores',
    turn: false,
  },
  {
    year: 'Maio/2025 — O ponto da virada',
    text: (
      <>
        Assumi o controle do meu conteúdo e apliquei o que viria a ser o{' '}
        <strong className="text-foreground">
          Protocolo Presença Exponencial
        </strong>
        . Um vídeo gravado no consultório, com o celular, em 20 minutos, editado
        em 30 minutos. Custo total:{' '}
        <strong className="text-foreground">R$ 4,50</strong>. Resultado:{' '}
        <strong className="text-foreground">
          67 mil seguidores com um único vídeo
        </strong>
        .
      </>
    ),
    badge: '+67 mil seguidores com 1 vídeo de R$ 4,50',
    turn: true,
  },
  {
    year: 'Maio/2026 — Hoje',
    text: (
      <>
        <strong className="text-foreground">
          653 mil seguidores. Quase 20 milhões de visualizações por mês. Zero
          tráfego pago.
        </strong>{' '}
        Vídeos passando de 17 milhões de views, agenda cheia, pacientes do Brasil
        inteiro e uma marca que é só minha — e que ninguém pode me tirar.
      </>
    ),
    badge: 'De desconhecido a referência nacional',
    turn: true,
  },
]

export function Story() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[32rem] w-[32rem] rounded-full bg-gold/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Minha história</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Eu era <span className="italic text-primary">igual a você</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Não vou te vender fórmula mágica de guru. Eu sou urologista, opero
            toda semana, atendo consultório — e apanhei do Instagram por{' '}
            <strong className="font-semibold text-foreground">14 anos</strong>{' '}
            antes de descobrir o que realmente funciona.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* timeline */}
          <ol className="relative border-l-2 border-border pl-8">
            {timeline.map((item, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 100}
                className="relative pb-12 last:pb-0"
              >
                <span
                  className={`absolute -left-[2.6rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 ${
                    item.turn
                      ? 'border-gold bg-secondary'
                      : 'border-primary bg-secondary'
                  }`}
                />

                <p
                  className={`font-heading text-xl font-semibold ${
                    item.turn ? 'text-accent-foreground' : 'text-primary'
                  }`}
                >
                  {item.year}
                </p>

                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>

                <span
                  className={`mt-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${
                    item.turn
                      ? 'bg-gold/20 text-accent-foreground'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {item.badge}
                </span>
              </Reveal>
            ))}
          </ol>

          {/* proof cards */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
              <div className="border-b border-border px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-heading text-3xl font-semibold leading-none text-primary">
                      653 mil
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      seguidores reais e orgânicos
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#f7f6f2] p-4">
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <Image
                    src="/story-perfil-atual.png"
                    alt="Print do perfil atual do Dr. Juliano Plastina"
                    width={720}
                    height={420}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10"
            >
              <div className="border-b border-border px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-accent-foreground">
                    <Eye className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-heading text-3xl font-semibold leading-none text-accent-foreground">
                      19.021.210
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      visualizações em 30 dias
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#f7f6f2] p-4">
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <Image
                    src="/story-analytics-30dias.png"
                    alt="Print de analytics com visualizações em 30 dias"
                    width={720}
                    height={520}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="border-t border-border bg-card px-6 py-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <BadgeCheck className="h-4 w-4 text-gold" />
                  Crescimento orgânico com{' '}
                  <span className="text-primary">0,0% de anúncios</span>
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={220}
              className="rounded-[2rem] border border-gold/25 bg-deep p-6 text-deep-foreground shadow-2xl shadow-primary/10"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                O que mudou
              </p>

              <p className="mt-4 text-pretty font-heading text-2xl font-semibold leading-snug">
                Não foi minha capacidade médica. Foi a forma como eu passei a
                transformar experiência em autoridade percebida.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}