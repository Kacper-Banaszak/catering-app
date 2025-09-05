export function Table({ columns, rows }) {
  return (
    <div className="bg-white border rounded overflow-hidden">
      <table>
        <thead>
          <tr>
            {columns.map(c => <th key={c.key} className="border-b bg-gray-50">{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id ?? i} className="border-b">
              {columns.map(c => <td key={c.key}>{r[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
