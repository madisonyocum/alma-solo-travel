// ---------------------------------------------------------------------------
// Shared content types for Alma Solo Travel.
// All page content is driven by typed data in src/data/*, pages never
// hard-code editorial content.
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface ImageAsset {
  /** Absolute Unsplash URL or local /public path. Replace before production. */
  src: string;
  /** Required, descriptive alt text. Empty string only for decorative images. */
  alt: string;
  /** Optional photo credit shown in captions where relevant. */
  credit?: string;
  /** CSS object-position value, e.g. "bottom", "top", "center 80%". Defaults to "center". */
  objectPosition?: string;
}

export type DestinationTag =
  | "Coast"
  | "City"
  | "Countryside"
  | "Wellness"
  | "Culture"
  | "Good value"
  | "Luxury";

export interface StayArea {
  name: string;
  description: string;
}

export interface Recommendation {
  name: string;
  description: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  descriptor: string;
  tags: DestinationTag[];
  hero: ImageAsset;
  cardImage: ImageAsset;
  /** Short intro used on the destinations index. */
  summary: string;
  /** Longer editorial introduction for the detail page. */
  intro: string[];
  soloFit: string;
  bestAreas: StayArea[];
  hotels: Recommendation[];
  experiences: Recommendation[];
  food: Recommendation[];
  tripRhythm: string[];
  bestTime: string;
  gettingAround: string;
  practical: string;
  gallery: ImageAsset[];
  relatedArticles: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  date: string; // ISO
  author: string;
  image: ImageAsset;
  /** Simple paragraph + subheading body model to avoid a CMS dependency. */
  body: ArticleBlock[];
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string };

export interface ServiceFeature {
  label: string;
}

export interface ServiceTierData {
  slug: string;
  name: string;
  tagline: string;
  forWho: string;
  price: string;
  features: string[];
  notIncluded: string[];
  timeline: string;
  featured?: boolean;
  comingSoon?: boolean;
  callDuration?: string;
  badge?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string[];
}
