import Link from "next/link";

export default function OfficeSuppliesHub() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <span className="form-label max-w-xs">Department</span>
      <h1 className="font-mono text-4xl font-bold mt-3">Office Supplies</h1>
      <p className="mt-4 max-w-xl text-ink/80">
        Every guide filed under this department, newest first.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <Link
          href="/office-supplies/best-desk-organizers"
          className="index-card p-6 block hover:-translate-y-0.5 transition-transform"
          data-tab="Guide 01"
        >
          <h2 className="font-mono text-xl font-bold mt-2">
            Best Desk Organizers, 2026
          </h2>
          <p className="mt-3 text-ink/80">
            Eight organizers tested against one genuinely messy drawer.
          </p>
          <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-stamp">
            Read Guide →
          </span>
        </Link>

        <Link
          href="/office-supplies/best-cable-management"
          className="index-card p-6 block hover:-translate-y-0.5 transition-transform"
          data-tab="Guide 02"
        >
          <h2 className="font-mono text-xl font-bold mt-2">
            Best Cable Management, 2026
          </h2>
          <p className="mt-3 text-ink/80">
            Eight ways to kill the cable spaghetti under your desk.
          </p>
          <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-stamp">
            Read Guide →
          </span>
        </Link>

        <Link
          href="/office-supplies/best-workstation-upgrades"
          className="index-card p-6 block hover:-translate-y-0.5 transition-transform"
          data-tab="Guide 03"
        >
          <h2 className="font-mono text-xl font-bold mt-2">
            Best Workstation Upgrades, 2026
          </h2>
          <p className="mt-3 text-ink/80">
            Eight high-ticket upgrades that earn their price — desks, chairs,
            ultrawides, and docking gear.
          </p>
          <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-stamp">
            Read Guide →
          </span>
        </Link>

        <Link
          href="/office-supplies/best-label-makers"
          className="index-card p-6 block hover:-translate-y-0.5 transition-transform"
          data-tab="Guide 04"
        >
          <h2 className="font-mono text-xl font-bold mt-2">
            Best Label Makers for Small Offices, 2026
          </h2>
          <p className="mt-3 text-ink/80">
            Eight label makers raced through one supply closet.
          </p>
          <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-stamp">
            Read Guide →
          </span>
        </Link>
      </div>
    </div>
  );
}
