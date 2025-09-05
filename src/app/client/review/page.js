// app/klient/oceny/page.js
import { FeedbackForm } from "@/components/client/FeedbackForm";

export default function ClientReviews() {
  return (
    <section className="max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Oceń dzisiejsze posiłki</h2>
      <FeedbackForm />
    </section>
  );
}
