'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'
import { FaRegLightbulb } from 'react-icons/fa6'

interface ProductHypothesisProps {
  hypothesis: string[]
}

export default function ProductHypothesis({
  hypothesis
}: ProductHypothesisProps) {
  return (
    <section className="halfPage">
      <div className={`section ${domaniClasses.content}`}>
        <SlideInSection>
          <div className={`${domaniClasses.cardWhite} p-8 space-y-4`}>
            <h3
              className={`${domaniClasses.heading} text-lg font-semibold flex items-center gap-2`}>
              <FaRegLightbulb className="text-primary" />
              Product Hypothesis
            </h3>
            <div className="space-y-4">
              {hypothesis.map((text, index) => (
                <p
                  key={index}
                  className={`${domaniClasses.body} text-sm leading-relaxed`}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </SlideInSection>
      </div>
    </section>
  )
}
