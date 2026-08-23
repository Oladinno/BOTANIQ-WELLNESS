import Image from "next/image";
import {
  ArrowRight,
  FlaskConical,
  HandHeart,
  Leaf,
  Scale,
  Shield,
  Soup,
  Users,
  Wheat,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconCard } from "@/components/ui/IconCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const programs = [
  {
    icon: Leaf,
    title: "Botanical & Natural Products",
    description:
      "Characterizing plants, extracts, and traditional preparations with scientific care.",
  },
  {
    icon: Wheat,
    title: "Nutrition & Functional Foods",
    description:
      "Studying dietary patterns and plant-based opportunities for everyday wellness.",
  },
  {
    icon: Soup,
    title: "Microbiome & Fermentation",
    description:
      "Exploring microbial ecosystems that connect food, plants, and health outcomes.",
  },
  {
    icon: Shield,
    title: "Safety & Toxicology",
    description:
      "Evaluating risk, purity, and responsible thresholds before any application.",
  },
  {
    icon: FlaskConical,
    title: "Formulation Science",
    description:
      "Building prototypes that translate validated insight into usable formats.",
  },
  {
    icon: Users,
    title: "Community Health Research",
    description:
      "Generating place-based intelligence that informs relevant local responses.",
  },
];

const principles = [
  { icon: Scale, title: "Scientific Rigor" },
  { icon: HandHeart, title: "Ethical Research" },
  { icon: Leaf, title: "Cultural Respect" },
  { icon: Users, title: "Practical Relevance" },
];

export const metadata = {
  title: "Our Research",
};

export default function ResearchPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
            <SectionLabel>Our Research</SectionLabel>
            <h1 className="mt-4 font-serif text-4xl leading-[1.15] text-forest sm:text-5xl">
              Investigating nature. Building evidence. Creating possibilities.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Our research brings botanical knowledge and nutrition science
              together to generate evidence that can guide responsible wellness
              innovation across Africa.
            </p>
            <div className="mt-8">
              <Button href="#programs">
                Explore Research Programs
                <ArrowRight className="h-4 w-4 text-gold" />
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
              alt="Researchers examining botanical samples in a laboratory"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section id="programs" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Our research programs
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <IconCard
                key={program.title}
                icon={program.icon}
                title={program.title}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-4 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-gold/70 bg-cream text-center">
            <div>
              <div className="font-serif text-2xl font-semibold text-forest">B</div>
              <div className="mt-1 px-2 text-[8px] uppercase leading-tight tracking-wider text-muted">
                Institute of Botanical & Nutritional Sciences
              </div>
            </div>
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <SectionLabel>The Research Engine</SectionLabel>
            <h3 className="mt-2 font-serif text-2xl text-forest sm:text-3xl">
              BOTANIQ™ Institute of Botanical & Nutritional Sciences
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A dedicated research engine advancing ethnobotany, nutrition
              science, and community health intelligence for Africa.
            </p>
          </div>
          <Button href="/about" variant="ghost" className="shrink-0">
            About the Institute
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="bg-forest px-4 py-14 text-cream lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-serif text-2xl text-gold sm:text-3xl">
            Our research principles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`flex flex-col items-center gap-3 px-4 text-center ${
                  index < principles.length - 1
                    ? "lg:border-r lg:border-gold/30"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <principle.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium tracking-wide text-gold">
                  {principle.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
