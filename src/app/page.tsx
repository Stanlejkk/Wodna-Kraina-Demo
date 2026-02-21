import { HeroSection } from "@/components/HeroSection";
import { LakeCard } from "@/components/LakeCard";
import { FishCard } from "@/components/FishCard";
import { PricingTable } from "@/components/PricingTable";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { lakes } from "@/data/lakes";
import { fish } from "@/data/fish";
import { pricing } from "@/data/pricing";
import Link from "next/link";

export default function HomePage() {
  const topFish = fish.filter((f) =>
    ["karp", "amur", "szczupak"].includes(f.id)
  );

  const quickPricing = pricing.filter((p) =>
    ["karpiowe", "drapiezniki", "domki"].includes(p.id)
  );

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* O łowisku */}
      <section className="py-20 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                150 hektarów <span className="text-accent">ciszy</span>
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
                Przez ponad 25 lat w chronionych stawach wytworzyły się populacje
                dużych osobników. Sosnowe lasy, czysta woda i pełen spokój –
                50 km od Warszawy, w dolinie Wisły.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lakes.map((lake, index) => (
              <ScrollFadeIn key={lake.id} delay={0.1 * (index + 1)}>
                <LakeCard lake={lake} index={index} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Rekordowe ryby */}
      <section className="py-20 lg:py-28 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Rekordowe <span className="text-accent">ryby</span>
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Nasze wody kryją prawdziwe trofea. Oto gatunki, które przyciągają
                wędkarzy z całej Polski.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {topFish.map((f, index) => (
              <ScrollFadeIn key={f.id} delay={0.1 * (index + 1)}>
                <FishCard fish={f} variant="large" />
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn>
            <div className="text-center">
              <Link
                href="/gatunki-ryb"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Zobacz wszystkie gatunki
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Cennik skrócony */}
      <section className="py-20 lg:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Cennik
              </h2>
              <p className="text-foreground/60 max-w-xl mx-auto">
                Przejrzyste ceny, bez ukrytych opłat.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="space-y-6">
            {quickPricing.map((cat, index) => (
              <ScrollFadeIn key={cat.id} delay={0.1 * (index + 1)}>
                <PricingTable category={cat} />
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn>
            <div className="text-center mt-10">
              <Link
                href="/oplaty"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 text-lg"
              >
                Pełny cennik i rezerwacja
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Jak dojechać */}
      <section className="py-20 lg:py-28 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Jak <span className="text-accent">dojechać</span>
              </h2>
              <p className="text-foreground/60 max-w-xl mx-auto">
                50 km od Warszawy, między Garwolinem a Warką, w dolinie Wisły.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <div className="rounded-xl overflow-hidden border border-border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d21.36!3d51.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQzJzQ4LjAiTiAyMcKwMjEnMzYuMCJF!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Wodna Kraina, Wilga"
                />
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div className="flex flex-col justify-center space-y-6">
                <div className="p-6 rounded-xl border border-border bg-card/80">
                  <h3 className="font-heading text-lg font-semibold text-accent mb-2">
                    Adres
                  </h3>
                  <p className="text-foreground/70">
                    ul. Stawowa 9, 08-470 Wilga
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card/80">
                  <h3 className="font-heading text-lg font-semibold text-accent mb-2">
                    Telefon
                  </h3>
                  <a
                    href="tel:+48512464846"
                    className="text-foreground/70 hover:text-accent transition-colors text-lg"
                  >
                    512 464 846
                  </a>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card/80">
                  <h3 className="font-heading text-lg font-semibold text-accent mb-2">
                    Godziny otwarcia
                  </h3>
                  <p className="text-foreground/70">Pn-Nd: 08:00 – 21:00</p>
                  <p className="text-foreground/70">Dla karpiarzy: 24h</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
