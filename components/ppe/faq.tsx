'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Eu não tenho tempo. Vou conseguir aplicar?',
    a: 'Eu opero, atendo consultório e produzo todo o meu conteúdo. O método foi desenhado exatamente para a rotina médica: vídeos gravados em 20 minutos no próprio consultório, editados em 30 minutos no celular, com a IA fazendo o trabalho pesado de roteiro e legenda. Se eu consigo, você consegue.',
  },
  {
    q: 'Já gastei com agência e não funcionou. Por que isso seria diferente?',
    a: 'Justamente por isso. Eu queimei dinheiro com 5 social medias e agências por anos e fiquei estagnado em 10 mil seguidores. Agência produz conteúdo genérico — e ninguém entra no Instagram pra ver propaganda. No PPE, VOCÊ assume o controle da sua autoridade, com um método validado por 653 mil seguidores. Terceirizar autoridade é como terceirizar cirurgia.',
  },
  {
    q: 'Como funciona o acompanhamento? É individual?',
    a: 'Você começa com uma sessão individual de diagnóstico de 60 minutos e recebe o seu Relatório de Análise de Perfil. A partir daí, o acompanhamento acontece nos encontros semanais ao vivo e hotseats, onde eu respondo as perguntas dos alunos e analiso os conteúdos do grupo — você evolui com o seu caso e aprende com o caso dos colegas, que enfrentam os mesmos desafios que você.',
  },
  {
    q: 'Tenho vergonha de aparecer / não sei falar pra câmera.',
    a: 'Quase todo aluno chega assim — e eu também era travado. Por isso o método começa com formatos de baixa exposição (listas sobre vídeo, Reel de 7 segundos do cotidiano sem olhar pra câmera) e evolui gradualmente. Nos hotseats você ainda vê análises de conteúdo na prática, o que acelera muito a sua evolução.',
  },
  {
    q: 'Isso fere alguma norma do CFM?',
    a: 'Não — e essa é uma das bases do PPE. Todo o método foi construído dentro das normas do Conselho Federal de Medicina: o que pode, o que não pode, como abordar temas sensíveis e como divulgar o seu trabalho com ética. Você cresce com segurança jurídica e profissional.',
  },
  {
    q: 'Funciona para a minha especialidade?',
    a: 'O método é o mesmo para qualquer especialidade: entender o algoritmo, falar a língua do paciente e seguir o funil Crescer → Nutrir → Vender. Eu sou urologista — uma área "difícil" de comunicar — e cheguei a 653 mil seguidores. Já temos neurocirurgião saindo de 740 para 14,7 mil seguidores com o mesmo protocolo. No diagnóstico inicial, a estratégia é adaptada ao SEU nicho.',
  },
  {
    q: 'Preciso investir em tráfego pago ou equipamento?',
    a: 'Não. Todo o meu crescimento foi orgânico: R$ 0 em anúncio, 0,0% das minhas visualizações vêm de tráfego pago. E o equipamento é o celular que você já tem no bolso. O único investimento real é a mentoria e a sua constância.',
  },
  {
    q: 'Em quanto tempo vejo resultado?',
    a: 'Depende do seu ponto de partida e da sua execução — e eu não vou te prometer milagre, porque promessa de resultado garantido é coisa de picareta. O que eu te entrego é o método validado, os encontros semanais e a correção de rota constante. Alunos que aplicam com constância tiveram vídeos viralizando com mais de 200 mil visualizações já nas primeiras semanas.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-secondary py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Reveal>
            <Eyebrow variant="gold" className="justify-center">
              Dúvidas frequentes
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Perguntas que todo médico me faz
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal
                key={i}
                delay={(i % 4) * 60}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-card transition-colors',
                  isOpen ? 'border-accent/50' : 'border-border',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-heading text-lg font-medium text-foreground">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
