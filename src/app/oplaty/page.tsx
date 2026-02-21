import type { Metadata } from "next";
import { PricingTable } from "@/components/PricingTable";
import { ReservationFlow } from "@/components/ReservationFlow";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { pricing } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Opłaty i Rezerwacja – Wodna Kraina | Łowisko Wędkarskie Wilga",
  description:
    "Cennik łowiska Wodna Kraina i rezerwacja online. Doba karpiowa od 100 zł, drapieżniki 120 zł/dzień, domki od 300 zł.",
};

export default function OplatyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060E07] via-background to-background" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Opłaty i <span className="text-accent">Rezerwacja</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Przejrzysty cennik i system rezerwacji online. Wybierz akwen,
            stanowisko i termin.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              Cennik
            </h2>
          </ScrollFadeIn>

          <div className="space-y-6">
            {pricing.map((cat, index) => (
              <ScrollFadeIn key={cat.id} delay={0.1 * (index + 1)}>
                <PricingTable category={cat} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation System */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2 text-center">
              Zarezerwuj <span className="text-accent">online</span>
            </h2>
            <p className="text-foreground/50 text-center mb-10">
              Wybierz akwen, stanowisko, termin i dokonaj rezerwacji
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <ReservationFlow />
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
