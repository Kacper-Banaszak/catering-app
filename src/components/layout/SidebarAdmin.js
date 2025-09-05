import Link from "next/link";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/clients", label: "Klienci" },
  { href: "/admin/codes", label: "Kody rabatowe" },
  { href: "/admin/raports", label: "Raporty" },
  { href: "/admin/labels", label: "Etykiety" },
  { href: "/admin/menu", label: "Menu" },
];

export function SidebarAdmin() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-lg font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block p-2 rounded hover:bg-gray-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
