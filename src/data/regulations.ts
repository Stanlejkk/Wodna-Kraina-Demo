export interface RegulationSection {
  id: string;
  title: string;
  rules: string[];
}

export const regulations: RegulationSection[] = [
  {
    id: "karpiowe",
    title: "Regulamin Łowiska Karpiowego",
    rules: [
      "Obowiązuje zasada Złów i Wypuść (Catch & Release) – wszystkie ryby muszą być wypuszczone.",
      "Maksymalnie 3 wędki na stanowisko (chyba że wykupiono dodatkową).",
      "Obowiązkowe posiadanie maty karpiowej, podbieraka i worka karpiowego (sling/kołyska).",
      "Zakaz używania haczyków z zadziorem – tylko haki bezzadziorowe lub z zagiętym zadziorem.",
      "Przed zdjęciem rybie należy zmoczysz ręce i matę.",
      "Ryba nie może przebywać poza wodą dłużej niż 2 minuty.",
      "Zakaz używania żywej i martwej rybki jako przynęty na łowisku karpiowym.",
      "Wędkarz zobowiązany jest do utrzymania porządku na stanowisku.",
      "Cisza nocna obowiązuje od 22:00 do 6:00 – zakaz głośnych zachowań.",
      "Zakaz rozpalania ognisk poza wyznaczonymi miejscami.",
    ],
  },
  {
    id: "drapiezniki",
    title: "Regulamin Łowiska Drapieżniki",
    rules: [
      "Obowiązuje zasada Złów i Wypuść (Catch & Release).",
      "Łowienie dozwolone na sztuczne przynęty (spinning) lub żywca.",
      "Maksymalnie 2 wędki spinningowe na wędkarza.",
      "Obowiązkowy podbierak – zakaz wyjmowania ryb za szczękę.",
      "Zakaz stosowania systemów z ciężarkami powyżej 50g.",
      "Przed wypuszczeniem ryby drapieżnej – obowiązkowe użycie matki/maty.",
      "Łowienie od świtu do zmroku (bez nocnych sesji).",
    ],
  },
  {
    id: "ogolne",
    title: "Zasady Ogólne",
    rules: [
      "Administracja łowiska ma prawo do przeszukania sprzętu wędkarskiego w celu kontroli przestrzegania regulaminu.",
      "Złamanie zasady Złów i Wypuść skutkuje natychmiastowym wydaleniem i zakazem wstępu (kara: 5000 zł za rybę).",
      "Osoba pod wpływem alkoholu lub środków odurzających może zostać wydalona z łowiska bez zwrotu opłat.",
      "Psy dozwolone wyłącznie na smyczy – właściciel odpowiada za sprzątanie.",
      "Dzieci do lat 16 mogą łowić wyłącznie pod opieką osoby dorosłej.",
      "Pojazdy parkować wyłącznie w wyznaczonych miejscach – dojazd do stanowisk quadem (10 zł/przejazd).",
      "Obowiązek segregacji śmieci – worki dostępne w recepcji (20 zł/worek).",
      "Łowienie bez karty wędkarskiej dozwolone na terenie całego łowiska.",
      "Administracja nie ponosi odpowiedzialności za rzeczy pozostawione na stanowisku.",
      "Wszelkie uszkodzenia mienia łowiska wędkarz pokrywa na własny koszt.",
    ],
  },
];
