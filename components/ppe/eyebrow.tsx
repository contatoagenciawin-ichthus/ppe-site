import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  variant = 'primary',
  className,
}: {
  children: React.ReactNode
  variant?: 'primary' | 'gold'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]',
        variant === 'primary' ? 'text-primary' : 'text-accent-foreground',
        className,
      )}
    >
      <span
        className={cn(
          'h-px w-8',
          variant === 'primary' ? 'bg-primary/60' : 'bg-accent',
        )}
      />
      {children}
    </span>
  )
}
