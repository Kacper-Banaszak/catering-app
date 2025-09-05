// app/biznes/pracownicy/page.js
import { EmployeeUpload } from "@/components/business/EmployeeUpload";

export default function BusinessEmployees() {
  return (
    <section className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Import pracowników</h2>
      <EmployeeUpload />
    </section>
  );
}
