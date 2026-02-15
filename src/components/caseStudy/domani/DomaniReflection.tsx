'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'

interface DomaniReflectionProps {
  paragraph: string
}

export default function DomaniReflection({ paragraph }: DomaniReflectionProps) {
  return (
    <section
      className={`halfPage min-h-[35vh] flex items-center ${domaniClasses.sectionSage}`}>
      <div className={`section space-y-8 ${domaniClasses.content}`}>
        <SlideInSection>
          <h2 className={domaniClasses.heading}>Reflection</h2>
        </SlideInSection>
        <SlideInSection>
          <p className={`${domaniClasses.heading} text-sm leading-relaxed`}>
            {paragraph}
          </p>
        </SlideInSection>
      </div>
    </section>
  )
}
