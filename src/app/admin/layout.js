// app/admin/layout.js
import { Sidebar } from "@/components/layout/SidebarAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
