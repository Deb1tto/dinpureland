import { SectionHeader } from "./SectionHeader";

const links = [
  {
    label: "Email",
    value: "pengyu_chen@ucsb.edu",
    href: "mailto:pengyu_chen@ucsb.edu",
  },
  {
    label: "Phone",
    value: "805 722 6572",
    href: "tel:+18057226572",
  },
  {
    label: "GitHub",
    value: "github.com/Deb1tto",
    href: "https://github.com/Deb1tto",
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-10 pt-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="07" title="Contact" label="設計 / Connect" />
        <div className="border-b hairline pb-24">
          <div className="ml-auto max-w-3xl border-t hairline">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="quiet-hover grid gap-3 border-b hairline py-5 text-sm text-[var(--color-muted)] sm:grid-cols-[8rem_1fr_2rem] sm:items-center"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ash)]">
                  {link.label}
                </span>
                <span className="break-words font-light tracking-[0.05em]">{link.value}</span>
                <span className="font-serif text-xl text-[var(--color-sage)]">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
