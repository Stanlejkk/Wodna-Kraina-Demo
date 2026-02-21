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
      className={`card-hover flex flex-col h-full p-6 rounded-lg border border-border bg-card group stagger-${index + 1}`}
    >
      {/* Header with gradient */}
      <div className="relative h-32 rounded-md mb-4 overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, rgba(27,85,53,0.15) 0%, rgba(8,12,6,0.9) 100%)`,
        }}
      >
        <span className="text-4xl">{lake.icon}</span>
        <div className="absolute top-3 right-3 bg-accent/15 text-accent text-xs font-semibold px-2 py-1 rounded">
          {lake.size}
        </div>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {lake.name}
      </h3>
      <p className="text-sm text-foreground/50 mb-4 flex-1">{lake.shortDescription}</p>

      <div className="flex flex-wrap gap-2">
        {lake.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="text-xs bg-muted text-foreground/40 px-2 py-1 rounded"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}
