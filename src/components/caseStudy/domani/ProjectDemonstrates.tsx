'use client'

import { SlideInSection } from '@/components/animations'
import { domaniClasses, domaniGradients } from '@/lib/caseStudies/caseDomani'
import { FaRegCircleCheck } from 'react-icons/fa6'

interface ProjectDemonstratesProps {
  capabilities: string[]
}

export default function ProjectDemonstrates({
  capabilities
}: ProjectDemonstratesProps) {
  return (
    <section
      className={`halfPage min-h-[50vh] ${domaniGradients.dark} text-white`}>
      <div className={`section space-y-8 ${domaniClasses.content}`}>
        <SlideInSection>
          <h2 className="text-white">What This Project Demonstrates</h2>
        </SlideInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((capability, index) => (
            <SlideInSection key={index}>
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-3">
                <FaRegCircleCheck className="text-primary-light text-xl" />
                <p className="text-sm text-white leading-relaxed">
                  {capability}
                </p>
              </div>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
