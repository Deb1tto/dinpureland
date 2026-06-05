import books from "@/data/books.json";

export function LiteraturePreview() {
  return (
    <section id="literature" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <header className="mb-12 border-t hairline pt-5 md:mb-16">
          <p className="mb-8 font-mono text-[11px] tracking-[0.24em] text-[var(--color-sage)]">
            05
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[0.03em] text-[var(--color-charcoal)] md:text-5xl">
            Literature
          </h2>
        </header>

        <div className="border-t hairline">
          {books.map((book) => (
            <article
              key={book.number}
              className="grid gap-8 border-b hairline py-7 md:grid-cols-[5rem_1fr_1.2fr] md:items-start"
            >
              <span className="font-mono text-xs tracking-[0.22em] text-[var(--color-sage)]">
                {book.number}
              </span>
              <div>
                <h3 className="font-serif text-3xl font-normal tracking-[0.03em] text-[var(--color-charcoal)]">
                  {book.title}
                </h3>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--color-ash)]">
                  {book.author}
                </p>
              </div>
              <p className="max-w-lg text-sm font-light leading-7 tracking-[0.05em] text-[var(--color-muted)]">
                {book.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
