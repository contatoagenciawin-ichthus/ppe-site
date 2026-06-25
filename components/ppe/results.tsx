'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { BadgeCheck, Eye, TrendingUp, Users } from 'lucide-react'
import { Reveal } from './reveal'

const proofCards = [
  {
    image: '/proof-video-17m.png',
    value: 'Mais de 17 milhões de alcance',
    label:
      'Num único vídeo foram quase 1,6 milhão de interações. Custo zero.',
    tone: 'gold',
  },
  {
    image: '/proof-followers-81k-video.png',
    value: '+81 mil seguidores',
    label:
      'Seguidores gerados a partir de um único conteúdo — print real dos insights.',
    tone: 'blue',
  },
  {
    image: '/proof-carousel-200k.png',
    value: 'Milhões de views',
    label:
      'Meus vídeos tinham 1.000, 2.000 visualizações. Agora a média é de MILHÕES.',
    tone: 'gold',
  },
] as const

export function Results() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 bottom-0 h-[34rem] w-[34rem] rounded-full bg-gold/14 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(247,246,242,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,242,0.18) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Prova, não promessa
              </span>
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight text-deep-foreground md:text-5xl">
              Resultados <span className="text-gold">reais</span> — com prints
              reais
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-deep-foreground/76 md:text-lg">
              Tudo o que eu ensino no PPE eu testei primeiro no meu próprio
              perfil: errando, ajustando e medindo. Esses são números públicos do{' '}
              <strong className="font-semibold text-deep-foreground">
                @drjulianoplastina.uro
              </strong>
              .
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1120px] gap-6 md:grid-cols-3">
          {proofCards.map((card, index) => (
            <ProofPhoneCard key={card.value} card={card} delay={index * 120} />
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-gold/40 bg-black/20 p-2 shadow-2xl shadow-black/20">
              <div className="relative min-h-[70px] overflow-hidden rounded-xl bg-white">
                <Image
                  src="/proof-followers-81301.png"
                  alt="Print dos insights com 81.301 seguidores"
                  width={1200}
                  height={180}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <p className="mt-4 text-center text-xs leading-relaxed text-deep-foreground/64">
              Print direto dos insights do Instagram:{' '}
              <span className="font-semibold text-gold">
                81.301 seguidores
              </span>{' '}
              vindos de uma única publicação.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-4">
          <MiniMetric
            icon={<Users className="h-4 w-4" />}
            value="653 mil"
            label="seguidores orgânicos"
          />

          <MiniMetric
            icon={<Eye className="h-4 w-4" />}
            value="20 milhões"
            label="views por mês"
          />

          <MiniMetric
            icon={<TrendingUp className="h-4 w-4" />}
            value="0,0%"
            label="tráfego pago"
          />

          <MiniMetric
            icon={<BadgeCheck className="h-4 w-4" />}
            value="+50 mil"
            label="pacientes impactados"
          />
        </div>
      </div>
    </section>
  )
}

function ProofPhoneCard({
  card,
  delay,
}: {
  card: {
    image: string
    value: string
    label: string
    tone: 'gold' | 'blue'
  }
  delay: number
}) {
  return (
    <Reveal
      delay={delay}
      className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/15 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
    >
      <div className="relative mx-auto">
        <div
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-0 rounded-[3rem] blur-2xl',
            card.tone === 'gold' ? 'bg-gold/10' : 'bg-[#7ec0ff]/10',
          ].join(' ')}
        />

        <div className="relative mx-auto w-full max-w-[290px] rounded-[2.8rem] border border-[#24476f] bg-[#081a33] p-[10px] shadow-[0_24px_60px_rgba(0,0,0,0.28)] transition-transform duration-500 group-hover:scale-[1.015]">
          <div className="absolute -left-[2px] top-24 h-14 w-[3px] rounded-full bg-white/12" />
          <div className="absolute -left-[2px] top-44 h-10 w-[3px] rounded-full bg-white/12" />
          <div className="absolute -right-[2px] top-36 h-16 w-[3px] rounded-full bg-white/12" />

          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/80" />

          <div className="relative aspect-[9/16] overflow-hidden rounded-[2.15rem] border border-white/6 bg-[linear-gradient(180deg,#11294d_0%,#081a33_100%)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-black/30 to-transparent" />

            <div className="absolute inset-3 z-0 overflow-hidden rounded-[1.5rem] bg-black/20">
              <Image
                src={card.image}
                alt={`Prova real: ${card.value}`}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#081a33]/80 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-black/40 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75 backdrop-blur-md">
              Print real
            </div>
          </div>

          <div className="pointer-events-none absolute inset-[10px] rounded-[2.15rem] ring-1 ring-white/6" />
        </div>
      </div>

      <div className="px-2 pb-2 pt-6 text-center">
        <p
          className={[
            'mx-auto max-w-[13ch] font-heading text-2xl font-semibold leading-tight md:text-3xl',
            card.tone === 'gold' ? 'text-gold' : 'text-[#7ec0ff]',
          ].join(' ')}
        >
          {card.value}
        </p>

        <p className="mx-auto mt-3 max-w-[30ch] text-sm leading-relaxed text-deep-foreground/72">
          {card.label}
        </p>
      </div>
    </Reveal>
  )
}

function MiniMetric({
  icon,
  value,
  label,
}: {
  icon: ReactNode
  value: string
  label: string
}) {
  return (
    <Reveal className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur-sm">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
        {icon}
      </div>

      <p className="mt-4 font-heading text-2xl font-semibold text-deep-foreground">
        {value}
      </p>

      <p className="mt-1 text-xs text-deep-foreground/60">{label}</p>
    </Reveal>
  )
}