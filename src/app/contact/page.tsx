import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Reach the BOTANIQ WELLNESS™ team for research collaboration,
          partnership inquiries, or general questions.
        </p>
      </div>

      <form className="mt-10 space-y-5 rounded-xl border border-forest/10 bg-cream-deep/40 p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block text-forest">Name</span>
            <input
              type="text"
              name="name"
              className="w-full rounded-md border border-forest/15 bg-cream px-3 py-2.5 outline-none ring-gold/40 focus:ring-2"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-forest">Email</span>
            <input
              type="email"
              name="email"
              className="w-full rounded-md border border-forest/15 bg-cream px-3 py-2.5 outline-none ring-gold/40 focus:ring-2"
              placeholder="you@organization.com"
            />
          </label>
        </div>
        <label className="block text-sm">
          <span className="mb-1.5 block text-forest">Message</span>
          <textarea
            name="message"
            rows={5}
            className="w-full rounded-md border border-forest/15 bg-cream px-3 py-2.5 outline-none ring-gold/40 focus:ring-2"
            placeholder="How can we collaborate?"
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-forest px-5 py-3 text-sm font-medium text-cream transition hover:bg-forest-mid"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
