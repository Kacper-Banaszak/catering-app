"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

// Przykładowe dane z dodanym statusem 'open' lub 'closed'
const MOCK_MESSAGES = [
  {
    id: 1,
    sender: "Jan Kowalski",
    email: "jan.kowalski@example.com",
    subject: "Pytanie o dietę wegetariańską",
    body: "Dzień dobry, czy w diecie wegetariańskiej jest możliwość wykluczenia soi? Mam na nią alergię. Pozdrawiam, Jan.",
    timestamp: "2025-09-07T10:30:00Z",
    read: false,
    status: "open",
  },
  {
    id: 2,
    sender: "Anna Nowak",
    email: "anna.nowak@example.com",
    subject: "Zmiana adresu dostawy",
    body: "Witam, proszę o zmianę adresu dostawy od jutra na ul. Słoneczną 15, 00-123 Warszawa. Dziękuję.",
    timestamp: "2025-09-06T15:00:00Z",
    read: true,
    status: "closed",
  },
  {
    id: 3,
    sender: "Piotr Wiśniewski",
    email: "piotr.wisniewski@example.com",
    subject: "Problem z daniem",
    body: "Ostatni obiad ktory otrzymałem był spalony. Proszę o wyjaśnienie tej sytuacji.",
    timestamp: "2025-09-05T09:12:00Z",
    read: false,
    status: "open",
  },
];

export function Inbox() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [selectedMessageId, setSelectedMessageId] = useState(1);
  const [filter, setFilter] = useState("open"); // 'open', 'closed', 'all'

  const selectedMessage = messages.find(m => m.id === selectedMessageId);

  const handleSelectMessage = (id) => {
    setSelectedMessageId(id);
    setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m));
  };

  const handleToggleStatus = () => {
    if (!selectedMessage) return;
    const newStatus = selectedMessage.status === "open" ? "closed" : "open";
    setMessages(messages.map(m => m.id === selectedMessageId ? { ...m, status: newStatus } : m));
  };

  const handleReply = (e) => {
    e.preventDefault();
    const replyText = e.target.elements.reply.value;
    if (replyText.trim()) {
      alert(`Odpowiedź do ${selectedMessage.email} została wysłana:\n\n"${replyText}"`);
      e.target.reset();
    }
  };

  const filteredMessages = messages.filter(m => {
    if (filter === "all") return true;
    return m.status === filter;
  });

  return (
    <div className="flex h-[calc(100vh-150px)] bg-white rounded-lg shadow">
      {/* Lista wiadomości */}
      <div className="w-1/3 border-r flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Skrzynka odbiorcza</h2>
          <div className="flex gap-2 mt-2">
            <Button size="sm" variant={filter === 'open' ? 'default' : 'outline'} onClick={() => setFilter('open')}>Otwarte</Button>
            <Button size="sm" variant={filter === 'closed' ? 'default' : 'outline'} onClick={() => setFilter('closed')}>Zamknięte</Button>
            <Button size="sm" variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>Wszystkie</Button>
          </div>
        </div>
        <ul className="overflow-y-auto">
          {filteredMessages.map(message => (
            <li
              key={message.id}
              onClick={() => handleSelectMessage(message.id)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedMessageId === message.id ? 'bg-blue-50' : ''}`}
            >
              <div className="flex justify-between items-center">
                <p className={`font-semibold ${!message.read ? 'text-gray-900' : 'text-gray-600'}`}>{message.sender}</p>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${message.status === 'open' ? 'bg-green-500' : 'bg-gray-400'}`} title={`Status: ${message.status}`}></span>
                  {!message.read && <span className="w-2 h-2 bg-blue-500 rounded-full" title="Nieprzeczytana"></span>}
                </div>
              </div>
              <p className={`truncate text-sm ${!message.read ? 'text-gray-800' : 'text-gray-500'}`}>{message.subject}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Podgląd wiadomości i odpowiedź */}
      <div className="w-2/3 flex flex-col">
        {selectedMessage ? (
          <>
            <div className="p-4 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{selectedMessage.subject}</h3>
                  <p className="text-sm text-gray-500">Od: {selectedMessage.sender} ({selectedMessage.email})</p>
                  <p className="text-xs text-gray-400">{new Date(selectedMessage.timestamp).toLocaleString()}</p>
                </div>
                <Button variant="outline" onClick={handleToggleStatus}>
                  {selectedMessage.status === 'open' ? 'Zamknij zgłoszenie' : 'Otwórz ponownie'}
                </Button>
              </div>
            </div>
            <div className="p-4 flex-grow overflow-y-auto">
              <p>{selectedMessage.body}</p>
            </div>
            <div className="p-4 border-t bg-gray-50">
              <form onSubmit={handleReply}>
                <textarea
                  name="reply"
                  className="w-full border rounded-md p-2 h-24"
                  placeholder={`Odpowiedz do ${selectedMessage.sender}...`}
                  required
                  disabled={selectedMessage.status === 'closed'}
                ></textarea>
                <div className="mt-2 text-right">
                  <Button type="submit" disabled={selectedMessage.status === 'closed'}>Wyślij odpowiedź</Button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Wybierz wiadomość, aby ją wyświetlić.</p>
          </div>
        )}
      </div>
    </div>
  );
}