'use client'

import { SectionTitle } from './SectionTitle'
import { CasesMap } from '@/lib/constants'
import { SlideInSection } from '../animations'

const id = CasesMap.get(4).id

interface UXDecision {
  title: string
  problem: string
  risk: string
  decision: string
  solution: string
  tradeoff: string
}

interface KeyUXDecisionsProps {
  decisions: UXDecision[]
}

export default function KeyUXDecisions({ decisions }: KeyUXDecisionsProps) {
  return (
    <section id={id} className="halfPage text-sm">
      <div className="section space-y-8">
        <SectionTitle position="0.4" header="Key UX Decisions & Tradeoffs" />

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
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Problem</h4>
                    <p className="text-text-body">{decision.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-warning font-semibold mb-2">Risk</h4>
                    <p className="text-text-body">{decision.risk}</p>
                  </div>

                  <div>
                    <h4 className="text-primary font-semibold mb-2">
                      Decision
                    </h4>
                    <p className="text-text-body">{decision.decision}</p>
                  </div>

                  <div>
                    <h4 className="text-primary font-semibold mb-2">
                      Solution
                    </h4>
                    <p className="text-text-body">{decision.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-text-body font-semibold mb-2">
                      Tradeoff
                    </h4>
                    <p className="text-text-body">{decision.tradeoff}</p>
                  </div>
                </div>
              </article>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
