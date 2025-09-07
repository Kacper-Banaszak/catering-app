"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function AddDish({ open, onClose, onSave, dietTypes }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newDish = {
      nazwa: formData.get("nazwa"),
      typDiety: formData.get("typDiety"),
      alergeny: formData.get("alergeny"),
      kcal: formData.get("kcal"),
    };
    onSave(newDish);
    event.target.reset();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Dodaj nową potrawę"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nazwa" className="block text-sm font-medium text-gray-700">Nazwa potrawy</label>
          <input type="text" name="nazwa" id="nazwa" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="typDiety" className="block text-sm font-medium text-gray-700">Typ diety</label>
          <select name="typDiety" id="typDiety" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            {dietTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="alergeny" className="block text-sm font-medium text-gray-700">Alergeny</label>
          <input type="text" name="alergeny" id="alergeny" placeholder="np. gluten, laktoza" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="kcal" className="block text-sm font-medium text-gray-700">Kaloryczność (kcal)</label>
          <input type="number" name="kcal" id="kcal" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>Anuluj</Button>
          <Button type="submit">Zapisz potrawę</Button>
        </div>
      </form>
    </Modal>
  );
}