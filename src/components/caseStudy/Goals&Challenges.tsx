'use client'
import { FaCheck, FaBan } from 'react-icons/fa6'

import { SectionTitle } from './SectionTitle'
import { CasesMap } from '@/lib/constants'
import { SlideInSection } from '../animations'

const id = CasesMap.get(2).id

interface GoalsAndChallengesProps {
  goals: string[]
  constraints: string[]
  description?: string[]
}

export default function GoalsAndChallenges({
  goals,
  constraints,
  description
}: GoalsAndChallengesProps) {
  return (
    <section id={id} className="halfPage text-sm">
      <div className="section space-y-4">
        <SectionTitle
          position="0.2"
          header="Project Goals and Constraints"
          underline
        />
        {description && description.length > 0 && (
          <article className="space-y-4">
            {description.map(section => (
              <SlideInSection key={section}>
                <p>{section}</p>
              </SlideInSection>
            ))}
          </article>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article>
            <SlideInSection>
              <h4 className="text-primary mb-3 text-lg">Client Goals</h4>
            </SlideInSection>
            <div className="flex flex-col gap-2">
              {goals.map(goal => (
                <SlideInSection key={goal}>
                  <div className="grid grid-cols-[2rem_1fr] gap-4 items-start">
                    <FaCheck size={18} className="text-primary w-8 mt-1" />
                    <p>{goal}</p>
                  </div>
                </SlideInSection>
              ))}
            </div>
          </article>
          <article>
            <SlideInSection>
              <h4 className="text-primary mb-3 text-lg">Constraints</h4>
            </SlideInSection>
            <div className="flex flex-col gap-2">
              {constraints.map(constraint => (
                <SlideInSection key={constraint}>
                  <div className="grid grid-cols-[2rem_1fr] gap-4 items-start">
                    <FaBan
                      size={16}
                      className="text-[var(--warning)] w-8 mt-1"
                    />{' '}
                    <p>{constraint}</p>
                  </div>
                </SlideInSection>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
