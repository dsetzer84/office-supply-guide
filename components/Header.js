import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-ink bg-paper-dark">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-mono text-xl font-bold tracking-tight text-ink">
            THE SUPPLY ROOM
          </span>
          <span className="hidden sm:inline font-mono text-[0.65rem] tracking-[0.2em] text-ledger uppercase">
            Form No. 001 — Est. 2026
          </span>
        </Link>
        <nav className="flex gap-5 font-mono text-xs uppercase tracking-widest">
          <Link href="/office-supplies" className="hover:text-stamp">
            Guides
          </Link>
          <Link href="/about" className="hover:text-stamp">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
