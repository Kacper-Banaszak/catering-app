export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Developed by Kacper Banaszak. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
