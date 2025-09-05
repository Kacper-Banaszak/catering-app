"use client";

import { Button } from "@/components/ui/Button";

export function EmployeeUpload() {
  return (
    <div className="bg-white rounded shadow p-4">
      <p className="text-sm text-gray-600 mb-3">Załaduj plik CSV z listą pracowników.</p>
      <input type="file" accept=".csv" className="mb-3" />
      <Button onClick={()=>alert("Wysłano plik")}>Wyślij</Button>
    </div>
  );
}
