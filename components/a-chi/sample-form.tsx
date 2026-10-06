'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '393701644530'

const inputClass =
  'mt-1.5 w-full rounded-lg border border-[#e6d6b8] bg-[#f8efdc] px-4 py-3 text-sm text-espresso placeholder:text-[#a8977f] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30'

export function SampleForm() {
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nome = String(data.get('nome') ?? '').trim()
    const locale = String(data.get('locale') ?? '').trim()
    const whatsapp = String(data.get('whatsapp') ?? '').trim()
    const messaggio = String(data.get('messaggio') ?? '').trim()

    if (!nome || !locale || !whatsapp) {
      setError('Compila tutti i campi obbligatori.')
      return
    }
    if (!/^\+?[\d\s()-]{7,20}$/.test(whatsapp)) {
      setError('Inserisci un numero WhatsApp valido.')
      return
    }
    if (!data.get('privacy')) {
      setError('Devi accettare il trattamento dei dati personali.')
      return
    }
    setError(null)

    const text = [
      'Ciao! Vorrei richiedere il campione gratuito de Il Pagnuozzo.',
      `Nome: ${nome}`,
      `Locale / Azienda: ${locale}`,
      `WhatsApp: ${whatsapp}`,
      messaggio ? `Messaggio: ${messaggio}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    const win = window.open(url, '_blank')
    if (win) win.opener = null
    else if (window.self === window.top) window.location.href = url
    setSent(true)
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl shadow-espresso/10 md:p-8">
      <h3 className="font-serif text-xl font-bold text-espresso">
        {'Lascia i tuoi dati – ti contatto io.'}
      </h3>
      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
        <div>
          <label htmlFor="nome" className="text-sm font-medium text-espresso">
            Nome e cognome *
          </label>
          <input id="nome" name="nome" required autoComplete="name" placeholder="Mario Rossi" className={inputClass} />
        </div>
        <div>
          <label htmlFor="locale" className="text-sm font-medium text-espresso">
            Nome del locale / Azienda *
          </label>
          <input
            id="locale"
            name="locale"
            required
            autoComplete="organization"
            placeholder="Paninoteca da Mario"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="text-sm font-medium text-espresso">
            WhatsApp *
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+39 333 123 4587"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="messaggio" className="text-sm font-medium text-espresso">
            Messaggio (opzionale)
          </label>
          <textarea
            id="messaggio"
            name="messaggio"
            rows={3}
            placeholder="Gestisco un pub a Napoli, vorrei provare..."
            className={inputClass}
          />
        </div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="privacy" className="mt-1 size-4 accent-brand-red" />
          <span>
            Acconsento al trattamento dei miei dati personali per essere ricontattato.{' '}
            <a href="#" className="font-medium text-espresso underline">
              Leggi la nostra Privacy Policy.
            </a>
          </span>
        </label>

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 px-4 py-2 text-sm text-destructive">
            {error}
          </p>
        )}
        {sent && !error && (
          <p role="status" className="rounded-lg bg-green-50 px-4 py-2 text-sm text-green-800">
            Grazie! Completa l&apos;invio del messaggio su WhatsApp.
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-brand-red px-6 py-3.5 font-serif text-lg font-bold text-white shadow-md transition-colors hover:bg-[#7f2415]"
        >
          {'Richiedi il tuo campione gratuito →'}
        </button>
        <p className="text-center text-xs text-muted-foreground">
          Nessun impegno. Ti rispondo entro 24 ore.
        </p>
      </form>
    </div>
  )
}
