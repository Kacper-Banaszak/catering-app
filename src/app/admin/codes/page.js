// app/admin/kody/page.js
import { DiscountForm } from "@/components/admin/DiscountForm";

export default function AdminCodes() {
  return (
    <section className="max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Kody rabatowe</h2>
      <DiscountForm />
    </section>
  );
}
