"use client";


import { Button } from "@/components/ui/Button";

export function TicketList() {
  const tickets = [
    { id: 1, subject: "Brak dostawy 03.09", status: "Otwarte" },
    { id: 2, subject: "Zmiana adresu 05.09", status: "Zamknięte" },
  ];
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Zgłoszenia</h3>
        <Button onClick={()=>alert("Nowa wiadomość")}>Nowe zgłoszenie</Button>
      </div>
      <ul className="divide-y">
        {tickets.map(t=>(
          <li key={t.id} className="py-2 flex items-center justify-between">
            <span>{t.subject}</span>
            <span className="text-sm text-gray-500">{t.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}