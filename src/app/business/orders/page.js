// app/biznes/zamowienia/page.js
import { OrdersTable } from "@/components/business/OrdersTable";

export default function BusinessOrders() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Zamówienia zbiorcze</h2>
      <OrdersTable />
    </section>
  );
}
