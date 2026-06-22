export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-heading text-lg font-semibold text-primary">
          Protocolo Presença Exponencial
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          Mentoria para Médicos | Dr. Juliano Plastina — Urologista
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Os resultados apresentados são reais, porém individuais, e dependem da
          aplicação do método por cada aluno. O envio da candidatura para análise
          de perfil não garante vaga na mentoria. Este produto não garante a
          obtenção de resultados de audiência, pacientes ou financeiros. Todo o
          conteúdo respeita as normas do Conselho Federal de Medicina.
        </p>

        <p className="mt-5 text-xs text-muted-foreground">
          Contato:{' '}
          <a
            href="mailto:ppe@metodoppe.com.br"
            className="font-medium underline underline-offset-2 transition hover:text-primary"
          >
            ppe@metodoppe.com.br
          </a>
        </p>

        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 Protocolo Presença Exponencial. Todos os direitos reservados.{' '}
          <a
            href="/termos"
            className="underline underline-offset-2 transition hover:text-primary"
          >
            Termos de uso
          </a>{' '}
          •{' '}
          <a
            href="/politica-de-privacidade"
            className="underline underline-offset-2 transition hover:text-primary"
          >
            Política de privacidade
          </a>
        </p>
      </div>
    </footer>
  )
}