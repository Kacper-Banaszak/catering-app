// components/admin/DiscountForm.js

"use client";

// ...existing code...
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function DiscountForm({ onSave }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCode = {
      code: formData.get("code"),
      discount: formData.get("discount"),
      expiresAt: formData.get("expiresAt"),
    };
    onSave(newCode);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="code" label="Kod" placeholder="NP. WITAJ10" required />
        <Input name="discount" label="Zniżka (%)" type="number" min="1" max="100" required />
      </div>
      <Input name="expiresAt" label="Data ważności" type="date" required />
      <Button type="submit">Dodaj kod rabatowy</Button>
    </form>
  );
}
