"use client";


import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function FeedbackForm() {
  const [rating, setRating] = useState(5);
  return (
    <form onSubmit={(e)=>{e.preventDefault(); alert("Dziękujemy za opinię!");}} className="bg-white rounded shadow p-4 space-y-3">
      <Input label="Ocena (1-5)" type="number" min="1" max="5" value={rating} onChange={e=>setRating(e.target.value)} />
      <label className="block">
        <span className="block text-sm mb-1">Komentarz</span>
        <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Co możemy poprawić?" />
      </label>
      <Button type="submit">Wyślij</Button>
    </form>
  );
}
