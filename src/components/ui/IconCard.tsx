import type { LucideIcon } from "lucide-react";

export function IconCard({
  icon: Icon,
  title,
  description,
  layout = "stack",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  layout?: "stack" | "row";
}) {
  if (layout === "row") {
    return (
      <article className="flex gap-4 rounded-lg border border-forest/10 bg-cream/60 p-5 transition duration-300 hover:border-gold/40 hover:bg-cream">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-medium text-forest">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-lg border border-forest/10 bg-cream-deep/50 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 text-gold">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-semibold text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
