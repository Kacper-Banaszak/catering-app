// ...existing code...
import { ReportChart } from "@/components/admin/ReportChart";
import { DiscountStats } from "@/components/admin/DiscountStats";

export default function AdminRaports() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Raporty i statystyki</h2>
        <ReportChart />
      </div>
      <DiscountStats />
    </section>

  );
}