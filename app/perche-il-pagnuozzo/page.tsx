import type { Metadata } from 'next'
import { PercheHero } from '@/components/perche/hero'
import { LievitoSection } from '@/components/perche/lievito'
import { StorySection } from '@/components/perche/story'

export const metadata: Metadata = {
  title: 'Perché Il Pagnuozzo',
  description:
    'Lievito madre rinnovato da 70 anni e 48 ore di lievitazione naturale: scopri perché la differenza si sente al primo morso.',
}

export default function PerchePage() {
  return (
    <div className="bg-[#f6ede1]">
      <PercheHero />
      <LievitoSection />
      <StorySection />
    </div>
  )
}
