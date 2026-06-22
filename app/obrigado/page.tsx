import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react'
import { Eyebrow } from '@/components/ppe/eyebrow'
import { Reveal } from '@/components/ppe/reveal'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''

const whatsappMessage =
  'Olá, acabei de enviar minha candidatura para a Análise Estratégica de Perfil Médico do PPE. Gostaria de confirmar o recebimento e aguardar os próximos passos.'

const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : '#'

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-deep py-24 text-deep-foreground">
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

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold/12 text-gold shadow-2xl shadow-gold/10">
              <CheckCircle2 className="h-8 w-8" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow className="mt-8 justify-center text-gold">
              Candidatura recebida
            </Eyebrow>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Seu perfil foi enviado para análise.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-deep-foreground/76">
              A equipe PPE recebeu suas informações e irá avaliar se há aderência
              entre o seu momento atual, seu perfil médico e a proposta da
              mentoria.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-gold" />

                <h2 className="mt-4 font-heading text-xl font-semibold text-deep-foreground">
                  Próximos passos
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-deep-foreground/68">
                  Caso o perfil tenha aderência ao PPE, a equipe entrará em
                  contato pelo WhatsApp com as orientações.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
                <MessageCircle className="h-6 w-6 text-gold" />

                <h2 className="mt-4 font-heading text-xl font-semibold text-deep-foreground">
                  Quer confirmar?
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-deep-foreground/68">
                  Você também pode enviar uma mensagem para a equipe informando
                  que acabou de preencher sua candidatura.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90"
              >
                Falar com a equipe no WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-8 text-base font-semibold text-deep-foreground/82 transition-all hover:border-gold/40 hover:text-gold"
              >
                Voltar para a mentoria
              </a>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-deep-foreground/50">
              O envio da candidatura não garante vaga na mentoria. A análise é
              feita com base nas informações enviadas e na aderência ao PPE.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}