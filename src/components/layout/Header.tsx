"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/science", label: "Our science" },
  { href: "/focus-areas", label: "Focus areas" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/researchhub", label: "ResearchHub" },
];

function Brand({ className = "" }: { className?: string }) {
  return (
    <Link className={`brand ${className}`} href="/" aria-label="BOTANIQ WELLNESS home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span>
        BOTANIQ <b>WELLNESS</b>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`nav-shell ${isHome ? "" : "inner-nav"}`}>
      <Brand />
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/partnerships#contact">
        Let&apos;s collaborate <span>→</span>
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "☰"}
      </button>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link href="/partnerships#contact">Let&apos;s collaborate →</Link>
      </div>
    </header>
  );
}

export { Brand };
