import { ArrowRight, Check } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const items = [
  '6 meses de mentoria + acesso à Plataforma PPE',
  'Sessão de diagnóstico de perfil (60 min)',
  'Relatório de Análise de Perfil',
  'Encontros semanais ao vivo + Hotseats + análises de conteúdo',
  'Grupo exclusivo de alunos',
  'Kit completo de prompts de IA do PPE',
]

export function Offer() {
  return (
    <section id="oferta" className="bg-deep py-24 text-deep-foreground md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow variant="gold" className="justify-center text-accent">
            Sua decisão
          </Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Garanta sua vaga no{' '}
            <span className="italic text-accent">
              Protocolo Presença Exponencial
            </span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-deep-foreground/80">
            Turmas reduzidas de propósito: cada perfil passa por diagnóstico
            individual no início, e isso não escala para centenas de alunos de
            uma vez.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-deep-foreground/15 bg-deep-foreground/5 p-8 text-left backdrop-blur-sm md:p-10">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
              Mentoria com vagas limitadas
            </span>

            <ul className="mt-7 space-y-3.5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-deep-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-deep-foreground/15 pt-7">
              <p className="text-sm text-deep-foreground/70">
                Quanto você vai investir pra nunca mais depender de marketing:
              </p>
              <p className="mt-2 font-heading text-4xl font-semibold md:text-5xl">
                <span className="text-xl text-accent">6x de</span> R$ 2.760
              </p>
              <p className="mt-2 font-semibold text-accent">
                ou R$ 14.990 à vista
              </p>
              <p className="mt-3 text-sm text-deep-foreground/70">
                Menos do que 3 meses de agência + tráfego pago (R$ 5.500/mês) —
                por uma habilidade que fica com você pra sempre.
              </p>
            </div>

            <a
              href="#"
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Quero minha vaga agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-deep-foreground/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Vagas limitadas por turma
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
