export function ChartPlaceholder({ height = 260 }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="h-6 font-semibold mb-2">Wykres</div>
      <div className="w-full" style={{ height }}>
        <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded" />
      </div>
    </div>
  );
}
