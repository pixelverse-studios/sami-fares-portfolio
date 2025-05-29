'use client'

import { Mockup } from '@/lib/types'
import Image from 'next/image'

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
          <div className="flex justify-center gap-6 pb-10">
            {mockup.imgs.map(src => (
              <div key={src} className="flex-none w-[clamp(20rem,30vw,32rem)]">
                <Image
                  src={src}
                  alt="Mockup image"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          <p className="bg-background-section w-fit text-center p-4 mx-auto text-text-body rounded-lg">
            {mockup.explanation}
          </p>
        </section>
      ))}
    </>
  )
}
