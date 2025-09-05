import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        Witaj w Catering App 🍴
      </h1>
      <p className="text-lg mb-6 text-gray-600">
        Zamów swoją dietę pudełkową online i ciesz się zdrowym jedzeniem bez wysiłku.
      </p>
      <Button link="/klient">Przejdź do panelu klienta</Button>
    </section>
  );
}
