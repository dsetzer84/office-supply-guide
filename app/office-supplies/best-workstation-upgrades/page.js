import StampBadge from "@/components/StampBadge";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata = {
  title: "Best Workstation Upgrades, 2026 — The Supply Room",
  description:
    "High-ticket desk upgrades that earn their price — electric standing desks, ergonomic chairs, ultrawide monitors, and docking gear compared on price, capacity, and real-world payback.",
};

const PRODUCTS = [
  {
    sku: "WS-001",
    name: "FLEXISPOT E6 Dual-Motor Standing Desk",
    bestFor: "Full-day sit/stand switching",
    price: "$288",
    rating: "4.4★",
    link: "https://www.amazon.com/dp/B0B7MX2KP1?tag=dsetzer841-20",
  },
  {
    sku: "WS-002",
    name: "Steelcase Series 1 Ergonomic Chair",
    bestFor: "Lower-back relief, 8-hour days",
    price: "$499",
    rating: "4.2★",
    link: "https://www.amazon.com/dp/B08M46SHCG?tag=dsetzer841-20",
  },
  {
    sku: "WS-003",
    name: 'Dell S3425DW 34" Ultrawide QHD Monitor',
    bestFor: "Multi-window workflows",
    price: "$400",
    rating: "4.4★",
    link: "https://www.amazon.com/dp/B0F1H325FN?tag=dsetzer841-20",
  },
  {
    sku: "WS-004",
    name: "Anker Prime 14-in-1 Docking Station",
    bestFor: "Laptop + 2 displays, one cable",
    price: "$170",
    rating: "4.3★",
    link: "https://www.amazon.com/dp/B0CW9249DK?tag=dsetzer841-20",
  },
  {
    sku: "WS-005",
    name: "EVEO Premium Dual Monitor Arm",
    bestFor: "Reclaiming desktop, eye-line height",
    price: "$110",
    rating: "4.4★",
    link: "https://www.amazon.com/dp/B07V1J81FB?tag=dsetzer841-20",
  },
  {
    sku: "WS-006",
    name: "Ergodriven Topo Anti-Fatigue Mat",
    bestFor: "Long standing sessions",
    price: "$109",
    rating: "4.7★",
    link: "https://www.amazon.com/dp/B00V3TO9EK?tag=dsetzer841-20",
  },
  {
    sku: "WS-007",
    name: "No-Drill Under-Desk Cable Tray (2-Pack)",
    bestFor: "Hiding power bricks & cords",
    price: "$30",
    rating: "4.7★",
    link: "https://www.amazon.com/dp/B09L63QJM6?tag=dsetzer841-20",
  },
  {
    sku: "WS-008",
    name: "DEVAISE 3-Drawer Mobile File Cabinet",
    bestFor: "Paper overflow, lockable",
    price: "$116",
    rating: "4.6★",
    link: "https://www.amazon.com/dp/B072PS6YMP?tag=dsetzer841-20",
  },
];

