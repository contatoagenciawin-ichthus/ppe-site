import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { Eyebrow } from '@/components/ppe/eyebrow'
import { Reveal } from '@/components/ppe/reveal'

const sections = [
  {
    title: '1. Quem somos',
    text: [
      'Esta Política de Privacidade se aplica ao site do Protocolo Presença Exponencial, acessível pelo domínio metodoppe.com.br.',
      'O site tem como finalidade apresentar a mentoria PPE, receber candidaturas para análise estratégica de perfil médico e permitir o contato entre interessados e a equipe responsável.',
    ],
  },
  {
    title: '2. Quais dados coletamos',
    text: [
      'Ao preencher o formulário de candidatura para análise de perfil, podemos coletar dados como nome completo, e-mail, WhatsApp, especialidade médica, cidade/estado, perfil profissional no Instagram, principal dificuldade relatada e objetivo com a presença digital.',
      'Também podemos coletar informações técnicas de navegação, como endereço IP, data e horário de acesso, dispositivo utilizado e páginas acessadas, especialmente para segurança, métricas e melhoria da experiência.',
    ],
  },
  {
    title: '3. Para que usamos seus dados',
    text: [
      'Os dados fornecidos são utilizados para receber, organizar e avaliar candidaturas para a Análise Estratégica de Perfil Médico.',
      'Também podem ser usados para contato pelo WhatsApp, envio de e-mails relacionados ao PPE, comunicação sobre próximos passos, suporte, informações sobre a mentoria e melhoria dos processos internos.',
    ],
  },
  {
    title: '4. Base legal e consentimento',
    text: [
      'Ao enviar o formulário, você declara estar ciente de que seus dados serão utilizados para análise da candidatura e contato da equipe PPE.',
      'O envio da candidatura não garante vaga na mentoria, convite comercial, análise individual completa ou qualquer obrigação de aceite por parte da equipe.',
    ],
  },
  {
    title: '5. Compartilhamento de dados',
    text: [
      'Os dados podem ser acessados pela equipe responsável pelo PPE e por fornecedores técnicos necessários ao funcionamento do site, envio de e-mails, hospedagem, automações, formulários, métricas e comunicação.',
      'Não vendemos seus dados pessoais. O compartilhamento ocorre apenas quando necessário para operação do funil, cumprimento de obrigações legais ou execução de serviços relacionados ao PPE.',
    ],
  },
  {
    title: '6. Ferramentas utilizadas',
    text: [
      'O site pode utilizar ferramentas de hospedagem, envio de e-mails, análise de métricas, automação, formulários e comunicação, incluindo serviços como Vercel, Resend, Titan/HostGator, WhatsApp e outras ferramentas operacionais.',
      'Essas ferramentas podem tratar dados conforme suas próprias políticas de privacidade e medidas de segurança.',
    ],
  },
  {
    title: '7. Segurança dos dados',
    text: [
      'Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados enviados pelo site.',
      'Apesar disso, nenhum sistema digital é absolutamente imune a riscos. Por isso, recomendamos que o usuário não envie informações sensíveis desnecessárias pelo formulário.',
    ],
  },
  {
    title: '8. Seus direitos',
    text: [
      'Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados pessoais, bem como pedir informações sobre o tratamento realizado.',
      'Para exercer esses direitos, entre em contato pelo e-mail ppe@metodoppe.com.br.',
    ],
  },
  {
    title: '9. Retenção dos dados',
    text: [
      'Os dados poderão ser mantidos pelo tempo necessário para avaliação da candidatura, relacionamento com o interessado, cumprimento de obrigações legais, prevenção de fraudes, histórico operacional e comunicação relacionada ao PPE.',
    ],
  },
  {
    title: '10. Alterações nesta política',
    text: [
      'Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças no site, no funil, nas ferramentas utilizadas ou em exigências legais.',
      'A versão mais recente estará sempre disponível nesta página.',
    ],
  },
  {
    title: '11. Contato',
    text: [
      'Para dúvidas, solicitações ou informações sobre privacidade e tratamento de dados, entre em contato pelo e-mail ppe@metodoppe.com.br.',
    ],
  },
]

export default function PoliticaDePrivacidadePage() {
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
              <ShieldCheck className="h-7 w-7" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow className="mt-8 text-gold">Privacidade e dados</Eyebrow>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Política de Privacidade
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-deep-foreground/74">
              Esta página explica como os dados enviados no site do Protocolo
              Presença Exponencial são coletados, utilizados e protegidos.
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

            <div className="mt-12 rounded-2xl border border-gold/25 bg-gold/10 p-5">
              <p className="text-sm leading-relaxed text-foreground/74">
                Esta política é uma base operacional para o funil do PPE. Para
                uso jurídico definitivo, recomenda-se revisão por profissional
                habilitado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}