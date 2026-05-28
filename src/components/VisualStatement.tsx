import { SectionHeader } from "./SectionHeader";

export function VisualStatement() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="06" title="Statement" label="記憶 / Visual" align="end" />
        <div className="relative border-y hairline py-16 md:py-24">
          <p className="mx-auto max-w-5xl text-balance text-center font-serif text-4xl font-normal leading-[1.22] tracking-[0.03em] text-[var(--color-charcoal)] md:text-7xl">
            Visual statement placeholder for a quiet personal practice shaped by atmosphere, structure, and restraint.
          </p>
          <span className="jp-label absolute left-0 top-10 hidden font-serif text-sm text-[var(--color-ash)] md:block">
            静けさ
          </span>
          <span className="jp-label absolute bottom-10 right-0 hidden font-serif text-sm text-[var(--color-ash)] md:block">
            余白
          </span>
        </div>
      </div>
    </section>
  );
}