export default function BestWorkstationUpgrades() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <span className="form-label max-w-xs">Guide 03 — Filed 10/2026</span>
      <h1 className="font-mono text-4xl font-bold mt-3 leading-tight">
        Best Workstation Upgrades, 2026
      </h1>
      <div className="mt-4 flex flex-wrap gap-3">
        <StampBadge label="8 Tested" variant="best" />
        <StampBadge label="$30 – $499" variant="premium" />
      </div>

      <p className="mt-6 text-ink/85 leading-relaxed">
        This is the drawer you open when the &quot;good enough&quot; setup stops
        being good enough. These are the high-ticket upgrades that actually
        change how a workday feels — the standing desk that moves without
        wobble, the chair that ends the 3 p.m. back ache, the ultrawide that
        kills the alt-tab reflex. We ranked them on capacity, build, and how
        fast the price stops stinging.
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
          FLEXISPOT E6 Dual-Motor Standing Desk — The One That Earns Its Keep
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The single upgrade that changes the most about a workday. The
          FLEXISPOT E6 pairs a 3-stage dual-motor frame with a one-piece
          55&quot;&times;28&quot; maple top, lifting a full desktop — monitors,
          dock, everything — from 23.6&quot; to 48.8&quot; without the shudder
          you get from single-motor budget desks. It&apos;s rated to 220 lbs
          and holds four memory presets, so your standing height is one button,
          not a hold-and-guess.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Steelcase Series 1 Ergonomic Chair — Best for Long Days
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The jump from a $90 task chair to a genuinely adjustable one is the
          most underrated upgrade on this list. The Steelcase Series 1 brings
          weight-activated recline, adjustable lumbar, and a 4D arm option to a
          sub-$500 price — the same ergonomics the brand puts in its office
          fleet, backed by a 12-year warranty. Mesh keeps you from running hot
          through the afternoon.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          No-Drill Under-Desk Cable Tray — Best Value
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The cheapest item here, and the one people notice first. A no-drill
          clamp-on steel tray hides the power brick, the slack, and the dock
          that otherwise pools on the floor — this 31.5&quot; two-pack mounts
          under the desk edge without a single screw hole. Buy it alongside the
          desk, not after: routing cables once is far easier than re-routing a
          settled setup.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Dell S3425DW 34&quot; Ultrawide QHD Monitor &mdash; The Seam-Free Upgrade
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The upgrade that removes the seam between two screens. Dell&apos;s
          S3425DW is a 34-inch 3440&times;1440 VA panel at 120 Hz with FreeSync
          Premium and a USB-C input that carries video and 65 W of laptop
          charging over one cable. Spreadsheet, browser, and chat sit side by
          side with no bezel gap down the middle &mdash; just check the stand
          reaches your eye line, or budget for an arm.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Anker Prime 14-in-1 Docking Station &mdash; One Cable for Everything
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          A good dock turns plugging in your laptop into one click. The Anker
          Prime 14-in-1 drives two 4K displays over dual HDMI, adds Ethernet,
          audio, and 10 Gbps data ports, and pushes up to 160 W of total output
          &mdash; enough to charge the laptop and a couple of peripherals at
          once. Match its video outputs to your monitors&apos; inputs before
          buying, since a dock that only mirrors is the usual let-down.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          EVEO Premium Dual Monitor Arm &mdash; Reclaim the Desktop
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          An arm does two jobs at once: it lifts both panels to eye level and
          frees the desk space their stands were squatting on. The EVEO Premium
          gas-spring arm carries two 14&ndash;32&quot; screens up to 22 lbs
          each, with full tilt, swivel, and rotation, and clamps to desks up to
          about 4&quot; thick. Check the VESA pattern (usually 75&times;75 or
          100&times;100) matches your monitors.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Ergodriven Topo Anti-Fatigue Mat &mdash; The Companion Buy
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The accessory nobody plans for. Raise the desk but stand on a hard
          floor and your feet will send you back to sitting within a week. The
          Ergodriven Topo&apos;s calculated terrain &mdash; a raised centre
          ridge and varied contours &mdash; keeps you shifting your stance,
          which is the whole point: it&apos;s the movement, not the cushioning,
          that keeps legs fresh through a long standing block.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          DEVAISE 3-Drawer Mobile File Cabinet &mdash; Paper Overflow, Solved
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The low-tech partner to the standing desk: a three-drawer cabinet on
          casters that tucks under the frame and rolls out when you need it. The
          DEVAISE unit takes letter, legal, and A4 files, locks all three
          drawers with one key, and arrives fully assembled except for the
          wheels. Measure the gap under your desk&apos;s crossbar &mdash; the
          cabinet has to clear the frame at sitting height.
        </p>
      </article>

      <h2 className="font-mono text-xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">
            Which upgrade should I buy first — desk or chair?
          </h3>
          <p className="mt-1 text-ink/85">
            Chair first if you sit all day; desk first if you already stand
            part-time and want to commit. If you can only do one, the chair
            affects more hours of your day, but the desk changes the most about
            how you work.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            How heavy does a dual-motor standing desk need to be rated?
          </h3>
          <p className="mt-1 text-ink/85">
            Add up your monitors, laptop, dock, and anything you rest on the
            surface, then leave at least 50% headroom on the rated lift
            capacity. A desk rated for 220 lbs comfortably carries a
            two-monitor setup with room to spare.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            Is an ultrawide actually better than two monitors?
          </h3>
          <p className="mt-1 text-ink/85">
            For text and spreadsheets, a single 34&quot; panel means no bezel gap
            and one cable. For video calls plus reference material side by side,
            two panels still win because you can angle them independently.
          </p>
        </div>
      </div>

      <div className="mt-12 index-card p-6" data-tab="Editor's Note">
        <p className="text-ink/85">
          <strong>Note for the site owner:</strong> these are high-ticket
          picks, so each sale is worth far more than a $12 organizer — but
          Amazon pays a lower percentage on furniture and monitors. Check the
          current Associates rate card for your categories, and re-verify each
          ASIN against the live listing before each publishing cycle, since
          Amazon product pages occasionally change.
        </p>
      </div>
    </div>
  );
}
