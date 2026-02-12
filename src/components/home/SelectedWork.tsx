'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import allCases from '@/lib/caseStudies/allCases'
import { SlideInSection } from '../animations'
import { Button } from '../ui/button'
import { CaseStudy } from '@/lib/types'

/**
 * SelectedWork Component
 *
 * Displays case studies in a vertical layout with alternating image/content sides.
 * Includes responsive design and scroll-triggered animations.
 *
 * Animations (PVS-316):
 * - Section header: SlideInSection with default direction
 * - Image/content: Alternating SlideInSection directions based on layout
 * - Triggers at 0.1 threshold for smooth scroll experience
 *
 * Responsive Behavior (PVS-316):
 * - Mobile (< md): Vertical stack (image top, content bottom)
 * - Desktop (≥ md): Two-column grid with alternating sides
 */

interface CaseStudyRowProps {
  caseStudy: CaseStudy
  imageOnLeft: boolean
  index: number
}

function CaseStudyRow({ caseStudy, imageOnLeft, index }: CaseStudyRowProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${
        imageOnLeft ? '' : 'md:grid-flow-dense'
      }`}>
      {/* Image Side */}
      <SlideInSection
        direction={imageOnLeft ? 'left' : 'right'}
        className={imageOnLeft ? '' : 'md:col-start-2'}>
        <div className="bg-background-section p-8 rounded-xl h-96 flex items-center justify-center">
          <img
            src={caseStudy.img}
            alt={`${caseStudy.label} mockup`}
            className="w-full h-auto max-h-full object-contain"
          />
        </div>
      </SlideInSection>

      {/* Content Side */}
      <SlideInSection
        direction={imageOnLeft ? 'right' : 'left'}
        className={`flex flex-col justify-center gap-6 ${
          imageOnLeft ? '' : 'md:col-start-1 md:row-start-1'
        }`}>
        <div className="flex flex-col gap-4">
          {/* Project Label */}
          <p className="text-xs uppercase tracking-wide text-text-body opacity-70">
            Project {String(index + 1).padStart(2, '0')}
          </p>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-text-heading">
            {caseStudy.label}
          </h3>

          {/* Tags */}
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {caseStudy.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-background-section border border-border-subtle rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-text-body leading-relaxed">
            {caseStudy.description}
          </p>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="w-fit group border-2">
          <Link href={caseStudy.destination}>
            VIEW CASE STUDY
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </SlideInSection>
    </div>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" className="halfPage">
      <div className="section">
        <SlideInSection>
          <h2 className="mb-12">Selected Work</h2>
        </SlideInSection>

        <div className="flex flex-col gap-16">
          {allCases.map((caseStudy, index) => (
            <CaseStudyRow
              key={caseStudy.label}
              caseStudy={caseStudy}
              imageOnLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
