import type { Article } from "@/types";
import { unsplash } from "./images";

// ---------------------------------------------------------------------------
// Journal articles. The index and every article page are generated from this
// typed array. Body content uses a small block model to avoid a CMS dependency.
// ---------------------------------------------------------------------------

export const articles: Article[] = [
  {
    slug: "how-to-plan-a-first-solo-trip",
    title: "Everything you need to plan your first solo trip",
    category: "Planning",
    excerpt:
      "The first one feels like the hardest. A clear-headed guide to getting started, building a plan you trust, and actually going.",
    readingTime: "8 min read",
    date: "2026-06-10",
    author: "Maddie",
    image: {
      src: unsplash("photo-1626797315002-42f80f88a464", 1600),
      alt: "A woman sitting on a rooftop looking out over the old city",
    },
    body: [
      {
        type: "paragraph",
        text: "Most women who come to Alma have been thinking about their first solo trip for a long time. The destination is already half-decided. There are saved tabs, bookmarked hotels, a rough idea of when. What is missing is not information. It is the confidence to take all of that and turn it into something real.",
      },
      { type: "heading", text: "Start with the feeling, not the flights" },
      {
        type: "paragraph",
        text: "Before you open a single booking site, ask yourself what kind of trip you actually want. Do you want to feel anonymous and free in a big city, or held and familiar in a smaller place? Do you want structure, a loose framework of good things to do, or complete openness? The answer to that question will do more to narrow your options than any amount of research.",
      },
      { type: "heading", text: "Build in more space than you think you need" },
      {
        type: "paragraph",
        text: "First-time solo travellers almost always over-pack the itinerary. They fill every day because empty time feels frightening in advance. In practice, the unplanned afternoon, the second coffee in the café you stumbled into, the longer walk home, is where the trip becomes yours. Leave room for it. A loose day in the middle of a trip is not wasted time. It is where the trip becomes a memory rather than a schedule.",
      },
      { type: "heading", text: "What to research and what to leave open" },
      {
        type: "paragraph",
        text: "There is a useful distinction between the things worth researching in advance and the things that are better discovered on arrival. Worth researching: the neighbourhood you will stay in, the transport between the airport and your hotel, one or two places to eat that you are genuinely excited about, and any experience that requires booking. Leave open: the daily rhythm, the walks, the unexpected turns. Over-researching the latter kills the feeling of discovery that makes travel worth doing.",
      },
      {
        type: "quote",
        text: "The first solo trip teaches you what kind of traveller you actually are. Everything after that gets easier.",
      },
      { type: "heading", text: "Get the first night right" },
      {
        type: "paragraph",
        text: "The single thing most worth spending time and money on is the first night. Arriving somewhere new alone, tired from travel, is the moment most likely to feel hard. A hotel that is genuinely easy to reach from the airport, in a neighbourhood you already know a little, with someone at the desk when you arrive, removes almost all of that. Everything loosens after the first morning.",
      },
      { type: "heading", text: "Trust your instincts once you are there" },
      {
        type: "paragraph",
        text: "The most common thing women tell me after their first solo trip is that it was easier than they expected, and that the moments they were most anxious about beforehand turned out to be nothing. Your instincts are good. You already know how to read a room, notice when something feels off, and find your way. You have been doing it at home your whole life. Travel is the same set of skills in a new setting.",
      },
    ],
  },
  {
    slug: "find-the-right-destination",
    title: "How to find the destination that's right for you",
    category: "Planning",
    excerpt:
      "Not every place is the right place for every traveller. A way of thinking about destination choice that starts with you, not a list.",
    readingTime: "7 min read",
    date: "2026-05-22",
    author: "Maddie",
    image: {
      src: unsplash("photo-1594386245199-289c2fe0bd0a", 1600),
      alt: "Airplane window view of white clouds during daytime",
    },
    body: [
      {
        type: "paragraph",
        text: "Choosing where to go is one of the most genuinely pleasurable parts of travel planning, and also one of the most paralysing. The options are endless, the recommendations contradictory, and the fear of choosing wrong keeps a surprising number of women in the research phase long past the point where they could simply have gone.",
      },
      { type: "heading", text: "Start with the experience, not the place" },
      {
        type: "paragraph",
        text: "Instead of asking where do I want to go, try asking what do I want to feel. Do you want the particular calm of a small coastal town where you can eat at the same table every evening? The stimulation of a city you do not yet know? The freedom of somewhere with long walks and no fixed plan? A place that matches the experience you are after is always more satisfying than a place that simply has impressive things to see.",
      },
      { type: "heading", text: "Consider ease alongside beauty" },
      {
        type: "paragraph",
        text: "Some destinations are simply more comfortable for a solo woman than others. Not because they are safer in any dramatic sense, but because the everyday texture of being there, eating alone, navigating public transport, moving through the evenings, feels easy and unremarkable. For a first trip especially, choosing somewhere where solo female travellers are a normal, visible part of the landscape makes an enormous difference to how you feel on arrival.",
      },
      {
        type: "quote",
        text: "The right destination is not the most impressive one. It is the one that matches who you are right now.",
      },
      { type: "heading", text: "Think about the season, not just the place" },
      {
        type: "paragraph",
        text: "The same destination can feel entirely different depending on when you arrive. Southern Italy in July is crowded, hot and expensive. Southern Italy in May or October is quieter, cooler and genuinely easier to navigate alone. The shoulder seasons, the weeks just before or after the peak, are often the best time to visit almost anywhere in Europe. You get the place more or less to yourself, at a fraction of the cost, with better weather than most people expect.",
      },
      { type: "heading", text: "Narrow it down to two, then choose" },
      {
        type: "paragraph",
        text: "If you are stuck between options, allow yourself two finalists and sit with them for a few days. Notice which one you keep thinking about, which one you have already started imagining yourself in. That instinct is data. It is telling you something about what you actually want from this trip, and it is usually right.",
      },
      { type: "heading", text: "Give yourself permission to go somewhere that feels right" },
      {
        type: "paragraph",
        text: "There is a quiet pressure to choose somewhere adventurous, unusual or impressive enough to justify a solo trip. Ignore it. A week in a familiar European city you have always wanted to spend more time in is just as valid as somewhere remote and challenging. What matters is that you actually go, and that you come back having had the trip you wanted.",
      },
    ],
  },
  {
    slug: "budget-doesnt-mean-not-luxury",
    title: "How to travel well on a budget that works for you",
    category: "Perspective",
    excerpt:
      "Travelling well is not about what you spend. It is about being intentional with every decision, so your money goes where it genuinely changes the experience.",
    readingTime: "8 min read",
    date: "2026-04-15",
    author: "Maddie",
    image: {
      src: unsplash("photo-1711059985570-4c32ed12a12c", 1600),
      alt: "A bed with white sheets and pillows in a bright hotel room",
    },
    body: [
      {
        type: "paragraph",
        text: "One of the first things women tell me when they enquire about a trip is their budget, usually with an apology attached. As if the number they have is somehow not enough, or not the right kind of number for the kind of travel they want. I want to say clearly: there is no budget that makes a beautiful trip impossible. There are only budgets that require more thought about where the money goes.",
      },
      { type: "heading", text: "Decide what travel well actually means to you" },
      {
        type: "paragraph",
        text: "Before you set a number, think about what you are actually trying to buy. For some women it is comfort: a room that feels genuinely restorative, transport that is straightforward, no anxiety about getting from one place to another. For others it is experience: one truly exceptional meal, access to something they have wanted to see for years, a guide who makes a place come alive. For others still it is freedom: the ability to stay an extra night when the mood is right, to change plans without penalty. Knowing which of these matters most to you tells you exactly where to put the money.",
      },
      { type: "heading", text: "The single supplement is real, and here is how to handle it" },
      {
        type: "paragraph",
        text: "Solo travel does cost more per person than travelling with someone else. A hotel room for one person costs roughly the same as a hotel room for two. That gap is real and it is worth naming. The way to handle it is not to feel guilty about it, but to factor it into the planning honestly. A smaller, better-chosen room in the right neighbourhood is almost always a better use of that money than a larger, characterless room that happens to be cheaper per square metre.",
      },
      {
        type: "quote",
        text: "There is no budget that makes a beautiful trip impossible. There are only budgets that require more thought about where the money goes.",
      },
      { type: "heading", text: "Where to spend and where to save" },
      {
        type: "paragraph",
        text: "Spend on: the first night, a room with good light in a neighbourhood you will actually enjoy walking through, one experience that is genuinely meaningful to you, and getting there comfortably. Save on: anything that feels interchangeable anywhere in the world, a generic breakfast you could replicate at home, transport you could walk, souvenirs bought out of obligation. The edit is not about deprivation. It is about clearing space for the things that matter.",
      },
      { type: "heading", text: "The case for fewer days, done properly" },
      {
        type: "paragraph",
        text: "A four-night trip planned with real intention is more satisfying than ten nights spent anxiously trying to optimise a budget that is spread too thin. If your budget is limited, consider a shorter trip to somewhere closer rather than a longer trip somewhere far where you spend the whole time watching your spending. Depth beats breadth. A few days in one place, properly settled, is usually more memorable than a week spread across three.",
      },
      { type: "heading", text: "The things that are always free" },
      {
        type: "paragraph",
        text: "The best parts of almost every trip cost nothing. A long morning in a café that becomes yours for an hour. A walk through a neighbourhood that is still waking up. The feeling of eating somewhere wonderful and not quite believing you are the person sitting at that table. These moments do not require a certain number in your bank account. They require time, attention, and a plan that leaves room for them.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
