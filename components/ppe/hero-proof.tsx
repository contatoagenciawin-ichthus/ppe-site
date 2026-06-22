import Image from 'next/image'
import { ArrowRight, Stethoscope } from 'lucide-react'
import { Reveal } from './reveal'
import { CountUp } from './count-up'

export function HeroProof() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-1.5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Stethoscope className="h-4 w-4" />
              Mentoria para médicos
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl text-balance font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-5xl">
              O método por trás de um crescimento médico real, orgânico e
              consistente.
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Mais do que crescer em seguidores, o objetivo é transformar o
              perfil médico em uma estrutura de autoridade, confiança e geração
              de demanda para o consultório.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8">
              <a
                href="/analise-de-perfil"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Quero minha análise de perfil
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-4 text-sm text-muted-foreground">
                Mentoria com aulas ao vivo, hotseats e análises de conteúdo toda
                semana.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <HeroStat
              delay={150}
              value={<CountUp end={653} suffix=" mil" />}
              label="seguidores reais e orgânicos"
            />

            <HeroStat
              delay={250}
              accent
              value={<CountUp end={20} suffix=" mi" />}
              label="de visualizações por mês"
            />

            <HeroStat
              delay={350}
              value="R$ 0"
              label="investidos em tráfego pago"
            />

            <HeroStat
              delay={450}
              accent
              value={<CountUp end={17} suffix=" mi" />}
              label="de views em um único vídeo"
            />
          </div>
        </div>

        {/* Phone / proof visual */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[420px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[3rem] bg-primary/10 blur-3xl"
          />

          <div className="animate-float-soft relative mx-auto w-[310px] rounded-[2.8rem] border border-[#24476f] bg-[#081a33] p-[10px] shadow-[0_30px_80px_rgba(8,26,51,0.35)] sm:w-[340px]">
            {/* notch */}
            <div className="absolute left-1/2 top-2.5 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/85" />

            {/* screen */}
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.15rem] bg-[linear-gradient(180deg,#11294d_0%,#081a33_100%)]">
              {/* subtle grid / interface feel */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              {/* top fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/35 to-transparent" />

              {/* png transparente */}
              <div className="absolute inset-[14px] z-0">
                <Image
                  src="/reel-17milhoes-print.png"
                  alt="Conteúdo com 17 milhões de visualizações"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 310px, 340px"
                  priority
                />
              </div>

              {/* bottom overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#081a33] via-[#081a33]/70 to-transparent" />

              {/* footer metric */}
              <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4">
                <div className="rounded-2xl bg-[#081a33]/80 px-4 py-3 text-white shadow-lg ring-1 ring-white/10 backdrop-blur-md">
                  <p className="font-heading text-lg font-semibold">639 mil</p>
                  <p className="text-xs text-white/75">
                    visualizações visíveis no post
                  </p>
                </div>
              </div>
            </div>

            {/* inner ring */}
            <div className="pointer-events-none absolute inset-[10px] rounded-[2.15rem] ring-1 ring-white/6" />
          </div>

          {/* top badge */}
          <div className="animate-float-soft absolute left-0 top-10 rounded-2xl border border-accent/35 bg-[#081a33] px-5 py-4 text-white shadow-xl sm:-left-2">
            <p className="font-heading text-2xl font-semibold leading-none text-accent">
              17 milhões
            </p>
            <p className="mt-1 text-xs text-white/75">
              de visualizações neste vídeo
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HeroStat({
  value,
  label,
  accent,
  delay,
}: {
  value: React.ReactNode
  label: string
  accent?: boolean
  delay: number
}) {
  return (
    <Reveal
      delay={delay}
      className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-accent/50"
    >
      <p
        className={`font-heading text-3xl font-semibold leading-none ${
          accent ? 'text-accent-foreground' : 'text-primary'
        }`}
      >
        {value}
      </p>

      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </Reveal>
  )
}