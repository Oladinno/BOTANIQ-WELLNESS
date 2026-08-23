import Image from "next/image";
import { ArrowRight, BarChart3, FlaskConical, Leaf, Microscope, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BotanicalHeroArt } from "@/components/graphics/BotanicalHeroArt";
import { SectionLabel } from "@/components/ui/SectionLabel";

const processSteps = [
  {
    icon: Leaf,
    title: "Ethnobotanical Insight",
    description:
      "We begin with traditional knowledge and place-based botanical heritage.",
  },
  {
    icon: Microscope,
    title: "Scientific Validation",
    description:
      "Modern methods test, verify, and deepen what tradition has preserved.",
  },
  {
    icon: BarChart3,
    title: "Data & Discovery",
    description:
      "Evidence is structured into insights that guide responsible decisions.",
  },
  {
    icon: Sprout,
    title: "Sustainable Impact",
    description:
      "Outcomes serve communities, ecosystems, and long-term wellness.",
  },
];

const pillars = [
  {
    icon: Leaf,
    title: "Botanical Expertise",
    description:
      "Deep knowledge of African flora, traditional use, and biodiversity.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Rigor",
    description:
      "Evidence-led methods that turn insight into validated understanding.",
  },
  {
    icon: Users,
    title: "Collaborative by Design",
    description:
      "Partnerships with researchers, communities, and wellness innovators.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,156,106,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(13,44,36,0.06),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <h1 className="font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-6xl">
              Science Meets Tradition.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              BOTANIQ WELLNESS™ unites African botanical heritage with rigorous
              science to advance everyday wellness that is safe, relevant, and
              sustainable.
            </p>
            <div className="mt-8">
              <Button href="/partner">
                Let&apos;s Collaborate
                <ArrowRight className="h-4 w-4 text-gold" />
              </Button>
            </div>
          </div>
          <div className="animate-fade-in delay-200 relative mx-auto aspect-square w-full max-w-lg lg:max-w-none">
            <BotanicalHeroArt className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="border-t border-forest/10 bg-cream px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/70 sm:w-20" />
            <SectionLabel>Our Research Process</SectionLabel>
            <span className="h-px w-12 bg-gold/70 sm:w-20" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <article className="h-full rounded-lg border border-forest/10 bg-cream-deep/40 p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-forest">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </article>
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-gold lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooted banner */}
      <section className="bg-forest px-4 py-16 text-cream lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl leading-tight text-gold sm:text-4xl">
              ROOTED IN AFRICA.
              <br />
              FOCUSED ON THE FUTURE.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80">
              We bridge ancestral botanical knowledge with contemporary science
              to build wellness solutions that honor place, people, and evidence.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* subtle image strip for atmosphere */}
      <section className="relative h-40 overflow-hidden sm:h-52">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80"
          alt="Botanical research materials"
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/30" />
      </section>
    </>
  );
}
