// app/klient/zamowienia/page.js
import { Table } from "@/components/ui/Table";

export default function ClientOrders() {
  const rows = [
    { id: 1, dieta: "Standard 2000", od: "2025-09-01", do: "2025-09-30", status: "Aktywna" },
  ];
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Moje zamówienia</h2>
      <Table
        columns={[{key:"dieta",label:"Dieta"},{key:"od",label:"Od"},{key:"do",label:"Do"},{key:"status",label:"Status"}]}
        rows={rows}
      />
    </section>
  );
}
