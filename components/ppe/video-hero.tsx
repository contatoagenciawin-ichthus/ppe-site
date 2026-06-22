import { ArrowRight } from "lucide-react"

export function VideoHero() {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-deep text-deep-foreground">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.png"
        aria-hidden="true"
      >
        <source src="/drjuliano.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-deep/24" aria-hidden="true" />

      <div
        className="absolute inset-0 bg-gradient-to-r from-deep/96 via-deep/58 to-deep/10"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-deep/82 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(212,168,83,0.14)_0%,transparent_34%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <span className="font-label text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              Protocolo Presença Exponencial
            </span>
          </div>

          <div className="space-y-4 drop-shadow-[0_2px_18px_rgba(0,0,0,0.38)]">
            <p className="font-heading text-balance text-4xl font-medium leading-[1.02] tracking-tight text-deep-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Eu saí de 10 mil para
            </p>

            <p className="font-heading text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-gold sm:text-6xl md:text-7xl lg:text-8xl">
              653 mil seguidores
            </p>

            <p className="max-w-3xl font-heading text-balance text-3xl font-medium leading-[1.08] tracking-tight text-deep-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              atendendo, operando e{" "}
              <span className="font-semibold text-gold">
                sem gastar com tráfego.
              </span>
            </p>
          </div>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-deep-foreground/82 drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] sm:text-lg">
            O{" "}
            <span className="font-semibold text-deep-foreground">
              Protocolo Presença Exponencial
            </span>{" "}
            é a mentoria onde eu abro, na prática, o método que transformou o
            meu Instagram em autoridade, pacientes e faturamento.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="/analise-de-perfil"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-black/30"
            >
              Quero crescer no Instagram
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-deep-foreground/68 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Vagas limitadas por turma
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}