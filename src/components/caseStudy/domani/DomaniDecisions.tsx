'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'

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
    <section className="halfPage bg-background-card">
      <div className="section space-y-12">
        {/* Header & Intro */}
        <SlideInSection className="text-center space-y-4">
          <h2 className={domaniClasses.heading}>
            Key UX Decisions & Iterations
          </h2>
          <p className={`${domaniClasses.body} text-sm leading-relaxed`}>
            {intro}
          </p>
        </SlideInSection>

        {/* Decision Cards */}
        {decisions.map(decision => (
          <SlideInSection key={decision.number}>
            <div className={domaniClasses.decisionCard.container}>
              {/* Number Badge + Title */}
              <div className="flex items-center gap-4">
                <div className={domaniClasses.decisionCard.numberBadge}>
                  {decision.number}
                </div>
                <h3
                  className={`${domaniClasses.heading} text-xl font-semibold mb-0`}>
                  {decision.title}
                </h3>
              </div>

              {/* Mockups */}
              {(decision.mockup ||
                decision.mockupBefore ||
                decision.mockupLeft) && (
                <div className="mt-6">
                  {/* Single Mockup */}
                  {decision.mockup && (
                    <div className="border border-[var(--border-subtle)] rounded-lg p-4 flex justify-center shadow-lg max-w-[35vw] mx-auto">
                      <img
                        src={decision.mockup}
                        alt={`${decision.title} mockup`}
                        className="max-h-[35vh] object-contain"
                      />
                    </div>
                  )}

                  {/* Before/After or Left/Right - 2 Column Grid */}
                  {(decision.mockupBefore || decision.mockupLeft) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-body">
                          {decision.mockupBefore ? 'Before' : 'Planning'}
                        </span>
                        <div className="border border-[var(--border-subtle)] rounded-lg p-4 flex justify-center shadow-lg max-w-[35vw] mx-auto">
                          <img
                            src={
                              decision.mockupBefore || decision.mockupLeft || ''
                            }
                            alt={`${decision.title} ${decision.mockupBefore ? 'before' : 'planning'}`}
                            className="max-h-[35vh] object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-body">
                          {decision.mockupAfter ? 'After' : 'Execution'}
                        </span>
                        <div className="border border-[var(--border-subtle)] rounded-lg p-4 flex justify-center shadow-lg max-w-[35vw] mx-auto">
                          <img
                            src={
                              decision.mockupAfter || decision.mockupRight || ''
                            }
                            alt={`${decision.title} ${decision.mockupAfter ? 'after' : 'execution'}`}
                            className="max-h-[35vh] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="mt-6 space-y-4">
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
              </div>
            </div>
          </SlideInSection>
        ))}
      </div>
    </section>
  )
}
