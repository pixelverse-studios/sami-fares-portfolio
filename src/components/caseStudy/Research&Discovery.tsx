import { FaLightbulb } from 'react-icons/fa6'

import { SectionTitle } from './SectionTitle'

interface ResearchAndDiscoveryProps {
  description: string[]
  quote: string
  author: string
  takeaways: string[]
}

export default function ResearchAndDiscovery({
  description,
  quote,
  author,
  takeaways
}: ResearchAndDiscoveryProps) {
  return (
    <section className="halfPage text-sm">
      <div className="section space-y-4">
        <SectionTitle position="0.3" header="Research & Discovery" />
        <article className="space-y-4">
          {description.map(p => (
            <p key={p}>{p}</p>
          ))}
          <div className="border-l-4 border-l-primary p-6 bg-background-subtle space-y-2 text-text-body">
            <p>{quote}</p>
            <p>- {author}</p>
          </div>
        </article>
        <h4 className="text-primary mb-3 text-lg">Key Research Takeaways</h4>
        <article className="space-y-4">
          {takeaways.map(item => (
            <div key={item} className="flex gap-4 items-center">
              <FaLightbulb size={16} className="text-primary" />
              <p>{item}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
