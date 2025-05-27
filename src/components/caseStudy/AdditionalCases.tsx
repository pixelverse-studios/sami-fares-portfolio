import Image from 'next/image'
import Link from 'next/link'

type Case = {
  title: string
  img: string
  route: string
}

interface AdditionalCasesProps {
  cases: Case[]
}

export default function AdditionalCases({ cases }: AdditionalCasesProps) {
  return (
    <section>
      <div className="section">
        <h3 className="text-text-heading text-center">
          View More Case Studies
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {cases.map(item => (
            <Link key={item.route} href={item.route}>
              <div className="flex flex-col gap-3 justify-center items-center group max-w-sm">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                  src={item.img}
                  alt=""
                />
                <p className="group-hover:text-white transition-colors">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
