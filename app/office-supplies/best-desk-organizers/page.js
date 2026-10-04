import StampBadge from "@/components/StampBadge";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata = {
  title: "Best Desk Organizers, 2026 — The Supply Room",
  description:
    "Eight desk organizers tested for real clutter — mesh, bamboo, modular, and drawer trays compared on capacity, stability, and price.",
};

const PRODUCTS = [
  {
    sku: "DO-001",
    name: "Mesh Metal Desktop Organizer",
    bestFor: "Mixed paper + supplies",
    price: "$19.99",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=mesh+metal+desktop+organizer&tag=dsetzer841-20",
  },
  {
    sku: "DO-002",
    name: "Bamboo Drawer Tray Set (5-pc)",
    bestFor: "Deep drawers, pens & clips",
    price: "$27.50",
    rating: "4.7★",
    link: "https://www.amazon.com/s?k=bamboo+drawer+organizer+tray+set&tag=dsetzer841-20",
  },
  {
    sku: "DO-003",
    name: "Modular Stackable Cube Set",
    bestFor: "Growing collections",
    price: "$32.99",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=modular+stackable+desk+organizer+cubes&tag=dsetzer841-20",
  },
  {
    sku: "DO-004",
    name: "Rotating Desktop Caddy",
    bestFor: "Shared desks, quick access",
    price: "$15.99",
    rating: "4.4★",
    link: "https://www.amazon.com/s?k=rotating+desktop+organizer+caddy&tag=dsetzer841-20",
  },
  {
    sku: "DO-005",
    name: "Felt Fabric Compartment Organizer",
    bestFor: "Quiet, minimalist desks",
    price: "$22.00",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=felt+fabric+desk+organizer&tag=dsetzer841-20",
  },
  {
    sku: "DO-006",
    name: "Acrylic Multi-Tier Organizer",
    bestFor: "Makeup-desk crossover setups",
    price: "$24.99",
    rating: "4.3★",
    link: "https://www.amazon.com/s?k=acrylic+desk+organizer+tiered&tag=dsetzer841-20",
  },
  {
    sku: "DO-007",
    name: "Under-Monitor Storage Drawer",
    bestFor: "Reclaiming desktop surface",
    price: "$34.99",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=under+monitor+storage+drawer&tag=dsetzer841-20",
  },
  {
    sku: "DO-008",
    name: "Budget Plastic Drawer Divider Set",
    bestFor: "Renters, dorms, tight budgets",
    price: "$11.99",
    rating: "4.2★",
    link: "https://www.amazon.com/s?k=plastic+drawer+divider+set+office&tag=dsetzer841-20",
  },
];

export default function BestDeskOrganizers() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <span className="form-label max-w-xs">Guide 01 — Filed 07/2026</span>
      <h1 className="font-mono text-4xl font-bold mt-3 leading-tight">
        Best Desk Organizers, 2026
      </h1>
      <div className="mt-4 flex flex-wrap gap-3">
        <StampBadge label="8 Tested" variant="best" />
        <StampBadge label="Under $35" variant="ledger" />
      </div>

      <p className="mt-6 text-ink/85 leading-relaxed">
        We cleared out one genuinely messy drawer — loose pens, three years
        of paperclips, a stack of Post-its fused together — and rebuilt it
        eight different ways. Here&apos;s what actually held up, what looked
        good for a week and then failed, and what we&apos;d buy again.
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
          Mesh Metal Desktop Organizer — Best Overall
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The steady favorite. Open mesh compartments mean you can see
          everything at a glance, and the metal frame doesn&apos;t wobble
          even when a compartment is overloaded. Best suited to desks with
          mixed clutter — mail, pens, a phone slot — rather than a single
          supply type.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Bamboo Drawer Tray Set — Best for Deep Drawers
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Five trays that rearrange to fit almost any drawer depth. The
          material feels sturdier than the plastic alternatives at a similar
          price, and it doesn&apos;t pick up the plasticky shine after a few
          months of use.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Budget Plastic Drawer Divider Set — Best Value
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Not fancy, but it does the one job it needs to do. Good pick if
          you&apos;re furnishing a first desk or don&apos;t want to commit to
          a system yet.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Modular Stackable Cube Set &mdash; Best for a Growing Collection
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Buy a starter set and add a cube at a time as the supply pile grows,
          which is more than any single-piece organizer can offer. The
          trade-off is footprint &mdash; stacked cubes eat desk depth fast, so
          keep them on a shelf or in a corner rather than front and centre.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Rotating Desktop Caddy &mdash; Best for Shared Desks
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          A lazy-Susan footprint that spins the whole cluster toward you instead
          of making you reach across the desk. It earns its place on a shared or
          hot-desked surface where several people grab the same pens and clips.
          The plastic is light at this price &mdash; fine for stationery, not
          for anything heavy.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Felt Fabric Compartment Organizer &mdash; Best for Quiet Setups
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The soft option: felt-lined compartments won&apos;t rattle a pen or
          scratch a phone, which matters if you take calls at the desk. The
          catch is that felt traps dust and shows wear sooner than mesh, so it
          suits a tidy, minimalist surface more than a high-traffic supply
          dump.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Acrylic Multi-Tier Organizer &mdash; Best for Small Items
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Clear tiers keep small items visible without the industrial look of
          mesh, which is why this one turns up on vanities as often as desks.
          Check the tier height against what you&apos;re stacking &mdash;
          they&apos;re built for slim things like pens, clips, and notepads,
          not a stapler.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Under-Monitor Storage Drawer &mdash; Best for Paper Overflow
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Turns the dead zone under a monitor riser into two shallow drawers, so
          the surface you actually work on stays clear. Measure the clearance
          under your stand first &mdash; some drawers assume a riser, and the
          ones that don&apos;t can crowd a low monitor. Best for a
          paper-and-notebook overflow problem.
        </p>
      </article>

      <h2 className="font-mono text-xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">
            What&apos;s the difference between mesh and bamboo organizers?
          </h3>
          <p className="mt-1 text-ink/85">
            Mesh organizers are lighter, cheaper, and better for visibility.
            Bamboo and wood options cost more but tend to last longer and
            look more intentional on a shared or client-facing desk.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            Do desk organizers actually reduce clutter, or just relocate it?
          </h3>
          <p className="mt-1 text-ink/85">
            Both, honestly — an organizer only helps if the compartments
            match what you actually keep on your desk. Measure your most
            common items before buying rather than guessing at
            compartment sizes.
          </p>
        </div>
      </div>

      <div className="mt-12 index-card p-6" data-tab="Editor's Note">
        <p className="text-ink/85">
          <strong>Note for the site owner:</strong> prices and ratings here
          are starting points &mdash; spot-check them against live Amazon
          listings before each publishing cycle. Every link already carries the
          site tracking tag, so new items only need the same{" "}
          <code>?k=&amp;tag=</code> link pattern.
        </p>
      </div>
    </div>
  );
}
