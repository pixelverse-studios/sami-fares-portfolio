import { ReactNode } from 'react'
import { FaLightbulb } from 'react-icons/fa6'

import { Mockup } from '@/lib/types'
import { SectionTitle } from './SectionTitle'
import Mockups from '../mockups'

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
    <section className="halfPage text-sm">
      <div className="section space-y-4">
        <SectionTitle position="0.3" header="Research & Discovery" />
        <article className="space-y-4">
          {description.map((p, key) => (
            <p key={key}>{p}</p>
          ))}
          {quote === '' ? null : (
            <div className="border-l-4 border-l-primary p-6 bg-background-subtle space-y-2 text-text-body">
              <p>{quote}</p>
              <p>- {author}</p>
            </div>
          )}
        </article>
        <h4 className="text-primary mb-3 text-lg">Key Research Takeaways</h4>
        <article className="space-y-4">
          {takeaways.map(item => (
            <div className="flex gap-4 items-center" key={item}>
              <FaLightbulb size={16} className="text-primary" />
              <p key={item}>{item}</p>
            </div>
          ))}
        </article>
        <Mockups mockups={mockups} />
      </div>
    </section>
  )
}
