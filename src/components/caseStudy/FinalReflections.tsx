import { FaSquareCheck, FaLightbulb } from 'react-icons/fa6'

import Image from 'next/image'
import { SectionTitle } from './SectionTitle'

interface FinalReflectionsProps {
  description: string[]
  url: string
  achievments: string[]
  lessons: string[]
  feedback: string
  client: string
  img: string
}

export default function FinalReflections({
  description,
  url,
  achievments,
  lessons,
  feedback,
  client,
  img
}: FinalReflectionsProps) {
  return (
    <section>
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
          <h4 className="text-center pt-8">Final Homepage Design</h4>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full max-w-2xl mx-auto"
            src={img}
            alt=""
          />
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
        <article className="p-6 max-w-4xl bg-background-subtle mx-auto rounded-xl shadow-xl space-y-4">
          <h4 className="text-lg">Client Feedback</h4>
          <p>{feedback}</p>
          <p>- {client}</p>
        </article>
        <div>
          <div className="h-[1px] w-full bg-white mt-20" />
        </div>
      </div>
    </section>
  )
}
