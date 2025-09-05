import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-green-600">
          CateringApp
        </Link>
        <div className="space-x-4">
          <Link href="/client">Klient</Link>
          <Link href="/business">Biznes</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
