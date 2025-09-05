import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Catering App",
  description: "System do obsługi cateringu dietetycznego",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col bg-gray-50 text-red-900">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
