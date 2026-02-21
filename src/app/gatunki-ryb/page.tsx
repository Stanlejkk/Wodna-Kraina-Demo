import type { Metadata } from "next";
import { FishCard } from "@/components/FishCard";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { fish } from "@/data/fish";

export const metadata: Metadata = {
  title: "Gatunki Ryb – Wodna Kraina | Łowisko Wędkarskie Wilga",
  description:
    "Gatunki ryb w łowisku Wodna Kraina: karp do 25 kg, amur do 20 kg, szczupak do 20 kg, sandacz, okoń, karaś, lin, leszcz, płoć.",
};

export default function GatunkiRybPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Gatunki <span className="text-accent">Ryb</span>
          </h1>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Poznaj mieszkańców naszych wód. Od potężnych karpi po agresywne
            drapieżniki.
          </p>
        </div>
      </section>

      {/* Fish Grid */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fish.map((f, index) => (
              <ScrollFadeIn key={f.id} delay={0.08 * (index + 1)}>
                <FishCard fish={f} variant={index < 3 ? "large" : "small"} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
