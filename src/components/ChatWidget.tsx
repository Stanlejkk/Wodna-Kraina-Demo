"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const WELCOME_MESSAGE =
  "Cześć! 🎣 Jestem asystentem Wodnej Krainy. Pytaj o cennik, rezerwację, dojazd lub cokolwiek o łowisku!";

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  if (/^(cześć|czesc|hej|witam|siema|hello|hi|dzień dobry)/.test(lower)) {
    return "Cześć! 🎣 Witaj na Wodnej Krainie. Mogę pomóc z rezerwacją, cennikiem lub informacjami o łowisku. O co pytasz?";
  }

  if (/cen|opłat|ile kosztuje|koszt|płac/.test(lower)) {
    return "Doba na łowisku karpiowym to 100 zł (3 wędki). Weekend Pt-Nd: 240 zł. Drapieżniki: 120 zł/dzień. Domki od 300 zł. Pełny cennik: /oplaty";
  }

  if (/rezerwacj|zarezerwu|booking|wolne/.test(lower)) {
    return "Możesz zarezerwować online na stronie /oplaty – wybierz akwen, stanowisko i termin. Albo zadzwoń: 512 464 846";
  }

  if (/dojazd|jak dojechać|gdzie|lokalizacj|adres|mapa/.test(lower)) {
    return "Ul. Stawowa 9, 08-470 Wilga – 50 km od Warszawy. Najlepiej trasą przez Górę Kalwarię. Mapka: /kontakt";
  }

  if (/godzin|otwart|kiedy|czynne/.test(lower)) {
    return "Pn-Nd 08:00-21:00. Dla karpiarzy 24h!";
  }

  if (/ryb|karp|amur|szczupak|sandacz|gatunek/.test(lower)) {
    return "Mamy karpie 5-25 kg, amury 8-20 kg, szczupaki 5-20 kg, sandacze, okonie i więcej. Zasada: Złów i Wypuść. Więcej: /gatunki-ryb";
  }

  if (/domek|domki|nocleg|spanie|zakwaterowanie/.test(lower)) {
    return "Domek mały od 300 zł, duży z poddaszem od 600 zł, VIP od 800 zł. Rezerwacja: 512 464 846 lub /oplaty";
  }

  if (/regulamin|zasad|reguł/.test(lower)) {
    return "Pełny regulamin: /regulamin. Najważniejsze: Złów i Wypuść, 3 wędki, mata i podbierak obowiązkowe.";
  }

  return "Hmm, nie jestem pewien. Zadzwoń do nas: 512 464 846 – chętnie pomożemy! Albo zapytaj o cennik, rezerwację, dojazd lub gatunki ryb.";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    const botMsg: Message = { role: "bot", text: getBotResponse(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-background flex items-center justify-center shadow-lg shadow-accent/30 hover:bg-accent/90 transition-all hover:scale-105"
        aria-label={isOpen ? "Zamknij czat" : "Otwórz czat"}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <span className="text-2xl">🎣</span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] max-h-[500px] rounded-lg border border-border bg-card shadow-2xl shadow-black/10 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-primary border-b border-border flex items-center gap-3">
            <span className="text-xl">🎣</span>
            <div>
              <p className="text-sm font-semibold text-white">Wodna Kraina</p>
              <p className="text-xs text-white/60">Asystent łowiska</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[340px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    msg.role === "user"
                      ? "bg-accent text-background rounded-br-none"
                      : "bg-muted text-foreground/80 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Napisz wiadomość..."
              className="flex-1 bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 bg-accent text-background rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
