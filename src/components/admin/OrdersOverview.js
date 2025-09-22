"use client";
import { useState, useEffect } from "react";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";

const ALL_ORDERS = [
  // Dane na dzisiaj (9 września 2025)
  { id: 1, klient: "Marek Jurkowski", dieta: "Standard 2000", data: "2025-09-09" },
  { id: 2, klient: "Ewa Polak", dieta: "Vege 1800", data: "2025-09-09" },
  { id: 3, klient: "Tomasz Bąk", dieta: "Keto 2500", data: "2025-09-09" },
  
  // Dane na 10 września 2025
  { id: 4, klient: "Jan Kowalski", dieta: "Standard 2000", data: "2025-09-10" },
  { id: 5, klient: "Anna Nowak", dieta: "Vege 1800", data: "2025-09-10" },
  { id: 6, klient: "Piotr Zieliński", dieta: "Bez Glutenu 2200", data: "2025-09-10" },
  { id: 7, klient: "Katarzyna Wójcik", dieta: "Senior 1500", data: "2025-09-10" },
  { id: 8, klient: "Krzysztof Mazur", dieta: "Standard 2500", data: "2025-09-10" },

  // Dodatkowe dane na inny dzień
  { id: 9, klient: "Agnieszka Kaczmarek", dieta: "Vege z Rybą 2000", data: "2025-09-11" },
];

export function OrdersOverview() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedRows, setSelectedRows] = useState(new Set());

  useEffect(() => {
    const filtered = ALL_ORDERS.filter(order => order.data === selectedDate);
    setFilteredOrders(filtered);
    setSelectedRows(new Set()); // Resetuj zaznaczenie przy zmianie daty
  }, [selectedDate]);

  const handleSelectRow = (id) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedRows(newSelection);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = new Set(filteredOrders.map(order => order.id));
      setSelectedRows(allIds);
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleGeneratePdf = () => {
    if (selectedRows.size === 0) {
      alert("Nie zaznaczono żadnych etykiet. Zaznacz przynajmniej jedną, aby wygenerować PDF.");
      return;
    }
    alert(`Generowanie PDF dla ${selectedRows.size} zaznaczonych etykiet...`);
    // Tutaj logika generowania PDF
  };

  const columns = [
    { 
      key: "select", 
      label: <input type="checkbox" onChange={handleSelectAll} checked={selectedRows.size > 0 && selectedRows.size === filteredOrders.length} /> 
    },
    { key: "klient", label: "Klient" },
    { key: "dieta", label: "Dieta" },
    { key: "data", label: "Data" },
  ];

  const tableRows = filteredOrders.map(order => ({
    ...order,
    select: <input type="checkbox" checked={selectedRows.has(order.id)} onChange={() => handleSelectRow(order.id)} />
  }));

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <label htmlFor="order-date" className="text-sm font-medium">Wybierz datę:</label>
        <input 
          type="date" 
          id="order-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded px-3 py-2" 
        />
        <Button variant="outline" onClick={handleGeneratePdf}>Generuj PDF dla zaznaczonych</Button>
      </div>
      <Table
        columns={columns}
        rows={tableRows}
      />
    </div>
  );
}