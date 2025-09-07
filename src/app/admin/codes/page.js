"use client";

import { useState } from "react";
import { DiscountForm } from "@/components/admin/DiscountForm";
import { Table } from "@/components/ui/Table";

// Przykładowe dane początkowe
const INITIAL_CODES = [
  { id: 1, code: "LATO2025", discount: 15, createdAt: "2025-06-01", expiresAt: "2025-08-31" },
  { id: 2, code: "WITAJ10", discount: 10, createdAt: "2025-01-01", expiresAt: "2025-12-31" },
];

export default function AdminCodes() {
  const [codes, setCodes] = useState(INITIAL_CODES);

  const handleSaveCode = (newCodeData) => {
    const newCode = {
      ...newCodeData,
      id: codes.length + 1, // Proste generowanie ID
      createdAt: new Date().toISOString().split("T")[0],
    };
    setCodes([...codes, newCode]);
  };

  const getStatus = (expiresAt) => {
    return new Date(expiresAt) >= new Date() ? "Aktywny" : "Wygasł";
  };

  const tableRows = codes.map(code => ({
    ...code,
    status: (
      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
        getStatus(code.expiresAt) === 'Aktywny' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {getStatus(code.expiresAt)}
      </span>
    )
  }));

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Dodaj nowy kod rabatowy</h2>
        <DiscountForm onSave={handleSaveCode} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Istniejące kody rabatowe</h2>
        <div className="bg-white rounded shadow">
          <Table
            columns={[
              { key: "code", label: "Kod" },
              { key: "discount", label: "Zniżka (%)" },
              { key: "createdAt", label: "Data utworzenia" },
              { key: "expiresAt", label: "Data ważności" },
              { key: "status", label: "Status" },
            ]}
            rows={tableRows}
          />
        </div>
      </div>
    </section>
  );
}