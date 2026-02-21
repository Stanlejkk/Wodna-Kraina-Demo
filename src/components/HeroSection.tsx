"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background" />

        {/* Subtle forest atmosphere */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute top-[15%] left-0 right-0 h-[300px] wave-bg"
            style={{
              background:
                "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(27,85,53,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Water reflection gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(27,85,53,0.04) 0%, transparent 50%)",
            }}
          />
          {/* Subtle wave lines */}
          <svg
            className="absolute bottom-[15%] left-0 w-full opacity-[0.12]"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 Q 180 0 360 30 Q 540 60 720 30 Q 900 0 1080 30 Q 1260 60 1440 30"
              fill="none"
              stroke="#27703F"
              strokeWidth="1"
            />
            <path
              d="M0 40 Q 180 10 360 40 Q 540 70 720 40 Q 900 10 1080 40 Q 1260 70 1440 40"
              fill="none"
              stroke="#96790F"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Warm golden ambient glow */}
        <div
          className="absolute top-[25%] left-[15%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(150,121,15,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[35%] right-[20%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(27,85,53,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="hero-title mb-6">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">
            WODNA{" "}
            <span className="text-accent">KRAINA</span>
          </h1>
          <div className="mt-3 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-accent/40" />
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-heading">Wilga</span>
            <span className="h-[1px] w-12 bg-accent/40" />
          </div>
        </div>
        <p className="hero-subtitle font-heading text-lg sm:text-xl md:text-2xl text-foreground/50 mb-10 tracking-wide">
          Łowisko wędkarskie w sercu natury
        </p>
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/oplaty"
            className="px-8 py-4 bg-accent text-background font-semibold rounded-md hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/20 text-lg tracking-wide"
          >
            Zarezerwuj stanowisko
          </Link>
          <Link
            href="/oplaty"
            className="px-8 py-4 border border-accent/30 text-foreground/80 rounded-md hover:border-accent/50 hover:text-foreground transition-all text-lg"
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
          className="text-accent/40"
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
