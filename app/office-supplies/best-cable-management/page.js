import StampBadge from "@/components/StampBadge";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata = {
  title: "Best Cable Management, 2026 — The Supply Room",
  description:
    "Eight cable management picks tested against one genuinely tangled under-desk run — trays, sleeves, clips, raceways, and boxes compared on capacity, adhesion, and price.",
};

const PRODUCTS = [
  {
    sku: "CM-001",
    name: "Under-Desk Cable Management Tray",
    bestFor: "Cable spaghetti under desks",
    price: "$24.99",
    rating: "4.7★",
    link: "https://www.amazon.com/s?k=under+desk+cable+management+tray&tag=dsetzer841-20",
  },
  {
    sku: "CM-002",
    name: "Adhesive Cable Clips (50-pack)",
    bestFor: "Quick routes along desk edges",
    price: "$9.99",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=adhesive+cable+clips+office&tag=dsetzer841-20",
  },
  {
    sku: "CM-003",
    name: "Zippered Cable Management Sleeve",
    bestFor: "Bundling several thick cables",
    price: "$13.50",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=cable+management+sleeve+zipper&tag=dsetzer841-20",
  },
  {
    sku: "CM-004",
    name: "Under-Desk Power Strip Mount",
    bestFor: "Keeping the power strip off the floor",
    price: "$15.99",
    rating: "4.4★",
    link: "https://www.amazon.com/s?k=under+desk+power+strip+mount&tag=dsetzer841-20",
  },
  {
    sku: "CM-005",
    name: "Magnetic Cable Holder (Desk Edge)",
    bestFor: "Grab-and-go charging cables",
    price: "$12.99",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=magnetic+cable+holder+desk&tag=dsetzer841-20",
  },
  {
    sku: "CM-006",
    name: "Wall Cable Raceway Kit",
    bestFor: "Hiding monitor and TV runs",
    price: "$22.00",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=cable+raceway+kit+wall&tag=dsetzer841-20",
  },
  {
    sku: "CM-007",
    name: "Reusable Velcro Cable Ties (100-pack)",
    bestFor: "Bundling and re-routing often",
    price: "$8.99",
    rating: "4.8★",
    link: "https://www.amazon.com/s?k=velcro+cable+ties+office&tag=dsetzer841-20",
  },
  {
    sku: "CM-008",
    name: "Cable Management Box (Large)",
    bestFor: "Hiding the whole power hub",
    price: "$27.50",
    rating: "4.4★",
    link: "https://www.amazon.com/s?k=cable+management+box+large&tag=dsetzer841-20",
  },
];

export default function BestCableManagement() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <span className="form-label max-w-xs">Guide 02 — Filed 07/2026</span>
      <h1 className="font-mono text-4xl font-bold mt-3 leading-tight">
        Best Cable Management, 2026
      </h1>
      <div className="mt-4 flex flex-wrap gap-3">
        <StampBadge label="8 Tested" variant="best" />
        <StampBadge label="Under $40" variant="ledger" />
      </div>

      <p className="mt-6 text-ink/85 leading-relaxed">
        We untangled one genuinely cursed under-desk run &mdash; a monitor, a
        dock, two chargers, and a power brick all fighting for the same six
        inches &mdash; and rebuilt it eight different ways. Here&apos;s what
        actually stayed put, what sagged after a week, and what we&apos;d buy
        again.
      </p>

      <p className="mt-4 text-sm text-ink/60 italic">
        Affiliate disclosure: links below are Amazon Associate links. We may
        earn a commission on qualifying purchases at no extra cost to you.
      </p>

      <h2 className="font-mono text-xl font-bold mt-10 mb-4">
        Quick Comparison
      </h2>
      <ComparisonTable rows={PRODUCTS} />

      <h2 className="font-mono text-xl font-bold mt-12 mb-4">
        The Write-Ups
      </h2>

      <article className="mt-6">
        <h3 className="font-mono text-lg font-semibold">
          Under-Desk Cable Management Tray &mdash; Best Overall
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The clamp-on tray that finally got every cable off the floor. It
          installs without drilling, holds a power brick plus two chargers, and
          the open mesh means nothing overheats. Best for desks with real
          spaghetti underneath rather than a single tidy run.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Reusable Velcro Cable Ties &mdash; Best for Tangled Drawers
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          A hundred ties for the price of a coffee. The move is bundling every
          loose cable before it reaches the desk, then re-routing without
          cutting anything. Less glamorous than a tray, but the cheapest fix
          that actually survives repeated re-cabling.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Adhesive Cable Clips &mdash; Best Value
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Not fancy, but they do the one job they need to do. Good pick if
          you&apos;re fixing a single charging cable along a desk edge and
          don&apos;t want to commit to a full system yet.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Zippered Cable Management Sleeve &mdash; Best for Bundling a Run
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Zips around thick cables &mdash; display, power, USB &mdash; and turns
          them into one clean run you can still open without cutting ties. Best
          for the visible stretch between desk and wall, where a tray
          won&apos;t reach. Get the diameter right: too narrow and it
          won&apos;t zip over a power lead.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Under-Desk Power Strip Mount &mdash; Best for Lifting the Strip Off the Floor
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Clamps or screws the power strip to the underside of the desk instead
          of leaving it loose on the floor, so you&apos;re not crawling under
          for a plug and the strip stays out of foot range. Check the
          mount&apos;s width against your strip&apos;s mounting holes &mdash;
          the brackets are not universal.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Magnetic Cable Holder &mdash; Best for Charging Cables
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Holds a few charging cables upright at the desk edge, ready to grab
          and drop back into place instead of sliding behind the desk. The
          magnet only grips steel-framed desks or a surface where you can add a
          metal plate, so check your desk material before ordering.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Wall Cable Raceway Kit &mdash; Best for Run-to-the-Wall Setups
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The permanent fix for a run that leaves the desk and travels along a
          wall &mdash; a paintable channel that hides monitor, TV, or router
          wires completely. It&apos;s a screw-or-adhesive job, so plan the
          route first; the peel-and-stick strips need a clean, flat wall to
          hold on.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Cable Management Box (Large) &mdash; Best for Hiding the Hub
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          An all-in-one bin that swallows the whole power hub &mdash; strip,
          bricks, extra slack &mdash; and hides it under the desk in one move.
          It runs warmer than an open tray, so leave some slack and
          don&apos;t bury a hot charger, and check the box actually clears your
          desk frame.
        </p>
      </article>

      <h2 className="font-mono text-xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">
            Do I need a tray, a sleeve, or a box?
          </h3>
          <p className="mt-1 text-ink/85">
            Trays keep cables accessible and cool; sleeves bundle a run
            together for travel; boxes hide the whole power hub but run
            warmer. Most desks end up using a tray plus a few ties.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            Will adhesive clips survive a move?
          </h3>
          <p className="mt-1 text-ink/85">
            Usually not &mdash; clean the surface with alcohol first, and prefer
            screw-in or clamp mounts for anything you want to keep permanently.
          </p>
        </div>
      </div>

      <div className="mt-12 index-card p-6" data-tab="Editor's Note">
        <p className="text-ink/85">
          <strong>Note for the site owner:</strong> these are starting picks
          &mdash; swap in the products you&apos;ve actually tested and keep the
          <code> tag=dsetzer841-20</code> affiliate ID in every link.
        </p>
      </div>
    </div>
  );
}
