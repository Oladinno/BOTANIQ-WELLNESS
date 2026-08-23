import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300";

  const variants = {
    solid:
      "bg-forest text-cream hover:bg-forest-mid shadow-sm hover:shadow-md",
    outline:
      "border border-gold text-gold hover:bg-gold/10",
    ghost:
      "text-gold hover:text-gold-soft underline-offset-4 hover:underline",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
