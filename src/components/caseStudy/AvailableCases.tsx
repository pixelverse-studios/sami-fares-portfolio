import { useMemo } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

import allCases from '@/lib/caseStudies/allCases'

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
        <h3 className="text-text-heading text-center mb-6">
          View More Case Studies
        </h3>
      ) : null}
      <ul className="flex flex-wrap justify-center gap-4 mx-auto">
        {filtered.map(item => (
          <div
            key={item.label}
            className="flex-none w-[clamp(20rem,29vw,24rem)] grid grid-rows-2 shadow-xl rounded-xl border-primary bg-background-section">
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
                  className="pl-0 flex gap-3 items-center text-primary hover:underline"
                  href={item.destination}>
                  Read Case Study
                  <FaArrowRight size={18} className="text-primary" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
