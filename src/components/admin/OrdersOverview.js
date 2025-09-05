// components/admin/OrdersOverview.js

"use client";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";

export function OrdersOverview() {
  const rows = [
    { id: 1, klient: "J. Kowalski", dieta: "Standard 2000", data: "2025-09-05" },
    { id: 2, klient: "A. Nowak", dieta: "Vege 1800", data: "2025-09-05" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input type="date" className="border rounded px-3 py-2" />
        <Button onClick={()=>alert("Filtruj")}>Filtruj</Button>
        <Button variant="outline" onClick={()=>alert("Generuj PDF")}>Generuj PDF</Button>
      </div>
      <Table
        columns={[
          { key: "klient", label: "Klient" },
          { key: "dieta", label: "Dieta" },
          { key: "data", label: "Data" },
        ]}
        rows={rows}
      />
    </div>
  );
}
