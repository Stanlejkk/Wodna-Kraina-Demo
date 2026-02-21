import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeria – Wodna Kraina | Łowisko Wędkarskie Wilga",
  description:
    "Galeria zdjęć łowiska Wodna Kraina: akweny, ryby, domki letniskowe, przyroda w dolinie Wisły.",
};

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Galeria
          </h1>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Odkryj piękno Wodnej Krainy. Łowisko, ryby, domki i natura.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
