export default function HomeHero() {
  return (
    <section className="halfPage">
      <div className="section grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-end">
        <article className="flex flex-col gap-6 justify-center">
          <h2>
            Hi, I’m <span className="text-primary">Sami</span> — a UX designer
            who makes things easy to use and hard to ignore.
          </h2>
          <p className="text-text-body">
            I create experiences your users will appreciate.
          </p>
        </article>
        <img src="/assets/NewAvatar.png" alt="Avatar" />
      </div>
    </section>
  )
}
