'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import Image from 'next/image'
import { Eyebrow } from '@/components/ppe/eyebrow'
import { Reveal } from '@/components/ppe/reveal'

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

export default function AnaliseDePerfilPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

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
          source: 'analise-de-perfil',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.message || 'Não foi possível enviar sua candidatura.')
      }

      router.push('/obrigado')
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Não foi possível enviar sua candidatura. Tente novamente.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-deep pb-16 pt-16 text-deep-foreground md:pb-20 md:pt-24">
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

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow className="text-gold">Análise gratuita de perfil médico</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                Sua experiência médica pode gerar mais autoridade e demanda no
                digital.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-deep-foreground/76 md:text-xl">
                Descubra o que pode estar limitando o crescimento do seu perfil
                e quais ajustes podem fortalecer sua presença digital.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="#formulario"
                className="group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90"
              >
                Quero minha análise de perfil gratuita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-6 max-w-2xl rounded-2xl border border-gold/25 bg-gold/10 p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-deep-foreground/76">
                    A análise é gratuita e seletiva. Avaliamos poucos perfis por
                    semana para garantir atenção real ao seu caso — não é uma
                    triagem automática.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mb-8 max-w-3xl">
              <Eyebrow>Resultados reais</Eyebrow>
              <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Método aplicado por médicos que decidiram construir presença com
                direção.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                image: '/social-gabriel-antes.png',
                name: 'Gabriel Chaves',
                result: 'De um perfil estagnado a uma presença com estratégia.',
              },
              {
                image: '/social-gabriel-insights.png',
                name: 'Crescimento mensurável',
                result: 'Alcance e conteúdo transformados em sinais concretos.',
              },
              {
                image: '/social-felipe-print.png',
                name: 'Felipe Rodrigues',
                result: 'Mais de 122 mil contas alcançadas em um único conteúdo.',
              },
            ].map((proof, index) => (
              <Reveal
                key={proof.name}
                delay={index * 80}
                className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-primary/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={proof.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <p className="font-label text-xs font-semibold uppercase tracking-[0.16em]">
                      {proof.name}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {proof.result}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="bg-deep py-16 text-deep-foreground md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.82fr_1fr] md:items-start md:px-10">
          <Reveal>
            <div className="md:sticky md:top-10">
              <Eyebrow className="text-gold">Próximo passo</Eyebrow>
              <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight md:text-5xl">
                Solicite sua análise em menos de um minuto.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-deep-foreground/72">
                Precisamos apenas dos dados essenciais para localizar seu perfil
                e entrar em contato. A qualificação detalhada acontece depois,
                pelo WhatsApp.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#071426] p-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                      Candidatura
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-semibold text-deep-foreground">
                      Solicitar análise
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Nome completo"
                    value={form.name}
                    onChange={(value) => updateField('name', value)}
                    placeholder="Dr(a). Nome Sobrenome"
                    required
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Select
                      label="Especialidade médica"
                      value={form.specialty}
                      onChange={(value) => updateField('specialty', value)}
                      options={specialties}
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
                  </div>

                  <Input
                    label="Instagram profissional"
                    value={form.instagram}
                    onChange={(value) => updateField('instagram', value)}
                    placeholder="@seuperfil"
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
                      Entendo que o envio do formulário não garante vaga na
                      mentoria e autorizo o contato da equipe PPE sobre a análise
                      de perfil e próximos passos.
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
                    className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gold px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando candidatura
                      </>
                    ) : (
                      <>
                        Quero minha análise de perfil gratuita
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

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Avaliação seletiva',
                text: 'A equipe analisa se o perfil tem aderência ao PPE e potencial real de evolução.',
              },
              {
                title: 'Oportunidades práticas',
                text: 'A análise observa posicionamento, clareza da mensagem, conteúdo e percepção de autoridade.',
              },
              {
                title: 'Próximos passos',
                text: 'Caso haja aderência, a equipe entra em contato pelo WhatsApp para conduzir a próxima etapa.',
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 100}
                className="rounded-[2rem] border border-border bg-card p-7 shadow-xl shadow-primary/5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-10 rounded-[2rem] border border-gold/30 bg-[linear-gradient(135deg,rgba(212,168,83,0.12),rgba(255,255,255,0.72)_48%,rgba(26,107,82,0.08))] p-7 text-center shadow-xl shadow-gold/10">
              <BadgeCheck className="mx-auto h-7 w-7 text-primary" />

              <p className="mx-auto mt-4 max-w-3xl text-pretty font-heading text-2xl font-semibold leading-snug text-foreground">
                Esta não é uma inscrição automática. É uma candidatura para
                análise estratégica.
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                A proposta é identificar médicos que realmente podem se
                beneficiar do método, evitando promessas genéricas e decisões
                sem diagnóstico.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
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
      <span className="mb-2 block font-label text-xs font-semibold uppercase tracking-[0.16em] text-deep-foreground/62">
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
      <span className="mb-2 block font-label text-xs font-semibold uppercase tracking-[0.16em] text-deep-foreground/62">
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
