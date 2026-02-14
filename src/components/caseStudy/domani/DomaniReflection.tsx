'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'

interface DomaniReflectionProps {
  paragraph: string
}

export default function DomaniReflection({ paragraph }: DomaniReflectionProps) {
  return (
    <section className="halfPage">
      <div className="section">
        <SlideInSection>
          <p className={`${domaniClasses.body} text-sm leading-relaxed`}>
            {paragraph}
          </p>
        </SlideInSection>
      </div>
    </section>
  )
}
