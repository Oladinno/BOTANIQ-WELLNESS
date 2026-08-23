import { Lock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = { title: "ResearchHub Login" };

export default function ResearchHubPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16 lg:px-8">
      <div className="rounded-xl border border-forest/10 bg-cream p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-gold">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <SectionLabel>ResearchHub</SectionLabel>
            <h1 className="font-serif text-2xl text-forest">Secure login</h1>
          </div>
        </div>
        <p className="mb-6 text-sm text-muted">
          ResearchHub access for partners and collaborators will connect here.
          This is a placeholder authentication surface.
        </p>
        <form className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1.5 block text-forest">Email</span>
            <input
              type="email"
              className="w-full rounded-md border border-forest/15 bg-cream-deep/40 px-3 py-2.5 outline-none ring-gold/40 focus:ring-2"
              placeholder="partner@institution.org"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-forest">Password</span>
            <input
              type="password"
              className="w-full rounded-md border border-forest/15 bg-cream-deep/40 px-3 py-2.5 outline-none ring-gold/40 focus:ring-2"
              placeholder="••••••••"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-forest py-3 text-sm font-medium text-cream transition hover:bg-forest-mid"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
