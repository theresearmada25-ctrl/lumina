import { cn } from '@/lib/utils'

export function LogoBadge({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative flex aspect-square shrink-0 flex-col items-center justify-center overflow-hidden rounded-full bg-espresso text-center font-serif leading-[1.05] text-gold shadow-md ring-2 ring-espresso ring-offset-2 ring-offset-cream',
        className,
      )}
    >
      <span className="text-[0.2em] uppercase tracking-widest text-cream/80">Il Pagnuozzo</span>
      <span className="mt-[0.2em] text-[0.28em] italic text-cream">Antica Ricetta</span>
      <span className="mt-[0.1em] text-[0.4em] font-bold">Panuozzo</span>
      <span className="text-[0.4em] font-bold">Napoletano</span>
    </div>
  )
}
