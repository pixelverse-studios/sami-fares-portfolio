'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'

interface WhatsNextProps {
  paragraph: string
}

export default function WhatsNext({ paragraph }: WhatsNextProps) {
  return (
    <section className="halfPage">
      <div className="section space-y-8">
        {/* Header */}
        <SlideInSection>
          <h3 className={`${domaniClasses.heading} text-xl font-semibold`}>
            What's Next
          </h3>
        </SlideInSection>

        {/* Paragraph */}
        <SlideInSection>
          <p className={`${domaniClasses.body} text-sm leading-relaxed`}>
            {paragraph}
          </p>
        </SlideInSection>
      </div>
    </section>
  )
}
