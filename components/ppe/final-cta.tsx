import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      {/* vídeo de fundo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/final-cta-poster.jpg"
        aria-hidden="true"
      >
        <source src="/final-cta.mp4" type="video/mp4" />
      </video>

      {/* overlay principal na cor da marca */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-primary/82"
      />

      {/* overlay escuro para contraste */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/10 to-black/22"
      />

      {/* glow lateral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-white/6 blur-3xl"
      />

      {/* conteúdo */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Seus concorrentes — e os picaretas — já sabem disso tudo.
            <br />
            Só falta <span className="italic text-accent">você</span> se mexer.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/88">
            Em 2012, eu postava pra minha família. Hoje, milhões me veem por uma
            razão simples: eu nunca deixei outra pessoa falar por mim. A medicina
            você aprendeu na faculdade. A presença, você constrói agora — ou
            assiste outro médico construir no seu lugar.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10">
            <a
              href="#oferta"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-black/25"
            >
              Quero entrar no PPE agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-sm text-primary-foreground/78">
              6x de R$ 2.760 ou R$ 14.990 à vista • Garantia incondicional de 7
              dias
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}