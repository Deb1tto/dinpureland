const hobbies = [
  {
    number: "01",
    title: "Kendo",
    jp: "剣道",
  },
  {
    number: "02",
    title: "Climbing",
    jp: "攀岩",
  },
  {
    number: "03",
    title: "Bass",
    jp: "ベース",
  },
];

export function HobbiesPreview() {
  return (
    <section id="hobbies" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <header className="mb-12 border-t hairline pt-5 md:mb-16">
          <p className="mb-8 font-mono text-[11px] tracking-[0.24em] text-[var(--color-sage)]">
            04
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[0.03em] text-[var(--color-charcoal)] md:text-5xl">
            Hobbies
          </h2>
        </header>

        <div className="grid gap-5">
          {hobbies.map((hobby) => (
            <article
              key={hobby.title}
              className="quiet-hover grid gap-8 border-t hairline bg-[rgba(251,248,241,0.46)] px-0 py-8 md:grid-cols-[5rem_1fr_7rem] md:items-center md:px-6"
            >
              <span className="font-mono text-xs tracking-[0.22em] text-[var(--color-sage)]">
                {hobby.number}
              </span>
              <h3 className="font-serif text-3xl font-normal tracking-[0.03em] text-[var(--color-charcoal)] md:text-4xl">
                {hobby.title}
              </h3>
              <span className="font-serif text-3xl text-[var(--color-sage)] md:text-right md:text-4xl">
                {hobby.jp}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
