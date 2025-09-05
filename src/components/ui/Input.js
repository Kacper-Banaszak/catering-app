export function Input({ label, ...props }) {
  return (
    <label className="block mb-3">
      {label && <span className="block text-sm mb-1">{label}</span>}
      <input {...props} className="w-full border rounded px-3 py-2" />
    </label>
  );
}
