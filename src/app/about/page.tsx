import Image from "next/image";
import { ArrowRight, FlaskConical, Leaf, Microscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconCard } from "@/components/ui/IconCard";

const features = [
  {
    icon: Leaf,
    title: "Botanical Discovery",
    description:
      "We explore Africa's rich botanical biodiversity with respect, rigor, and purpose.",
  },
  {
    icon: Microscope,
    title: "Scientific Validation",
    description:
      "We apply modern science to validate traditional knowledge and verify potential.",
  },
  {
    icon: FlaskConical,
    title: "Responsible Innovation",
    description:
      "We develop solutions that are safe, sustainable, and beneficial for communities and ecosystems.",
  },
];

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 opacity-[0.07]">
          <svg viewBox="0 0 200 200" className="h-full w-full text-cream">
            <path
              d="M20 180c40-80 60-120 90-160 20 50 40 90 70 140-50 10-100 15-160 20z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="hero-diagonal relative z-10 flex flex-col justify-center bg-forest px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
            <h1 className="animate-fade-up font-serif text-4xl leading-[1.15] text-cream sm:text-5xl lg:text-[3.4rem]">
              Rooted in <span className="text-gold">Nature.</span>
              <br />
              Proven by <span className="text-gold">Science.</span>
            </h1>
            <p className="animate-fade-up delay-100 mt-5 max-w-md text-sm tracking-wide text-cream/80 sm:text-base">
              Science Meets Tradition. Everyday Botanical Wellness.
            </p>
            <div className="animate-fade-up delay-200 mt-8">
              <Button href="/what-we-do" variant="outline">
                Discover Our Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=80"
              alt="Laboratory glassware with botanical specimens"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="animate-fade-up text-center font-serif text-3xl text-forest sm:text-4xl">
            Where tradition becomes evidence.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`animate-fade-up ${
                  i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"
                }`}
              >
                <IconCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  layout="row"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
