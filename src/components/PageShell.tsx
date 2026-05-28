import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Profile", "/profile"],
  ["Works", "/works"],
  ["Photography", "/photography"],
  ["Hobbies", "/hobbies"],
  ["Index", "/index"],
  ["Contact", "/contact"],
];

export function PageShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <div className="section-shell px-4 pt-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b hairline pb-5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span className="h-px w-10 bg-[var(--line-soft)]" aria-hidden="true" />
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition-opacity hover:opacity-55">
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="md:hidden">
            Aki Chen
          </Link>
          <span className="h-px w-10 bg-[var(--line-soft)]" aria-hidden="true" />
        </header>
      </div>
      {children}
    </main>
  );
}
