'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  BadgeCheck,
  CircleDollarSign,
  Eye,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Eyebrow } from './eyebrow'

const steps = [
  {
    year: '2012 – 2019',
    title: 'Postava quando dava, do jeito que dava.',
    text: (
      <>
        Arte bonitinha, foto de cirurgia, texto técnico.{' '}
        <strong className="font-semibold text-foreground">
          Resultado: 900... depois 1.300 seguidores.
        </strong>{' '}
        Em 7 anos.
      </>
    ),
    badge: '7 anos estagnado',
    tone: 'primary',
  },
  {
    year: '2019 – 2025',
    title: 'Resolvi “fazer direito”.',
    text: (
      <>
        Contratei social media. Depois outro. E outro.{' '}
        <strong className="font-semibold text-foreground">
          Foram 5 profissionais e agências
        </strong>
        , milhares de reais por mês em posts genéricos que ninguém assistia.
        Terceirizar a sua autoridade é como terceirizar a sua cirurgia — não
        funciona.
      </>
    ),
    badge: '5 social medias • R$ 5.500/mês • 10 mil seguidores',
    tone: 'primary',
  },
  {
    year: 'Maio/2025 — O ponto da virada',
    title: 'Assumi o controle do meu conteúdo.',
    text: (
      <>
        Apliquei o que viria a ser o{' '}
        <strong className="font-semibold text-foreground">
          Protocolo Presença Exponencial
        </strong>
        . Um vídeo gravado no consultório, com o celular, em 20 minutos, editado
        em 30 minutos. Custo total:{' '}
        <strong className="font-semibold text-foreground">R$ 4,50</strong>.
        Resultado:{' '}
        <strong className="font-semibold text-foreground">
          67 mil seguidores com um único vídeo.
        </strong>
      </>
    ),
    badge: '+67 mil seguidores com 1 vídeo de R$ 4,50',
    tone: 'gold',
  },
  {
    year: 'Maio/2026 — Hoje',
    title: 'A autoridade passou a trabalhar por mim.',
    text: (
      <>
        <strong className="font-semibold text-foreground">
          653 mil seguidores. Quase 20 milhões de visualizações por mês. Zero
          tráfego pago.
        </strong>{' '}
        Vídeos passando de 17 milhões de views, agenda cheia, pacientes do Brasil
        inteiro e uma marca que é só minha — e que ninguém pode me tirar.
      </>
    ),
    badge: 'De desconhecido a referência nacional',
    tone: 'gold',
  },
]

export function StoryScroll() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  })

  const progressHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(latest * steps.length))
    )

    setActiveStep(next)
  })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-clip bg-secondary lg:min-h-[320vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-[34rem] w-[34rem] rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-40 h-[38rem] w-[38rem] rounded-full bg-gold/12 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28 lg:sticky lg:top-0 lg:min-h-screen lg:py-20">
        <div className="grid gap-14 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          {/* coluna narrativa */}
          <div>
            <Eyebrow>Minha história</Eyebrow>

            <h2 className="mt-5 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Eu era <span className="italic text-primary">igual a você</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Não vou te vender fórmula mágica de guru. Eu sou urologista, opero
              toda semana, atendo consultório — e apanhei do Instagram por{' '}
              <strong className="font-semibold text-foreground">14 anos</strong>{' '}
              antes de descobrir o que realmente funciona.
            </p>

            <div className="mt-10 hidden lg:block">
              <Timeline activeStep={activeStep} progressHeight={progressHeight} />
            </div>
          </div>

          {/* coluna visual */}
          <div className="relative">
            <div className="hidden lg:block">
              <ProofStage activeStep={activeStep} />
            </div>

            {/* fallback mobile/tablet: empilhado, sem scrollytelling complexo */}
            <div className="space-y-8 lg:hidden">
              {steps.map((step, index) => (
                <MobileStep key={step.year} step={step} index={index} />
              ))}

              <ProofToday />
            </div>
          </div>
        </div>
      </div>

      {/* área que cria o scroll no desktop */}
      <div className="hidden lg:block">
        {steps.map((step, index) => (
          <div key={step.year} className="h-[70vh]" aria-hidden={index !== 0} />
        ))}
      </div>
    </section>
  )
}

