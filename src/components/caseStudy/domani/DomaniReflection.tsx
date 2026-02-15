'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'

interface DomaniReflectionProps {
  paragraphs: string[]
}

export default function DomaniReflection({
  paragraphs
}: DomaniReflectionProps) {
  return (
    <section
      className={`halfPage min-h-[35vh] flex items-center ${domaniClasses.sectionSage}`}>
      <div className={`section space-y-8 ${domaniClasses.content}`}>
        <SlideInSection>
          <h2 className={domaniClasses.heading}>Reflection</h2>
        </SlideInSection>
        <div className="space-y-4">
          {paragraphs.map((text, index) => (
            <SlideInSection key={index}>
              <p className={`${domaniClasses.heading} text-sm leading-relaxed`}>
                {text}
              </p>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
