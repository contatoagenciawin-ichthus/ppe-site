import { Check, X } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const yes = [
  'É médico ou profissional de saúde e quer atrair pacientes pelo Instagram',
  'Está cansado de depender de boca a boca, convênio e indicação',
  'Já tentou agência ou social media e o resultado não veio',
  'Tem rotina cheia, mas consegue separar alguns minutos por dia para gravar',
  'Quer construir uma marca pessoal que é SUA — não alugada de anúncio',
  'Entende que autoridade se constrói com método e constância',
]

const no = [
  'Procura fórmula mágica de crescer sem aparecer e sem produzir',
  'Quer terceirizar 100% do conteúdo e nunca gravar nada',
  'Não está disposto a manter constância por pelo menos 90 dias',
  'Quer atalhos que violem a ética médica ou as normas do CFM',
  'Acredita que comprar seguidor resolve alguma coisa',
]

export function Who() {
  return (
    <section className="bg-secondary py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <Eyebrow variant="gold" className="justify-center">
            Seja honesto com você
          </Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            O PPE é <span className="italic text-primary">para você</span>?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 text-left lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-primary/30 bg-primary/5 p-8 md:p-10">
            <h3 className="font-heading text-xl font-semibold text-primary">
              É para você, se...
            </h3>
            <ul className="mt-6 space-y-4">
              {yes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-heading text-xl font-semibold text-muted-foreground">
              NÃO é para você, se...
            </h3>
            <ul className="mt-6 space-y-4">
              {no.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
