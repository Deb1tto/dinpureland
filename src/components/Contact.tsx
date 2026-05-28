import { SectionHeader } from "./SectionHeader";

const links = ["Email", "GitHub", "LinkedIn", "Resume"];

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-10 pt-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="07" title="Contact" label="設計 / Connect" />
        <div className="grid gap-12 border-b hairline pb-24 md:grid-cols-[1fr_1fr]">
          <p className="max-w-xl font-serif text-4xl font-normal leading-[1.28] tracking-[0.03em] md:text-6xl">
            Contact placeholder for future collaborations and conversations.
          </p>
          <div className="self-end border-t hairline">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="quiet-hover flex items-center justify-between border-b hairline py-5 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]"
              >
                <span>{link}</span>
                <span className="font-serif text-xl text-[var(--color-sage)]">↗</span>
              </a>
            ))}
          </div>
        </div>
        <footer className="flex flex-col gap-3 py-8 text-[11px] uppercase tracking-[0.22em] text-[var(--color-ash)] sm:flex-row sm:items-center sm:justify-between">
          <span>Personal portfolio prototype</span>
          <span>Warm ivory / paper / thin line</span>
        </footer>
      </div>
    </section>
  );
}
