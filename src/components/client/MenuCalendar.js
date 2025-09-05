export function MenuCalendar() {
  const days = ["Pn","Wt","Śr","Cz","Pt","Sb","Nd"];
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((d,i)=>(
        <div key={i} className="bg-white rounded border p-3 text-center">
          <div className="font-semibold">{d}</div>
          <div className="text-xs text-gray-600 mt-1">Zupa + Danie</div>
        </div>
      ))}
    </div>
  );
}
