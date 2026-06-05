const work = {
  title: "Fitted",
  type: "Outfit recommender",
  year: "2026",
  href: "https://github.com/ucsb-cs148-w26/pj12-outfit-recommender",
  liveHref: "https://fitted-outfits.vercel.app/",
  description:
    "A wardrobe and outfit recommendation web app. Users can add clothing items, choose an occasion, receive outfit suggestions, and save feedback so recommendations can improve over time.",
};

export function WorksPreview() {
  return (
    <section id="works" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <header className="mb-12 border-t hairline pt-5 md:mb-16">
          <p className="mb-8 font-mono text-[11px] tracking-[0.24em] text-[var(--color-sage)]">
            02
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[0.03em] text-[var(--color-charcoal)] md:text-5xl">
            Coding Projects
          </h2>
        </header>

        <article
          className="quiet-hover group grid gap-8 border-t hairline bg-[rgba(251,248,241,0.46)] px-0 py-8 md:grid-cols-[5rem_1fr_1.1fr_7rem] md:items-start md:px-6"
        >
          <span className="font-mono text-xs tracking-[0.22em] text-[var(--color-sage)]">01</span>
          <div>
            <h3 className="font-serif text-3xl font-normal tracking-[0.03em] text-[var(--color-charcoal)] md:text-4xl">
              {work.title}
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-ash)]">
              {work.type}
            </p>
          </div>
          <p className="max-w-lg text-sm font-light leading-7 tracking-[0.05em] text-[var(--color-muted)]">
            {work.description}
          </p>
          <span className="text-left font-mono text-xs tracking-[0.18em] text-[var(--color-muted)] md:text-right">
            {work.year}
          </span>
        </article>
        <div className="ml-auto mt-5 flex w-fit gap-8 border-t hairline pt-4 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          <a
            href={work.liveHref}
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-55"
          >
            Live App ↗
          </a>
          <a
            href={work.href}
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-55"
          >
            Source ↗
          </a>
        </div>
      </div>
    </section>
  );
}
