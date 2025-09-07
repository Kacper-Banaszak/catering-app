import { AddressesOverview } from "@/components/admin/AddressesOverview";

export default function AdminAddresses() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Adresy dostaw</h2>
      <p className="text-gray-600">
        Wybierz dzień, aby wyświetlić adresy dostaw. Możesz zaznaczyć wybrane pozycje i wyeksportować je do pliku Excel w formacie dla AutoMapy.
      </p>
      <AddressesOverview />
    </section>
  );
}