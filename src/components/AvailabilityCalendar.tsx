"use client";

import { useMemo } from "react";
import { mockReservations } from "@/data/mock-reservations";

interface AvailabilityCalendarProps {
  selectedLake: string;
  selectedSpot: string;
  month: number; // 0-indexed
  year: number;
  dateFrom: string | null;
  dateTo: string | null;
  onSelectDate: (date: string) => void;
}

const DAY_NAMES = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];
const MONTH_NAMES = [
  "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
];

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

export function AvailabilityCalendar({
  selectedLake,
  selectedSpot,
  month,
  year,
  dateFrom,
  dateTo,
  onSelectDate,
}: AvailabilityCalendarProps) {
  const occupiedDates = useMemo(() => {
    const lakeName = getLakeLabel(selectedLake);
    const occupied = new Set<string>();

    mockReservations
      .filter((r) => r.lake === lakeName && r.spot === selectedSpot)
      .forEach((r) => {
        const from = new Date(r.from);
        const to = new Date(r.to);
        const current = new Date(from);
        while (current <= to) {
          occupied.add(
            `${current.getFullYear()}-${pad(current.getMonth() + 1)}-${pad(current.getDate())}`
          );
          current.setDate(current.getDate() + 1);
        }
      });

    return occupied;
  }, [selectedLake, selectedSpot]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Monday = 0, Sunday = 6
  const firstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7;

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const isSelected = (dateStr: string) => {
    if (!dateFrom) return false;
    if (dateStr === dateFrom) return true;
    if (!dateTo) return false;
    if (dateStr === dateTo) return true;
    return dateStr > dateFrom && dateStr < dateTo;
  };

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h4 className="font-heading text-lg font-semibold text-foreground mb-4 text-center">
        {MONTH_NAMES[month]} {year}
      </h4>

      {/* Day names header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_NAMES.map((d) => (
          <div
            key={d}
            className="text-center text-xs text-foreground/40 font-medium py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} />;
          }

          const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;
          const isOccupied = occupiedDates.has(dateStr);
          const isPast = dateStr < todayStr;
          const isSelectable = !isOccupied && !isPast;
          const selected = isSelected(dateStr);

          return (
            <button
              key={dateStr}
              disabled={!isSelectable}
              onClick={() => isSelectable && onSelectDate(dateStr)}
              className={`
                aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                ${isPast ? "text-foreground/20 cursor-default" : ""}
                ${isOccupied ? "bg-red-100 text-red-600 cursor-not-allowed" : ""}
                ${isSelectable && !selected ? "bg-primary/15 text-primary-light hover:bg-primary/30 cursor-pointer" : ""}
                ${selected ? "bg-accent text-background font-bold" : ""}
              `}
              title={isOccupied ? "Zajęte" : isPast ? "Data przeszła" : "Wolne"}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-4 text-xs text-foreground/50">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-primary/15 border border-primary/30" />
          Wolne
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-red-100 border border-red-200" />
          Zajęte
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-accent" />
          Wybrane
        </div>
      </div>
    </div>
  );
}
