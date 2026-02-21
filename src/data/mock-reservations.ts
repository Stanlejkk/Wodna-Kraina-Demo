export interface Reservation {
  id: string;
  spot: string;
  lake: string;
  from: string;
  to: string;
  name: string;
  status: "opłacone" | "potwierdzone" | "oczekuje";
}

export const mockReservations: Reservation[] = [
  { id: "R001", spot: "Stanowisko 1", lake: "Akwen Główny", from: "2026-03-15", to: "2026-03-17", name: "Jan Kowalski", status: "opłacone" },
  { id: "R002", spot: "Stanowisko 3", lake: "Akwen Główny", from: "2026-03-16", to: "2026-03-19", name: "Tomek Nowak", status: "potwierdzone" },
  { id: "R003", spot: "Domek Duży 1", lake: "Akwen Główny", from: "2026-03-20", to: "2026-03-23", name: "Marek Wiśniewski", status: "opłacone" },
  { id: "R004", spot: "Stanowisko 1", lake: "Akwen Leśny", from: "2026-03-14", to: "2026-03-16", name: "Piotr Zieliński", status: "opłacone" },
  { id: "R005", spot: "Stanowisko 2", lake: "Drapieżniki", from: "2026-03-18", to: "2026-03-18", name: "Adam Kamiński", status: "potwierdzone" },
  { id: "R006", spot: "Domek VIP", lake: "Akwen Główny", from: "2026-03-22", to: "2026-03-25", name: "Krzysztof Lewandowski", status: "opłacone" },
  { id: "R007", spot: "Stanowisko 5", lake: "Akwen Główny", from: "2026-03-10", to: "2026-03-12", name: "Andrzej Wójcik", status: "opłacone" },
  { id: "R008", spot: "Domek Mały 1", lake: "Akwen Leśny", from: "2026-03-25", to: "2026-03-28", name: "Michał Szymański", status: "oczekuje" },
];
