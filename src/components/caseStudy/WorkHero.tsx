'use client'

import Image from 'next/image'

interface WorkHeroProps {
  img: string
  header: string
  descriptor: string
}

export default function WorkHero({ img, header, descriptor }: WorkHeroProps) {
  return (
    <section className="page">
      <div className="section flex flex-col gap-6 items-center space-y-4 mt-10">
        <h1>{header}</h1>
        <p>{descriptor}</p>
        <Image
          src={img}
          alt={`${header} mockup`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full max-w-4xl max-h-[50vh] object-contain"
        />
      </div>
    </section>
  )
}
