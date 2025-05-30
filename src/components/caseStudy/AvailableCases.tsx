'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

import allCases from '@/lib/caseStudies/allCases'
import { SlideInSection } from '../animations'

interface AdditionalCasesProps {
  current: string
  showHeader?: boolean
}

export default function AvailableCases({
  current,
  showHeader
}: AdditionalCasesProps) {
  const filtered = useMemo(
    () => allCases.filter(item => item.label !== current),
    [current]
  )

  return (
    <div className="section">
      {showHeader ? (
        <SlideInSection>
          <h3 className="text-text-heading text-center mb-6">
            View More Case Studies
          </h3>
        </SlideInSection>
      ) : null}
      <ul className="flex flex-wrap justify-center gap-4 mx-auto">
        {filtered.map(item => (
          <SlideInSection key={item.label}>
            <div className="flex-none w-[clamp(20rem,29vw,24rem)] grid grid-rows-2 shadow-xl rounded-xl border-primary bg-background-section h-full">
              <div className="px-6 py-4 h-80">
                <img
                  src={item.img}
                  alt={`${item.label} example image`}
                  className="object-fit h-full w-auto mx-auto object-contain"
                />
              </div>
              <div className="bg-background-subtle rounded-b-xl h-full">
                <div className="h-full px-6 py-8 grid grid-rows-[2rem_1fr_2rem] gap-4 items-start justify-items-start">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                  <Link
                    className="pl-0 flex gap-3 items-center text-primary group relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-200 hover:text-background-section hover:pl-4 cursor-pointer"
                    href={item.destination}>
                    <span className="absolute inset-0 bg-primary transform -translate-x-[101%] transition-transform duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10">Read Case Study</span>
                    <FaArrowRight
                      size={18}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideInSection>
        ))}
      </ul>
    </div>
  )
}
