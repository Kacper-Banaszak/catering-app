// app/admin/page.js
import { Card } from "@/components/ui/Card";
import { ReportChart } from "@/components/admin/ReportChart";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Panel Administratora</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Nowi klienci">24</Card>
        <Card title="Powracający">15</Card>
        <Card title="Stali">120</Card>
      </div>
      <ReportChart />
    </div>
  );
}
