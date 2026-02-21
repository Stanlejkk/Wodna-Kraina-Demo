export interface PricingItem {
  name: string;
  price: string;
  description: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  items: PricingItem[];
}

export const pricing: PricingCategory[] = [
  {
    id: "karpiowe",
    title: "Łowisko Karpiowe",
    items: [
      { name: "Doba (Nd-Czw)", price: "100 zł", description: "1 wędkarz / 3 wędki" },
      { name: "Weekend (Pt-Nd)", price: "240 zł", description: "2 doby / 3 wędki" },
      { name: "Feeder / spławik", price: "70 zł", description: "1 dzień / 2 wędki" },
      { name: "Dodatkowa wędka", price: "+20 zł", description: "Do limitu" },
      { name: "Osoba towarzysząca", price: "20 zł", description: "Za dzień" },
    ],
  },
  {
    id: "drapiezniki",
    title: "Łowisko Drapieżniki",
    items: [
      { name: "Dzień", price: "120 zł", description: "1 wędkarz" },
    ],
  },
  {
    id: "wypozyczalnia",
    title: "Wypożyczalnia",
    items: [
      { name: "Łódka 2-osobowa", price: "50 zł", description: "Za dzień" },
      { name: "Łódka 4-osobowa", price: "60 zł", description: "Za dzień" },
      { name: "Ponton karpiowy", price: "60 zł", description: "Za dobę + kaucja" },
      { name: "Podbierak / kołyska / sling", price: "30 zł", description: "Za dobę" },
      { name: "Transport quadem", price: "10 zł", description: "Za przejazd" },
    ],
  },
  {
    id: "domki",
    title: "Domki Letniskowe",
    items: [
      { name: "Domek Mały", price: "od 300 zł", description: "2-3 osoby" },
      { name: "Domek Duży z poddaszem", price: "od 600 zł", description: "4-6 osób" },
      { name: "Domek VIP", price: "od 800 zł", description: "Pełne wyposażenie" },
    ],
  },
  {
    id: "dodatkowe",
    title: "Dodatkowe",
    items: [
      { name: "Worek na śmieci", price: "20 zł", description: "Za worek" },
      { name: "Wózki wędkarskie", price: "Gratis", description: "Do dyspozycji" },
    ],
  },
];
