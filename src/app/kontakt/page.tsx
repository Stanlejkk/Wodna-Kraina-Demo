import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Kontakt – Wodna Kraina | Łowisko Wędkarskie Wilga",
  description:
    "Kontakt z łowiskiem Wodna Kraina: ul. Stawowa 9, 08-470 Wilga. Telefon: 512 464 846. Formularz kontaktowy.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Kontakt
          </h1>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Masz pytania? Skontaktuj się z nami. Chętnie pomożemy!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <ContactSection />
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
