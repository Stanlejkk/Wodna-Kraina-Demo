import type { Fish } from "@/data/fish";

interface FishCardProps {
  fish: Fish;
  variant?: "large" | "small";
}

export function FishCard({ fish, variant = "small" }: FishCardProps) {
  const isLarge = variant === "large";

  return (
    <div
      className={`card-hover flex flex-col h-full rounded-xl border border-border bg-card/80 overflow-hidden ${
        isLarge ? "p-6 lg:p-8" : "p-5"
      }`}
    >
      {/* Fish icon area */}
      <div
        className={`relative rounded-lg mb-4 flex items-center justify-center shrink-0 ${
          isLarge ? "h-40" : "h-28"
        }`}
        style={{
          background: `linear-gradient(135deg, ${fish.color}15 0%, rgba(12,26,14,0.8) 100%)`,
        }}
      >
        {/* SVG fish silhouette */}
        <svg
          viewBox="0 0 120 60"
          className={isLarge ? "w-28 h-14" : "w-20 h-10"}
          fill="none"
        >
          <path
            d="M90 30C90 30 100 15 115 15C105 25 105 35 115 45C100 45 90 30 90 30ZM10 30C10 30 30 5 60 5C80 5 95 18 95 30C95 42 80 55 60 55C30 55 10 30 10 30Z"
            fill={fish.color}
            fillOpacity="0.3"
          />
          <circle cx="75" cy="25" r="3" fill={fish.color} fillOpacity="0.5" />
        </svg>

        {/* Weight badge */}
        <div
          className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded"
          style={{
            backgroundColor: `${fish.color}20`,
            color: fish.color,
          }}
        >
          {fish.maxWeight} kg
        </div>
      </div>

      <h3
        className={`font-heading font-semibold text-foreground mb-1 ${
          isLarge ? "text-2xl" : "text-lg"
        }`}
      >
        {fish.name}
      </h3>

      <p className="text-xs text-accent font-medium mb-2">
        {fish.minWeight} – {fish.maxWeight} kg
      </p>

      <p className={`text-foreground/60 leading-relaxed flex-1 ${isLarge ? "text-sm" : "text-xs"}`}>
        {fish.description}
      </p>
    </div>
  );
}
