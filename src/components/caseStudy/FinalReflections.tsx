'use client'

import { FaSquareCheck, FaLightbulb } from 'react-icons/fa6'

import { SectionTitle } from './SectionTitle'
import { CasesMap } from '@/lib/constants'
import { SlideInSection } from '../animations'

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
            <SlideInSection key={text}>
              <p>{text}</p>
            </SlideInSection>
          ))}
          {url === '' ? null : (
            <SlideInSection>
              <p>
                Live Website:{' '}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 text-primary hover:font-bold">
                  {url}
                </a>
              </p>
            </SlideInSection>
          )}
          <SlideInSection>
            <h3 className="text-center pt-8">{subHeader}</h3>
          </SlideInSection>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 py-4 pb-20 px-4">
            {img.map((src, index) => (
              <SlideInSection key={src}>
                <img
                  src={src}
                  alt={`Design showcase ${index + 1}`}
                  className="w-full h-auto max-h-[50vh] min-h-[200px] object-contain"
                  loading={index >= 2 ? 'lazy' : 'eager'}
                />
              </SlideInSection>
            ))}
          </div>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          <div className="space-y-4">
            <SlideInSection>
              <h4 className="flex text-lg text-primary gap-2 items-center">
                <FaSquareCheck size={18} className="text-primary" />
                Key Achievements
              </h4>
            </SlideInSection>
            <ul className="space-y-3 list-disc pl-4">
              {achievments.map(achievment => (
                <SlideInSection key={achievment}>
                  <li>{achievment}</li>
                </SlideInSection>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SlideInSection>
              <h4 className="flex text-lg text-primary gap-2 items-center">
                <FaLightbulb size={18} className="text-yellow-500" />
                Lessons Learned
              </h4>
            </SlideInSection>
            <ul className="space-y-3 list-disc pl-4">
              {lessons.map(lesson => (
                <SlideInSection key={lesson}>
                  <li>{lesson}</li>
                </SlideInSection>
              ))}
            </ul>
          </div>
        </article>
        {feedback === '' ? null : (
          <SlideInSection>
            <article className="p-6 max-w-4xl bg-background-subtle mx-auto rounded-xl shadow-xl space-y-4">
              <h4 className="text-lg">Client Feedback</h4>
              <p>{feedback}</p>
              <p>- {client}</p>
            </article>
          </SlideInSection>
        )}
        <div>
          <div className="h-[1px] w-full bg-white mt-20" />
        </div>
      </div>
    </section>
  )
}
