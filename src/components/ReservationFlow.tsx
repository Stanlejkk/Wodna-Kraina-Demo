"use client";

import { useState, useMemo } from "react";
import { lakes } from "@/data/lakes";
import { spots, type Spot } from "@/data/spots";
import { mockReservations } from "@/data/mock-reservations";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";

function getLakeLabel(lakeId: string): string {
  const map: Record<string, string> = {
    "akwen-glowny": "Akwen Główny",
    "akwen-lesny": "Akwen Leśny",
    "drapiezniki": "Drapieżniki",
  };
  return map[lakeId] || lakeId;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function dateDiffDays(from: string, to: string): number {
  const a = new Date(from);
  const b = new Date(to);
  return Math.max(1, Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24)));
}

export function ReservationFlow() {
  const [step, setStep] = useState(1);
  const [selectedLake, setSelectedLake] = useState<string | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [dateFrom, setDateFrom] = useState<string | null>(null);
  const [dateTo, setDateTo] = useState<string | null>(null);
  const [calMonth, setCalMonth] = useState(2); // March 2026 (0-indexed)
  const [calYear, setCalYear] = useState(2026);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    persons: "1",
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const lakeSpots = useMemo(() => {
    if (!selectedLake) return [];
    return spots.filter((s) => s.lakeId === selectedLake);
  }, [selectedLake]);

  const isSpotOccupied = (spot: Spot, date: string): boolean => {
    const lakeName = getLakeLabel(spot.lakeId);
    return mockReservations.some(
      (r) => r.lake === lakeName && r.spot === spot.name && r.from <= date && r.to >= date
    );
  };

  const handleSelectLake = (lakeId: string) => {
    setSelectedLake(lakeId);
    setSelectedSpot(null);
    setDateFrom(null);
    setDateTo(null);
    setStep(2);
  };

  const handleSelectSpot = (spot: Spot) => {
    setSelectedSpot(spot);
    setDateFrom(null);
    setDateTo(null);
    setStep(3);
  };

  const handleSelectDate = (date: string) => {
    if (!dateFrom || dateTo) {
      setDateFrom(date);
      setDateTo(null);
    } else if (date > dateFrom) {
      setDateTo(date);
      setStep(4);
    } else {
      setDateFrom(date);
      setDateTo(null);
    }
  };

  const handlePrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear(calYear - 1);
    } else {
      setCalMonth(calMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear(calYear + 1);
    } else {
      setCalMonth(calMonth + 1);
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = "Wymagane";
    if (!formData.lastName.trim()) errors.lastName = "Wymagane";
    if (!formData.phone.trim()) errors.phone = "Wymagane";
    if (!formData.email.trim()) errors.email = "Wymagane";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Nieprawidłowy email";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleGoToSummary = () => {
    if (validateForm()) {
      setStep(5);
    }
  };

  const totalDays = dateFrom && dateTo ? dateDiffDays(dateFrom, dateTo) : 1;
  const totalPrice = selectedSpot ? selectedSpot.pricePerDay * totalDays : 0;

  const formatDate = (d: string) => {
    const date = new Date(d);
    return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
  };

  return (
    <div className="space-y-8">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[
          { n: 1, label: "Akwen" },
          { n: 2, label: "Stanowisko" },
          { n: 3, label: "Termin" },
          { n: 4, label: "Dane" },
          { n: 5, label: "Podsumowanie" },
        ].map(({ n, label }) => (
          <div key={n} className="flex items-center gap-2">
            <button
              onClick={() => n < step && setStep(n)}
              disabled={n > step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                n === step
                  ? "bg-accent text-background"
                  : n < step
                  ? "bg-primary text-foreground cursor-pointer hover:bg-primary-light"
                  : "bg-muted text-foreground/30"
              }`}
            >
              {n}
            </button>
            <span
              className={`text-xs hidden sm:inline ${
                n === step ? "text-accent" : "text-foreground/40"
              }`}
            >
              {label}
            </span>
            {n < 5 && (
              <div className="w-6 h-px bg-border mx-1 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Select Lake */}
      {step === 1 && (
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Wybierz akwen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lakes.map((lake) => (
              <button
                key={lake.id}
                onClick={() => handleSelectLake(lake.id)}
                className="card-hover p-6 rounded-lg border border-border bg-card text-left hover:border-accent/50 transition-all"
              >
                <span className="text-3xl mb-3 block">{lake.icon}</span>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {lake.name}
                </h4>
                <p className="text-sm text-accent mb-2">{lake.size}</p>
                <p className="text-xs text-foreground/50">{lake.shortDescription}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Select Spot */}
      {step === 2 && selectedLake && (
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Wybierz stanowisko
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lakeSpots.map((spot) => {
              const today = new Date();
              const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
              const occupied = isSpotOccupied(spot, todayStr);

              return (
                <button
                  key={spot.id}
                  onClick={() => handleSelectSpot(spot)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    occupied
                      ? "border-red-800/30 bg-red-900/10 opacity-50"
                      : "border-border bg-card hover:border-accent/50 card-hover"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm text-foreground">{spot.name}</h4>
                    <span className="text-accent font-bold text-sm">
                      {spot.pricePerDay} zł
                    </span>
                  </div>
                  <p className="text-xs text-foreground/50">{spot.description}</p>
                  {occupied && (
                    <p className="text-xs text-red-400 mt-1">Aktualnie zajęte</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Calendar */}
      {step === 3 && selectedLake && selectedSpot && (
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-2 text-center">
            Wybierz termin
          </h3>
          <p className="text-sm text-foreground/50 mb-6 text-center">
            {dateFrom
              ? dateTo
                ? `Wybrano: ${formatDate(dateFrom)} – ${formatDate(dateTo)}`
                : `Od: ${formatDate(dateFrom)} – kliknij datę końcową`
              : "Kliknij datę rozpoczęcia"}
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handlePrevMonth}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground/50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 4l-4 4 4 4" />
                </svg>
              </button>
              <button
                onClick={handleNextMonth}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground/50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </button>
            </div>

            <AvailabilityCalendar
              selectedLake={selectedLake}
              selectedSpot={selectedSpot.name}
              month={calMonth}
              year={calYear}
              dateFrom={dateFrom}
              dateTo={dateTo}
              onSelectDate={handleSelectDate}
            />
          </div>

          {dateFrom && dateTo && (
            <div className="text-center mt-6">
              <button
                onClick={() => setStep(4)}
                className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all"
              >
                Dalej
              </button>
            </div>
          )}
        </div>
      )}

      {/* Step 4: Form */}
      {step === 4 && (
        <div className="max-w-lg mx-auto">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Twoje dane
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-foreground/50 mb-1.5">Imię</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Jan"
                />
                {formErrors.firstName && (
                  <p className="text-xs text-red-400 mt-1">{formErrors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-foreground/50 mb-1.5">Nazwisko</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData((p) => ({ ...p, lastName: e.target.value }))}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Kowalski"
                />
                {formErrors.lastName && (
                  <p className="text-xs text-red-400 mt-1">{formErrors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm text-foreground/50 mb-1.5">Telefon</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="512 464 846"
              />
              {formErrors.phone && (
                <p className="text-xs text-red-400 mt-1">{formErrors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-foreground/50 mb-1.5">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="jan@example.com"
              />
              {formErrors.email && (
                <p className="text-xs text-red-400 mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-foreground/50 mb-1.5">Liczba osób</label>
              <select
                value={formData.persons}
                onChange={(e) => setFormData((p) => ({ ...p, persons: e.target.value }))}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleGoToSummary}
              className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all"
            >
              Przejdź do podsumowania
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Summary */}
      {step === 5 && selectedSpot && dateFrom && (
        <div className="max-w-lg mx-auto">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Podsumowanie rezerwacji
          </h3>

          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Akwen</span>
              <span className="text-foreground font-medium">
                {getLakeLabel(selectedLake!)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Stanowisko</span>
              <span className="text-foreground font-medium">{selectedSpot.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Termin</span>
              <span className="text-foreground font-medium">
                {formatDate(dateFrom)} – {dateTo ? formatDate(dateTo) : formatDate(dateFrom)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Liczba dób</span>
              <span className="text-foreground font-medium">{totalDays}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Cena za dobę</span>
              <span className="text-foreground font-medium">
                {selectedSpot.pricePerDay} zł
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Osób</span>
              <span className="text-foreground font-medium">{formData.persons}</span>
            </div>

            <hr className="border-border" />

            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Rezerwujący</span>
              <span className="text-foreground font-medium">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Telefon</span>
              <span className="text-foreground font-medium">{formData.phone}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Email</span>
              <span className="text-foreground font-medium">{formData.email}</span>
            </div>

            <hr className="border-border" />

            <div className="flex justify-between items-center">
              <span className="text-foreground font-semibold text-lg">Do zapłaty</span>
              <span className="text-accent font-bold text-2xl">{totalPrice} zł</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setShowPaymentModal(true)}
              className="px-8 py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-all text-lg hover:shadow-lg hover:shadow-accent/20"
            >
              Zapłać przez PayU – {totalPrice} zł
            </button>
          </div>
        </div>
      )}

      {/* Payment Demo Modal */}
      {showPaymentModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPaymentModal(false)}
        >
          <div
            className="bg-card border border-border rounded-lg max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
              Wersja Demo
            </h3>
            <p className="text-foreground/50 text-sm mb-6">
              W wersji produkcyjnej nastąpi przekierowanie do systemu płatności
              PayU. Kwota do zapłaty: <span className="text-accent font-bold">{totalPrice} zł</span>
            </p>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
