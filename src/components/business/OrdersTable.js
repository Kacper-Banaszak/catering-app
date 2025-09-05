// components/biznes/OrdersTable.js
import { Table } from "@/components/ui/Table";

export function OrdersTable() {
  const rows = [
    { id: 1, pracownik: "A. Kowalska", dieta: "Vege 1800", status: "Aktywna" },
    { id: 2, pracownik: "P. Nowak", dieta: "Keto 2000", status: "Zawieszona" },
  ];
  return (
    <Table
      columns={[
        { key: "pracownik", label: "Pracownik" },
        { key: "dieta", label: "Dieta" },
        { key: "status", label: "Status" },
      ]}
      rows={rows}
    />
  );
}
