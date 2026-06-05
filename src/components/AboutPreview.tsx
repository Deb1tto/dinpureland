import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function AboutPreview() {
  return (
    <section id="profile" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="01" title="Profile" label="静けさ / About" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="border hairline bg-[var(--color-paper)] p-3 shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-beige)]">
              <Image
                src="/profile/profile-aki.jpg"
                alt="Aki Chen by the beach"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="border-t hairline pt-5">
            <p className="mb-10 max-w-xs text-[11px] uppercase leading-6 tracking-[0.22em] text-[var(--color-ash)]">
              Aki Chen / UCSB / Computer Science
            </p>
            <p className="max-w-xl text-sm font-light leading-8 tracking-[0.05em] text-[var(--color-muted)]">
              I am a Computer Science student at UCSB, interested in agent development and machine learning. This profile is a quiet place for my technical direction, personal notes, and the small interests that shape how I build.
            </p>
            <div className="mt-12 grid gap-4 border-t hairline pt-5 text-xs uppercase tracking-[0.18em] text-[var(--color-ash)] sm:grid-cols-3">
              <span>Agent Development</span>
              <span>Machine Learning</span>
              <span>Personal Archive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
