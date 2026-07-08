import type { ImageAsset } from "@/types";

// ---------------------------------------------------------------------------
// Single source of truth for all photography.
//
// Every image on the site is defined here. To replace the placeholder
// imagery before production, change the `id` (Unsplash photo id) or swap
// `unsplash(id)` for a local path such as "/images/andalucia-hero.jpg".
//
// See README → "Image assets to replace" for the full checklist.
// ---------------------------------------------------------------------------

/** Build a responsive Unsplash URL from a photo id. */
export function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
}

/** Build a Pexels CDN URL from a numeric photo id. */
export function pexels(id: number, w = 1200): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

type ImageDef = { id: string; alt: string; credit?: string };

function asset({ id, alt, credit }: ImageDef, w?: number): ImageAsset {
  return { src: unsplash(id, w), alt, credit };
}

// -- Hero + brand imagery ---------------------------------------------------
export const images = {
  homeHero: asset(
    {
      id: "photo-1523531294919-4bcd7c65e216",
      alt: "A sunlit, colourful Mediterranean terrace overlooking the city",
    },
    2000,
  ),
  introStill: asset({
    id: "photo-1564327368817-705b5f1b1b11",
    alt: "A cup of coffee held over a table in a cosy café",
  }),
  planningFeature: asset(
    {
      id: "photo-1561497268-c3c196c0e28f",
      alt: "A woman sitting with a coffee at a café table by a window",
    },
    1400,
  ),
  soloSupport: asset(
    {
      id: "photo-1583635658408-1f93b11d7941",
      alt: "A woman standing alone on a mountain summit against a bright sky",
    },
    2000,
  ),
  founder: {
    src: "/photos/maddie.jpeg",
    alt: "Maddie, founder of Alma Solo Travel",
  },
  groupJourneys: asset(
    {
      id: "photo-1628082824320-e02368bc5c8f",
      alt: "A pastel Mediterranean coastal town rising above the sea",
    },
    2000,
  ),
  howItWorksCta: asset(
    {
      id: "photo-1665933556555-655acaccbf73",
      alt: "Whitewashed town rooftops in warm evening light",
    },
    2000,
  ),
  enquiryCta: asset(
    {
      id: "photo-1578508462038-6582882a33c8",
      alt: "A calm Mediterranean coastline seen from above",
    },
    2000,
  ),
  aboutCta: asset(
    {
      id: "photo-1534250617995-d16425086b91",
      alt: "The whitewashed harbour town of Monopoli, Puglia, above turquoise water",
    },
    2000,
  ),
  aboutHero: asset(
    {
      id: "photo-1516483638261-f4dbaf036963",
      alt: "The colourful cliffside houses of an Italian coastal town",
    },
    2000,
  ),
  servicesHero: asset(
    {
      id: "photo-1583635658408-1f93b11d7941",
      alt: "A woman standing alone on a mountain summit against a bright sky",
    },
    2000,
  ),
  howItWorksHero: asset(
    {
      id: "photo-1534777367038-9404f45b869a",
      alt: "A woman standing near a beige painted building",
    },
    2000,
  ),
  destinationsHero: asset(
    {
      id: "photo-1653316834393-ddaa68981fd6",
      alt: "A woman standing on a balcony overlooking the city of Barcelona",
    },
    2000,
  ),
  journalHero: asset(
    {
      id: "photo-1534250617995-d16425086b91",
      alt: "The whitewashed harbour town of Monopoli, Puglia, above turquoise water",
    },
    2000,
  ),
  newsletter: asset({
    id: "photo-1631970283920-7a61f919d3d2",
    alt: "A sunlit Mediterranean doorway framed by plants",
  }),
} satisfies Record<string, ImageAsset>;

// Convenience re-export for building card/gallery imagery elsewhere.
export { asset as imageAsset };
