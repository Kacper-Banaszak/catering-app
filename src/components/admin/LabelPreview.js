// components/admin/LabelPreview.js

export function LabelPreview() {
  return (
    <div className="bg-white rounded border p-4 max-w-md">
      <div className="text-sm text-gray-500 mb-2">Podgląd etykiety</div>
      <div className="border rounded p-3">
        <div className="font-semibold">Jan Kowalski</div>
        <div>Standard 2000 • 05.09.2025</div>
        <div className="text-xs text-gray-600 mt-2">Alergeny: gluten</div>
        <div className="text-xs text-gray-600">Składniki: ryż, kurczak, warzywa</div>
        <div className="mt-2 text-xs">QR: [########]</div>
      </div>
    </div>
  );
}
