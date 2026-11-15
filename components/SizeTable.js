export default function SizeTable({ chart, compact = false }) {
  return (
    <div
      className={`size-table-wrap${compact ? ' size-table-wrap--compact' : ''}`}
    >
      <table
        className={`size-table${compact ? ' size-table--compact' : ''}`}
        aria-label={`جدول اندازه‌های ${chart.name}`}
      >
        <thead>
          <tr>
            {chart.columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {chart.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={cell} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={`${row[0]}-${index}`}>{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
