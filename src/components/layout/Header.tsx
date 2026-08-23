"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Lock, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  {
    href: "/research",
    label: "Research",
    children: [
      { href: "/research", label: "Our Research" },
      {
        href: "/research/community-health",
        label: "Community Health Intelligence",
      },
    ],
  },
  {
    href: "/wellness",
    label: "Wellness",
    children: [
      { href: "/wellness", label: "Wellness Overview" },
      { href: "/wellness#solutions", label: "Solutions" },
    ],
  },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-forest/10 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Logo compact />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[13px] tracking-wide transition-colors ${
                    isActive(pathname, link.href)
                      ? "text-forest underline decoration-gold decoration-1 underline-offset-[10px]"
                      : "text-forest/80 hover:text-forest"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-1 rounded-md border border-forest/10 bg-cream py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-forest/85 hover:bg-cream-deep hover:text-forest"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-[13px] tracking-wide transition-colors ${
                  isActive(pathname, link.href)
                    ? "text-forest underline decoration-gold decoration-1 underline-offset-[10px]"
                    : "text-forest/80 hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/research-hub"
            className="hidden items-center gap-2 rounded-md bg-forest px-3.5 py-2.5 text-xs font-medium tracking-wide text-cream transition hover:bg-forest-mid sm:inline-flex"
          >
            <Lock className="h-3.5 w-3.5 text-gold" />
            ResearchHub Login
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gold xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <Link
              href="/research-hub"
              className="mb-2 inline-flex items-center justify-center gap-2 rounded-md bg-forest px-4 py-3 text-sm text-cream"
            >
              <Lock className="h-4 w-4 text-gold" />
              ResearchHub Login
            </Link>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-2 py-3 text-left text-sm text-forest"
                    onClick={() =>
                      setMobileDropdown((v) =>
                        v === link.label ? null : link.label,
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        mobileDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === link.label && (
                    <div className="mb-2 ml-3 border-l border-gold/40 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-muted"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-3 text-sm text-forest"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
