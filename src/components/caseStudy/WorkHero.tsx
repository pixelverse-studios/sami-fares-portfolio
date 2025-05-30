'use client'

import Image from 'next/image'
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
          <Image
            src={img}
            alt={`${header} mockup`}
            width={0}
            height={0}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
            className="h-[60vh] w-full"
            loading={'lazy'}
            quality={85}
          />
        </SlideInSection>
      </div>
    </section>
  )
}
