import type { PricingCategory } from "@/data/pricing";

interface PricingTableProps {
  category: PricingCategory;
}

export function PricingTable({ category }: PricingTableProps) {
  return (
    <div className="rounded-xl border border-border bg-card/80 overflow-hidden">
      <div className="px-6 py-4 bg-muted/50 border-b border-border">
        <h3 className="font-heading text-xl font-semibold text-accent">
          {category.title}
        </h3>
      </div>
      <div className="divide-y divide-border">
        {category.items.map((item, index) => (
          <div
            key={index}
            className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-muted/20 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <p className="text-xs text-foreground/50 mt-0.5">{item.description}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-accent font-bold text-lg">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
