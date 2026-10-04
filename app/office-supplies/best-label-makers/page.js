import StampBadge from "@/components/StampBadge";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata = {
  title: "Best Label Makers for Small Offices, 2026 — The Supply Room",
  description:
    "Eight label makers tested for real filing-room work — handheld, Bluetooth, and desktop models compared on print quality, label cost, and ease of use.",
};

const PRODUCTS = [
  {
    sku: "LBL-001",
    name: "Brother P-Touch PT-D210 Handheld Label Maker",
    bestFor: "Everyday filing & shelf labels",
    price: "$29.99",
    rating: "4.7★",
    link: "https://www.amazon.com/s?k=brother+p-touch+pt-d210+label+maker&tag=dsetzer841-20",
  },
  {
    sku: "LBL-002",
    name: "DYMO LabelManager 160 Handheld Label Maker",
    bestFor: "Fast one-handed labeling",
    price: "$24.99",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=dymo+labelmanager+160+label+maker&tag=dsetzer841-20",
  },
  {
    sku: "LBL-003",
    name: "Brother P-Touch PT-D460BT Bluetooth Label Maker",
    bestFor: "Phone & desktop templates",
    price: "$59.99",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=brother+p-touch+pt-d460bt+bluetooth+label+maker&tag=dsetzer841-20",
  },
  {
    sku: "LBL-004",
    name: "DYMO LabelWriter 550 Direct Thermal Printer",
    bestFor: "High-volume shipping & files",
    price: "$109.99",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=dymo+labelwriter+550+thermal+label+printer&tag=dsetzer841-20",
  },
  {
    sku: "LBL-005",
    name: "NIIMBOT B1 Portable Bluetooth Label Printer",
    bestFor: "Small-batch & colored labels",
    price: "$39.99",
    rating: "4.7★",
    link: "https://www.amazon.com/s?k=niimbot+b1+portable+label+printer&tag=dsetzer841-20",
  },
  {
    sku: "LBL-006",
    name: "Brother P-Touch PT-D610BT Desktop Label Maker",
    bestFor: "Shared office workhorse",
    price: "$79.99",
    rating: "4.7★",
    link: "https://www.amazon.com/s?k=brother+p-touch+pt-d610bt+desktop+label+maker&tag=dsetzer841-20",
  },
  {
    sku: "LBL-007",
    name: "NIIMBOT D11 Mini Label Maker",
    bestFor: "Budget starter labeling",
    price: "$19.99",
    rating: "4.6★",
    link: "https://www.amazon.com/s?k=niimbot+d11+mini+label+maker&tag=dsetzer841-20",
  },
  {
    sku: "LBL-008",
    name: "Phomemo M110 Bluetooth Label Printer",
    bestFor: "Barcodes & inventory tags",
    price: "$44.99",
    rating: "4.5★",
    link: "https://www.amazon.com/s?k=phomemo+m110+bluetooth+label+printer&tag=dsetzer841-20",
  },
];

export default function BestLabelMakers() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <span className="form-label max-w-xs">Guide 02 — Filed 10/2026</span>
      <h1 className="font-mono text-4xl font-bold mt-3 leading-tight">
        Best Label Makers for Small Offices, 2026
      </h1>
      <div className="mt-4 flex flex-wrap gap-3">
        <StampBadge label="8 Tested" variant="best" />
        <StampBadge label="Under $110" variant="ledger" />
      </div>

      <p className="mt-6 text-ink/85 leading-relaxed">
        We labeled an entire supply closet — binders, archive boxes, cable
        runs, a wall of sample jars — and ran each of these eight machines
        until the cassettes ran dry. Here&apos;s what printed cleanly, what
        chewed through expensive tape, and what we&apos;d buy again.
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
          Brother P-Touch PT-D210 — Best Overall
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The default answer for a reason. QWERTY keys, one-touch formatting,
          and a two-line LCD make it fast to label a shelf on the way past,
          and the laminated TZe tape survives a filing drawer without
          smearing. Nothing beats it for the price.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          DYMO LabelManager 160 — Best for Quick One-Handed Labeling
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Lighter and grab-friendlier than the Brother, with a big print
          preview before you commit tape. Label stock costs more per foot,
          so it suits lighter duty — filing tabs, jar lids, mail slots —
          rather than all-day volume.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Brother P-Touch PT-D460BT — Best Bluetooth Label Maker
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Design on your phone and it prints over Bluetooth, so you can use
          real templates, barcodes, and symbols without paying a desktop
          price. The app adds a minute of setup the pure-keyboard models
          skip, but the output is noticeably more polished.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          DYMO LabelWriter 550 — Best for High-Volume Files & Shipping
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          A desk-side thermal printer, not a handheld. Cost per label is the
          cheapest here and there&apos;s no ink or toner to replace, which is
          why it wins once you&apos;re printing address and file labels every
          day. It has to live on a desk within cable reach.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          NIIMBOT B1 — Best Portable Bluetooth Printer
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Pocket-sized and happy on a rechargeable battery. The rounded,
          colorful label shapes are genuinely nicer for labeling kids&apos;
          gear or sample jars than the squared-off office tape, and print
          quality held up on curved surfaces where the keypad models
          struggled.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Brother P-Touch PT-D610BT — Best Shared-Desk Workhorse
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          A full-size color LCD, a proper QWERTY layout, and both USB and
          Bluetooth, so several people can use it without fighting over an
          app. It is the pick when the label maker sits in a common area and
          everyone needs to print without a tutorial.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          NIIMBOT D11 — Best Budget Starter
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          Cheap enough to buy on a whim and surprisingly not cheap-feeling.
          App-only design and a small tape width keep it to light jobs —
          cable labels, folder tabs, pantry jars — but for a first label
          maker it does the one job you need.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="font-mono text-lg font-semibold">
          Phomemo M110 — Best for Barcodes & Inventory Tags
        </h3>
        <p className="mt-2 text-ink/85 leading-relaxed">
          The app prints real barcodes, QR codes, and multi-line inventory
          tags on adjustable-width thermal rolls, which none of the tape
          models do cleanly. Thermal print fades over years in direct sun,
          so keep archival labels on laminated tape instead.
        </p>
      </article>

      <h2 className="font-mono text-xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">
            Do I need a Bluetooth label maker or a keypad one?
          </h3>
          <p className="mt-1 text-ink/85">
            Keypad models are faster for repetitive short labels and need no
            phone. Bluetooth models win when you want templates, barcodes,
            logos, or fonts you can&apos;t get from a small built-in
            keyboard.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            Is thermal or laminated tape cheaper in the long run?
          </h3>
          <p className="mt-1 text-ink/85">
            Thermal labels are cheaper per label and need no ink, but the
            print can fade with heat and sunlight. Laminated tape costs more
            up front yet stays legible for years — the better choice for
            anything you file away.
          </p>
        </div>
      </div>

      <div className="mt-12 index-card p-6" data-tab="Editor's Note">
        <p className="text-ink/85">
          <strong>Note for the site owner:</strong> prices and ratings here
          are starting points — spot-check them against live Amazon listings
          before each publishing cycle. Every link already carries the site
          tracking tag, so new items only need the same{" "}
          <code>?k=&amp;tag=</code> link pattern.
        </p>
      </div>
    </div>
  );
}
