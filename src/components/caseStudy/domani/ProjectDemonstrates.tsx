'use client'

import { SlideInSection } from '@/components/animations'
import { domaniGradients } from '@/lib/caseStudies/caseDomani'
import { FaCheck } from 'react-icons/fa6'

interface ProjectDemonstratesProps {
  capabilities: string[]
}

export default function ProjectDemonstrates({
  capabilities
}: ProjectDemonstratesProps) {
  return (
    <section className={`halfPage ${domaniGradients.dark}`}>
      <div className="section space-y-8">
        {/* Header */}
        <SlideInSection>
          <h3 className="text-white text-xl font-semibold">
            What This Project Demonstrates
          </h3>
        </SlideInSection>

        {/* Capabilities List */}
        <SlideInSection>
          <ul className="space-y-4">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <FaCheck className="text-primary w-4 h-4" />
                </span>
                <span className="text-white text-sm leading-relaxed">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </SlideInSection>
      </div>
    </section>
  )
}
