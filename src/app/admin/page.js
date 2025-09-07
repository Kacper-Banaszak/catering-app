// app/admin/page.js
import { DashboardStats } from "@/components/admin/DashboardStats";
import { ReportChart } from "@/components/admin/ReportChart";
import { ClientTable } from "@/components/admin/ClientTable";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Panel Administratora</h1>
      <DashboardStats />
      <ReportChart />
      <ClientTable />
    </div>
  );
}