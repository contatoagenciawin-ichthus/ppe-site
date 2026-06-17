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
          aplicação do método por cada aluno. Este produto não garante a obtenção
          de resultados de audiência ou financeiros. Todo o conteúdo respeita as
          normas do Conselho Federal de Medicina.
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 Protocolo Presença Exponencial. Todos os direitos reservados.{' '}
          <a href="#" className="underline underline-offset-2 hover:text-primary">
            Termos de uso
          </a>{' '}
          •{' '}
          <a href="#" className="underline underline-offset-2 hover:text-primary">
            Política de privacidade
          </a>
        </p>
      </div>
    </footer>
  )
}
