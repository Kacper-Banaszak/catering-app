import { SidebarClient } from "@/components/layout/SidebarClient";

export default function ClientLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SidebarClient />

      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}
