import type { ServiceTierData, ProcessStep } from "@/types";

export const serviceTiers: ServiceTierData[] = [
  {
    slug: "edit",
    name: "Alma Edit",
    tagline: "A curated foundation for women who want trusted recommendations without a full itinerary.",
    forWho:
      "You are a confident traveller who simply wants a trustworthy starting point, the right places, without the weeks of open browser tabs.",
    price: "From $175",
    features: [
      "Destination and route guidance",
      "Neighbourhood recommendations",
      "Curated accommodation shortlist",
      "Food, café and experience edit",
      "Practical solo-travel notes",
      "15-minute planning call",
    ],
    notIncluded: [
      "Day-by-day itinerary",
      "Custom digital map",
      "Booking coordination",
    ],
    timeline: "Ready within a week",
    callDuration: "15-min call",
    badge: "Quickest Planning",
  },
  {
    slug: "journey",
    name: "Alma Journey",
    tagline: "A complete, personalised trip plan designed around your pace, interests and travel style.",
    forWho:
      "You want a considered, day-by-day plan that still leaves room for spontaneity, with a real conversation behind it.",
    price: "From $325",
    features: [
      "Everything in Alma Edit",
      "Flexible day-by-day itinerary",
      "Custom digital map",
      "Transport and route guidance",
      "Wellness and local experiences",
      "One round of revisions",
      "30-minute planning call",
    ],
    notIncluded: ["Booking coordination", "In-trip messaging support"],
    timeline: "Ready within a week",
    featured: true,
    callDuration: "30-min call",
  },
  {
    slug: "concierge",
    name: "Alma Concierge",
    tagline: "High-touch planning and personal support for more complex journeys.",
    forWho:
      "You would like support across every detail, including complex or multi-destination journeys, with help before and during your trip.",
    price: "From $750",
    features: [
      "Everything in Alma Journey",
      "Multi-destination planning",
      "Booking coordination",
      "Restaurant and experience assistance",
      "Priority revisions",
      "Pre-trip messaging support",
      "Limited in-trip messaging support",
      "45-minute planning call",
    ],
    notIncluded: ["Flights and travel insurance"],
    timeline: "Ready within a week",
    comingSoon: true,
  },
];

export const optionalExtras: string[] = [
  "Additional destination",
  "Rush planning",
  "Restaurant reservation support",
  "In-trip messaging",
  "Honeymoon-style room or experience requests",
  "Printed itinerary",
  "Additional traveller",
];

export const comparisonRows: {
  feature: string;
  edit: boolean;
  journey: boolean;
  concierge: boolean;
}[] = [
  { feature: "Destination & route guidance", edit: true, journey: true, concierge: true },
  { feature: "Neighbourhood recommendations", edit: true, journey: true, concierge: true },
  { feature: "Curated accommodation shortlist", edit: true, journey: true, concierge: true },
  { feature: "Food, café & experience edit", edit: true, journey: true, concierge: true },
  { feature: "Practical solo-travel notes", edit: true, journey: true, concierge: true },
  { feature: "20-min planning call", edit: true, journey: false, concierge: false },
  { feature: "Day-by-day flexible itinerary", edit: false, journey: true, concierge: true },
  { feature: "Custom digital map", edit: false, journey: true, concierge: true },
  { feature: "Transport & route guidance", edit: false, journey: true, concierge: true },
  { feature: "30-min planning call", edit: false, journey: true, concierge: false },
  { feature: "45-min planning call", edit: false, journey: false, concierge: true },
  { feature: "Booking coordination", edit: false, journey: false, concierge: true },
  { feature: "Priority revisions", edit: false, journey: false, concierge: true },
  { feature: "Multi-destination planning", edit: false, journey: false, concierge: true },
  { feature: "In-trip messaging support", edit: false, journey: false, concierge: true },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Fill in the form",
    description:
      "Fill in a short form, it takes around five minutes and you can save as you go. No phone call needed to get started. Just tell us where your head is at.",
    details: [
      "Destination ideas, even if they're vague",
      "Travel dates or a flexible window",
      "Your budget range and what matters most",
      "How you like to travel, pace, comfort level, interests",
    ],
  },
  {
    number: "02",
    title: "Book a planning call",
    description:
      "For Journey and Concierge clients, we book a short planning call to make sure we understand exactly what you want and to answer any questions before we start building.",
    details: [
      "Clarify the trip you actually want, not just the trip on paper",
      "Talk through any concerns about travelling solo",
      "Agree the scope, timeline and what your plan will include",
    ],
  },
  {
    number: "03",
    title: "We research and build your plan",
    description:
      "This is where we do the work. We research the right neighbourhoods, vet the stays, find the experiences worth your time and pull it all together into a plan built around you.",
    details: [
      "Neighbourhood research specific to solo women",
      "Hotels vetted for solo comfort and location",
      "A curated shortlist of restaurants and experiences",
      "Transport guidance from the airport to your front door",
    ],
  },
  {
    number: "04",
    title: "Review your plan and change",
    description:
      "We send you the plan and you tell us what to adjust. Swap options, change the pace, add a day or cut one. Your plan is finalised only when you're genuinely happy with it.",
    details: [
      "Revisions included depending on your package",
      "Request changes via email, no calls required",
      "Adjust neighbourhoods, accommodation, activities or pace",
    ],
  },
  {
    number: "05",
    title: "Receive your guide and travel",
    description:
      "Your final plan lands in your inbox. Everything you need, beautifully organised. Step off the plane knowing exactly where you're going and why.",
    details: [
      "A formatted digital guide you can save and use offline",
      "A neighbourhood map with your recommendations pinned",
      "Practical notes on getting around and what to expect",
      "Alma available by email if anything changes on the ground",
    ],
  },
];
