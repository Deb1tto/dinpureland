import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { mainNavItems } from "@/lib/navigation";

export function Hero() {
  return (
    <section className="relative min-h-screen px-4 pb-20 pt-5 sm:px-6 lg:px-8">
      <div className="section-shell">
        <header className="fade-up flex items-center justify-between border-b hairline pb-5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span className="h-px w-10 bg-[var(--line-soft)]" aria-hidden="true" />
          <nav className="hidden items-center gap-5 md:flex lg:gap-8">
            {mainNavItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition-opacity hover:opacity-55">
                {label}
              </Link>
            ))}
          </nav>
          <MobileNav items={mainNavItems} />
          <span className="h-px w-10 bg-[var(--line-soft)]" aria-hidden="true" />
        </header>

        <div className="grid min-h-[calc(100vh-100px)] grid-cols-1 gap-14 py-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
          <div className="fade-up fade-up-delay-1 max-w-3xl">
            <p className="mb-8 max-w-xs border-l hairline pl-4 text-xs leading-6 tracking-[0.18em] text-[var(--color-muted)]">
              Pengyu Chen / 20
              <br />
              Computer Science student at UCSB.
            </p>
            <h1 className="hero-mark text-[clamp(5.4rem,14vw,11.5rem)] font-normal leading-[0.9] tracking-[0.02em] text-[rgba(36,35,31,0.72)]">
              陳
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-[5rem_1fr] gap-6 border-t hairline pt-6">
              <span className="font-mono text-base tracking-normal text-[var(--color-sage)]">Aki</span>
              <p className="text-sm font-light leading-7 tracking-[0.05em] text-[var(--color-muted)]">
                My personal website for notes, photos, projects, and memories.
              </p>
            </div>
          </div>

          <div className="fade-up fade-up-delay-2 relative min-h-[430px] md:min-h-[610px]">
            <div className="absolute right-0 top-0 h-full w-[72%] border hairline bg-[var(--color-paper)] shadow-[var(--shadow-soft)]" />
            <div className="absolute right-[9%] top-[9%] h-[68%] w-[54%] border hairline bg-[linear-gradient(180deg,rgba(196,204,208,0.22),rgba(222,211,193,0.2))]" />
            <div className="absolute bottom-[11%] left-[6%] h-[44%] w-[52%] border hairline bg-[var(--color-ivory)] shadow-[0_18px_50px_rgba(65,56,43,0.07)] quiet-hover">
              <div className="grid h-full grid-cols-6 grid-rows-6">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span key={index} className="border-r border-b border-[rgba(36,35,31,0.07)]" />
                ))}
              </div>
            </div>
            <div className="absolute right-[13%] top-[20%] flex h-36 w-36 items-center justify-center border hairline bg-[rgba(135,147,127,0.16)] font-serif text-5xl text-[var(--color-charcoal)] md:h-44 md:w-44 md:text-6xl">
              01
            </div>
            <p className="jp-label absolute left-0 top-[15%] font-serif text-sm text-[var(--color-ash)]">
              秋 / 記憶
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
