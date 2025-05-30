'use client'

import { FaSquareCheck, FaLightbulb } from 'react-icons/fa6'

import Image from 'next/image'
import { SectionTitle } from './SectionTitle'
import { CasesMap } from '@/lib/constants'

const id = CasesMap.get(5).id

interface FinalReflectionsProps {
  achievments: string[]
  client: string
  description: string[]
  feedback: string
  img: string[]
  lessons: string[]
  subHeader: string
  url: string
}

export default function FinalReflections({
  achievments,
  client,
  description,
  feedback,
  img,
  lessons,
  subHeader,
  url
}: FinalReflectionsProps) {
  return (
    <section id={id}>
      <div className="section text-sm text-text-body space-y-4">
        <SectionTitle position="" header="Final Designs & Reflection" />
        <article className="space-y-4">
          {description.map(text => (
            <p key={text}>{text}</p>
          ))}
          <p>
            Live Website:{' '}
            <a
              href={url}
              className="transition-all duration-200 hover:text-text-heading">
              {url}
            </a>
          </p>
          <h3 className="text-center pt-8">{subHeader}</h3>
          <div className="flex flex-wrap justify-center gap-4 py-4 pb-20">
            {img.map(src => (
              <div
                key={src}
                className="
        relative 
        flex-none 
        w-full max-w-[90vw] h-[50vh] 
        sm:w-[clamp(20rem,25vw,32rem)] sm:h-[clamp(24rem,50vh,48rem)]
      ">
                <Image
                  src={src}
                  alt=""
                  fill
                  // below:
                  sizes="(max-width: 639px) 90vw, 25vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          <div className="space-y-4">
            <h4 className="flex text-lg text-primary gap-2 items-center">
              <FaSquareCheck size={18} className="text-primary" />
              Key Achievements
            </h4>
            <ul className="space-y-3 list-disc pl-4">
              {achievments.map(achievment => (
                <li key={achievment}>{achievment}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="flex text-lg text-primary gap-2 items-center">
              <FaLightbulb size={18} className="text-yellow-500" />
              Lessons Learned
            </h4>
            <ul className="space-y-3 list-disc pl-4">
              {lessons.map(lesson => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </div>
        </article>
        {feedback === '' ? null : (
          <article className="p-6 max-w-4xl bg-background-subtle mx-auto rounded-xl shadow-xl space-y-4">
            <h4 className="text-lg">Client Feedback</h4>
            <p>{feedback}</p>
            <p>- {client}</p>
          </article>
        )}
        <div>
          <div className="h-[1px] w-full bg-white mt-20" />
        </div>
      </div>
    </section>
  )
}
