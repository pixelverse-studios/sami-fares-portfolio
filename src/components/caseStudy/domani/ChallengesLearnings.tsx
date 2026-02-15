'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses } from '@/lib/caseStudies/caseDomani'
import { FaBullseye, FaRegLightbulb } from 'react-icons/fa6'

interface Challenge {
  title: string
  description: string
  takeaway?: string
}

interface ChallengesLearningsProps {
  challenges: Challenge[]
}

const challengeIcons = [
  <FaBullseye key="bullseye" className="text-white text-lg" />,
  <FaRegLightbulb key="lightbulb" className="text-white text-lg" />
]

export default function ChallengesLearnings({
  challenges
}: ChallengesLearningsProps) {
  return (
    <section className="halfPage min-h-[35vh] flex items-center bg-background-card">
      <div className={`section space-y-8 ${domaniClasses.content}`}>
        {/* Header */}
        <SlideInSection>
          <h2 className={domaniClasses.heading}>Key Challenges & Learnings</h2>
        </SlideInSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <SlideInSection key={index}>
              <div
                className={`${domaniClasses.cardWhite} p-6 space-y-3 shadow-lg`}>
                <div className={domaniClasses.decisionCard.numberBadge}>
                  {challengeIcons[index] || challengeIcons[0]}
                </div>
                <h4
                  className={`${domaniClasses.heading} text-lg font-semibold`}>
                  {challenge.title}
                </h4>
                <p className={`${domaniClasses.body} text-sm leading-relaxed`}>
                  {challenge.description}
                </p>
                {challenge.takeaway && (
                  <p
                    className={`${domaniClasses.body} text-sm leading-relaxed italic`}>
                    {challenge.takeaway}
                  </p>
                )}
              </div>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
