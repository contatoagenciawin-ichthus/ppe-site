import Image from 'next/image'
import { ArrowRight, BadgeCheck, Quote } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const proofCards = [
  {
    image: '/social-felipe-print.png',
    name: 'Felipe Rodrigues',
    text: 'Primeira viralizada: 215 mil visualizações e 122 mil contas alcançadas.',
    highlight: '215 mil visualizações',
  },
  {
    image: '/social-gabriel-insights.png',
    name: 'Gabriel Chaves',
    text: '“Viralizou”: 231.321 views, 99,4% de não seguidores alcançados.',
    highlight: '231.321 views',
  },
  {
    image: '/social-grupo-print.png',
    name: 'Grupo PPE',
    text: 'Aluno dispensou a equipe de marketing depois de viralizar com o próprio conteúdo.',
    highlight: 'marketing dispensado',
  },
]

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground md:py-28">
      {/* glows */}
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

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <Eyebrow className="justify-center text-gold">
            Quem já está dentro
          </Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance font-heading text-4xl font-semibold tracking-tight text-deep-foreground md:text-6xl">
            Alunos do PPE,{' '}
            <span className="text-[#7ec0ff]">resultados de verdade</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-deep-foreground/74">
            Não sou só eu. Olha o que acontece quando um médico aplica o método
            — prints reais, direto do grupo da mentoria.
          </p>
        </Reveal>

        {/* before / after com prints reais */}
        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
              <ProfileProofCard
                label="Antes"
                value="740"
                sublabel="seguidores"
                image="/social-gabriel-antes.png"
                muted
              />

              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold shadow-lg shadow-gold/10">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              <ProfileProofCard
                label="Depois"
                value="14,7 mil"
                sublabel="seguidores"
                image="/social-gabriel-depois.png"
              />
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-pretty leading-relaxed text-deep-foreground/76">
              Dr. Gabriel Chaves, neurocirurgião — de{' '}
              <strong className="font-semibold text-gold">
                740 para 14,7 mil seguidores
              </strong>{' '}
              aplicando o Protocolo, com vídeo viralizando em{' '}
              <strong className="font-semibold text-gold">
                231 mil visualizações
              </strong>
              .
            </p>
          </div>
        </Reveal>

        {/* prints de alunos */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {proofCards.map((card, i) => (
            <Reveal
              key={card.name}
              delay={i * 120}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] text-left shadow-2xl shadow-black/15 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.055]"
            >
              <div className="relative bg-[#08152b] p-3">
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <Image
                    src={card.image}
                    alt={`Prova de resultado: ${card.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep/90 to-transparent" />
                </div>
              </div>

              <div className="p-6">
                <Quote className="h-7 w-7 text-gold" />

                <p className="mt-4 text-sm leading-relaxed text-deep-foreground/76">
                  {card.text}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="font-heading text-base font-semibold text-deep-foreground">
                    {card.name}
                  </p>

                  <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
                    {card.highlight}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* fechamento */}
        <Reveal delay={220}>
          <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-gold/30 bg-[linear-gradient(135deg,rgba(212,168,83,0.10),rgba(255,255,255,0.04)_48%,rgba(26,107,82,0.12))] p-7 text-center shadow-2xl shadow-gold/10 backdrop-blur-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <BadgeCheck className="h-5 w-5" />
            </div>

            <p className="mx-auto mt-5 max-w-3xl text-pretty font-heading text-2xl font-semibold leading-snug text-deep-foreground md:text-3xl">
              O método não depende de fama prévia. Depende de direção, prática,
              correção de rota e constância.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-deep-foreground/68">
              Quando o médico aprende a transformar a própria experiência em
              conteúdo estratégico, o Instagram deixa de ser vitrine e passa a
              trabalhar como estrutura de autoridade.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProfileProofCard({
  label,
  value,
  sublabel,
  image,
  muted,
}: {
  label: string
  value: string
  sublabel: string
  image: string
  muted?: boolean
}) {
  return (
    <div
      className={[
        'overflow-hidden rounded-[2rem] border p-2.5 shadow-2xl backdrop-blur-sm',
        muted
          ? 'border-white/10 bg-white/[0.035] shadow-black/10'
          : 'border-gold/40 bg-white/[0.055] shadow-gold/10',
      ].join(' ')}
    >
      <div className="relative aspect-[32/11] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <Image
          src={image}
          alt={`${label}: ${value} ${sublabel}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 520px"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-deep/70 to-transparent" />
      </div>

      <div className="px-4 py-4 text-center">
        <p
          className={[
            'font-mono text-xs font-semibold uppercase tracking-[0.22em]',
            muted ? 'text-deep-foreground/58' : 'text-gold',
          ].join(' ')}
        >
          {label}
        </p>

        <p
          className={[
            'mt-2 font-heading text-4xl font-semibold leading-none',
            muted ? 'text-deep-foreground/72' : 'text-gold',
          ].join(' ')}
        >
          {value}
        </p>

        <p className="mt-1 text-sm text-deep-foreground/62">{sublabel}</p>
      </div>
    </div>
  )
}