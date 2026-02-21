export interface Fish {
  id: string;
  name: string;
  minWeight: number;
  maxWeight: number;
  description: string;
  icon: string;
  color: string;
}

export const fish: Fish[] = [
  {
    id: "karp",
    name: "Karp",
    minWeight: 5,
    maxWeight: 25,
    description: "Król naszego łowiska. Dominujący gatunek, osobniki do 25 kg. Łowiony głównie na Akwenie Głównym metodą karpiową.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#C9A84C",
  },
  {
    id: "amur",
    name: "Amur",
    minWeight: 8,
    maxWeight: 20,
    description: "Potężne ryby roślinożerne, osiągające do 20 kg. Najczęściej spotykane na Akwenie Leśnym. Silne i wymagające walki.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#40916C",
  },
  {
    id: "szczupak",
    name: "Szczupak",
    minWeight: 5,
    maxWeight: 20,
    description: "Najgroźniejszy drapieżnik naszych wód. Osobniki do 20 kg na łowisku Drapieżniki. Agresywne brania, emocjonujące holowanie.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#3D8B37",
  },
  {
    id: "sandacz",
    name: "Sandacz",
    minWeight: 2,
    maxWeight: 10,
    description: "Szlachetny drapieżnik o delikatnym mięsie. Łowiony na żywca i sztuczne przynęty na łowisku Drapieżniki.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#7B9E5C",
  },
  {
    id: "okon",
    name: "Okoń",
    minWeight: 0.5,
    maxWeight: 3,
    description: "Popularny drapieżnik, doskonały na spinningowe wyprawy. Występuje licznie na łowisku Drapieżniki.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#5C8A3C",
  },
  {
    id: "karas",
    name: "Karaś",
    minWeight: 0.3,
    maxWeight: 3,
    description: "Klasyczna ryba polskich wód. Idealna dla początkujących wędkarzy. Łowiona na spławik i method feeder.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#B8860B",
  },
  {
    id: "lin",
    name: "Lin",
    minWeight: 0.5,
    maxWeight: 4,
    description: "Tajemnicza ryba porośniętych trzcinami płycizn. Piękny złoto-zielony kolor, wymagający łów na spławik.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#4A7C59",
  },
  {
    id: "leszcz",
    name: "Leszcz",
    minWeight: 0.5,
    maxWeight: 5,
    description: "Srebrna ryba stadna. Doskonała na feeder, łowiona w dużych ilościach. Popularna na Akwenie Głównym.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#8B9DC3",
  },
  {
    id: "ploc",
    name: "Płoć",
    minWeight: 0.2,
    maxWeight: 2,
    description: "Najpopularniejsza ryba naszych wód. Łatwa do złowienia, idealna na rozpoczęcie przygody z wędkarstwem.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    color: "#A0B4C0",
  },
];
