'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'

interface Challenge {
  title: string
  description: string
}

interface ChallengesLearningsProps {
  challenges: Challenge[]
}

export default function ChallengesLearnings({
  challenges
}: ChallengesLearningsProps) {
  return (
    <section className="halfPage">
      <div className="section space-y-8">
        {/* Header */}
        <SlideInSection>
          <h3 className={`${domaniClasses.heading} text-xl font-semibold`}>
            Key Challenges & Learnings
          </h3>
        </SlideInSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <SlideInSection key={index}>
              <div className={`${domaniClasses.card} p-6 space-y-3`}>
                <h4
                  className={`${domaniClasses.heading} text-lg font-semibold`}>
                  {challenge.title}
                </h4>
                <p className={`${domaniClasses.body} text-sm leading-relaxed`}>
                  {challenge.description}
                </p>
              </div>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
