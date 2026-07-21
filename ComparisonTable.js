export default function ComparisonTable({ rows }) {
  return (
    <div className="overflow-x-auto index-card p-4" data-tab="Ledger — Sheet 1">
      <table className="ledger-table w-full mt-2">
        <thead>
          <tr>
            <th>Sku</th>
            <th>Item</th>
            <th>Best For</th>
            <th>Price</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.sku}>
              <td className="sku">{row.sku}</td>
              <td className="font-medium">{row.name}</td>
              <td>{row.bestFor}</td>
              <td className="font-mono">{row.price}</td>
              <td className="font-mono">{row.rating}</td>
              <td>
                <a
                  href={row.link}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="font-mono text-xs uppercase tracking-widest text-stamp border border-stamp px-3 py-1.5 hover:bg-stamp hover:text-paper transition-colors whitespace-nowrap"
                >
                  Check Price
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
