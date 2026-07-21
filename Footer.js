import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper-dark mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-ink/80">
        <p className="mb-3">
          As an Amazon Associate, The Supply Room earns from qualifying
          purchases. Prices and availability are accurate as of the date
          shown and are subject to change.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest">
          <Link href="/disclosure" className="hover:text-stamp">
            Affiliate Disclosure
          </Link>
          <Link href="/about" className="hover:text-stamp">
            About
          </Link>
          <span className="text-line">© 2026 The Supply Room</span>
        </div>
      </div>
    </footer>
  );
}
