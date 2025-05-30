'use client'
import { FaCheck, FaBan } from 'react-icons/fa6'

import { SectionTitle } from './SectionTitle'
import { CasesMap } from '@/lib/constants'

const id = CasesMap.get(2).id

interface GoalsAndChallengesProps {
  goals: string[]
  challenges: string[]
  description: string[]
}

export default function GoalsAndChallenges({
  goals,
  challenges,
  description
}: GoalsAndChallengesProps) {
  return (
    <section id={id} className="halfPage text-sm">
      <div className="section space-y-4">
        <SectionTitle
          position="0.2"
          header="Project Goals and Challenges"
          underline
        />
        <article className="space-y-4">
          {description.map(section => (
            <p key={section}>{section}</p>
          ))}
        </article>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article>
            <h4 className="text-primary mb-3 text-lg">Client Goals</h4>
            <div className="flex flex-col gap-2">
              {goals.map(goal => (
                <div
                  key={goal}
                  className="grid grid-cols-[2rem_1fr] gap-4 items-center">
                  <FaCheck size={18} className="text-primary" />
                  <p>{goal}</p>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h4 className="text-primary mb-3 text-lg">Constraints</h4>
            <div className="flex flex-col gap-2">
              {challenges.map(challenge => (
                <div
                  key={challenge}
                  className="grid grid-cols-[2rem_1fr] gap-4 items-center">
                  <FaBan size={16} className="text-yellow-500" />{' '}
                  <p>{challenge}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
