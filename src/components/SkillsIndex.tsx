import { SectionHeader } from "./SectionHeader";

const skills = [
  ["01", "Direction", "Placeholder / Placeholder / Placeholder"],
  ["02", "Interface", "Placeholder / Placeholder / Placeholder"],
  ["03", "Systems", "Placeholder / Placeholder / Placeholder"],
  ["04", "Writing", "Placeholder / Placeholder / Placeholder"],
  ["05", "Code", "Placeholder / Placeholder / Placeholder"],
];

export function SkillsIndex() {
  return (
    <section id="index" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="05" title="Index" label="余白 / System" />
        <div className="grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-start">
          <div className="min-h-80 border hairline bg-[var(--color-paper)] p-7 shadow-[var(--shadow-soft)]">
            <p className="mb-24 max-w-xs text-xs uppercase leading-6 tracking-[0.22em] text-[var(--color-muted)]">
              Index is the structured map of the site: skills, interests, tools, writing, and future pages arranged like a table of contents.
            </p>
            <div className="flex items-end justify-between border-t hairline pt-5">
              <span className="font-serif text-6xl text-[var(--color-sage)]">目</span>
              <span className="text-xs uppercase tracking-[0.22em] text-[var(--color-ash)]">Archive view</span>
            </div>
          </div>
          <div className="border-t hairline">
            {skills.map(([number, label, detail]) => (
              <div key={label} className="grid grid-cols-[4rem_1fr] gap-5 border-b hairline py-5 md:grid-cols-[5rem_0.7fr_1fr]">
                <span className="font-mono text-xs tracking-[0.22em] text-[var(--color-sage)]">{number}</span>
                <h3 className="font-serif text-2xl font-normal tracking-[0.03em]">{label}</h3>
                <p className="text-sm font-light leading-7 tracking-[0.05em] text-[var(--color-muted)] md:text-right">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
