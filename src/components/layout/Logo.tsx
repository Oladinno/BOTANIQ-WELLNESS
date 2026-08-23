import Link from "next/link";

export function Logo({
  tone = "dark",
  showTagline = true,
  compact = false,
}: {
  tone?: "dark" | "light" | "gold";
  showTagline?: boolean;
  compact?: boolean;
}) {
  const nameColor =
    tone === "gold"
      ? "text-gold"
      : tone === "light"
        ? "text-cream"
        : "text-forest";
  const tagColor = tone === "light" ? "text-cream/70" : "text-muted";

  return (
    <Link href="/" className="group flex items-center gap-3">
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-full border border-gold/70 ${
          compact ? "h-10 w-10" : "h-12 w-12"
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 48 48" className="h-[72%] w-[72%]">
          <path
            d="M24 10c-1.5 5-6.5 8.5-10 10 5 1 8.5 5 10 10 1.5-5 5-9 10-10-3.5-1.5-8.5-5-10-10z"
            fill="#b89c6a"
          />
          <text
            x="24"
            y="33"
            textAnchor="middle"
            fill="#0d2c24"
            fontSize="16"
            fontFamily="var(--font-cormorant), Georgia, serif"
            fontWeight="600"
          >
            B
          </text>
        </svg>
      </div>
      <div className="leading-tight">
        <div
          className={`font-serif text-lg font-semibold tracking-[0.04em] ${nameColor} sm:text-xl`}
        >
          BOTANIQ WELLNESS™
        </div>
        {showTagline && (
          <div
            className={`mt-0.5 hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] sm:flex ${tagColor}`}
          >
            <span className="h-px w-4 bg-gold/60" />
            Africa&apos;s Botanical Wellness Company
            <span className="h-px w-4 bg-gold/60" />
          </div>
        )}
      </div>
    </Link>
  );
}
