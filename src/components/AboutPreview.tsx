import { SectionHeader } from "./SectionHeader";

export function AboutPreview() {
  return (
    <section id="profile" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="01" title="Profile" label="静けさ / About" />
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <aside className="border-t hairline pt-5 text-xs uppercase tracking-[0.2em] text-[var(--color-ash)]">
            <p>Based in placeholder</p>
            <p className="mt-3">Independent practice</p>
          </aside>
          <div className="grid gap-8 lg:grid-cols-2">
            <p className="font-serif text-3xl font-normal leading-[1.35] tracking-[0.03em] text-[var(--color-charcoal)] md:text-4xl lg:text-5xl">
              Design statement placeholder with calm proportion, tactile rhythm, and restrained visual confidence.
            </p>
            <p className="self-end text-sm font-light leading-8 tracking-[0.05em] text-[var(--color-muted)]">
              About placeholder. This area is intentionally quiet and spacious. Later it can hold a concise biography, working method, selected interests, or a short personal note.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
