import {
  Brain,
  Clapperboard,
  PenLine,
  Smartphone,
  Bot,
  TrendingUp,
  Lightbulb,
  Scale,
} from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const funnel = [
  {
    phase: 'Fase 01 — Topo',
    title: 'Crescer',
    text: 'Reels e carrosséis que param o scroll, dominam o algoritmo de 2026 (tempo de tela + retenção) e transformam desconhecidos em seguidores — aos milhares.',
  },
  {
    phase: 'Fase 02 — Meio',
    title: 'Nutrir',
    text: 'Conteúdo de autoridade que mostra o seu raciocínio médico, gera confiança e faz o seguidor pensar: "é com esse profissional que eu quero me tratar".',
  },
  {
    phase: 'Fase 03 — Fundo',
    title: 'Vender',
    text: 'Stories e CTAs estratégicos que convertem seguidor em paciente no consultório — com ética, sem parecer propaganda e dentro das normas do CFM.',
  },
]

const modules = [
  {
    icon: Brain,
    title: 'O algoritmo de 2026, sem mistério',
    text: 'Tempo de tela, taxa de reels pulados, o fluxo de validação que decide se seu vídeo viraliza ou flopa — e o protocolo de 7 dias para "treinar" o Instagram a entregar seu conteúdo.',
  },
  {
    icon: Clapperboard,
    title: 'Reels que geram seguidores em massa',
    text: 'Os formatos exatos dos meus vídeos de milhões de views: talking head, Reel de 7 segundos, listas sobre b-roll, ganchos no segundo zero. Gravado no celular, editado em minutos.',
  },
  {
    icon: PenLine,
    title: 'Roteiros com o modelo AIDA',
    text: 'Atenção, Interesse, Desejo e Ação: a estrutura linha a linha para prender o público do início ao fim, sem "mediquês" e sem perder a profundidade técnica.',
  },
  {
    icon: Smartphone,
    title: 'Stories que convertem em consulta',
    text: 'Os 3 pilares (valor, engajamento, conexão), os 7 tipos de story que todo médico deve fazer e a hierarquia de interações que faz o Instagram trabalhar a seu favor.',
  },
  {
    icon: Bot,
    title: 'IA como sua equipe de produção',
    text: 'Kit completo de prompts prontos para roteiro, legenda, SEO e edição — a IA te ajuda a produzir 10x mais rápido, sem nunca substituir a SUA voz.',
  },
  {
    icon: TrendingUp,
    title: 'Estratégia por marco de seguidores',
    text: 'A distribuição exata de conteúdo para cada fase: de menos de 10k até passar dos 500k. Você sempre sabe o que postar, quanto postar e com qual objetivo.',
  },
  {
    icon: Lightbulb,
    title: 'Banco de ideias infinito',
    text: 'Pauta quente, perguntas do consultório, histórias clínicas, reciclagem e adaptação de nicho: você nunca mais vai travar sem saber o que postar.',
  },
  {
    icon: Scale,
    title: 'Tudo dentro das normas do CFM',
    text: 'Como criar conteúdo magnético sem riscos éticos: o que pode, o que não pode e como falar de temas sensíveis com segurança jurídica e profissional.',
  },
]

export function Method() {
  return (
    <section className="bg-background py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <Eyebrow variant="gold" className="justify-center">
              O método
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Como funciona o{' '}
              <span className="italic text-primary">
                Protocolo Presença Exponencial
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              O Instagram não premia quem é &quot;bom&quot;. Ele recompensa quem
              sabe falar com o público e tem constância. O PPE é a engenharia por
              trás disso, organizada em um funil simples.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {funnel.map((step, i) => (
            <Reveal
              key={i}
              delay={i * 120}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1.5 ${
                  i === 2 ? 'bg-accent' : 'bg-primary'
                }`}
              />
              <p
                className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                  i === 2 ? 'text-accent-foreground' : 'text-primary'
                }`}
              >
                {step.phase}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-24 text-center font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            O que você vai dominar dentro da mentoria
          </h3>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {modules.map((mod, i) => {
            const Icon = mod.icon
            return (
              <Reveal
                key={i}
                delay={(i % 2) * 100}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card/60 p-7 transition-all hover:translate-x-1.5 hover:border-accent/50 hover:bg-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {mod.title}
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">
                    {mod.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
