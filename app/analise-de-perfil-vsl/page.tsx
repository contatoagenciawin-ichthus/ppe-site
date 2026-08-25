'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Loader2,
  Play,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Eyebrow } from '@/components/ppe/eyebrow'
import { Reveal } from '@/components/ppe/reveal'
import { SiteFooter } from '@/components/ppe/site-footer'

type FormState = {
  name: string
  whatsapp: string
  specialty: string
  instagram: string
  consent: boolean
}

const initialState: FormState = {
  name: '',
  whatsapp: '',
  specialty: '',
  instagram: '',
  consent: false,
}

const specialties = [
  'Anestesiologia',
  'Cardiologia',
  'Cirurgia Geral',
  'Cirurgia Plástica',
  'Clínica Médica',
  'Dermatologia',
  'Endocrinologia',
  'Gastroenterologia',
  'Geriatria',
  'Ginecologia e Obstetrícia',
  'Medicina de Família e Comunidade',
  'Neurologia',
  'Oftalmologia',
  'Oncologia',
  'Ortopedia e Traumatologia',
  'Otorrinolaringologia',
  'Pediatria',
  'Psiquiatria',
  'Radiologia',
  'Reumatologia',
  'Urologia',
  'Outra especialidade',
]

function trackClarity(eventName: string) {
  if (typeof window === 'undefined') return

  const clarity = (
    window as Window & {
      clarity?: (...args: string[]) => void
    }
  ).clarity

  clarity?.('event', eventName)
}

export default function AnaliseDePerfilVslPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const clarity = (
      window as Window & {
        clarity?: (...args: string[]) => void
      }
    ).clarity

    clarity?.('set', 'landing_page', 'analise_de_perfil_vsl')
    trackClarity('vsl_page_view')
  }, [])

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          source: 'analise-de-perfil-vsl',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.message || 'Não foi possível enviar sua análise.')
      }

      trackClarity('vsl_lead_submitted')
      router.push('/obrigado')
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Não foi possível enviar sua análise. Tente novamente.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-deep pb-16 pt-12 text-deep-foreground md:pb-24 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-primary/24 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gold/14 blur-3xl"
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

        <div className="relative mx-auto max-w-6xl px-5 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <Eyebrow className="text-gold">
                Análise estratégica gratuita para médicos
              </Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
                O Instagram pode estar impedindo que mais pacientes encontrem
                você.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-deep-foreground/76 md:text-xl">
                Descubra, em uma análise gratuita, os erros que hoje limitam o
                crescimento do seu perfil.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Play className="h-4 w-4 fill-current" />
                Assista ao vídeo abaixo
              </p>
            </Reveal>
          </div>

          <Reveal delay={260}>
            <VslPlayer />
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-7 text-center">
              <a
                href="#formulario-vsl"
                onClick={() => trackClarity('vsl_cta_click_after_video')}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-center text-base font-semibold text-accent-foreground shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gold/90"
              >
                Quero minha análise gratuita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="formulario-vsl"
        className="scroll-mt-4 bg-background py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.82fr_1fr] md:items-start md:px-10">
          <Reveal>
            <div className="md:sticky md:top-10">
              <Eyebrow>Solicite sua análise</Eyebrow>
              <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight md:text-5xl">
                Análise Estratégica de Perfil
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                A equipe do Dr. Juliano analisa um número limitado de perfis
                todas as semanas. Preencha seus dados para participar.
              </p>

              <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/[0.06] p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    A análise é gratuita e não existe obrigação de contratar a
                    mentoria. A equipe entrará em contato para explicar os
                    próximos passos.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-border bg-card p-5 shadow-2xl shadow-primary/10">
              <div className="rounded-[1.5rem] bg-deep p-6 text-deep-foreground">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Participar da análise
                </p>

                <form
                  onSubmit={handleSubmit}
                  onFocus={() => trackClarity('vsl_form_started')}
                  className="mt-6 space-y-4"
                >
                  <Input
                    label="Nome completo"
                    value={form.name}
                    onChange={(value) => updateField('name', value)}
                    placeholder="Dr(a). Nome Sobrenome"
                    required
                  />

                  <Select
                    label="Especialidade médica"
                    value={form.specialty}
                    onChange={(value) => updateField('specialty', value)}
                    options={specialties}
                    required
                  />

                  <Input
                    label="Instagram profissional"
                    value={form.instagram}
                    onChange={(value) => updateField('instagram', value)}
                    placeholder="@seuperfil"
                    required
                  />

                  <Input
                    label="WhatsApp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={(value) => updateField('whatsapp', value)}
                    placeholder="(00) 00000-0000"
                    required
                  />

                  <label className="flex cursor-pointer gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(event) =>
                        updateField('consent', event.target.checked)
                      }
                      required
                      className="mt-1 h-4 w-4 rounded border-white/20 accent-gold"
                    />
                    <span className="text-xs leading-relaxed text-deep-foreground/68">
                      Autorizo o contato da equipe PPE sobre a análise de perfil
                      e os próximos passos, conforme a Política de Privacidade.
                    </span>
                  </label>

                  {error ? (
                    <p className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-100">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() => trackClarity('vsl_cta_click_form')}
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-center text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando
                      </>
                    ) : (
                      <>
                        Quero minha análise gratuita
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-deep py-16 text-deep-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
              <Image
                src="/mentor.png"
                alt="Dr. Juliano Plastina"
                width={540}
                height={675}
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow className="text-gold">Por que ouvir o Dr. Juliano?</Eyebrow>
              <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight md:text-5xl">
                Método construído por um médico, para médicos.
              </h2>
            </Reveal>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                [Stethoscope, 'Médico em atividade clínica e cirúrgica.'],
                [Users, 'Mais de 700 mil seguidores orgânicos.'],
                [TrendingUp, 'Milhões de visualizações todos os meses.'],
                [BadgeCheck, 'Método aplicado por diversas especialidades.'],
              ].map(([Icon, text], index) => {
                const ItemIcon = Icon as typeof Stethoscope

                return (
                  <Reveal
                    key={text as string}
                    delay={80 + index * 60}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <p className="text-sm leading-relaxed text-deep-foreground/78">
                      {text as string}
                    </p>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={340}>
              <p className="mt-7 text-base leading-relaxed text-deep-foreground/72">
                Depois de anos testando estratégias no próprio perfil, Dr.
                Juliano organizou o que funcionava em um método para ajudar
                outros médicos a transformar conhecimento em autoridade digital,
                sem abrir mão da credibilidade.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <blockquote className="mt-7 border-l-2 border-gold pl-5 font-heading text-xl font-medium leading-relaxed text-deep-foreground md:text-2xl">
                “Durante anos estudei como transformar conhecimento em autoridade
                digital sem abrir mão da credibilidade médica. Hoje ensino esse
                método para outros médicos.”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Resultados reais</Eyebrow>
              <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight md:text-5xl">
                Alguns resultados de quem aplicou o método
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Prints reais e resultados individuais. Nenhum número abaixo é
                uma promessa de resultado.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ProofCard
              image="/social-gabriel-depois.png"
              name="Dr. Gabriel Chaves"
              result="740 → 14.700 seguidores"
              detail="Um conteúdo alcançou 231 mil visualizações."
              delay={0}
            />
            <ProofCard
              image="/social-felipe-print.png"
              name="Felipe Rodrigues"
              result="215 mil visualizações"
              detail="Primeiro Reel com mais de 122 mil contas alcançadas."
              delay={80}
              contain
            />
            <ProofCard
              image="/proof-video-17m.png"
              name="Método testado na prática"
              result="Mais de 17 milhões"
              detail="Resultado registrado no perfil do próprio Dr. Juliano."
              delay={160}
              contain
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep py-16 text-deep-foreground md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/22 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
          <Reveal>
            <CheckCircle2 className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight md:text-5xl">
              Você não precisa de mais uma dica.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-deep-foreground/76">
              Precisa saber exatamente o que está impedindo seu perfil de
              crescer. É isso que analisamos.
            </p>
            <a
              href="#formulario-vsl"
              onClick={() => trackClarity('vsl_cta_click_closing')}
              className="group mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 text-center text-base font-semibold text-accent-foreground shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gold/90"
            >
              Quero minha análise
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressEvents = useRef(new Set<number>())
  const [isMetaInAppBrowser, setIsMetaInAppBrowser] = useState(false)

  useEffect(() => {
    setIsMetaInAppBrowser(
      /FBAN|FBAV|FB_IAB|Instagram|Messenger/i.test(
        window.navigator.userAgent || ''
      )
    )
  }, [])

  function handleTimeUpdate() {
    const video = videoRef.current
    if (!video || !video.duration) return

    const percentage = (video.currentTime / video.duration) * 100

    for (const milestone of [25, 50, 75]) {
      if (percentage >= milestone && !progressEvents.current.has(milestone)) {
        progressEvents.current.add(milestone)
        trackClarity(`vsl_video_${milestone}_percent`)
      }
    }
  }

  return (
    <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-[1.6rem] border border-white/15 bg-black shadow-2xl shadow-black/35">
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster="/vsl-analise-perfil-poster.jpg"
          className="h-full w-full"
          onPlay={() => trackClarity('vsl_video_started')}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => trackClarity('vsl_video_completed')}
        >
          <source src="/vsl-analise-perfil.mp4" type="video/mp4" />
          Seu navegador não oferece suporte à reprodução de vídeo.
        </video>
      </div>

      {isMetaInAppBrowser ? (
        <div className="border-t border-white/10 bg-[#101010] px-5 py-4 text-center">
          <p className="text-sm leading-relaxed text-white/75">
            Se o vídeo não iniciar neste aplicativo, abra esta página no
            navegador do celular.
          </p>
          <button
            type="button"
            onClick={() =>
              window.open(window.location.href, '_blank', 'noopener,noreferrer')
            }
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Abrir no navegador
          </button>
        </div>
      ) : null}
    </div>
  )
}

function ProofCard({
  image,
  name,
  result,
  detail,
  delay,
  contain = false,
}: {
  image: string
  name: string
  result: string
  detail: string
  delay: number
  contain?: boolean
}) {
  return (
    <Reveal
      delay={delay}
      className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-primary/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-deep">
        <Image
          src={image}
          alt={`Comprovação do resultado de ${name}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className={contain ? 'object-contain p-3' : 'object-cover object-top'}
        />
      </div>
      <div className="p-6">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {name}
        </p>
        <p className="mt-3 font-heading text-2xl font-semibold text-foreground">
          {result}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {detail}
        </p>
      </div>
    </Reveal>
  )
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-deep-foreground/82">
        {label}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm text-deep-foreground outline-none transition placeholder:text-deep-foreground/32 focus:border-gold/50 focus:bg-white/[0.075]"
      />
    </label>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-deep-foreground/82">
        {label}
      </span>
      <select
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-white/10 bg-[#0d1d32] px-4 text-sm text-deep-foreground outline-none transition focus:border-gold/50"
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
