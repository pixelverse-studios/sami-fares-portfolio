import { SectionTitle } from './SectionTitle'

interface ProjectOverviewProps {
  client: string
  context: string[]
  deliverables: string[]
  roles: string[]
  timeline: string
  tools: string[]
}

export default function ProjectOverview({
  client,
  context,
  deliverables,
  roles,
  timeline,
  tools
}: ProjectOverviewProps) {
  return (
    <section className="halfPage text-sm">
      <div className="section">
        <SectionTitle header="Project Overview" position="0.1" />
        <div className="space-y-4">
          <h4 className="text-primary mb-3 text-lg">Context</h4>
          <article className="space-y-4">
            {context.map(text => (
              <p key={text}>{text}</p>
            ))}
          </article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="space-y-4">
              <h4 className="text-primary mb-3 text-lg">My Role</h4>
              <div>
                {roles.map(role => (
                  <span key={role}>{role}</span>
                ))}
              </div>
              <h4 className="text-primary mb-3 text-lg">Client</h4>
              <p>{client}</p>
              <h4 className="text-primary mb-3 text-lg">Deliverables</h4>
              <div className="space-y-2">
                {deliverables.map(deliverable => (
                  <p key={deliverable}>{deliverable}</p>
                ))}
              </div>
            </article>
            <article className="space-y-4">
              <h4 className="text-primary mb-3 text-lg">Timeline</h4>
              <p>{timeline}</p>
              <h4 className="text-primary mb-3 text-lg">Tools</h4>
              <p>{tools.join().replaceAll(',', ', ')}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
