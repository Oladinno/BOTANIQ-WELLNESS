import Image from "next/image";
import {
  ArrowRight,
  Droplets,
  Ear,
  FolderOpen,
  Heart,
  MapPin,
  Search,
  Soup,
  Stethoscope,
  Users,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconCard } from "@/components/ui/IconCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const intelligenceCards = [
  {
    icon: MapPin,
    title: "Place-Based Research",
    description:
      "Understanding needs at state, LGA, and community levels across Nigeria.",
  },
  {
    icon: Utensils,
    title: "Food & Nutrition Intelligence",
    description:
      "Examining diets, fiber, plant diversity, and food access patterns.",
  },
  {
    icon: Soup,
    title: "Botanical & Agbo Intelligence",
    description:
      "Documenting traditional botanical practices as a respectful starting point.",
  },
  {
    icon: Droplets,
    title: "Environmental Intelligence",
    description:
      "Identifying water, sanitation, and exposure factors that shape wellness.",
  },
  {
    icon: Stethoscope,
    title: "Health Referral Pathways",
    description:
      "Directing concerns toward qualified clinical and public health partners.",
  },
  {
    icon: Users,
    title: "Local Wellness Profiles",
    description:
      "Translating findings into community-relevant research reports and maps.",
  },
];

const responseFlow = [
  { icon: Ear, label: "Listen" },
  { icon: MapPin, label: "Map" },
  { icon: Search, label: "Investigate" },
  { icon: FolderOpen, label: "Classify" },
  { icon: Heart, label: "Respond" },
];

const responseTypes = [
  "Public Health",
  "Clinical Referral",
  "Nutrition Support",
  "Botanical Research",
];

export const metadata = {
  title: "Community Health Intelligence",
};

export default function CommunityHealthPage() {
  return (
    <>
      <section className="overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
            <SectionLabel>Community Health Intelligence</SectionLabel>
            <h1 className="mt-4 font-serif text-4xl leading-[1.15] text-forest sm:text-5xl">
              Understanding local needs. Developing relevant solutions.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              We study nutrition, environment, lifestyle, and traditional Agbo
              practices to build intelligence that supports appropriate,
              community-centered responses—not one-size-fits-all products.
            </p>
            <div className="mt-8">
              <Button href="#intelligence">
                Explore the Program
                <ArrowRight className="h-4 w-4 text-gold" />
              </Button>
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80"
              alt="Community health researchers in the field"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent max-lg:hidden" />

            <aside className="absolute bottom-4 right-4 w-[min(100%-2rem,240px)] rounded-md border border-gold/30 bg-forest/90 p-4 text-cream backdrop-blur-sm sm:bottom-6 sm:right-6">
              <div className="mb-3 flex items-center gap-3">
                <svg viewBox="0 0 80 80" className="h-14 w-14 text-gold" aria-hidden>
                  <path
                    d="M28 18c-8 8-12 20-10 32 6 2 14 2 20-2 2-10 0-22-6-30-2 0-3 0-4 0z M42 22c8 6 12 18 10 30-8 4-16 4-24 0 0-12 4-22 10-30 2 0 3 0 4 0z"
                    fill="currentColor"
                    opacity="0.85"
                  />
                  <circle cx="36" cy="34" r="2.5" fill="#f8f5f0" />
                  <circle cx="48" cy="42" r="2.5" fill="#f8f5f0" />
                  <circle cx="40" cy="52" r="2.5" fill="#f8f5f0" />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gold">
                    Community Insights
                  </p>
                  <p className="text-xs text-cream/80">Key Indicators</p>
                </div>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-center justify-between gap-2">
                  <span>Plant Diversity</span>
                  <span className="text-gold">★★★★★</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Nutrition Indicators</span>
                  <span className="text-gold">★★★★★★★★</span>
                </div>
              </div>
              <div className="mt-3 border-t border-cream/15 pt-3">
                <p className="text-[10px] uppercase tracking-[0.14em] text-gold">
                  Multi-Factor View
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-cream/75">
                  Food · Environment · Lifestyle · Traditional Practices
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="intelligence" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Local intelligence for responsible action.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {intelligenceCards.map((card) => (
              <IconCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-4 py-16 text-cream lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h2 className="font-serif text-3xl text-gold sm:text-4xl">
                From community insight to appropriate response
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {responseFlow.map((step, index) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold">
                        <step.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs text-cream/85">{step.label}</span>
                    </div>
                    {index < responseFlow.length - 1 && (
                      <span className="mb-5 text-gold" aria-hidden>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-wide text-gold/90">
                {responseTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-gold/40 px-3 py-1.5"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              {["BOTANIQ™ HealthMap", "BOTANIQ™ Local Wellness Profile"].map(
                (label) => (
                  <div
                    key={label}
                    className="flex flex-1 flex-col items-center justify-center rounded-full border border-gold/50 px-6 py-8 text-center"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-gold">{label}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          <p className="mt-12 text-center font-serif text-xl text-gold sm:text-2xl">
            “Not every health problem should become a product.”
          </p>
        </div>
      </section>
    </>
  );
}
