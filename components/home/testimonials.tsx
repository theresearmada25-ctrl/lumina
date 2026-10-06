'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Check, Play, X } from 'lucide-react'

const videos = [
  { img: '/images/video-pub.png', caption: 'Manager di Pub – Salerno' },
  { img: '/images/video-paninoteca.png', caption: 'Titolare di Paninoteca – Napoli' },
  { img: '/images/video-rosticceria.png', caption: 'Titolare di Rosticceria – Caserta' },
]

export function Testimonials() {
  const [active, setActive] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active !== null && !dialog.open) dialog.showModal()
    if (active === null && dialog.open) dialog.close()
  }, [active])

  const current = active !== null ? videos[active] : null

  return (
    <section aria-labelledby="testimonials-title">
      <div className="bg-gradient-to-r from-[#b52d14] via-[#c9461a] to-[#de6a17] px-5 py-12 text-center text-white">
        <h2 id="testimonials-title" className="text-balance font-serif text-3xl font-bold md:text-5xl">
          Cosa dicono i nostri partner del Panuozzo
        </h2>
        <p className="mt-3 italic text-white/90">
          {'I nostri clienti lo adorano: “Il pane che ha rivoluzionato il mio locale”'}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <li key={v.caption} className="text-center">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-[5/3] w-full overflow-hidden rounded-2xl shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <Image src={v.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-center justify-center bg-espresso/25">
                  <span className="flex size-16 items-center justify-center rounded-full bg-espresso/60 ring-4 ring-white/30 transition-transform group-hover:scale-110">
                    <Play className="ml-1 size-7 fill-white text-white" aria-hidden="true" />
                  </span>
                </span>
                <span className="sr-only">Guarda la testimonianza: {v.caption}</span>
              </button>
              <p className="mt-3 text-sm text-espresso">{v.caption}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-center justify-center gap-2 font-bold text-espresso">
          <Check className="size-5 text-brand" aria-hidden="true" />
          {"Campione gratuito senza impegno d'acquisto"}
        </p>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
        className="m-auto w-[min(90vw,48rem)] overflow-hidden rounded-2xl bg-espresso p-0 text-white backdrop:bg-espresso/70"
        aria-label={current?.caption}
      >
        {current && (
          <div>
            <div className="relative aspect-video">
              <Image src={current.img} alt="" fill sizes="768px" className="object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <Play className="size-12 fill-white text-white" aria-hidden="true" />
                <p className="font-serif text-2xl font-bold">{current.caption}</p>
                <p className="text-sm text-white/80">La video testimonianza sarà disponibile a breve.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Chiudi</span>
            </button>
          </div>
        )}
      </dialog>
    </section>
  )
}
