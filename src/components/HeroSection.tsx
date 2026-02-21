"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060E07] via-background to-background" />

        {/* Fog/mist effect - top */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-[20%] left-0 right-0 h-[200px] wave-bg"
            style={{
              background:
                "radial-gradient(ellipse 120% 100% at 50% 50%, rgba(45,106,79,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Water reflection gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(45,106,79,0.08) 0%, transparent 60%)",
            }}
          />
          {/* Subtle wave lines */}
          <svg
            className="absolute bottom-[15%] left-0 w-full opacity-[0.06]"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 Q 180 0 360 30 Q 540 60 720 30 Q 900 0 1080 30 Q 1260 60 1440 30"
              fill="none"
              stroke="#40916C"
              strokeWidth="1"
            />
            <path
              d="M0 40 Q 180 10 360 40 Q 540 70 720 40 Q 900 10 1080 40 Q 1260 70 1440 40"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Golden accent light */}
        <div
          className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-title font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4">
          WODNA{" "}
          <span className="text-accent">KRAINA</span>
        </h1>
        <p className="hero-subtitle font-heading text-lg sm:text-xl md:text-2xl text-foreground/60 mb-10 tracking-wide">
          Łowisko wędkarskie w sercu natury &bull; Wilga
        </p>
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/oplaty"
            className="px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 text-lg"
          >
            Zarezerwuj stanowisko
          </Link>
          <Link
            href="/oplaty"
            className="px-8 py-4 border border-foreground/20 text-foreground rounded-lg hover:bg-foreground/5 transition-all text-lg"
          >
            Zobacz cennik
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-foreground/30"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
