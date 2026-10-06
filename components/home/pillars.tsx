import Image from 'next/image'

const pillars = [
  {
    n: '01',
    img: '/images/pillar-ricetta.png',
    alt: 'Mani di un pizzaiolo che impastano la pasta',
    title: 'La Ricetta Originale dei Maestri Pizzaioli Napoletani',
    text: 'Tramandata con cura di generazione in generazione, ogni fase è seguita a mano. Il risultato è un prodotto autentico, dal sapore inconfondibile.',
  },
  {
    n: '02',
    img: '/images/pillar-lievito.png',
    alt: 'Barattolo di lievito madre attivo',
    title: 'Il Lievito Madre che fa la differenza',
    text: 'Lievito madre vivo, curato ogni giorno. Dona leggerezza, digeribilità e un profumo che non si dimentica.',
  },
  {
    n: '03',
    img: '/images/pillar-artigianale.png',
    alt: 'Panuozzi lievitati davanti al forno a legna',
    title: 'Ciò che le Industrie NON Possono Fare',
    text: 'Zero conservanti, lavorazione artigianale e cottura a legna. Un risultato che nessuna produzione industriale può replicare.',
  },
]

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="pillars-title">
      <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand">
        Tre pilastri. Una differenza.
      </p>
      <h2
        id="pillars-title"
        className="mt-3 text-balance text-center font-serif text-3xl font-bold text-espresso md:text-5xl"
      >
        {"L'antica ricetta del Panuozzo napoletano"}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <article
            key={p.n}
            className="overflow-hidden rounded-2xl bg-card shadow-lg shadow-espresso/5 ring-1 ring-border/60"
          >
            <div className="relative aspect-[5/3]">
              <Image src={p.img} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              <span className="absolute left-0 top-0 rounded-br-xl bg-[#a3842f]/90 px-4 py-2 font-serif text-2xl font-bold text-cream">
                {p.n}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold leading-snug text-espresso">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
