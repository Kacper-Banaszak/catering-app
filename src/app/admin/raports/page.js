// app/admin/raporty/page.js
import { ReportChart } from "@/components/admin/ReportChart";

export default function AdminRaports() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Raporty i statystyki</h2>
      <ReportChart />
    </section>
  );
}
