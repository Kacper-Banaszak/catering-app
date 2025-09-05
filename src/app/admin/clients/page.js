// app/admin/klienci/page.js
import { ClientTable } from "@/components/admin/ClientTable";

export default function AdminClients() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Klienci</h2>
      <ClientTable />
    </section>
  );
}
