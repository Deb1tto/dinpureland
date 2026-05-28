import { SectionHeader } from "./SectionHeader";

const hobbies = [
  {
    number: "01",
    title: "Kendo",
    jp: "剣道",
    description:
      "Practice note placeholder. A place for rhythm, posture, discipline, and the quiet structure of repetition.",
  },
  {
    number: "02",
    title: "Climbing",
    jp: "攀岩",
    description:
      "Practice note placeholder. A place for movement, route reading, body memory, and small records from each session.",
  },
];

export function HobbiesPreview() {
  return (
    <section id="hobbies" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="04" title="Hobbies" label="心身" align="end" />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <p className="max-w-xl font-serif text-4xl font-normal leading-[1.28] tracking-[0.03em] text-[var(--color-charcoal)] md:text-6xl">
            Personal practices outside the screen, archived with the same quiet visual language.
          </p>

          <div className="grid gap-5">
            {hobbies.map((hobby) => (
              <article
                key={hobby.title}
                className="quiet-hover grid gap-6 border-t hairline bg-[rgba(251,248,241,0.42)] py-6 md:grid-cols-[4rem_1fr_4rem] md:items-center"
              >
                <span className="font-mono text-xs tracking-[0.22em] text-[var(--color-sage)]">
                  {hobby.number}
                </span>
                <div>
                  <h3 className="font-serif text-4xl font-normal tracking-[0.03em]">
                    {hobby.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm font-light leading-7 tracking-[0.05em] text-[var(--color-muted)]">
                    {hobby.description}
                  </p>
                </div>
                <span className="font-serif text-4xl text-[var(--color-sage)] md:text-right">
                  {hobby.jp}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
