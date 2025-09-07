"use client";

import { useState, useEffect } from "react";
import { Table } from "@/components/ui/Table";
import { Card } from "@/components/ui/Card";

// Przykładowe dane, które normalnie pochodziłyby z API
const MOCK_STATS = [
  { code: "WITAJ10", usageCount: 152 },
  { code: "LATO2025", usageCount: 98 },
  { code: "WIOSNA", usageCount: 45 },
  { code: "NOWYKLIENT", usageCount: 180 },
];

export function DiscountStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Symulacja pobierania danych z API
    setStats(MOCK_STATS);
  }, []);

  const mostPopularCode = stats.reduce((prev, current) => (prev.usageCount > current.usageCount) ? prev : current, { code: 'Brak', usageCount: 0 });
  const totalUses = stats.reduce((sum, item) => sum + item.usageCount, 0);

  return (
    <div className="bg-white rounded shadow p-4 space-y-4">
      <h3 className="text-lg font-semibold">Statystyki kodów rabatowych</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card 
          title="Najpopularniejszy kod" 
          value={mostPopularCode.code}
          description={`Użyty ${mostPopularCode.usageCount} razy`}
        />
        <Card 
          title="Łączna liczba użyć" 
          value={totalUses}
          description="Wszystkie kody"
        />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Szczegółowe użycie</h4>
        <Table
          columns={[
            { key: "code", label: "Kod rabatowy" },
            { key: "usageCount", label: "Liczba użyć" },
          ]}
          rows={stats}
        />
      </div>
      </div>
  );
}