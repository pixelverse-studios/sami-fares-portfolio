import { SectionTitle } from './SectionTitle'

interface ProblemFramingProps {
  items: string[]
  header: string
}

export default function ProblemFraming({ items, header }: ProblemFramingProps) {
  return (
    <section className="halfPage">
      <div className="section">
        <SectionTitle position="0.0" header={header} />
        <div className="space-y-4">
          {items.map(text => (
            <p className="text-sm" key={text}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
