"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  {
    href: "/science",
    label: "Research",
    children: [
      { href: "/science", label: "Our Research" },
      { href: "/community-health", label: "Community Health Intelligence" },
    ],
  },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/researchhub", label: "ResearchHub" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="BOTANIQ WELLNESS home">
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
  const [researchOpen, setResearchOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
    setResearchOpen(false);
  }, [pathname]);

  return (
    <header className={`nav-shell ${isHome ? "" : "inner-nav"}`}>
      <Brand />
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) =>
          link.children ? (
            <div key={link.href} className="nav-dropdown">
              <Link className="nav-parent" href={link.href}>
                {link.label}
              </Link>
              <div className="nav-dropdown-menu">
                {link.children.map((child) => (
                  <Link key={child.href} href={child.href}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ),
        )}
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
        {links.map((link) =>
          link.children ? (
            <div key={link.href}>
              <button
                type="button"
                onClick={() => setResearchOpen((v) => !v)}
                style={{
                  background: "none",
                  border: 0,
                  font: "inherit",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                {link.label} {researchOpen ? "−" : "+"}
              </button>
              {researchOpen &&
                link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    style={{ display: "block", padding: "10px 0 0 12px" }}
                  >
                    {child.label}
                  </Link>
                ))}
            </div>
          ) : (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ),
        )}
        <Link href="/partnerships#contact">Let&apos;s collaborate →</Link>
      </div>
    </header>
  );
}
