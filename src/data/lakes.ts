export interface Lake {
  id: string;
  name: string;
  size: string;
  depth?: string;
  description: string;
  shortDescription: string;
  features: string[];
  icon: string;
}

export const lakes: Lake[] = [
  {
    id: "akwen-glowny",
    name: "Akwen Główny",
    size: "40 ha",
    depth: "1.5-3m",
    description:
      "Największy akwen naszego łowiska. Karpie do 25 kg, głębokość 1.5-3m. Idealne warunki dla karpiarzy szukających trofealnych ryb w naturalnym otoczeniu.",
    shortDescription: "Karpie do 25 kg, głębokość 1.5-3m",
    features: ["Karpie do 25 kg", "8 stanowisk", "Domki letniskowe", "Dostęp łódką"],
    icon: "🏞️",
  },
  {
    id: "akwen-lesny",
    name: "Akwen Leśny",
    size: "25 ha",
    description:
      "Otoczony sosnowym lasem, zapewnia ciszę i spokój. Amury do 20 kg. Dla wędkarzy ceniących kontakt z naturą i poszukujących dużych amurów.",
    shortDescription: "Cisza i spokój, amury do 20 kg",
    features: ["Amury do 20 kg", "5 stanowisk", "Sosnowy las", "Cisza i spokój"],
    icon: "🌲",
  },
  {
    id: "drapiezniki",
    name: "Łowisko Drapieżniki",
    size: "1 ha",
    description:
      "Specjalistyczne łowisko drapieżne. Szczupaki do 20 kg, sandacze, okonie. Kompaktowe, intensywne łowienie w skupisku drapieżników.",
    shortDescription: "Szczupaki do 20 kg, sandacze, okonie",
    features: ["Szczupaki do 20 kg", "4 stanowiska", "Sandacze", "Okonie"],
    icon: "🎯",
  },
];
