const COLORS = {
  best: "text-stamp",
  budget: "text-ledger",
  premium: "text-ink",
};

export default function StampBadge({ label, variant = "best" }) {
  return (
    <span className={`stamp-badge ${COLORS[variant] || COLORS.best}`}>
      {label}
    </span>
  );
}
