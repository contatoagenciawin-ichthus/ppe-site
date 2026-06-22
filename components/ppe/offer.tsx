import { ArrowRight, Check, ClipboardCheck, ShieldCheck } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const items = [
  '6 meses de mentoria + acesso à Plataforma PPE',
  'Sessão de diagnóstico de perfil',
  'Relatório de Análise de Perfil',
  'Encontros semanais ao vivo + Hotseats + análises de conteúdo',
  'Grupo exclusivo de alunos',
  'Kit completo de prompts de IA do PPE',
]

const steps = [
  {
    title: 'Você envia seu perfil',
    text: 'Preencha a candidatura com seus dados profissionais, Instagram e principais objetivos.',
  },
  {
    title: 'A equipe avalia a aderência',
    text: 'Seu momento, posicionamento e potencial de aplicação do método são analisados.',
  },
  {
    title: 'Você recebe os próximos passos',
    text: 'Caso exista aderência ao PPE, a equipe entra em contato para conduzir a próxima etapa.',
  },
]

export function Offer() {
  return (
    <section
      id="oferta"
      className="relative overflow-hidden bg-deep py-24 text-deep-foreground md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl"
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

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow variant="gold" className="justify-center text-accent">
              Próximo passo
            </Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              A entrada no PPE começa por uma análise.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-deep-foreground/78">
              Antes de qualquer convite para a mentoria, seu perfil passa por uma
              avaliação estratégica. A ideia é entender se existe aderência entre
              seu momento atual, seus objetivos e o método.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-8">
              <span className="inline-flex rounded-full bg-accent px-4 py-1.5 font-label text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
                Mentoria com seleção
              </span>

              <h3 className="mt-6 font-heading text-2xl font-semibold leading-snug text-deep-foreground md:text-3xl">
                O PPE não é uma mentoria aberta para qualquer médico.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-deep-foreground/70 md:text-base">
                É para quem tem potencial real de aplicação, entende a
                importância da própria presença e está disposto a construir
                autoridade com consistência.
              </p>

              <div className="mt-7 rounded-2xl border border-gold/25 bg-gold/10 p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-deep-foreground/74">
                    O envio da candidatura não garante vaga. A análise serve para
                    identificar se o PPE faz sentido para o seu momento atual.
                  </p>
                </div>
              </div>

              <ul className="mt-7 space-y-3.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-sm leading-relaxed text-deep-foreground/84 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-[2rem] border border-gold/25 bg-[linear-gradient(135deg,rgba(212,168,83,0.13),rgba(255,255,255,0.045)_46%,rgba(26,107,82,0.13))] p-7 shadow-2xl shadow-gold/10 backdrop-blur-sm md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <ClipboardCheck className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-heading text-2xl font-semibold leading-snug text-deep-foreground md:text-3xl">
                Como funciona a candidatura
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-deep-foreground/70 md:text-base">
                O próximo passo não é comprar. É permitir que a equipe entenda o
                seu perfil e avalie se você está no momento certo para o PPE.
              </p>

              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-4 rounded-2xl border border-white/10 bg-deep/40 p-5 md:grid-cols-[44px_1fr] md:items-start"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 font-heading text-lg font-semibold text-gold">
                      {index + 1}
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-semibold text-deep-foreground">
                        {step.title}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-deep-foreground/66">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/analise-de-perfil"
                className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-black/30"
              >
                Candidatar meu perfil para análise
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-deep-foreground/66">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                As vagas são limitadas e passam por avaliação de aderência.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}