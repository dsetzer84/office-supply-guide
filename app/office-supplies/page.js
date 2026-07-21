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
      </div>
    </div>
  );
}
