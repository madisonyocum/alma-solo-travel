import type { NavLink } from "@/types";

/** Primary navigation, shared by the header and mobile menu. */
export const primaryNav: NavLink[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Planning Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Planning Services", href: "/services" },
      { label: "Destinations", href: "/destinations" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Alma",
    links: [
      { label: "About", href: "/about" },
      { label: "Plan a Trip", href: "/enquire" },
      { label: "FAQ", href: "/services#faq" },
      { label: "Contact", href: "/enquire" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Pinterest", href: "https://pinterest.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];
