// app/biznes/raporty/page.js
import { OrdersTable } from "@/components/business/OrdersTable";

export default function BusinessRaports() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Raporty zużycia</h2>
      <OrdersTable />
    </section>
  );
}
