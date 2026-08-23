import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Handshake,
  Leaf,
  Microscope,
  Search,
  ShieldCheck,
  TestTubes,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconCard } from "@/components/ui/IconCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const workItems = [
  {
    icon: Leaf,
    title: "Botanical Discovery",
    description:
      "Documenting African botanicals and traditional knowledge with cultural respect.",
  },
  {
    icon: Microscope,
    title: "Scientific Validation",
    description:
      "Applying modern methods to test composition, activity, and relevance.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Quality",
    description:
      "Prioritizing safety frameworks before claims, scale, or commercialization.",
  },
  {
    icon: Utensils,
    title: "Nutrition & Microbiome",
    description:
      "Connecting plant diversity, diet patterns, and functional wellness outcomes.",
  },
  {
    icon: FlaskConical,
    title: "Formulation & Testing",
    description:
      "Translating validated insight into carefully developed prototype solutions.",
  },
  {
    icon: Handshake,
    title: "Responsible Commercialization",
    description:
      "Moving only when need, evidence, and community benefit align.",
  },
];

const pathway = [
  { icon: Leaf, label: "Discover" },
  { icon: ShieldCheck, label: "Authenticate" },
  { icon: Microscope, label: "Research" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: TestTubes, label: "Formulate" },
  { icon: Search, label: "Test" },
  { icon: Handshake, label: "Commercialize" },
];

export const metadata = {
  title: "What We Do",
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
            <SectionLabel>What We Do</SectionLabel>
            <h1 className="mt-4 font-serif text-4xl leading-[1.15] text-forest sm:text-5xl">
              From botanical knowledge to responsible solutions.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              We investigate African botanicals—including traditional Agbo
              practices—and apply science to understand potential, ensure
              safety, and develop wellness pathways with integrity.
            </p>
            <div className="mt-8">
              <Button href="#pathway">
                Explore Our Approach
                <ArrowRight className="h-4 w-4 text-gold" />
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1400&q=80"
              alt="Botanical laboratory research desk"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl text-forest sm:text-4xl">
            Our work connects discovery, science and application.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="pathway" className="bg-forest px-4 py-16 text-cream lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">
            Our development pathway
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-2">
            {pathway.map((step, index) => (
              <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 text-gold">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs tracking-wide text-cream/85">
                    {step.label}
                  </span>
                </div>
                {index < pathway.length - 1 && (
                  <span className="mb-5 hidden text-gold sm:inline" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm tracking-wide text-cream/80 sm:text-base">
            Need before product. Evidence before claims. Safety before
            commercialization.
          </p>
        </div>
      </section>
    </>
  );
}
