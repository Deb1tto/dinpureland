import { SectionHeader } from "./SectionHeader";

export function SkillsIndex() {
  return (
    <section id="index" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="06" title="余白" label="Still Building" />
        <div className="min-h-[46vh] border-t hairline pt-8">
          <div className="ml-auto max-w-xl border hairline bg-[var(--color-paper)] p-8 shadow-[var(--shadow-soft)]">
            <p className="mb-20 text-[11px] uppercase leading-6 tracking-[0.22em] text-[var(--color-ash)]">
              This space is intentionally left open while the site continues to take shape.
            </p>
            <div className="flex items-end justify-between border-t hairline pt-5">
              <span className="font-serif text-6xl text-[var(--color-sage)]">余</span>
              <span className="text-xs uppercase tracking-[0.22em] text-[var(--color-ash)]">
                Under construction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
