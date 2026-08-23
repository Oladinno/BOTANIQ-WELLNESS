import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = { title: "Wellness" };

export default function WellnessPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
      <SectionLabel>Wellness</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">
        Everyday botanical wellness, guided by evidence.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-muted">
        Our wellness work translates validated botanical and nutrition insights
        into responsible pathways for communities and partners. Full program
        detail is expanding from the design system.
      </p>
      <div id="solutions" className="mt-8 flex justify-center gap-4">
        <Button href="/what-we-do">
          Explore What We Do
          <ArrowRight className="h-4 w-4 text-gold" />
        </Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
