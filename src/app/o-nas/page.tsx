import type { Metadata } from "next";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "O Nas – Wodna Kraina | Łowisko Wędkarskie Wilga",
  description:
    "Poznaj historię łowiska Wodna Kraina. 25+ lat tradycji, 150 ha powierzchni, zasada Złów i Wypuść. Kompleks wędkarski w Wildze.",
};

const stats = [
  { value: "150 ha", label: "Powierzchni" },
  { value: "25+", label: "Lat tradycji" },
  { value: "3", label: "Akweny" },
];

export default function ONasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            O <span className="text-accent">Nas</span>
          </h1>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Ponad 25 lat pasji, natury i wielkich ryb
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <div className="prose max-w-none">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Historia <span className="text-accent">Wodnej Krainy</span>
              </h2>
              <div className="space-y-4 text-foreground/50 leading-relaxed">
                <p>
                  Przez ponad 25 lat w chronionych stawach wytworzyły się populacje
                  dużych osobników. To, co zaczynało się jako marzenie o idealnym
                  łowisku, stało się jednym z najbardziej renomowanych kompleksów
                  wędkarskich w centralnej Polsce.
                </p>
                <p>
                  Wodna Kraina to 150 hektarów powierzchni wodnej w sercu doliny
                  Wisły, zaledwie 50 km od Warszawy. Nasze jeziora, stawy i sosnowe
                  lasy tworzą unikalne środowisko, w którym ryby osiągają imponujące
                  rozmiary – karpie do 25 kg, amury do 20 kg, szczupaki do 20 kg.
                </p>
                <p>
                  Od samego początku kierujemy się zasadą{" "}
                  <span className="text-accent font-semibold">Złów i Wypuść</span> (Catch &amp; Release).
                  Dzięki temu nasze wody zachowują naturalną równowagę, a populacje
                  ryb rosną z roku na rok. Każdy wędkarz, który odwiedza Wodną
                  Krainę, ma szansę na spotkanie z prawdziwym trofeum.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Kompleks */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Kompleks <span className="text-accent">rekreacyjny</span>
            </h2>
            <div className="space-y-4 text-foreground/50 leading-relaxed">
              <p>
                Wodna Kraina to nie tylko łowisko. To cały kompleks rekreacyjny
                idealny dla rodzin i grup przyjaciół. Oprócz trzech akwenów
                wędkarskich oferujemy:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">&#8226;</span>
                  <span>Domki letniskowe – od przytulnych małych po luksusowe VIP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">&#8226;</span>
                  <span>Park rozrywki z trampolinami i atrakcjami dla dzieci</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">&#8226;</span>
                  <span>Przejażdżki quadami po malowniczych leśnych trasach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">&#8226;</span>
                  <span>Wypożyczalnia sprzętu wędkarskiego i łodzi</span>
                </li>
              </ul>
              <p>
                To idealne miejsce dla miłośników ciszy, przyrody i wędkarstwa
                sportowego – ale też dla tych, którzy szukają aktywnego wypoczynku
                na świeżym powietrzu.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Zasada C&R */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <div className="p-8 lg:p-12 rounded-lg border border-accent/20 bg-accent/5 text-center">
              <h2 className="font-heading text-3xl font-bold text-accent mb-4">
                Złów i Wypuść
              </h2>
              <p className="text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                Nasza najważniejsza zasada. Wszystkie ryby muszą być wypuszczone
                z powrotem do wody. Dzięki temu populacje rosną, a każdy kolejny
                wędkarz ma szansę na jeszcze większe trofeum. Mata karpiowa
                i podbierak są obowiązkowe.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Statystyki */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <ScrollFadeIn key={stat.label} delay={0.1 * (index + 1)}>
                <div className="text-center p-8 rounded-lg border border-border bg-card">
                  <div className="font-heading text-4xl lg:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/50 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
