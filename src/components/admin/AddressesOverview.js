"use client";

import { useState, useEffect } from "react";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import * as XLSX from "xlsx";

const MOCK_ADDRESSES = [
  { id: 1, date: "2025-09-07", name: "Punkt A", street: "Kwiatowa", number: "1", city: "Warszawa", zip: "00-001", notes: "Zostawić u sąsiada" },
  { id: 2, date: "2025-09-07", name: "Punkt B", street: "Słoneczna", number: "15/3", city: "Kraków", zip: "30-002", notes: "Dzwonić domofonem" },
  { id: 3, date: "2025-09-08", name: "Punkt C", street: "Długa", number: "22", city: "Gdańsk", zip: "80-831", notes: "" },
  { id: 4, date: "2025-09-07", name: "Punkt D", street: "Rynek", number: "10", city: "Wrocław", zip: "50-101", notes: "Uwaga pies" },
];

export function AddressesOverview() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [addresses, setAddresses] = useState([]);
  const [selectedRows, setSelectedRows] = useState(new Set());

  useEffect(() => {
    const filtered = MOCK_ADDRESSES.filter(addr => addr.date === selectedDate);
    setAddresses(filtered);
    setSelectedRows(new Set()); 
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

  const handleExportToExcel = () => {
    const dataToExport = addresses
      .filter(addr => selectedRows.size === 0 || selectedRows.has(addr.id))
      .map(addr => ({
        'Nazwa': addr.name,
        'Ulica': addr.street,
        'Numer': addr.number,
        'Miejscowość': addr.city,
        'Kod pocztowy': addr.zip,
        'Kraj': 'Polska', 
        'Opis': addr.notes,
      }));

    if (dataToExport.length === 0) {
        alert("Brak danych do wyeksportowania. Wybierz przynajmniej jeden adres lub zmień datę.");
        return;
    }

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Adresy");
    XLSX.writeFile(workbook, `adresy_${selectedDate}.xlsx`);
  };

  const columns = [
    { key: "select", label: "Wybierz" },
    { key: "name", label: "Nazwa / Klient" },
    { key: "address", label: "Adres" },
    { key: "notes", label: "Uwagi" },
  ];

  const tableRows = addresses.map(addr => ({
    ...addr,
    select: <input type="checkbox" checked={selectedRows.has(addr.id)} onChange={() => handleSelectRow(addr.id)} />,
    address: `${addr.street} ${addr.number}, ${addr.zip} ${addr.city}`,
  }));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input 
          type="date" 
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded px-3 py-2" 
        />
        <Button onClick={handleExportToExcel}>
          Eksportuj do Excel (dla AutoMapa)
        </Button>
      </div>
      <p className="text-sm text-gray-600">
        Zaznaczono {selectedRows.size} z {addresses.length} adresów. Jeśli żaden adres nie jest zaznaczony, eksportowane będą wszystkie widoczne.
      </p>
      <Table
        columns={columns}
        rows={tableRows}
      />
    </div>
  );
}