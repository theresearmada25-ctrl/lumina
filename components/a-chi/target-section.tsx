import Image from 'next/image'
import Link from 'next/link'
import { Beer, ShieldOff, Sandwich, Star, Truck, Utensils, Leaf } from 'lucide-react'

const targets = [
  {
    Icon: Beer,
    title: 'Pub e Birrerie',
    text: 'Un panino perfetto da abbinare alla birra, per alzare lo scontrino medio senza sforzo.',
  },
  {
    Icon: Sandwich,
    title: 'Paninoteche',
    text: 'Il prodotto che differenzia il tuo locale: i clienti lo chiederanno per nome.',
  },
  {
    Icon: Utensils,
    title: 'Ristoranti',
    text: "Un'ottima soluzione da servire così com'è o come proposta rapida di qualità premium.",
  },
  {
    Icon: Truck,
    title: 'Distributori alimentari',
    text: 'Referenze esclusive ad alta rotazione, con supporto commerciale dedicato.',
  },
]

const badges = [
  { Icon: Leaf, label: 'Prodotto artigianale' },
  { Icon: ShieldOff, label: 'Zero conservanti' },
  { Icon: Star, label: 'Supporto dedicato' },
]

export function TargetSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7efe2] to-[#efe2cf]">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12">
        <header className="text-center">
          <p className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-12 bg-[#c9b397]" aria-hidden="true" />
            A chi è dedicato
            <span className="h-px w-12 bg-[#c9b397]" aria-hidden="true" />
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-bold text-espresso md:text-5xl">
            Un prodotto pensato per chi
            <br />
            <em className="text-brand-dark">vive di clienti soddisfatti.</em>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm text-muted-foreground">
            Lavoriamo solo con operatori professionali per offrire loro Il Pagnuozzo: locali,
            ristorazione e distribuzione.
          </p>
        </header>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr_0.8fr]">
          <div className="relative order-2 aspect-square overflow-hidden rounded-3xl shadow-xl lg:order-1">
            <Image
              src="/images/target-sandwich.png"
              alt="Panuozzi farciti con rucola, bresaola e stracciatella accanto a una birra"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 space-y-3 lg:order-2">
            <ul className="space-y-3">
              {targets.map(({ Icon, title, text }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 rounded-xl bg-[#fbf4e8]/95 p-4 shadow-sm ring-1 ring-[#eadbc4]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f0d9a8] text-[#8a5a17]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-serif font-bold text-espresso">{title}</h2>
                    <p className="text-sm leading-snug text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-[#1d1410] p-6 text-center text-cream shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-cream/70">
                Pronto a scoprire di più?
              </p>
              <p className="mt-2 font-serif text-lg font-bold">
                Richiedi il tuo campione gratuito e scopri Il Pagnuozzo.
              </p>
              <Link
                href="#form"
                className="mt-4 inline-flex rounded-full bg-gradient-to-r from-[#e9b543] to-[#f2c45a] px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-espresso transition-transform hover:-translate-y-0.5"
              >
                {'→ Richiedi il tuo campione gratuito'}
              </Link>
              <ul className="mt-5 grid grid-cols-3 gap-2 text-[11px] font-semibold uppercase leading-tight">
                {badges.map(({ Icon, label }) => (
                  <li key={label} className="flex flex-col items-center gap-1.5">
                    <Icon className="size-5" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative order-3 mx-auto aspect-[3/5] w-full max-w-xs overflow-hidden rounded-2xl">
            <Image
              src="/images/packaging.png"
              alt="Confezione del Panuozzo Napoletano Il Pagnuozzo"
              fill
              sizes="(min-width: 1024px) 25vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-brand-red to-transparent py-6">
        <h2 className="text-center font-serif text-3xl font-bold text-cream md:text-5xl">
          Richiedi il tuo campione gratuito
        </h2>
      </div>
    </section>
  )
}
