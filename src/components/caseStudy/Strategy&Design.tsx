'use client'

import * as FaIcons from 'react-icons/fa6'
import { SectionTitle } from './SectionTitle'
import { Mockup } from '@/lib/types'
import Mockups from '../mockups'

type Highlight = {
  header: string
  Icon: string
  description: string
}

interface StrategyAndDesignProps {
  description: string[]
  highlights: Highlight[]
  mockups: Mockup[]
}

export default function StrategyAndDesign({
  description,
  highlights,
  mockups
}: StrategyAndDesignProps) {
  return (
    <section className="halfPage text-sm">
      <div className="section space-y-4">
        <SectionTitle position="0.4" header="UX Strategy & Design Decisions" />
        <article className="space-y-4">
          {description.map(text => (
            <p key={text}>{text}</p>
          ))}
        </article>
        <h4 className="text-primary mb-3 text-lg">Design Highlights</h4>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map(({ header, Icon, description }) => {
            // eslint-disable-next-line import/namespace
            const IconComponent = FaIcons[Icon as keyof typeof FaIcons]

            if (!IconComponent) {
              return null
            }
            return (
              <div
                key={header}
                className="flex flex-col gap-4 bg-background-section border border-white rounded-lg p-6 h-full">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-background-subtle p-2">
                    <IconComponent size={16} className="text-primary" />
                  </div>
                  <span className="font-semibold text-white">{header}</span>
                </div>
                <p>{description}</p>
              </div>
            )
          })}
        </section>
        <Mockups mockups={mockups} />
      </div>
    </section>
  )
}
