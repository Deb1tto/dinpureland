"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = readonly [string, string];

export function MobileNav({ items }: Readonly<{ items: readonly NavItem[] }>) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="mobile-nav-trigger"
        aria-expanded={isOpen}
        aria-label="Open page navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>Menu</span>
        <span className="mobile-nav-lines" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        className={`mobile-nav-backdrop ${isOpen ? "mobile-nav-backdrop-open" : ""}`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <aside className={`mobile-nav-panel ${isOpen ? "mobile-nav-panel-open" : ""}`}>
        <div className="mobile-nav-panel-header">
          <span>Aki Chen</span>
          <button type="button" aria-label="Close page navigation" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>

        <nav className="mobile-nav-list" aria-label="Mobile page navigation">
          {items.map(([label, href], index) => {
            const isCurrent = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`mobile-nav-link ${isCurrent ? "mobile-nav-link-current" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
