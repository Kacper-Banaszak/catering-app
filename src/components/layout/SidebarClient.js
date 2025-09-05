import Link from "next/link";

const links = [
  { href: "/client", label: "Moje zamówienia" },
  { href: "/client/menu", label: "Menu" },
  { href: "/client/orders", label: "Status" },
  { href: "/client/support", label: "Wiadomości" },
  { href: "/client/review", label: "Opinie o posiłkach" },
];

export function SidebarClient() {
  return (
    <aside className="w-64 bg-gray-50 border-r p-4">
      <h2 className="text-lg font-bold mb-6">Panel Klienta</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block p-2 rounded hover:bg-gray-200 transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
