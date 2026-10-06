import { Star, Wheat } from 'lucide-react'

const cards = [
  {
    Icon: Wheat,
    iconClass: 'bg-[#e4efd9] text-[#4c7a2a]',
    title: 'Il dettaglio tecnico',
    text: 'Le 48 ore di lunga fermentazione naturale con lieviti e lattobacilli selezionati donano al pane un aroma intenso, una consistenza piacevole e una migliore conservazione.',
  },
  {
    Icon: Star,
    iconClass: 'bg-[#f6dccf] text-brand-dark',
    title: 'Cosa significa per il tuo locale',
    text: 'Un prodotto più leggero e digeribile, che valorizza la qualità degli ingredienti e giustifica un posizionamento di prezzo premium.',
  },
]

export function LievitoSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12" aria-labelledby="lievito-title">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-[#e2c9b4] bg-[#faf3ea] px-4 py-1.5 text-xs font-semibold text-brand-dark">
          Il nostro segreto principale
        </span>
        <h2
          id="lievito-title"
          className="mx-auto mt-5 max-w-2xl text-balance font-serif text-3xl font-bold text-espresso md:text-4xl"
        >
          Il lievito madre: cosa significa per il tuo cliente.
        </h2>
        <p className="mt-10 font-serif text-2xl font-semibold text-[#a4501d] md:text-3xl">
          48 ore <span aria-hidden="true" className="mx-2">·</span> lievitazione naturale
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {cards.map(({ Icon, iconClass, title, text }) => (
          <article key={title} className="rounded-2xl border border-[#e8d9c6] bg-[#faf3ea] p-6 md:p-7">
            <span className={`flex size-8 items-center justify-center rounded-md ${iconClass}`}>
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-sm font-bold text-espresso">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
