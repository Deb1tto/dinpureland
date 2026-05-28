import { SectionHeader } from "./SectionHeader";

const works = [
  ["Selected Work 01", "Editorial system", "2026", "Short project description placeholder"],
  ["Selected Work 02", "Digital product", "2025", "Short project description placeholder"],
  ["Selected Work 03", "Identity study", "2025", "Short project description placeholder"],
];

export function WorksPreview() {
  return (
    <section id="works" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="02" title="Selected Works" label="制作 / Archive" align="end" />
        <div className="space-y-5">
          {works.map(([title, type, year, description], index) => (
            <article
              key={title}
              className="quiet-hover group grid gap-8 border-t hairline bg-[rgba(251,248,241,0.46)] px-0 py-7 md:grid-cols-[5rem_1.1fr_0.8fr_7rem] md:items-center md:px-6"
            >
              <span className="font-mono text-xs tracking-[0.22em] text-[var(--color-sage)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-3xl font-normal tracking-[0.03em] md:text-5xl">
                  {title}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-ash)]">{type}</p>
              </div>
              <p className="max-w-sm text-sm font-light leading-7 tracking-[0.05em] text-[var(--color-muted)]">
                {description}
              </p>
              <span className="text-left font-mono text-xs tracking-[0.18em] text-[var(--color-muted)] md:text-right">
                {year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
