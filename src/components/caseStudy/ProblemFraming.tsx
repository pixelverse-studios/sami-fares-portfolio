'use client'

import { SectionTitle } from './SectionTitle'
import { CasesMap } from '@/lib/constants'
import { SlideInSection } from '../animations'

const id = CasesMap.get(0).id

interface ProblemFramingProps {
  items: string[]
  header: string
}

export default function ProblemFraming({ items, header }: ProblemFramingProps) {
  return (
    <section id={id} className="halfPage">
      <div className="section">
        <SectionTitle position="0.0" header={header} />
        <div className="space-y-4">
          {items.map(text => (
            <SlideInSection key={text}>
              <p className="text-sm">{text}</p>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