function Timeline({
  activeStep,
  progressHeight,
}: {
  activeStep: number
  progressHeight: ReturnType<typeof useTransform<string>>
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px bg-border" />

      <motion.div
        className="absolute left-[9px] top-2 w-px origin-top bg-primary"
        style={{ height: progressHeight }}
      />

      <div className="space-y-7">
        {steps.map((step, index) => {
          const isActive = activeStep === index
          const isPast = activeStep > index
          const isGold = step.tone === 'gold'

          return (
            <button
              key={step.year}
              type="button"
              className="group relative block w-full text-left"
            >
              <span
                className={[
                  'absolute -left-8 top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 transition-all',
                  isActive || isPast
                    ? isGold
                      ? 'border-gold bg-secondary'
                      : 'border-primary bg-secondary'
                    : 'border-border bg-secondary',
                  isActive ? 'scale-110' : 'scale-100',
                ].join(' ')}
              />

              <p
                className={[
                  'font-heading text-lg font-semibold transition-colors',
                  isActive
                    ? isGold
                      ? 'text-accent-foreground'
                      : 'text-primary'
                    : 'text-foreground/72',
                ].join(' ')}
              >
                {step.year}
              </p>

              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
                {step.title}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ProofStage({ activeStep }: { activeStep: number }) {
  const step = steps[activeStep]

  return (
    <motion.div
      key={activeStep}
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[2.5rem] bg-primary/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-card shadow-2xl shadow-primary/10">
        <div className="border-b border-border px-7 py-6">
          <p
            className={[
              'font-heading text-xl font-semibold',
              step.tone === 'gold' ? 'text-accent-foreground' : 'text-primary',
            ].join(' ')}
          >
            {step.year}
          </p>

          <h3 className="mt-2 text-balance font-heading text-3xl font-semibold leading-tight text-foreground">
            {step.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {step.text}
          </p>

          <span
            className={[
              'mt-5 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold',
              step.tone === 'gold'
                ? 'bg-gold/20 text-accent-foreground'
                : 'bg-primary/10 text-primary',
            ].join(' ')}
          >
            {step.badge}
          </span>
        </div>

        <div className="p-6">
          {activeStep === 0 && <ProofStagnation />}
          {activeStep === 1 && <ProofAgency />}
          {activeStep === 2 && <ProofTurningPoint />}
          {activeStep === 3 && <ProofToday />}
        </div>
      </div>
    </motion.div>
  )
}

function ProofStagnation() {
  return (
    <div className="grid gap-4">
      <MetricCard
        icon={<Users className="h-5 w-5" />}
        label="Crescimento em 7 anos"
        value="900 → 1.300"
        description="Muito esforço, pouca clareza de posicionamento e quase nenhum ganho de autoridade percebida."
      />

      <div className="rounded-3xl border border-border bg-secondary p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          O padrão antigo
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {['Arte', 'Foto', 'Texto'].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card px-4 py-5 text-center"
            >
              <p className="font-heading text-lg font-semibold text-foreground">
                {item}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                sem estratégia
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProofAgency() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <MetricCard
          icon={<Users className="h-5 w-5" />}
          label="Fornecedores testados"
          value="5"
          description="Profissionais e agências tentando resolver a presença digital."
        />

        <MetricCard
          icon={<CircleDollarSign className="h-5 w-5" />}
          label="Custo mensal"
          value="R$ 5.500"
          description="Investimento recorrente sem controle real da própria autoridade."
          accent
        />
      </div>

      <div className="rounded-3xl border border-border bg-secondary p-6">
        <p className="font-heading text-2xl font-semibold text-foreground">
          Posts bonitos não bastam.
        </p>

        <p className="mt-3 leading-relaxed text-muted-foreground">
          O problema não era falta de publicação. Era falta de mensagem,
          direção, narrativa e presença pessoal.
        </p>
      </div>
    </div>
  )
}

function ProofTurningPoint() {
  return (
    <div className="grid gap-4">
      <div className="rounded-3xl border border-gold/25 bg-deep p-6 text-deep-foreground">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          A virada
        </p>

        <p className="mt-4 font-heading text-4xl font-semibold text-gold">
          +67 mil
        </p>

        <p className="mt-2 text-lg font-medium">
          seguidores com um único vídeo.
        </p>

        <p className="mt-4 leading-relaxed text-deep-foreground/76">
          Gravado com celular, dentro da rotina real de consultório. O que mudou
          não foi a câmera. Foi o método.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <MiniProof label="Gravação" value="20 min" />
        <MiniProof label="Edição" value="30 min" />
        <MiniProof label="Custo" value="R$ 4,50" />
      </div>
    </div>
  )
}

function ProofToday() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <TrendingUp className="h-5 w-5" />
            </div>

            <div>
              <p className="font-heading text-2xl font-semibold leading-none text-primary">
                653 mil
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                seguidores reais e orgânicos
              </p>
            </div>
          </div>

          <div className="bg-[#f7f6f2] p-3">
            <div className="relative h-[180px] overflow-hidden rounded-2xl border border-border bg-white">
              <Image
                src="/story-perfil-atual.png"
                alt="Print do perfil atual do Dr. Juliano Plastina"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 260px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-accent-foreground">
              <Eye className="h-5 w-5" />
            </div>

            <div>
              <p className="font-heading text-2xl font-semibold leading-none text-accent-foreground">
                19.021.210
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                visualizações em 30 dias
              </p>
            </div>
          </div>

          <div className="bg-[#f7f6f2] p-3">
            <div className="relative h-[180px] overflow-hidden rounded-2xl border border-border bg-white">
              <Image
                src="/story-analytics-30dias.png"
                alt="Print de analytics com visualizações em 30 dias"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 260px"
                priority
              />
            </div>
          </div>

          <div className="border-t border-border bg-card px-5 py-3">
            <p className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <BadgeCheck className="h-4 w-4 text-gold" />
              Crescimento orgânico com{' '}
              <span className="text-primary">0,0% de anúncios</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-gold/25 bg-deep p-6 text-deep-foreground">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          O que mudou
        </p>

        <p className="mt-4 text-pretty font-heading text-xl font-semibold leading-snug md:text-2xl">
          Não foi minha capacidade médica. Foi a forma como eu passei a
          transformar experiência em autoridade percebida.
        </p>
      </div>
    </div>
  )
}

function MobileStep({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5">
      <p
        className={[
          'font-heading text-xl font-semibold',
          step.tone === 'gold' ? 'text-accent-foreground' : 'text-primary',
        ].join(' ')}
      >
        {String(index + 1).padStart(2, '0')} · {step.year}
      </p>

      <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight text-foreground">
        {step.title}
      </h3>

      <p className="mt-4 leading-relaxed text-muted-foreground">{step.text}</p>

      <span
        className={[
          'mt-5 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold',
          step.tone === 'gold'
            ? 'bg-gold/20 text-accent-foreground'
            : 'bg-primary/10 text-primary',
        ].join(' ')}
      >
        {step.badge}
      </span>
    </div>
  )
}

function MetricCard({
  icon,
  label,
  value,
  description,
  accent,
}: {
  icon: ReactNode
  label: string
  value: string
  description: string
  accent?: boolean
}) {
  return (
    <div className="rounded-3xl border border-border bg-secondary p-6">
      <div
        className={[
          'flex h-11 w-11 items-center justify-center rounded-xl',
          accent
            ? 'bg-gold/15 text-accent-foreground'
            : 'bg-primary/10 text-primary',
        ].join(' ')}
      >
        {icon}
      </div>

      <p className="mt-5 text-sm font-medium text-muted-foreground">{label}</p>

      <p
        className={[
          'mt-1 font-heading text-3xl font-semibold',
          accent ? 'text-accent-foreground' : 'text-primary',
        ].join(' ')}
      >
        {value}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

function MiniProof({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary px-4 py-5 text-center">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 font-heading text-xl font-semibold text-foreground">
        {value}
      </p>
    </div>
  )
}