import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/research", label: "Research" },
  { href: "/wellness", label: "Wellness" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal & Privacy" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-5 text-center text-xs tracking-wide text-cream/80 lg:px-8">
        {links.map((link, i) => (
          <span key={link.href} className="inline-flex items-center gap-3">
            <Link href={link.href} className="transition hover:text-gold">
              {link.label}
            </Link>
            {i < links.length - 1 && (
              <span className="text-cream/30" aria-hidden>
                |
              </span>
            )}
          </span>
        ))}
      </div>
    </footer>
  );
}
