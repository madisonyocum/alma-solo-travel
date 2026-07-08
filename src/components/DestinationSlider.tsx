"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Destination } from "@/types";
import { DestinationCard } from "./DestinationCard";

/**
 * Horizontal, scroll-snapping slider with keyboard-operable prev/next
 * controls. Native scrolling keeps it accessible; the buttons are an
 * enhancement. On desktop this reads as an editorial row of cards.
 */
export function DestinationSlider({
  destinations,
}: {
  destinations: Destination[];
}) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollBy(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(track.clientWidth * 0.8, 420);
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6"
        aria-label="Featured destinations"
      >
        {destinations.map((destination, i) => (
          <li
            key={destination.slug}
            className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
          >
            <DestinationCard destination={destination} priority={i < 2} sizes="80vw" />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous destinations"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-ink transition-colors hover:bg-ink hover:text-surface"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next destinations"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-ink transition-colors hover:bg-ink hover:text-surface"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
