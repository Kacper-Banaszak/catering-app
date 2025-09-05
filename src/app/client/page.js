import OrderCard from "@/components/client/OrderCard";

export default function ClientDashboard() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Panel Klienta</h1>
      <OrderCard />
    </section>
  );
}
