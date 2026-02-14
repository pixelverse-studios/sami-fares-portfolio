'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'
import Image from 'next/image'

interface Decision {
  number: number
  title: string
  problem?: string
  explanation?: string
  solution: string
  mockup?: string
  mockupBefore?: string
  mockupAfter?: string
  mockupLeft?: string
  mockupRight?: string
}

interface DomaniDecisionsProps {
  intro: string
  decisions: Decision[]
}

export default function DomaniDecisions({
  intro,
  decisions
}: DomaniDecisionsProps) {
  return (
    <section className="halfPage">
      <div className="section space-y-12">
        {/* Intro */}
        <SlideInSection>
          <p className={`${domaniClasses.body} text-sm leading-relaxed`}>
            {intro}
          </p>
        </SlideInSection>

        {/* Decision Cards */}
        {decisions.map(decision => (
          <SlideInSection key={decision.number}>
            <div className={domaniClasses.decisionCard.container}>
              {/* Number Badge */}
              <div className={domaniClasses.decisionCard.numberBadge}>
                {decision.number}
              </div>

              {/* Content */}
              <div className="mt-6 space-y-4">
                {/* Title */}
                <h3
                  className={`${domaniClasses.heading} text-xl font-semibold`}>
                  {decision.title}
                </h3>

                {/* Problem or Explanation */}
                {(decision.problem || decision.explanation) && (
                  <div className="space-y-2">
                    <span className={domaniClasses.decisionCard.whyTag}>
                      {decision.problem ? 'Why' : 'Context'}
                    </span>
                    <p
                      className={`${domaniClasses.body} text-sm leading-relaxed`}>
                      {decision.problem || decision.explanation}
                    </p>
                  </div>
                )}

                {/* Solution */}
                <div className="space-y-2">
                  <span className={domaniClasses.decisionCard.howTag}>How</span>
                  <p
                    className={`${domaniClasses.body} text-sm leading-relaxed`}>
                    {decision.solution}
                  </p>
                </div>

                {/* Mockups - Flexible Grid */}
                {(decision.mockup ||
                  decision.mockupBefore ||
                  decision.mockupLeft) && (
                  <div className="mt-6">
                    {/* Single Mockup */}
                    {decision.mockup && (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={decision.mockup}
                          alt={`${decision.title} mockup`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}

                    {/* Before/After or Left/Right - 2 Column Grid */}
                    {(decision.mockupBefore || decision.mockupLeft) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={
                              decision.mockupBefore || decision.mockupLeft || ''
                            }
                            alt={`${decision.title} ${decision.mockupBefore ? 'before' : 'left'}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={
                              decision.mockupAfter || decision.mockupRight || ''
                            }
                            alt={`${decision.title} ${decision.mockupAfter ? 'after' : 'right'}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </SlideInSection>
        ))}
      </div>
    </section>
  )
}
