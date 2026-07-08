"use client";

import { useState } from "react";
import { destinations, destinationTags } from "@/data/destinations";
import { DestinationCard } from "@/components/DestinationCard";
import { cn } from "@/lib/utils";

/**
 * Filterable destination index. Filtering is client-side over the typed
 * destination data. "All" resets; each tag is a toggle button with a pressed
 * state exposed via aria-pressed.
 */
export function DestinationsGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? destinations
      : destinations.filter((d) => d.tags.includes(active as never));

  const tags = ["All", ...destinationTags];

  return (
    <div>
      <div
        className="mb-12 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter destinations"
      >
        {tags.map((tag) => {
          const isActive = active === tag;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(tag)}
              className={cn(
                "min-h-[44px] rounded-full border px-5 font-sans text-sm tracking-wide transition-colors",
                isActive
                  ? "border-deep-olive bg-deep-olive text-surface"
                  : "border-border-strong text-ink hover:border-terracotta hover:text-terracotta",
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p className="mb-8 font-sans text-sm text-muted-ink" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "destination" : "destinations"}
      </p>

      {filtered.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((destination, i) => (
            <li key={destination.slug}>
              <DestinationCard
                destination={destination}
                priority={i < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-ink">
          No destinations match that filter yet. Enquire and we&apos;ll let you
          know when we add one.
        </p>
      )}
    </div>
  );
}
