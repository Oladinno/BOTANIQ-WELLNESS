import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = { title: "Partner With Us" };

export default function PartnerPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
      <SectionLabel>Partnerships</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">
        Let&apos;s collaborate.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-muted">
        We partner with researchers, institutions, communities, and innovators
        who share a commitment to evidence, cultural respect, and sustainable
        impact across Africa.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/contact">
          Start a Conversation
          <ArrowRight className="h-4 w-4 text-gold" />
        </Button>
      </div>
    </section>
  );
}
