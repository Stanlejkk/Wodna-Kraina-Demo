"use client";

import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact info + Map */}
      <div className="space-y-6">
        <div className="p-6 rounded-xl border border-border bg-card/80">
          <h3 className="font-heading text-xl font-semibold text-accent mb-4">
            Dane kontaktowe
          </h3>
          <div className="space-y-3 text-sm text-foreground/70">
            <p className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent flex-shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              ul. Stawowa 9, 08-470 Wilga
            </p>
            <p className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent flex-shrink-0 mt-0.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+48512464846" className="hover:text-accent transition-colors">
                512 464 846
              </a>
            </p>
            <p className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent flex-shrink-0 mt-0.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              NIP: 8262217408 (MMW Sp. z o.o.)
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/80">
          <h3 className="font-heading text-xl font-semibold text-accent mb-4">
            Godziny otwarcia
          </h3>
          <div className="space-y-2 text-sm text-foreground/70">
            <div className="flex justify-between">
              <span>Poniedziałek – Niedziela</span>
              <span className="text-foreground font-medium">08:00 – 21:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sesje karpiowe</span>
              <span className="text-accent font-medium">24h</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border h-[280px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d21.36!3d51.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQzJzQ4LjAiTiAyMcKwMjEnMzYuMCJF!5e0!3m2!1spl!2spl!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - Wodna Kraina, Wilga"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-6 lg:p-8 rounded-xl border border-border bg-card/80">
        <h3 className="font-heading text-xl font-semibold text-accent mb-6">
          Napisz do nas
        </h3>

        {submitted && (
          <div className="mb-6 p-4 rounded-lg bg-primary/20 border border-primary/30 text-sm text-foreground">
            Wiadomość wysłana! Odpowiemy najszybciej jak to możliwe.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-foreground/70 mb-1.5">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Jan Kowalski"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-foreground/70 mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="jan@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-foreground/70 mb-1.5">
              Wiadomość
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent resize-none"
              placeholder="Twoja wiadomość..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </div>
  );
}
