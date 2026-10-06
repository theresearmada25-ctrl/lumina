import Image from 'next/image'
import Link from 'next/link'

export function PercheHero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-1.5 text-xs font-bold text-cream">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          Il Pagnuozzo
        </span>
        <h1 className="mt-5 text-balance font-serif text-5xl font-bold leading-[1.05] text-espresso md:text-6xl">
          La differenza si sente al primo morso
        </h1>
        <p className="mt-5 text-muted-foreground">Lievito madre rinnovato da 70 anni.</p>
        <Link
          href="/a-chi-e-dedicato#form"
          className="mt-8 inline-flex rounded-lg bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
        >
          Richiedi il campione per il tuo locale
        </Link>
      </div>
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl shadow-espresso/10">
        <Image
          src="/images/perche-hero.png"
          alt="Panuozzo con pomodoro, mozzarella e basilico con il Vesuvio sullo sfondo"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
