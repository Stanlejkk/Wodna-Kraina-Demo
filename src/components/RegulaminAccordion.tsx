"use client";

import { useState } from "react";
import { regulations } from "@/data/regulations";

export function RegulaminAccordion() {
  const [openSection, setOpenSection] = useState<string | null>(regulations[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {regulations.map((section) => {
        const isOpen = openSection === section.id;

        return (
          <div
            key={section.id}
            className="rounded-lg border border-border bg-card overflow-hidden"
          >
            <button
              onClick={() => setOpenSection(isOpen ? null : section.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`text-accent transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M5 8l5 5 5-5" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <ol className="space-y-3">
                  {section.rules.map((rule, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-foreground/70"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
