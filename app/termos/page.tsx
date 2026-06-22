import Link from 'next/link'
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react'
import { Eyebrow } from '@/components/ppe/eyebrow'
import { Reveal } from '@/components/ppe/reveal'

const sections = [
  {
    title: '1. Aceitação dos termos',
    text: [
      'Ao acessar o site metodoppe.com.br, preencher formulários, solicitar análise de perfil ou interagir com os canais do Protocolo Presença Exponencial, você declara estar ciente e de acordo com estes Termos de Uso.',
      'Caso não concorde com estes termos, recomendamos não utilizar o site ou enviar informações pelos formulários disponíveis.',
    ],
  },
  {
    title: '2. Sobre o Protocolo Presença Exponencial',
    text: [
      'O Protocolo Presença Exponencial é uma mentoria voltada a médicos que desejam desenvolver presença digital, posicionamento, autoridade e comunicação estratégica.',
      'As informações apresentadas no site possuem caráter educacional, informativo e comercial, não constituindo garantia de resultado individual.',
    ],
  },
  {
    title: '3. Candidatura para análise de perfil',
    text: [
      'O formulário de Análise Estratégica de Perfil Médico tem como objetivo coletar informações para que a equipe avalie aderência, momento profissional e potencial de aplicação do método.',
      'O envio da candidatura não garante vaga na mentoria, análise individual completa, diagnóstico definitivo, contato comercial obrigatório ou aceite automático no PPE.',
      'A equipe poderá entrar em contato para solicitar informações adicionais, esclarecer pontos da candidatura ou apresentar próximos passos.',
    ],
  },
  {
    title: '4. Seleção de participantes',
    text: [
      'A mentoria pode adotar critérios próprios de seleção, considerando aderência ao método, perfil profissional, momento de carreira, disponibilidade, intenção de aplicação e outros fatores estratégicos.',
      'A equipe se reserva o direito de não avançar com candidaturas que não estejam alinhadas à proposta do PPE.',
    ],
  },
  {
    title: '5. Ausência de promessa de resultado',
    text: [
      'Resultados mencionados no site, como crescimento de seguidores, visualizações, autoridade, pacientes, faturamento ou desempenho em redes sociais, representam experiências específicas e não garantem que todos os participantes terão resultados semelhantes.',
      'O desempenho individual depende de múltiplos fatores, incluindo execução, consistência, nicho, posicionamento, contexto de mercado, comunicação, disponibilidade e decisões profissionais de cada participante.',
    ],
  },
  {
    title: '6. Responsabilidade do usuário',
    text: [
      'O usuário é responsável pela veracidade das informações enviadas no formulário e pela atualização dos seus dados de contato.',
      'Também é responsável por avaliar, com autonomia, se a mentoria é adequada ao seu momento profissional e às suas necessidades.',
    ],
  },
  {
    title: '7. Comunicação e contato',
    text: [
      'Ao enviar uma candidatura, o usuário autoriza a equipe PPE a entrar em contato por e-mail, WhatsApp ou outros meios informados no formulário.',
      'Esse contato poderá envolver confirmação de recebimento, solicitação de informações complementares, envio de orientações, apresentação de próximos passos e comunicações relacionadas ao PPE.',
    ],
  },
  {
    title: '8. Propriedade intelectual',
    text: [
      'Todo o conteúdo do site, incluindo textos, estrutura, identidade visual, vídeos, materiais, método, marcas, imagens, páginas e elementos de comunicação, pertence aos seus respectivos titulares e não pode ser copiado, reproduzido ou distribuído sem autorização.',
      'O acesso ao site ou à mentoria não transfere qualquer direito de propriedade intelectual ao usuário.',
    ],
  },
  {
    title: '9. Uso adequado do site',
    text: [
      'É proibido utilizar o site para fins ilícitos, envio de informações falsas, tentativa de invasão, coleta indevida de dados, automações abusivas ou qualquer prática que comprometa a segurança e a operação do serviço.',
    ],
  },
  {
    title: '10. Alterações nos termos',
    text: [
      'Estes Termos de Uso podem ser alterados a qualquer momento para refletir mudanças no site, no funil, na mentoria, nas ferramentas utilizadas ou em exigências legais.',
      'A versão mais recente estará sempre disponível nesta página.',
    ],
  },
  {
    title: '11. Contato',
    text: [
      'Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail ppe@metodoppe.com.br.',
    ],
  },
]

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-deep py-20 text-deep-foreground md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/24 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-gold/14 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-deep-foreground/70 transition hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o site
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/12 text-gold">
              <FileText className="h-7 w-7" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow className="mt-8 text-gold">Termos e candidatura</Eyebrow>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Termos de Uso
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-deep-foreground/74">
              Estes termos explicam as condições de uso do site, da candidatura
              para análise de perfil e das comunicações relacionadas ao PPE.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-xl shadow-primary/5 md:p-10">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Última atualização: junho de 2026
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4">
                    {section.text.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-relaxed text-muted-foreground md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-[auto_1fr] md:items-start rounded-2xl border border-gold/25 bg-gold/10 p-5">
              <ShieldCheck className="h-6 w-6 text-primary" />

              <p className="text-sm leading-relaxed text-foreground/74">
                Este documento é uma base operacional para uso do site e do funil
                PPE. Para uso jurídico definitivo, recomenda-se revisão por
                profissional habilitado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}