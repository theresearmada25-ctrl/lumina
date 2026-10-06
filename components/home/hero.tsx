import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

const bullets = [
  '48h di lievitazione naturale con lievito madre',
  'Zero conservanti e artificiali',
  'Prodotto originario pronto da forno',
]

const stats = [
  { value: '500+', label: 'locali in tutta Italia hanno scelto' },
  { value: '70 anni', label: 'di tradizione nostra' },
  { value: '0', label: 'conservanti artificiali' },
]

const targets = ['Pub & Birrerie', 'Pizzerie', 'Ristoranti', 'Paninoteche & Arrosticini', 'Hotel & B&B']

export function HomeHero() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 text-center md:pt-14">
        <h1 className="font-serif text-6xl font-bold tracking-tight text-brand md:text-8xl">
          Il Pagnuozzo
        </h1>
        <p className="mt-4 text-balance font-serif text-2xl font-bold text-espresso md:text-4xl">
          {"L'Autentico Panuozzo Napoletano per il tuo locale"}
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-1.5">
              <Check className="size-4 text-brand" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        <div className="relative mx-auto mt-8 aspect-[3/1] w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-espresso/15">
          <Image
            src="/images/hero-panuozzo.png"
            alt="Panuozzo napoletano farcito con prosciutto crudo, mozzarella, pomodorini e rucola su tagliere"
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        <Link
          href="/a-chi-e-dedicato#form"
          className="mt-6 inline-flex rounded-full bg-brand px-7 py-3 font-bold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
        >
          Richiedi il tuo campione gratuito
        </Link>

        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 pb-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col-reverse items-center">
              <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
              <dd className="font-serif text-4xl font-bold text-espresso">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="border-y border-border">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-5 py-5 text-sm text-espresso">
          <li className="font-bold uppercase tracking-wider text-brand">Serviamo:</li>
          {targets.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
