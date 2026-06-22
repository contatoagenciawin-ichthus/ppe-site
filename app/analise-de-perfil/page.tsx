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
} from 'lucide-react'
import { Eyebrow } from '@/components/ppe/eyebrow'
import { Reveal } from '@/components/ppe/reveal'

type FormState = {
  name: string
  email: string
  whatsapp: string
  specialty: string
  location: string
  instagram: string
  difficulty: string
  goal: string
  consent: boolean
}

const initialState: FormState = {
  name: '',
  email: '',
  whatsapp: '',
  specialty: '',
  location: '',
  instagram: '',
  difficulty: '',
  goal: '',
  consent: false,
}

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
      <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground md:py-28">
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_0.86fr] md:items-center md:px-10">
          <div>
            <Reveal>
              <Eyebrow className="text-gold">Análise estratégica de perfil</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                Candidate seu perfil médico para uma análise estratégica.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-deep-foreground/76 md:text-xl">
                O Dr. Juliano e sua equipe avaliam perfis com potencial real de
                melhoria para identificar oportunidades de posicionamento,
                conteúdo e presença digital.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  ['653 mil', 'seguidores'],
                  ['20M+', 'views/mês'],
                  ['R$0', 'em tráfego'],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm"
                  >
                    <p className="font-heading text-3xl font-semibold text-gold">
                      {value}
                    </p>
                    <p className="mt-1 font-label text-xs font-semibold uppercase tracking-[0.18em] text-deep-foreground/62">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 max-w-2xl rounded-2xl border border-gold/25 bg-gold/10 p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-deep-foreground/76">
                    O envio da candidatura não garante vaga na mentoria. As
                    análises são direcionadas a médicos com aderência ao PPE e
                    potencial real de aplicação do método.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
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
                    <Input
                      label="E-mail"
                      type="email"
                      value={form.email}
                      onChange={(value) => updateField('email', value)}
                      placeholder="seuemail@exemplo.com"
                      required
                    />

                    <Input
                      label="WhatsApp"
                      value={form.whatsapp}
                      onChange={(value) => updateField('whatsapp', value)}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Especialidade médica"
                      value={form.specialty}
                      onChange={(value) => updateField('specialty', value)}
                      placeholder="Ex.: Cirurgia Plástica"
                      required
                    />

                    <Input
                      label="Cidade / Estado"
                      value={form.location}
                      onChange={(value) => updateField('location', value)}
                      placeholder="Ex.: São Paulo / SP"
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

                  <Textarea
                    label="Principal dificuldade hoje no Instagram"
                    value={form.difficulty}
                    onChange={(value) => updateField('difficulty', value)}
                    placeholder="Conte brevemente o que mais trava seu crescimento, posicionamento ou geração de pacientes."
                    required
                  />

                  <Textarea
                    label="Objetivo com a presença digital"
                    value={form.goal}
                    onChange={(value) => updateField('goal', value)}
                    placeholder="Ex.: aumentar autoridade, atrair pacientes particulares, melhorar conteúdo, crescer com consistência..."
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
                        Candidatar meu perfil para análise
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

      <section className="bg-background py-20 md:py-24">
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

function Textarea({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-label text-xs font-semibold uppercase tracking-[0.16em] text-deep-foreground/62">
        {label}
      </span>

      <textarea
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm leading-relaxed text-deep-foreground outline-none transition placeholder:text-deep-foreground/32 focus:border-gold/50 focus:bg-white/[0.075]"
      />
    </label>
  )
}