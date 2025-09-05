// app/klient/support/page.js
import { TicketList } from "@/components/client/TicketList";

export default function ClientSupport() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Wiadomości / Zgłoszenia</h2>
      <TicketList />
    </section>
  );
}
