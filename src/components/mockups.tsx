'use client'

import { Mockup } from '@/lib/types'
import Image from 'next/image'
import { SlideInSection } from './animations'

export default function Mockups({
  mockups
}: {
  mockups: Mockup[] | undefined
}) {
  if (mockups?.length === 0 || mockups == undefined) return null

  return (
    <>
      {mockups.map(mockup => (
        <section className="pt-6" key={mockup.explanation}>
          <div className="flex flex-wrap justify-center gap-6 pb-10">
            {mockup.imgs.map((src, index) => (
              <SlideInSection key={src}>
                <img
                  src={src}
                  alt="Mockup image"
                  className="max-w-[90vw] h-auto max-h-[50vh] object-contain
                   sm:w-[clamp(20rem,30vw,32rem)] sm:max-h-[clamp(24rem,50vh,48rem)]"
                  loading={index >= 2 ? 'lazy' : 'eager'}
                />
              </SlideInSection>
            ))}
          </div>

          <SlideInSection>
            <p className="bg-background-section w-fit text-center p-4 mx-auto text-text-body rounded-lg">
              {mockup.explanation}
            </p>
          </SlideInSection>
        </section>
      ))}
    </>
  )
}
