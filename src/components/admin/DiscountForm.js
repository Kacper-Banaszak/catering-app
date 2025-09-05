// components/admin/DiscountForm.js

"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function DiscountForm() {
  return (
    <form onSubmit={(e)=>{e.preventDefault(); alert("Zapisano kod");}} className="bg-white rounded shadow p-4 space-y-3">
      <Input label="Kod" placeholder="NP. WITAJ10" />
      <Input label="Zniżka (%)" type="number" min="0" max="100" />
      <Button type="submit">Zapisz</Button>
    </form>
  );
}
