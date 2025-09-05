"use client";

import { Table } from "@/components/ui/Table";

export function ClientTable() {
  const rows = [
    { id: 1, name: "Jan Kowalski", typ: "Nowy", status: "Aktywny" },
    { id: 2, name: "Anna Nowak", typ: "Stały", status: "Zawieszony" },
  ];
  return (
    <Table
      columns={[
        { key: "name", label: "Imię i nazwisko" },
        { key: "typ", label: "Typ" },
        { key: "status", label: "Status" },
      ]}
      rows={rows}
    />
  );
}
