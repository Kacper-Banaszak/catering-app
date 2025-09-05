// app/biznes/page.js
import { BusinessStats } from "@/components/business/BusinessStats";

export default function BusinessDashboard() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Panel Biznesowy</h1>
      <BusinessStats />
    </section>
  );
}
