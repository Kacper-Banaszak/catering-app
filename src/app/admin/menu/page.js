// app/admin/menu/page.js

"use client";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";

export default function AdminMenu() {
  const rows = [
    { id: 1, nazwa: "Kurczak z ryżem", alergeny: "gluten", kcal: 550 },
    { id: 2, nazwa: "Tofu ze szpinakiem", alergeny: "-", kcal: 420 },
  ];
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Zarządzanie menu</h2>
        <Button onClick={() => alert("Dodaj potrawę")}>Dodaj potrawę</Button>
      </div>
      <Table
        columns={[
          { key: "nazwa", label: "Nazwa" },
          { key: "alergeny", label: "Alergeny" },
          { key: "kcal", label: "kcal" },
        ]}
        rows={rows}
      />
    </section>
  );
}
