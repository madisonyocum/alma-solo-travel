import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./utils";

const DEFAULT_OG = "/opengraph-image";

/** Build consistent, canonical-aware metadata for a route. */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// -- JSON-LD structured data ------------------------------------------------

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    description:
      "Personalised travel planning for women travelling independently, thoughtfully curated solo itineraries for every budget.",
    url: SITE_URL,
    email: "hello@almasolotravel.com",
    areaServed: ["Spain", "Portugal", "Italy", "Greece", "Albania", "Morocco"],
    knowsAbout: ["Solo travel", "Women's travel", "Mediterranean travel", "Boutique hotels"],
    sameAs: [
      "https://instagram.com",
      "https://pinterest.com",
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
  date,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}
