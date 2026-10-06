'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LogoBadge } from './logo'
import { cn } from '@/lib/utils'

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/perche-il-pagnuozzo', label: 'Perché Il Pagnuozzo' },
  { href: '/a-chi-e-dedicato', label: 'A chi è dedicato' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav
        aria-label="Navigazione principale"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4"
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoBadge className="size-14 text-[18px]" />
          <span className="font-serif text-lg font-semibold tracking-wide text-espresso">
            IL PAGNUOZZO
          </span>
        </Link>

        <ul className="hidden items-center gap-8 whitespace-nowrap lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-[15px] font-bold transition-colors hover:text-brand',
                    active ? 'text-brand' : 'text-espresso',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/a-chi-e-dedicato#form"
          className="hidden whitespace-nowrap rounded-full border-2 border-brand px-6 py-2.5 text-[15px] font-bold text-brand transition-colors hover:bg-brand hover:text-white lg:inline-flex"
        >
          {'→ Richiedi il campione'}
        </Link>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-espresso lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">{open ? 'Chiudi menu' : 'Apri menu'}</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-lg px-2 py-3 font-bold',
                    pathname === link.href ? 'text-brand' : 'text-espresso',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/a-chi-e-dedicato#form"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-center rounded-full bg-brand px-6 py-3 font-bold text-white"
          >
            {'→ Richiedi il campione'}
          </Link>
        </div>
      )}
    </header>
  )
}
