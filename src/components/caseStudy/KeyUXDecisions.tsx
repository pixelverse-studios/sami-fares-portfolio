'use client'

import { SectionTitle } from './SectionTitle'
import { CasesMap } from '@/lib/constants'
import { SlideInSection } from '../animations'
import { UXDecision } from '@/lib/types'

const id = CasesMap.get(4).id

interface KeyUXDecisionsProps {
  decisions: UXDecision[]
  header?: string
}

export default function KeyUXDecisions({
  decisions,
  header
}: KeyUXDecisionsProps) {
  return (
    <section id={id} className="halfPage text-sm">
      <div className="section space-y-8">
        <SectionTitle
          position="0.4"
          header={header || 'Key UX Decisions & Tradeoffs'}
        />

        <div className="space-y-8">
          {decisions.map((decision, index) => (
            <SlideInSection key={decision.title}>
              <article className="bg-background-section border border-border-subtle rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-background-section rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-lg text-text-heading font-medium">
                    {decision.title}
                  </h3>
                </div>

                <div className="space-y-4 pl-11">
                  {decision.problem && (
                    <div>
                      <h4 className="text-primary font-semibold mb-2">
                        Problem
                      </h4>
                      <p className="text-text-body">{decision.problem}</p>
                    </div>
                  )}

                  {decision.risk && (
                    <div>
                      <h4 className="text-primary font-semibold mb-2">Risk</h4>
                      <p className="text-text-body">{decision.risk}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-primary font-semibold mb-2">
                      Decision
                    </h4>
                    <p className="text-text-body">{decision.decision}</p>
                  </div>

                  {decision.solution && (
                    <div>
                      <h4 className="text-primary font-semibold mb-2">
                        Solution
                      </h4>
                      <p className="text-text-body">{decision.solution}</p>
                    </div>
                  )}

                  {decision.tradeoff && (
                    <div>
                      <h4 className="text-text-body font-semibold mb-2">
                        Tradeoff
                      </h4>
                      <p className="text-text-body">{decision.tradeoff}</p>
                    </div>
                  )}

                  {decision.rationale && (
                    <div>
                      <h4 className="text-primary font-semibold mb-2">
                        Rationale
                      </h4>
                      <p className="text-text-body">{decision.rationale}</p>
                    </div>
                  )}
                </div>
              </article>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
