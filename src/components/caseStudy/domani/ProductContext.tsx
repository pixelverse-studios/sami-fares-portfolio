'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'
import { FaCheck } from 'react-icons/fa6'

interface ProductContextProps {
  paragraphs: string[]
  challenges: string[]
}

export default function ProductContext({
  paragraphs,
  challenges
}: ProductContextProps) {
  return (
    <section className="halfPage bg-background-card">
      <div className={`section space-y-8 ${domaniClasses.content}`}>
        <SlideInSection>
          <h2 className={domaniClasses.heading}>
            Product Context & Design Challenge
          </h2>
        </SlideInSection>

        {/* Paragraphs */}
        <div className="space-y-4">
          {paragraphs.map((text, index) => (
            <SlideInSection key={index}>
              <p
                className={`${domaniClasses.body} text-sm leading-relaxed ${index === 0 ? 'border-l-2 border-primary pl-4' : ''}`}>
                {text}
              </p>
            </SlideInSection>
          ))}
        </div>

        {/* Challenges List */}
        <SlideInSection>
          <ul className="space-y-3">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <FaCheck className="text-primary w-4 h-4" />
                </span>
                <span className={`${domaniClasses.body} text-sm`}>
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </SlideInSection>
      </div>
    </section>
  )
}
