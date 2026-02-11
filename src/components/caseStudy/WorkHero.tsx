'use client'

import { SlideInSection } from '../animations'

interface WorkHeroProps {
  img: string
  header: string
  descriptor: string
}

export default function WorkHero({ img, header, descriptor }: WorkHeroProps) {
  return (
    <section className="page">
      <div className="section flex flex-col gap-6 items-center space-y-4 mt-10">
        <SlideInSection className="text-center space-y-4 flex flex-col gap-6">
          <h1>{header}</h1>
          <p>{descriptor}</p>
        </SlideInSection>
        <SlideInSection>
          <div className="perspective-1000">
            <img
              src={img}
              alt={`${header} mockup`}
              className="h-[60vh] w-full object-contain transform-3d shadow-2xl"
              loading="eager"
            />
          </div>
        </SlideInSection>
      </div>
    </section>
  )
}
