'use client'

import Image from 'next/image'
import * as FaIcons from 'react-icons/fa6'
import { SectionTitle } from './SectionTitle'

type Highlight = {
  header: string
  Icon: string
  description: string
}

type Mockup = {
  imgs: string[]
  explanation: string
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
        {mockups.map(mockup => (
          <section className="pt-6" key={mockup.explanation}>
            <div className="flex flex-wrap gap-8 pb-10">
              {mockup.imgs.map(img => (
                <Image
                  key={img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h-[600px] w-full max-w-2xl mx-auto flex-1 object-contain"
                  src={img}
                  alt="Mockup image"
                />
              ))}
            </div>
            <p className="bg-background-section w-fit text-center p-4 mx-auto text-text-body rounded-lg">
              {mockup.explanation}
            </p>
          </section>
        ))}
      </div>
    </section>
  )
}
