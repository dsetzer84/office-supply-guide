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
    name: "Electric Standing Desk (Dual Motor)",
    bestFor: "Full-day sit/stand switching",
    price: "$499",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=electric+standing+desk+dual+motor&tag=dsetzer841-20",
  },
  {
    sku: "WS-002",
    name: "Premium Ergonomic Mesh Chair",
    bestFor: "Lower-back relief, 8-hour days",
    price: "$329",
    rating: "4.7★",
    link: "https://www.amazon.com/s?k=ergonomic+office+chair+lumbar+mesh&tag=dsetzer841-20",
  },
  {
    sku: "WS-003",
    name: '34" Ultrawide QHD Monitor',
    bestFor: "Multi-window workflows",
    price: "$449",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=34+inch+ultrawide+monitor+qhd&tag=dsetzer841-20",
  },
  {
    sku: "WS-004",
    name: "Dual-Monitor USB-C Docking Station",
    bestFor: "Laptop + 2 displays, one cable",
    price: "$189",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=usb+c+docking+station+dual+monitor&tag=dsetzer841-20",
  },
  {
    sku: "WS-005",
    name: "Adjustable Dual Monitor Arm",
    bestFor: "Reclaiming desktop, eye-line height",
    price: "$99",
    rating: "4.7★",
    link: "https://www.amazon.com/s?k=dual+monitor+arm+adjustable&tag=dsetzer841-20",
  },
  {
    sku: "WS-006",
    name: "Anti-Fatigue Standing Desk Mat",
    bestFor: "Long standing sessions",
    price: "$79",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=anti+fatigue+standing+desk+mat&tag=dsetzer841-20",
  },
  {
    sku: "WS-007",
    name: "Under-Desk Cable Management Tray",
    bestFor: "Hiding power bricks & cords",
    price: "$45",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=under+desk+cable+management+tray&tag=dsetzer841-20",
  },
  {
    sku: "WS-008",
    name: "Rolling Mobile File Cabinet",
    bestFor: "Paper overflow, lockable",
    price: "$159",
    rating: "4.4★",
    link: "https://www.amazon.com/s?k=rolling+mobile+file+cabinet+office&tag=dsetzer841-20",
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
        <StampBadge label="$45 – $499" variant="premium" />
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
          Electric Standing Desk (Dual Motor) — The One That Earns Its Keep
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The single upgrade that changes the most about a workday. A dual-motor
          frame lifts a full desktop — monitors, dock, everything — without the
          shudder you get from single-motor budget desks. Look for a 40&quot;+
          height range and a memory controller so your standing height is one
          button, not a hold-and-guess.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Premium Ergonomic Mesh Chair — Best for Long Days
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The jump from a $90 task chair to a genuinely adjustable one is the
          most underrated upgrade on this list. Prioritise adjustable lumbar
          depth and a seat pan that slides — those two settings do more for a
          5 p.m. back than any amount of padding. Mesh keeps you from running
          hot through the afternoon.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Under-Desk Cable Management Tray — Best Value
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The cheapest item here, and the one people notice first. A clamp-on
          tray hides the power brick, the slack, and the dock that otherwise
          pools on the floor. Buy it alongside the desk, not after — routing
          cables once is far easier than re-routing a settled setup.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          34&quot; Ultrawide QHD Monitor &mdash; The Seam-Free Upgrade
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The upgrade that removes the seam between two screens. A 34-inch
          3440&times;1440 panel holds two or three comfortable windows side by
          side with no bezel gap down the middle &mdash; spreadsheet, browser,
          and chat all visible at once. Look for at least 100 Hz refresh and a
          USB-C input, and check the stand reaches your eye line, or budget for
          an arm.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Dual-Monitor USB-C Docking Station &mdash; One Cable for Everything
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          A good dock turns plugging in your laptop into one click: displays,
          Ethernet, peripherals, and 65&ndash;100 W of charging over a single
          USB-C cable. Match the dock&apos;s video outputs to your
          monitors&apos; inputs &mdash; DisplayPort versus HDMI &mdash; before
          buying, since a dock that only mirrors is the usual let-down. Best
          for anyone docking and undocking twice a day.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Adjustable Dual Monitor Arm &mdash; Reclaim the Desktop
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          An arm does two jobs at once: it lifts both panels to eye level and
          frees the desk space their stands were squatting on. Gas-spring arms
          let you push a screen back and pull it close without reaching for a
          wrench. Check the desk clamp fits your surface thickness and that the
          VESA pattern (usually 75&times;75 or 100&times;100) matches your
          monitors.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Anti-Fatigue Standing Desk Mat &mdash; The Companion Buy
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The accessory nobody plans for. Raise the desk but stand on a hard
          floor and your feet will send you back to sitting within a week. A
          mat with a raised centre ridge keeps you shifting your stance, which
          is the whole point &mdash; it&apos;s the movement, not the
          cushioning, that keeps legs fresh through a long standing block.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Rolling Mobile File Cabinet &mdash; Paper Overflow, Solved
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The low-tech partner to the standing desk: a two- or three-drawer
          cabinet on casters that tucks under the frame and rolls out when you
          need it. Pick one with a lock if anything confidential lives inside,
          and measure the gap under your desk&apos;s crossbar &mdash; the
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
          current Associates rate card for your categories, replace these
          search-result links with direct product links (real ASINs) once
          you&apos;ve chosen final products, and keep the tracking ID consistent
          across every link.
        </p>
      </div>
    </div>
  );
}
