import Image from 'next/image'
import {
  BadgeCheck,
  Bot,
  CalendarCheck,
  FileText,
  MessageCircle,
  MonitorPlay,
  SearchCheck,
  Users,
} from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const items = [
  {
    icon: MonitorPlay,
    title: '6 meses de acesso à mentoria + Plataforma online PPE',
    text: 'Todas as aulas, relatórios estratégicos e materiais do método, organizados para você assistir e aplicar no seu ritmo.',
  },
  {
    icon: SearchCheck,
    title: 'Sessão de diagnóstico de perfil — 60 minutos',
    text: 'Uma reunião inicial onde eu analiso o seu Instagram, identifico o que está travando o crescimento e traço a direção estratégica do seu perfil.',
  },
  {
    icon: FileText,
    title: 'Relatório de Análise de Perfil',
    text: 'Documento com o raio-X da sua conta e as prioridades de correção, para você começar com um plano claro.',
  },
  {
    icon: CalendarCheck,
    title: 'Encontros semanais ao vivo + Hotseats',
    text: 'Aulas ao vivo toda semana onde eu respondo as perguntas dos alunos e analiso conteúdos do grupo — você aprende com o seu caso e com o caso dos colegas.',
  },
  {
    icon: MessageCircle,
    title: 'Grupo exclusivo de discussão',
    text: 'Comunidade de médicos aplicando o mesmo método, para tirar dúvidas, compartilhar resultados e manter a constância.',
  },
  {
    icon: Bot,
    title: 'Kit de prompts de IA do PPE',
    text: 'Arsenal completo de prompts para roteiros, legendas com SEO, ideias de conteúdo e edição — pronto para copiar e usar.',
  },
]

export function Deliverables() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground md:py-28">
      {/* fundos premium */}
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
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center text-gold">A entrega</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-deep-foreground md:text-6xl">
              O que você vai{' '}
              <span className="text-gold">receber</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ol className="grid gap-4">
            {items.map((item, i) => {
              const Icon = item.icon

              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 80}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.055]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />

                  <div className="flex gap-4">
                    <div className="pt-1">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm font-bold text-gold">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        <h3 className="font-heading text-lg font-semibold leading-snug text-deep-foreground md:text-xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-deep-foreground/68">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ol>

          <div className="space-y-5 lg:sticky lg:top-24">
            <Reveal
              delay={120}
              className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-sm"
            >
              <div className="relative bg-[#08152b] p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                  <Image
                    src="/mentor.png"
                    alt="Print real de conteúdo do Dr. Juliano Plastina"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-deep/90 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-gold/30 bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-md">
                    Print real
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={200}
              className="relative overflow-hidden rounded-[2rem] border border-gold/45 bg-[linear-gradient(135deg,rgba(212,168,83,0.12),rgba(255,255,255,0.04)_45%,rgba(26,107,82,0.14))] p-7 shadow-2xl shadow-gold/10 backdrop-blur-sm"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/18 blur-3xl"
              />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <BadgeCheck className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-semibold leading-snug text-deep-foreground">
                  Isso não é um curso gravado que você compra e abandona.
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-deep-foreground/72">
                  É uma mentoria em grupo, com aulas ao vivo toda semana. Os
                  alunos produzem, trazem os conteúdos e as dúvidas, e eu
                  analiso e respondo nos encontros e hotseats — todo mundo evolui
                  junto, semana após semana.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="font-heading text-3xl font-semibold text-gold">
                      6
                    </p>
                    <p className="mt-1 text-sm text-deep-foreground/66">
                      meses de mentoria
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="font-heading text-3xl font-semibold text-gold">
                      Toda
                    </p>
                    <p className="mt-1 text-sm text-deep-foreground/66">
                      semana ao vivo
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={260}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Users className="h-4 w-4" />
                </div>

                <p className="text-sm leading-relaxed text-deep-foreground/68">
                  A entrega não é só conteúdo. É acompanhamento, correção de
                  rota e aplicação prática no perfil de cada médico.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}