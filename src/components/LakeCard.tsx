import Link from "next/link";
import type { Lake } from "@/data/lakes";

interface LakeCardProps {
  lake: Lake;
  index: number;
}

export function LakeCard({ lake, index }: LakeCardProps) {
  return (
    <Link
      href="/oplaty"
      className={`card-hover flex flex-col h-full p-6 rounded-xl border border-border bg-card/80 group stagger-${index + 1}`}
    >
      {/* Header with gradient */}
      <div className="relative h-32 rounded-lg mb-4 overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, rgba(45,106,79,0.2) 0%, rgba(12,26,14,0.8) 100%)`,
        }}
      >
        <span className="text-4xl">{lake.icon}</span>
        <div className="absolute top-3 right-3 bg-accent/20 text-accent text-xs font-semibold px-2 py-1 rounded">
          {lake.size}
        </div>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {lake.name}
      </h3>
      <p className="text-sm text-foreground/60 mb-4 flex-1">{lake.shortDescription}</p>

      <div className="flex flex-wrap gap-2">
        {lake.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="text-xs bg-muted text-foreground/50 px-2 py-1 rounded"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}
