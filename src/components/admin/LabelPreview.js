export function LabelPreview() {
  return (
    <div className="bg-white rounded border p-4 max-w-md">
      <div className="text-sm text-gray-500 mb-2">Podgląd etykiety</div>
      <div className="border rounded p-3 space-y-2">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-bold text-lg">Catering App</h3>
          <span className="font-semibold bg-gray-100 px-2 py-1 rounded text-sm">Obiad</span>
        </div>

        <div>
          <div className="font-semibold text-base">Jan Kowalski</div>
          <div>Dieta Standard 2000 kcal • 09.09.2025</div>
        </div>

        <div>
          <p className="font-medium">Pierś z kurczaka w ziołach z ryżem i brokułami</p>
        </div>

        <div className="text-xs">
          <div className="font-semibold mb-1">Wartości odżywcze:</div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-gray-50 p-1 rounded">
              <div className="font-bold">550</div>
              <div>kcal</div>
            </div>
            <div className="bg-gray-50 p-1 rounded">
              <div className="font-bold">45g</div>
              <div>Białko</div>
            </div>
            <div className="bg-gray-50 p-1 rounded">
              <div className="font-bold">15g</div>
              <div>Tłuszcz</div>
            </div>
            <div className="bg-gray-50 p-1 rounded">
              <div className="font-bold">60g</div>
              <div>Węgl.</div>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-600">
          <p><span className="font-semibold">Składniki:</span> ryż biały, filet z piersi kurczaka, brokuły, oliwa z oliwek, zioła prowansalskie, sól, pieprz.</p>
          <p><span className="font-semibold">Alergeny:</span> Może zawierać śladowe ilości selera, gorczycy.</p>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t flex justify-between items-center">
          <p>Spożyć do: 10.09.2025</p>
          <div className="text-center">
            <div>[Kod QR]</div>
            <p>Skanuj po więcej info</p>
          </div>
        </div>
      </div>
    </div>
  );
}