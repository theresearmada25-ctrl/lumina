import type { Metadata } from 'next'
import { TargetSection } from '@/components/a-chi/target-section'
import { SampleSection } from '@/components/a-chi/sample-section'

export const metadata: Metadata = {
  title: 'A chi è dedicato',
  description:
    'Il Pagnuozzo è pensato per pub, paninoteche, ristoranti e distributori alimentari. Richiedi il campione gratuito per il tuo locale.',
}

export default function AChiPage() {
  return (
    <>
      <TargetSection />
      <SampleSection />
    </>
  )
}
