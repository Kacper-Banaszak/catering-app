// app/admin/etykiety/page.js
import { OrdersOverview } from "@/components/admin/OrdersOverview";
import { LabelPreview } from "@/components/admin/LabelPreview";

export default function AdminLabels() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Podgląd dzienny zamówień</h2>
      <OrdersOverview />
      <h3 className="text-lg font-semibold">Podgląd etykiety</h3>
      <LabelPreview />
    </section>
  );
}
