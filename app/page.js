import Link from "next/link";
import StampBadge from "@/components/StampBadge";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero — styled as a filled-out requisition form */}
      <section className="pt-14 pb-10 border-b border-line">
        <span className="form-label mb-4 max-w-xs">Purpose Of Request</span>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold leading-tight mt-3 max-w-2xl">
          Office supplies, tested until the ink runs out.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80">
          No sponsored fluff — every guide here starts from a real desk
          problem: cables everywhere, drawers that won&apos;t close, a chair
          that hates your back. We buy it, use it, and file the results.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <StampBadge label="Field Tested" variant="best" />
          <StampBadge label="No Sponsorships" variant="ledger" />
          <StampBadge label="Updated Monthly" variant="premium" />
        </div>
      </section>

      {/* Featured guide */}
      <section className="py-12">
        <span className="form-label mb-6 max-w-xs">Filed Under — Guides</span>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <Link
            href="/office-supplies/best-desk-organizers"
            className="index-card p-6 block hover:-translate-y-0.5 transition-transform"
            data-tab="Guide 01"
          >
            <h2 className="font-mono text-xl font-bold mt-2">
              Best Desk Organizers, 2026
            </h2>
            <p className="mt-3 text-ink/80">
              Eight organizers, one chaotic drawer each. Here&apos;s what
              actually kept things in place.
            </p>
            <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-stamp">
              Read Guide →
            </span>
          </Link>

          <div
            className="index-card p-6 opacity-70"
            data-tab="Guide 02 — Coming Soon"
          >
            <h2 className="font-mono text-xl font-bold mt-2">
              Best Label Makers for Small Offices
            </h2>
            <p className="mt-3 text-ink/80">
              Currently on the test bench. Check back next filing cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Category hub link */}
      <section className="py-12 border-t border-line">
        <div className="index-card p-8" data-tab="Department">
          <h2 className="font-mono text-2xl font-bold">Office Supplies</h2>
          <p className="mt-3 text-ink/80 max-w-2xl">
            Desk organizers, cable management, paper systems, and the small
            stuff that makes a workday run smoother. Start with the
            department hub for every guide we&apos;ve filed.
          </p>
          <Link
            href="/office-supplies"
            className="mt-5 inline-block font-mono text-xs uppercase tracking-widest text-stamp border border-stamp px-4 py-2 hover:bg-stamp hover:text-paper transition-colors"
          >
            Browse Department
          </Link>
        </div>
      </section>
    </div>
  );
}
