'use client'
import { ReactNode } from 'react'
import { FaLightbulb } from 'react-icons/fa6'

import { Mockup } from '@/lib/types'
import { SectionTitle } from './SectionTitle'
import Mockups from '../mockups'
import { CasesMap } from '@/lib/constants'
import { SlideInSection } from '../animations'

const id = CasesMap.get(3).id

interface ResearchAndDiscoveryProps {
  description: string[] | ReactNode[]
  quote: string
  author: string
  takeaways: string[]
  mockups?: Mockup[]
}

export default function ResearchAndDiscovery({
  description,
  quote,
  author,
  takeaways,
  mockups
}: ResearchAndDiscoveryProps) {
  return (
    <section id={id} className="halfPage text-sm">
      <div className="section space-y-4">
        <SectionTitle position="0.3" header="Research & Discovery" />
        <article className="space-y-4">
          {description.map((p, key) => (
            <SlideInSection key={key}>
              <div>{p}</div>
            </SlideInSection>
          ))}
          {quote === '' ? null : (
            <SlideInSection>
              <div className="border-l-4 border-l-primary p-6 bg-background-subtle space-y-2 text-text-body">
                <p>{quote}</p>
                <p>- {author}</p>
              </div>
            </SlideInSection>
          )}
        </article>
        <SlideInSection>
          <h4 className="text-primary mb-3 text-lg">Key Research Takeaways</h4>
        </SlideInSection>
        <article className="space-y-4">
          {takeaways.map(item => (
            <SlideInSection key={item}>
              <div className="flex gap-4 items-start">
                <FaLightbulb size={16} className="text-primary w-8 mt-1" />
                <p>{item}</p>
              </div>
            </SlideInSection>
          ))}
        </article>
        <Mockups mockups={mockups} />
      </div>
    </section>
  )
}
