import type { Metadata } from "next";
import { RegulaminAccordion } from "@/components/RegulaminAccordion";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Regulamin – Wodna Kraina | Łowisko Wędkarskie Wilga",
  description:
    "Regulamin łowiska Wodna Kraina: zasady łowienia karpiowego, drapieżnego i ogólne zasady korzystania z łowiska.",
};

export default function RegulaminPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Regulamin
          </h1>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Zasady korzystania z łowiska Wodna Kraina. Prosimy o zapoznanie się
            przed przyjazdem.
          </p>
        </div>
      </section>

      {/* Regulamin Accordion */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <RegulaminAccordion />
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
