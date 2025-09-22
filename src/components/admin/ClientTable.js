"use client";

import { useState, useEffect } from "react";
import { Table } from "@/components/ui/Table";
import { Input } from "@/components/ui/Input";

const ALL_CLIENTS = [
  { id: 1, name: "Jan Kowalski", typ: "Nowy", status: "Aktywny", opłacone: "tak" },
  { id: 2, name: "Anna Nowak", typ: "Stały", status: "Nieaktywny", opłacone: "tak" },
  { id: 3, name: "Piotr Wiśniewski", typ: "Powracający", status: "Aktywny", opłacone: "nie" },
  { id: 4, name: "Katarzyna Wójcik", typ: "Stały", status: "Aktywny", opłacone: "tak" },
  { id: 5, name: "Tomasz Kowalczyk", typ: "Nowy", status: "Aktywny", opłacone: "nie" },
  { id: 6, name: "Agnieszka Zielińska", typ: "Stały", status: "Aktywny", opłacone: "tak" },
  { id: 7, name: "Marcin Lewandowski", typ: "Powracający", status: "Nieaktywny", opłacone: "tak" },
  { id: 8, name: "Joanna Dąbrowska", typ: "Nowy", status: "Aktywny", opłacone: "tak" },
  { id: 9, name: "Krzysztof Szymański", typ: "Stały", status: "Aktywny", opłacone: "tak" },
  { id: 10, name: "Barbara Mazur", typ: "Powracający", status: "Aktywny", opłacone: "nie" },
];

export function ClientTable() {
  const [clients, setClients] = useState(ALL_CLIENTS);
  const [filters, setFilters] = useState({
    name: "",
    typ: "all",
    status: "all",
    opłacone: "all",
  });

  useEffect(() => {
    let filtered = ALL_CLIENTS;

    if (filters.name) {
      filtered = filtered.filter(client =>
        client.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.typ !== "all") {
      filtered = filtered.filter(client => client.typ === filters.typ);
    }
    if (filters.status !== "all") {
      filtered = filtered.filter(client => client.status === filters.status);
    }
    if (filters.opłacone !== "all") {
      filtered = filtered.filter(client => client.opłacone === filters.opłacone);
    }

    setClients(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const tableRows = clients.map(client => ({
    ...client,
    opłacone: (
      <span className={`font-semibold ${client.opłacone === 'tak' ? 'text-green-600' : 'text-red-600'}`}>
        {client.opłacone.charAt(0).toUpperCase() + client.opłacone.slice(1)}
      </span>
    )
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <h3 className="text-lg font-semibold">Lista Klientów</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input
          name="name"
          placeholder="Filtruj po nazwisku..."
          value={filters.name}
          onChange={handleFilterChange}
        />
        <select name="typ" onChange={handleFilterChange} value={filters.typ} className="border rounded px-3 py-2">
          <option value="all">Wszystkie typy</option>
          <option value="Nowy">Nowy</option>
          <option value="Stały">Stały</option>
          <option value="Powracający">Powracający</option>
        </select>
        <select name="status" onChange={handleFilterChange} value={filters.status} className="border rounded px-3 py-2">
          <option value="all">Wszystkie statusy</option>
          <option value="Aktywny">Aktywny</option>
          <option value="Nieaktywny">Nieaktywny</option>
        </select>
        <select name="opłacone" onChange={handleFilterChange} value={filters.opłacone} className="border rounded px-3 py-2">
          <option value="all">Wszystkie (opłacone)</option>
          <option value="tak">Tak</option>
          <option value="nie">Nie</option>
        </select>
      </div>
      <Table
        columns={[
          { key: "name", label: "Imię i nazwisko" },
          { key: "typ", label: "Typ" },
          { key: "status", label: "Status" },
          { key: "opłacone", label: "Opłacone" },
        ]}
        rows={tableRows}
      />
    </div>
  );
}