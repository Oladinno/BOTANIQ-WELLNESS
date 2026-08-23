export function SectionLabel({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "cream";
}) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.22em] ${
        tone === "gold" ? "text-gold" : "text-cream/80"
      }`}
    >
      {children}
    </p>
  );
}
