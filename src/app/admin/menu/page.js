'use client';

import { useState, useRef } from "react";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { AddDish } from "@/components/admin/AddDish";
import * as XLSX from "xlsx";

const DIET_TYPES = [
  "Dieta Standardowa",
  "Dieta Wegetariańska",
  "Dieta Wegetariańska z rybą",
  "Dieta Ketogeniczna",
  "Dieta bez Glutenu",
  "Dieta bez Laktozy",
  "Dieta dla Seniora",
  "Dieta dla Seniora bez glutenu lub laktozy",
  "Dieta dla Seniora dla diabetyka",
];

export default function AdminMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  
  const [rows, setRows] = useState([
    { id: 1, nazwa: "Kurczak z ryżem", typDiety: "Dieta Standardowa", alergeny: "gluten", kcal: 550 },
    { id: 2, nazwa: "Tofu ze szpinakiem", typDiety: "Dieta Wegetariańska", alergeny: "soja", kcal: 420 },
  ]);

  const handleSaveDish = (newDish) => {
    const dishWithId = {
      ...newDish,
      id: rows.length + 1, // Tymczasowe ID
    };
    setRows(prevRows => [...prevRows, dishWithId]);
    setIsModalOpen(false);
  };

  const handleFileImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        const newDishes = json.map((row, index) => ({
          id: rows.length + index + 1,
          nazwa: row['Nazwa'],
          typDiety: row['Typ Diety'],
          alergeny: row['Alergeny'] || '',
          kcal: row['Kcal'],
        }));

        // Prosta walidacja
        if (!newDishes[0]?.nazwa || !newDishes[0]?.typDiety || !newDishes[0]?.kcal) {
            throw new Error("Plik ma nieprawidłowe kolumny. Wymagane: 'Nazwa', 'Typ Diety', 'Kcal'.");
        }

        setRows(prevRows => [...prevRows, ...newDishes]);
        alert(`Zaimportowano pomyślnie ${newDishes.length} potraw.`);
      } catch (error) {
        console.error("Błąd podczas importu pliku:", error);
        alert(`Wystąpił błąd: ${error.message}`);
      } finally {
        // Resetuj input, aby można było wgrać ten sam plik ponownie
        event.target.value = '';
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Zarządzanie menu</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            Importuj z Excel
          </Button>
          <Button onClick={() => setIsModalOpen(true)}>Dodaj potrawę</Button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileImport}
            className="hidden"
            accept=".xlsx, .xls"
          />
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Aby zaimportować potrawy, przygotuj plik Excel z kolumnami: <strong>Nazwa</strong>, <strong>Typ Diety</strong>, <strong>Alergeny</strong>, <strong>Kcal</strong>.
      </p>
      <Table
        columns={[
          { key: "nazwa", label: "Nazwa" },
          { key: "typDiety", label: "Typ diety" },
          { key: "alergeny", label: "Alergeny" },
          { key: "kcal", label: "kcal" },
        ]}
        rows={rows}
      />

      <AddDish
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveDish}
        dietTypes={DIET_TYPES}
      />
    </section>
  );
}