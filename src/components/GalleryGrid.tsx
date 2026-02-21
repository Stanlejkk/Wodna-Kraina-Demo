"use client";

import { useState } from "react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  gradient: string;
  icon: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Akwen Główny o świcie", category: "Łowisko", gradient: "from-primary/30 to-card", icon: "🌅" },
  { id: 2, title: "Karp 22 kg", category: "Ryby", gradient: "from-accent/20 to-card", icon: "🐟" },
  { id: 3, title: "Domek VIP", category: "Domki", gradient: "from-primary-light/20 to-card", icon: "🏠" },
  { id: 4, title: "Sosnowy las", category: "Przyroda", gradient: "from-primary/25 to-card", icon: "🌲" },
  { id: 5, title: "Amur 18 kg", category: "Ryby", gradient: "from-accent/15 to-card", icon: "🐟" },
  { id: 6, title: "Stanowisko karpiowe", category: "Łowisko", gradient: "from-primary/20 to-card", icon: "🎣" },
  { id: 7, title: "Zachód słońca nad stawem", category: "Przyroda", gradient: "from-accent/25 to-card", icon: "🌇" },
  { id: 8, title: "Domek Mały", category: "Domki", gradient: "from-primary-light/15 to-card", icon: "🏡" },
  { id: 9, title: "Szczupak 15 kg", category: "Ryby", gradient: "from-accent/20 to-card", icon: "🐟" },
  { id: 10, title: "Akwen Leśny", category: "Łowisko", gradient: "from-primary/30 to-card", icon: "🏞️" },
  { id: 11, title: "Mgła poranna", category: "Przyroda", gradient: "from-primary/15 to-card", icon: "🌫️" },
  { id: 12, title: "Domek Duży", category: "Domki", gradient: "from-primary-light/20 to-card", icon: "🏘️" },
];

const categories = ["Wszystkie", "Łowisko", "Ryby", "Domki", "Przyroda"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("Wszystkie");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "Wszystkie"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === cat
                ? "bg-accent text-background"
                : "bg-muted text-foreground/50 hover:text-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-like grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, index) => {
          const heights = ["h-56", "h-72", "h-64", "h-48", "h-80"];
          const height = heights[index % heights.length];

          return (
            <ScrollFadeIn key={item.id} delay={0.05 * (index + 1)}>
              <button
                onClick={() => setLightbox(item)}
                className={`card-hover block w-full ${height} rounded-lg border border-border bg-gradient-to-br ${item.gradient} overflow-hidden relative group cursor-pointer text-left`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-xs text-accent font-medium uppercase tracking-wider">
                    {item.category}
                  </p>
                  <p className="text-sm text-foreground font-medium mt-1">
                    {item.title}
                  </p>
                </div>
              </button>
            </ScrollFadeIn>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-card border border-border rounded-lg max-w-lg w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-8xl mb-4 block">{lightbox.icon}</span>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
              {lightbox.title}
            </h3>
            <p className="text-sm text-accent mb-4">{lightbox.category}</p>
            <p className="text-foreground/50 text-sm mb-6">
              Zdjęcie wkrótce – to jest wersja demo
            </p>
            <button
              onClick={() => setLightbox(null)}
              className="px-6 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </>
  );
}
