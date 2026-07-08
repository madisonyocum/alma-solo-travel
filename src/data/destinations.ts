import type { Destination } from "@/types";
import { unsplash, pexels } from "./images";

// ---------------------------------------------------------------------------
// Destination content. Cards on the index and every detail page are generated
// from this typed array. Add a destination by appending an object here.
// ---------------------------------------------------------------------------

export const destinations: Destination[] = [
  {
    slug: "andalucia",
    name: "Andalucía",
    country: "Spain",
    descriptor: "White villages, late dinners and a slower rhythm.",
    tags: ["City", "Culture", "Countryside", "Good value"],
    hero: {
      src: unsplash("photo-1614709870429-aeceeee7bf11", 2000),
      alt: "A white Andalusian hill village under a bright blue sky",
    },
    cardImage: {
      src: pexels(17986630),
      alt: "Aerial view of Seville from the square in front of the Archbishop's Palace",
    },
    summary:
      "Moorish courtyards, orange-tree squares and dinners that begin when the heat lifts. Andalucía rewards a slower, curious traveller.",
    intro: [
      "Andalucía is a region best understood at walking pace. Its cities layer Moorish palaces over Roman foundations and Baroque churches, while the countryside unfolds into olive groves, white villages and quiet mountain roads.",
      "For a solo traveller, it offers a rare combination: genuinely walkable historic centres, a generous café culture that makes eating alone feel natural, and a rhythm of life built around long, late, sociable evenings.",
    ],
    soloFit:
      "Seville, Granada and Córdoba have compact, well-connected historic centres that are pleasant to explore on foot. Café and tapas culture means eating alone rarely feels conspicuous, and days shape themselves easily around cooler mornings and long evenings.",
    bestAreas: [
      {
        name: "Santa Cruz & Alfalfa, Seville",
        description:
          "The old Jewish quarter and its livelier neighbour, walkable, atmospheric and close to the cathedral and river.",
      },
      {
        name: "Realejo, Granada",
        description:
          "A characterful quarter below the Alhambra with independent cafés, a relaxed pace and good transport links.",
      },
      {
        name: "The Sierra villages",
        description:
          "For a rural chapter, the pueblos blancos of Cádiz and Málaga offer slower days and boutique rural stays.",
      },
    ],
    hotels: [
      {
        name: "A restored townhouse in Santa Cruz",
        description:
          "Small, characterful stays built around a central patio, cool, quiet and central. A considered mid-range choice.",
      },
      {
        name: "A design-led boutique near the river",
        description:
          "For a treat: rooftop plunge pools, thoughtful interiors and easy walks into the centre.",
      },
      {
        name: "A rural hacienda in the Sierra",
        description:
          "Ideal for a two-night slower interlude, with olive-grove views and home-cooked breakfasts.",
      },
    ],
    experiences: [
      {
        name: "An early Alhambra visit",
        description:
          "Booked for opening, before the crowds and the heat, with time afterwards for the Generalife gardens.",
      },
      {
        name: "A neighbourhood tapas walk",
        description:
          "A relaxed, self-guided route between the bars locals actually use, paced for a solo evening.",
      },
      {
        name: "Flamenco in an intimate setting",
        description:
          "A small peña rather than a tourist show, where the room and the music feel genuinely close.",
      },
    ],
    food: [
      {
        name: "A tiled tapas bar in Alfalfa",
        description:
          "Standing at the counter with a glass of manzanilla is one of the easiest, warmest ways to eat alone.",
      },
      {
        name: "A patio café for slow breakfasts",
        description:
          "Tostada, orange juice and strong coffee in a courtyard before the day warms up.",
      },
      {
        name: "A modern Andalusian table",
        description:
          "For one considered dinner, a kitchen reworking regional produce with a light, contemporary hand.",
      },
    ],
    tripRhythm: [
      "Mornings: cooler hours for the big sights, the Alhambra, the Mezquita, the cathedral, booked ahead.",
      "Afternoons: a long lunch, a siesta or a shaded café, then a slow wander through the old quarters.",
      "Evenings: tapas from around nine, a glass of sherry, and the streets at their most alive.",
    ],
    bestTime:
      "April to early June and September to October offer warmth without the intensity of high-summer heat. Spring brings orange blossom and festivals; autumn brings the grape harvest and softer light.",
    gettingAround:
      "High-speed trains link Seville, Córdoba and Málaga comfortably; the historic centres are walkable. A hire car only makes sense for the rural villages, and is easily arranged for that chapter alone.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan. We will note siesta closures, sensible walking routes for evenings, and the reservations worth making in advance.",
    gallery: [
      {
        src: unsplash("photo-1625418267351-d3eff8e413a3", 900),
        alt: "A whitewashed Andalusian street lined with potted plants",
      },
      {
        src: unsplash("photo-1542224505-dc4c0cb6e63c", 900),
        alt: "The Giralda tower rising above the rooftops of Seville",
      },
      {
        src: unsplash("photo-1559564477-6e8582270002", 900),
        alt: "The Metropol Parasol landmark in central Seville",
      },
      {
        src: unsplash("photo-1614709870429-aeceeee7bf11", 900),
        alt: "A white Andalusian hill village under a bright blue sky",
      },
      {
        src: unsplash("photo-1688404808661-92f72f2ea258", 900),
        alt: "Sunlit historic architecture in Seville",
      },
      {
        src: unsplash("photo-1558618666-fcd25c85cd64", 900),
        alt: "A quiet street in central Seville",
      },
      {
        src: unsplash("photo-1569587112025-0d460e81a126", 900),
        alt: "White village rooftops in Andalucía",
      },
      {
        src: unsplash("photo-1575505586569-646b2ca898fc", 900),
        alt: "Ornate Moorish tilework in Granada",
      },
    ],
    relatedArticles: ["solo-in-seville", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "portugal",
    name: "Lisbon & the Portuguese Coast",
    country: "Portugal",
    descriptor: "Atlantic light, tiled streets and understated stays.",
    tags: ["City", "Coast", "Good value", "Culture"],
    hero: {
      src: unsplash("photo-1585208798174-6cedd86e019a", 2000),
      alt: "A yellow tram climbing a tiled street in Lisbon",
    },
    cardImage: {
      src: pexels(20144292),
      alt: "Lisbon rooftops and terracotta tiles seen through tree branches",
    },
    summary:
      "Hills, tiles and Atlantic light in the city, then a short hop to surf towns and quiet coves. Portugal is easy, warm and endlessly walkable.",
    intro: [
      "Lisbon is a city of viewpoints, trams and tiled façades that catch the low Atlantic light. It is compact enough to learn quickly and generous enough to keep surprising you.",
      "Beyond the city, the coast opens up: Sintra's palaces, the surf towns of the west, and quieter beaches within easy reach for a slower few days.",
    ],
    soloFit:
      "Lisbon's neighbourhoods are walkable and sociable, with an easygoing café and pastelaria culture. English is widely spoken, and day trips along the coast are simple to arrange by train.",
    bestAreas: [
      { name: "Príncipe Real", description: "Leafy, design-led and calm, with independent shops and good cafés." },
      { name: "Alfama", description: "The oldest quarter, atmospheric, hilly and full of fado and viewpoints." },
      { name: "Cascais or Comporta", description: "For a coastal chapter, from lively seaside town to quiet dune-backed beaches." },
    ],
    hotels: [
      { name: "A tiled townhouse guesthouse", description: "Characterful, central and well-priced, often with a small patio." },
      { name: "A design hotel in Príncipe Real", description: "For a treat: considered interiors and a rooftop with city views." },
      { name: "A coastal retreat near the dunes", description: "Understated, low-key luxury within reach of quiet beaches." },
    ],
    experiences: [
      { name: "A morning at the miradouros", description: "A self-guided viewpoint walk with coffee stops, before the hills warm up." },
      { name: "A day in Sintra", description: "Palaces and gardens in the hills, timed to avoid the busiest hours." },
      { name: "An intimate fado evening", description: "A small Alfama room rather than a large show." },
    ],
    food: [
      { name: "A neighbourhood pastelaria", description: "Custard tarts and a bica at the counter, the easiest solo breakfast there is." },
      { name: "A tasca for lunch", description: "Simple, generous Portuguese cooking in a family-run room." },
      { name: "A modern seafood table", description: "For one special dinner by the water." },
    ],
    tripRhythm: [
      "Mornings: viewpoints and neighbourhoods on foot, before the heat and the trams fill up.",
      "Afternoons: a long lunch, a museum, or the train to the coast.",
      "Evenings: sunset from a miradouro, then dinner and, if you like, fado.",
    ],
    bestTime:
      "May, June, September and October bring warm days and softer crowds. July and August are lively but hot; the coast is at its best then if you want beach days.",
    gettingAround:
      "Lisbon is walkable with trams, metro and funiculars for the hills. Trains reach Sintra, Cascais and the coast easily. A car is only needed for the quieter southern beaches.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which hills are worth a tram and which evenings suit a quiet dinner near your stay.",
    gallery: [
      { src: pexels(29743109), alt: "Vintage tram 28 in Lisbon's historic Alfama district" },
      { src: unsplash("photo-1569959220744-ff553533f492", 900), alt: "A viewpoint over Lisbon's terracotta rooftops" },
      { src: unsplash("photo-1513377888081-794d8e958972", 900), alt: "A quiet Lisbon street with tram tracks" },
    ],
    relatedArticles: ["choosing-the-right-neighbourhood", "boutique-or-budget"],
  },
  {
    slug: "puglia",
    name: "Puglia",
    country: "Italy",
    descriptor: "Olive groves, swimming coves and masserie mornings.",
    tags: ["Coast", "Countryside", "Culture", "Luxury"],
    hero: {
      src: unsplash("photo-1534250617995-d16425086b91", 2000),
      alt: "A whitewashed coastal town in Puglia above turquoise water",
    },
    cardImage: {
      src: pexels(36430127),
      alt: "Picturesque coastal view of Polignano a Mare in Puglia",
    },
    summary:
      "The heel of Italy: ancient olive groves, whitewashed towns and swimming coves, with restored farmhouses to slow down in.",
    intro: [
      "Puglia is Italy at a gentler tempo, a landscape of silver olive groves, dry-stone walls and small baroque towns the colour of bleached bone.",
      "It rewards travellers who like to base themselves somewhere beautiful and move slowly: a restored masseria, a handful of towns, and long afternoons by the sea.",
    ],
    soloFit:
      "The whitewashed towns of Ostuni, Lecce and the Valle d'Itria are walkable and welcoming. A base in a masseria gives structure and company to a solo trip, with breakfasts, gardens and easy day trips.",
    bestAreas: [
      { name: "Valle d'Itria", description: "Trulli country, central for the prettiest towns and the best masserie." },
      { name: "Ostuni", description: "The 'white city' on a hill, walkable and lively in the evenings." },
      { name: "Lecce & the Salento", description: "Baroque architecture inland, clear water and coves to the south." },
    ],
    hotels: [
      { name: "A restored masseria", description: "The signature Puglian stay, a working farmhouse with pool, garden and long breakfasts." },
      { name: "A townhouse in Ostuni", description: "Central, characterful and walkable to dinner." },
      { name: "A design masseria for a treat", description: "Considered interiors, a spa and a garden to disappear into." },
    ],
    experiences: [
      { name: "An olive-oil morning", description: "A visit to a working frantoio to taste and understand the region's staple." },
      { name: "A swimming-cove day", description: "A self-guided route to the clearest water, timed around the light." },
      { name: "A pasta-making afternoon", description: "Orecchiette by hand in a small kitchen, sociable and low-key." },
    ],
    food: [
      { name: "A masseria breakfast", description: "Ricotta, figs, garden tomatoes and strong coffee under the pergola." },
      { name: "A town trattoria", description: "Vegetable-forward Puglian cooking, generous and unfussy." },
      { name: "A seafood lunch by the water", description: "Simple, fresh and unhurried." },
    ],
    tripRhythm: [
      "Mornings: a slow breakfast, then a town or a market before the heat.",
      "Afternoons: a swimming cove or the masseria pool.",
      "Evenings: an aperitivo in a piazza, then dinner as the towns cool down.",
    ],
    bestTime:
      "Late May, June and September bring warm sea and quieter towns. July and August are hot and busy on the coast; spring is green and gentle inland.",
    gettingAround:
      "A hire car is genuinely useful here to reach the masserie and coves, and roads are quiet. Towns themselves are walkable once you arrive.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including whether a car suits your comfort level and which coves are calmest for a solo swim.",
    gallery: [
      { src: pexels(30508021), alt: "Charming coastal scene in Monopoli, Italy" },
      { src: unsplash("photo-1687551152135-c45044fe4bb2", 900), alt: "A restored stone interior in a Puglian masseria" },
      { src: unsplash("photo-1481931098730-318b6f776db0", 900), alt: "A plate of orecchiette pasta" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "sicily",
    name: "Sicily",
    country: "Italy",
    descriptor: "Ancient temples, volcanic landscape and the best street food in Italy.",
    tags: ["Coast", "Culture", "Countryside", "Good value"],
    hero: {
      src: unsplash("photo-1534256958597-59fcd82e8d7d", 2000),
      alt: "Taormina's ancient Greek theatre overlooking the Sicilian coast with Mount Etna in the distance",
    },
    cardImage: {
      src: unsplash("photo-1558618666-fcd25c85cd64", 1200),
      alt: "Colourful baroque buildings in a Sicilian piazza at sunset",
    },
    summary:
      "The island that never stops surprising: Greek temples older than Rome, a live volcano, fishing villages and a street-food culture without equal.",
    intro: [
      "Sicily sits at the crossroads of every civilisation that ever passed through the Mediterranean, Greek, Roman, Arab, Norman, and carries all of it in its architecture, food and light.",
      "For a solo traveller, it offers remarkable depth: ancient sites in the morning, a Baroque city for lunch, black-sand beaches by afternoon and the best arancini of your life whenever hunger strikes.",
    ],
    soloFit:
      "Palermo, Catania and Siracusa are lively cities where eating and wandering alone feels natural. Markets, street food stalls and café culture make mornings easy, and the island is compact enough to move around by train or bus.",
    bestAreas: [
      { name: "Palermo & the northwest", description: "The capital's markets, street food and layered architectural history." },
      { name: "Siracusa & the southeast", description: "A Greek island city on the sea, baroque Noto nearby and quiet coves." },
      { name: "The Aeolian Islands", description: "A ferry north for volcanic islands, clear water and a slower pace." },
    ],
    hotels: [
      { name: "A palazzo guesthouse in Palermo", description: "High ceilings, characterful rooms and the Ballarò market at the door." },
      { name: "A boutique hotel in Ortigia", description: "The ancient island heart of Siracusa, stone, sea and excellent restaurants." },
      { name: "An island agriturismo", description: "For a rural chapter: vines, olive oil and the scent of wild fennel." },
    ],
    experiences: [
      { name: "The Valley of the Temples at dawn", description: "Agrigento's Greek temples in the early light, before the buses arrive." },
      { name: "A Palermo market morning", description: "Ballaro or Vucciria, the most alive markets in Italy, all before 11am." },
      { name: "A ferry to the Aeolians", description: "Stromboli's volcanic glow at night, black beaches and clear Tyrrhenian water." },
    ],
    food: [
      { name: "A street food circuit in Palermo", description: "Arancini, panelle, sfincione, the greatest street food walk in Europe." },
      { name: "A seafood lunch in Ortigia market", description: "Whatever was landed that morning, grilled simply and eaten outside." },
      { name: "A granita and brioche breakfast", description: "The Sicilian way to start the day, cold, sweet and exactly right." },
    ],
    tripRhythm: [
      "Mornings: ancient sites and markets before the heat builds.",
      "Afternoons: a beach, a cove or a long lunch in the shade.",
      "Evenings: Baroque piazzas come alive after sunset, the passeggiata, then dinner late.",
    ],
    bestTime:
      "May, June and September are ideal, warm sea, manageable crowds and the landscapes at their most varied. July and August are beautiful but hot and busy; spring brings wildflowers and festivals.",
    gettingAround:
      "Trains link Palermo, Catania and Siracusa; buses reach smaller towns. Ferries connect the mainland and the Aeolians. A car helps for rural areas and the south coast. Alma will structure the route so travel is part of the experience.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which temples and sites warrant an early start and where the street food is genuinely worth the queue.",
    gallery: [
      { src: unsplash("photo-1539037116277-4db20889f2d4", 900), alt: "The ancient Greek theatre at Taormina against a blue Sicilian sky" },
      { src: unsplash("photo-1531572753322-ad063cecc140", 900), alt: "A colourful market stall with fresh produce in Sicily" },
      { src: unsplash("photo-1570135460323-0fa8bde05c72", 900), alt: "A Sicilian beach with clear blue water and a volcanic island in the distance" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "greek-islands",
    name: "The Greek Islands",
    country: "Greece",
    descriptor: "Clear water, quiet tavernas and unhurried days.",
    tags: ["Coast", "Wellness", "Luxury", "Culture"],
    hero: {
      src: unsplash("photo-1613395877344-13d4a8e0d49e", 2000),
      alt: "Whitewashed houses above deep blue Aegean water on a Greek island",
    },
    cardImage: {
      src: pexels(15565800),
      alt: "Sunlit whitewashed walls of a Greek island town with a cruise ship on the sea behind",
    },
    summary:
      "Beyond the busiest islands lie quiet harbours, clear coves and tavernas where a solo dinner feels entirely natural.",
    intro: [
      "The Greek islands are as varied as they are numerous. Away from the most photographed sunsets, there are quieter islands built for swimming, walking and long, slow meals by the water.",
      "For a solo traveller, the appeal is the ease of it: warm hospitality, simple pleasures and days that ask very little of you beyond deciding which cove to swim in.",
    ],
    soloFit:
      "Smaller islands like Naxos, Paros and Milos are relaxed and easy to navigate, with harbour towns where eating alone at a taverna is completely normal and warmly received.",
    bestAreas: [
      { name: "A harbour-town base", description: "Central, sociable and walkable to dinner and the ferry." },
      { name: "A quieter island for slowness", description: "Naxos or Milos for space, swimming and fewer crowds." },
      { name: "A wellness-focused stay", description: "For a restorative chapter, sea, yoga and simple food." },
    ],
    hotels: [
      { name: "A whitewashed guesthouse", description: "Simple, central and well-priced, often family-run." },
      { name: "A boutique hotel above a cove", description: "For a treat: sea views, a small pool and quiet." },
      { name: "A wellness retreat", description: "Yoga, sea swimming and unhurried days." },
    ],
    experiences: [
      { name: "A swimming-cove day", description: "A self-guided route to the clearest, quietest water." },
      { name: "A sunset walk", description: "Away from the crowds, timed for the best light." },
      { name: "A cooking or wine afternoon", description: "Small, local and sociable." },
    ],
    food: [
      { name: "A harbour taverna", description: "Grilled fish and a carafe of white with your feet almost in the water." },
      { name: "A village kafeneio", description: "Greek coffee and a slow morning in the shade." },
      { name: "A modern Greek table", description: "For one considered dinner reworking island produce." },
    ],
    tripRhythm: [
      "Mornings: a swim before the beaches fill, then breakfast in the shade.",
      "Afternoons: a cove, a boat, or a quiet village.",
      "Evenings: a sunset walk, then a long taverna dinner by the harbour.",
    ],
    bestTime:
      "May, June, September and early October bring warm sea and calmer islands. July and August are hot and busy; the shoulder months suit a slower solo trip best.",
    gettingAround:
      "Ferries link the islands; smaller islands are best explored with a scooter or a short taxi hop. Harbour towns are walkable. Alma will map ferry timings so connections feel calm rather than rushed.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, ferry schedules and common practical concerns when curating your plan, including which islands suit the pace and comfort level you describe.",
    gallery: [
      { src: pexels(35068604), alt: "Panoramic view of Athens with the Acropolis" },
      { src: unsplash("cS6YoRIAK2w", 900), alt: "A woman standing on a terrace looking out over the blue Aegean sea" },
      { src: unsplash("photo-1683904353864-130d1ea10ad1", 900), alt: "A quiet whitewashed alley on a Greek island" },
    ],
    relatedArticles: ["boutique-or-budget", "solo-in-seville"],
  },
  {
    slug: "croatia",
    name: "Croatia",
    country: "Croatia",
    descriptor: "Walled cities, island ferries and clear Adriatic water.",
    tags: ["Coast", "Culture", "City", "Good value"],
    hero: {
      src: unsplash("photo-1555990793-da11153b2473", 2000),
      alt: "The walled city of Dubrovnik overlooking the Adriatic Sea",
    },
    cardImage: {
      src: pexels(27671463),
      alt: "View from a cliff overlooking a Croatian coastal town",
    },
    summary:
      "A coastline of medieval cities, island-hopping ferries and clear Adriatic swimming, well-connected and deeply beautiful.",
    intro: [
      "Croatia's Dalmatian coast runs for hundreds of kilometres, offering walled cities, quiet islands and the clearest water in the Mediterranean.",
      "For a solo traveller, the route from Split southward to Dubrovnik, with island detours, provides structure, beauty and a rhythm that never feels forced.",
    ],
    soloFit:
      "Split and Hvar have a lively, social atmosphere that suits solo travel well. Island life slows things down pleasantly; the ferry network makes moving between stops simple and scenic.",
    bestAreas: [
      { name: "Split & Trogir", description: "The central hub, Diocletian's Palace still feels lived-in, not preserved." },
      { name: "Hvar & Vis", description: "Hvar for sociability and lavender fields; Vis for quiet, local and beautiful." },
      { name: "Dubrovnik", description: "The walled city, best experienced early morning and outside peak season." },
    ],
    hotels: [
      { name: "A studio inside the old town", description: "Stone walls, shuttered windows and everything on foot." },
      { name: "A boutique hotel on Vis", description: "Quiet, considered and overlooking the harbour." },
      { name: "A cliffside stay near Dubrovnik", description: "Views, a pool and the walls lit up at night." },
    ],
    experiences: [
      { name: "An island ferry day", description: "A hop to Brač, Vis or Šolta, swimming and a harbour lunch." },
      { name: "The Dubrovnik walls at sunrise", description: "The best possible version of the famous walk." },
      { name: "A sea-kayak morning", description: "Paddling the sea caves and coves around Dubrovnik or Hvar." },
    ],
    food: [
      { name: "A konoba lunch", description: "Grilled fish, local olive oil and a small house wine." },
      { name: "A harbourside aperitivo", description: "Watching the ferries while the evening softens." },
      { name: "A Dalmatian fish restaurant", description: "One special evening meal in a walled old town." },
    ],
    tripRhythm: [
      "Mornings: the old towns and markets before the heat.",
      "Afternoons: a cove, a ferry, or an island.",
      "Evenings: dinner inside the walls as the tourists thin out.",
    ],
    bestTime:
      "June and September are ideal, warm enough to swim, calm enough to enjoy the old towns. July and August are beautiful but busy; May and October are quieter and still warm.",
    gettingAround:
      "Catamarans and ferries link Split, the islands and Dubrovnik well. Alma will time the connections so the route flows naturally without rushed transfers.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, ferry schedules and common practical concerns when curating your plan, including which islands suit your pace and which ferry connections to book in advance.",
    gallery: [
      { src: pexels(32568576), alt: "Ancient walls of Dubrovnik overlooking the marina" },
      { src: unsplash("photo-1519451241324-20b4ea2c4220", 900), alt: "Aerial view of a walled Croatian old town" },
      { src: unsplash("photo-1507196522-cd75cf8a5dc5", 900), alt: "Boats moored in a blue Adriatic harbour" },
    ],
    relatedArticles: ["choosing-the-right-neighbourhood", "boutique-or-budget"],
  },
  {
    slug: "france",
    name: "France & South Coastline",
    country: "France",
    descriptor: "Lavender fields, Riviera light and unhurried village lunches.",
    tags: ["Countryside", "Culture", "Luxury", "Wellness", "Coast"],
    hero: {
      src: unsplash("photo-1568515045052-f9a854d70bfd", 2000),
      alt: "A purple lavender field in Provence with a stone farmhouse",
    },
    cardImage: {
      src: pexels(34278454),
      alt: "The Louvre glass pyramid in Paris",
    },
    summary:
      "Lavender in July, truffle markets in winter and year-round: ochre villages, long lunches and the best light in France, with the Côte d'Azur a short drive away.",
    intro: [
      "The south of France is a region built for slow travel, a landscape of lavender, olive groves, limestone villages and a quality of light that has drawn painters for centuries.",
      "For a solo traveller, the rhythm of a market town is a natural companion: morning markets, afternoon wandering and evenings that centre on one excellent meal.",
    ],
    soloFit:
      "Provençal market culture means morning activity and company without any social effort. Villages like Gordes, Roussillon and L'Isle-sur-la-Sorgue are charming and walkable, with café culture that welcomes solitude. The Côte d'Azur adds a coast chapter with easy connections.",
    bestAreas: [
      { name: "The Luberon", description: "Hilltop villages, ochre cliffs and some of France's best provençal cooking." },
      { name: "The Alpilles & Saint-Rémy", description: "Culture, olive oil and artistic history in a beautiful landscape." },
      { name: "Nice & the Côte d'Azur", description: "A sophisticated coastal city with the Riviera and Cannes within easy reach." },
    ],
    hotels: [
      { name: "A mas in the countryside", description: "A converted farmhouse with pool and lavender beyond the terrace." },
      { name: "A village maison d'hôtes", description: "Characterful, central and often with the best breakfast in the region." },
      { name: "A design hotel in Nice", description: "For the coast chapter: elegant, walkable and close to the Promenade." },
    ],
    experiences: [
      { name: "A market morning in Apt or L'Isle-sur-la-Sorgue", description: "Cheese, charcuterie, flowers and the rhythm of a French market town." },
      { name: "A lavender walk in July", description: "The Valensole plateau in bloom, early morning for the best light and quiet." },
      { name: "A Gorges du Verdon swim", description: "Clear turquoise water in one of Europe's most dramatic landscapes." },
    ],
    food: [
      { name: "A bistro lunch in a village square", description: "A carafe of rosé, a salade niçoise and two hours to spare." },
      { name: "A market picnic", description: "The best way to eat in Provence, local cheese, bread and a shaded spot." },
      { name: "A gastronomic dinner", description: "One Michelin-starred or acclaimed table for an evening of considered pleasure." },
    ],
    tripRhythm: [
      "Mornings: the market, a walk or a drive through the landscape.",
      "Afternoons: a swimming spot, a museum or the terrace.",
      "Evenings: apéritif and a long, unhurried dinner.",
    ],
    bestTime:
      "June and July for lavender; May, September and October for warmth without crowds. Spring brings wildflowers; winter is quiet and atmospheric, with truffle season in December.",
    gettingAround:
      "A hire car is essential for the villages and countryside. Trains reach Avignon, Aix and Nice well from Paris. Alma will map a route that uses the drive itself as part of the experience.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which market days fall on which towns and where to book in advance.",
    gallery: [
      { src: pexels(21293018), alt: "Seaside resort on the French Riviera" },
      { src: unsplash("iWwY-4d111s", 900), alt: "A woman in a black dress walking through a blooming lavender field in Provence" },
      { src: unsplash("photo-1577315734214-4b3dec92d9ad", 900), alt: "A French Provençal market stall with local produce" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "iceland",
    name: "Iceland",
    country: "Iceland",
    descriptor: "Geysers, lava fields, midnight sun and hot springs.",
    tags: ["Countryside", "Wellness", "Culture", "Luxury"],
    hero: {
      src: unsplash("photo-1531168556467-80aace0d0144", 2000),
      alt: "The Northern Lights reflected in a still Icelandic lake",
    },
    cardImage: {
      src: pexels(32056378),
      alt: "Majestic Fjaðrárgljúfur canyon in Iceland",
    },
    summary:
      "A landscape like nowhere else: geysers, lava fields, midnight sun and hot springs, and one of the safest, most solo-welcoming countries in the world.",
    intro: [
      "Iceland is compact enough to drive its Ring Road in a week and varied enough to fill a month. It is also, for a solo traveller, one of the safest and most welcoming countries in the world.",
      "The question is not whether to go, but how: a structured ring road, a slow week in the south, or a Reykjavík base with day trips.",
    ],
    soloFit:
      "Iceland is exceptionally solo-friendly. Reykjavík is a small, warm city with excellent café culture and social spaces. The landscape rewards a self-driven pace, and safety is rarely a concern.",
    bestAreas: [
      { name: "Reykjavík", description: "A small, design-forward capital with a remarkable food and arts scene." },
      { name: "The Golden Circle", description: "Geysers, waterfalls and Þingvellir, Iceland's most accessible landscape." },
      { name: "The Snæfellsnes peninsula", description: "A quiet, dramatic arc of coast, glacier and volcanic landscape." },
    ],
    hotels: [
      { name: "A Reykjavík design hotel", description: "Well-located, warm and a good base for city evenings." },
      { name: "A farmhouse guesthouse", description: "Characterful, hearty breakfasts and stars through the window." },
      { name: "A remote lodge", description: "For a wilderness night, geothermal pool and complete silence." },
    ],
    experiences: [
      { name: "The Blue Lagoon or a natural hot pot", description: "A thermal soak in the lava, better in the afternoon light." },
      { name: "A glacier walk", description: "Crampons on ice at the edge of a retreating glacier." },
      { name: "Northern lights in winter", description: "A self-drive night or a guided hunt, unforgettable." },
    ],
    food: [
      { name: "A Reykjavík coffee shop", description: "Excellent Scandinavian-influenced cafés and the world's freshest skyr." },
      { name: "A harbour fish restaurant", description: "Langoustine and Arctic char in a timber harbour building." },
      { name: "A hot dog with everything", description: "Bæjarins Beztu, the famous street cart, and very good." },
    ],
    tripRhythm: [
      "Mornings: driving the landscape in low golden light.",
      "Afternoons: a waterfall, a geothermal pool or a black sand beach.",
      "Evenings: Reykjavík for dinner and the long Nordic dusk.",
    ],
    bestTime:
      "June to August for midnight sun, green landscapes and all roads open. November to February for northern lights and winter stillness. April and September are quieter with changing light.",
    gettingAround:
      "A hire car is essential for anything beyond Reykjavík; roads are well-maintained and signposted. Alma will plan the driving days so distances are manageable and the highlights timed for the best light.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which highland roads need an F-road-capable vehicle and where to pre-book geothermal experiences.",
    gallery: [
      { src: pexels(32765183), alt: "Scenic Icelandic church with mountain backdrop" },
      { src: unsplash("photo-1508739773434-c26b3d09e071", 900), alt: "The blue geothermal waters of Iceland's hot springs" },
      { src: unsplash("photo-1548614606-52b4451f994b", 900), alt: "Northern lights dancing above an Icelandic landscape" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "scotland",
    name: "Scotland",
    country: "Scotland",
    descriptor: "Vast skies, loch reflections and whisky by a peat fire.",
    tags: ["Countryside", "Wellness", "Culture"],
    hero: {
      src: unsplash("photo-1500534314209-a25ddb2bd429", 2000),
      alt: "A dramatic Highland glen with mountains and a loch in Scotland",
    },
    cardImage: {
      src: pexels(27879553),
      alt: "A view of Edinburgh with the castle in the background",
    },
    summary:
      "Vast, moody and unlike anywhere else in Europe: the Highlands and islands reward a self-driven pace with dramatic scenery, remote lochs and genuine warmth.",
    intro: [
      "Scotland's Highlands are best understood as a landscape to move through slowly. The distances are long but the roads are quiet, and around each corner is another loch, another glen or another sky that earns a stop.",
      "The islands, Skye, Mull, Orkney, each add their own character, from dramatic sea cliffs to Neolithic stone circles to white Atlantic beaches.",
    ],
    soloFit:
      "Scotland is exceptionally safe and welcoming for solo female travellers. The pub and inn culture provides natural warmth and company, and a self-drive journey is manageable and deeply rewarding.",
    bestAreas: [
      { name: "Glencoe & the Great Glen", description: "The most dramatic Highland scenery, a night at each end of Loch Ness." },
      { name: "The Isle of Skye", description: "The Cuillin, the Fairy Pools and a landscape that earns its reputation." },
      { name: "Orkney", description: "A quieter island with remarkable Neolithic sites and big Atlantic light." },
    ],
    hotels: [
      { name: "A loch-view country house", description: "Roaring fire, good whisky and mountains from the bedroom." },
      { name: "A Skye boutique hotel", description: "Considered interiors, local sourcing and the Cuillin from the window." },
      { name: "A farmhouse B&B", description: "Warm, simple and with a breakfast to fuel the day's driving." },
    ],
    experiences: [
      { name: "A Highland distillery visit", description: "Single malt in the place it was made, often quiet and genuinely interesting." },
      { name: "A Fairy Pools walk on Skye", description: "Clear water and dramatic rock, best before mid-morning." },
      { name: "The Orkney stone circles", description: "Ring of Brodgar and Skara Brae, time-altering and almost always quiet." },
    ],
    food: [
      { name: "A pub dinner in a village inn", description: "Venison pie, a local ale and the easiest solo evening there is." },
      { name: "A Highland smoked salmon breakfast", description: "The best in the world, from a smokehouse near the water." },
      { name: "A seafood restaurant in Oban", description: "Fresh langoustines and a view over the Sound of Kerrera." },
    ],
    tripRhythm: [
      "Mornings: driving the morning light, pulling over as often as needed.",
      "Afternoons: a walk, a whisky stop or a beach.",
      "Evenings: an inn dinner and the long northern dusk.",
    ],
    bestTime:
      "May to September for long days and the best chance of clear weather. August brings midges, pack repellent. October brings stunning colour. Winter is dramatic and quiet, but some roads close.",
    gettingAround:
      "A hire car is essential. Roads are often single-track with passing places, easy once you know the rhythm. Alma will structure the route so daily drives are rewarding rather than exhausting.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including midge season, ferry bookings for the islands and which roads suit a solo driver.",
    gallery: [
      { src: pexels(34975351), alt: "Stunning Highland landscape with a lone sheep" },
      { src: unsplash("photo-1567581935884-3349723552ca", 900), alt: "The Fairy Pools on the Isle of Skye" },
      { src: unsplash("photo-1564399579883-451a5d44ec08", 900), alt: "A winding Scottish coastal road in evening light" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "uk",
    name: "London & the UK",
    country: "United Kingdom",
    descriptor: "World-class museums, Georgian squares and the best parks in Europe.",
    tags: ["City", "Culture", "Luxury", "Countryside"],
    hero: {
      src: unsplash("photo-1513635269975-59663e0ac1ad", 2000),
      alt: "An aerial view of the Thames and Tower Bridge in London at dusk",
    },
    cardImage: {
      src: pexels(27940335),
      alt: "Tower Bridge in London, England",
    },
    summary:
      "A capital that rewards the solo traveller who takes her time, world-class museums, neighbourhood restaurants and a city that never needs an excuse to be out.",
    intro: [
      "London is one of the world's great solo-travel cities: endlessly walkable by neighbourhood, rich with free museums and galleries, and with a café and restaurant culture that never makes eating alone feel anything other than a pleasure.",
      "Beyond the city, the UK opens into equally compelling territory, the Cotswolds, Cornwall, Edinburgh's Old Town and the Lake District offer very different chapters to a London base.",
    ],
    soloFit:
      "London is one of the most solo-friendly cities in the world. Its neighbourhood structure, Marylebone, Notting Hill, Shoreditch, Borough, rewards slow, foot-based exploration. The park culture, the gallery culture and the pub culture all work beautifully for a solo traveller.",
    bestAreas: [
      { name: "Marylebone & Fitzrovia", description: "Independent shops, excellent restaurants and a calm, elegant neighbourhood feel." },
      { name: "South Bank & Borough", description: "Tate Modern, Borough Market and the river walk, endlessly rewarding on foot." },
      { name: "The Cotswolds or Cornwall", description: "For a countryside or coastal chapter, honey-stone villages or wild Atlantic coast." },
    ],
    hotels: [
      { name: "A boutique hotel in Marylebone", description: "Quiet, design-led and perfectly placed for the city's best streets." },
      { name: "A period townhouse guesthouse", description: "Characterful, central and with a breakfast that sets the day up properly." },
      { name: "A countryside inn for a night out", description: "A Cotswold village pub with rooms, log fires and local sourcing." },
    ],
    experiences: [
      { name: "A morning at the V&A or Tate Modern", description: "Two of the world's great museums, free, vast and best without a plan." },
      { name: "A borough market breakfast", description: "The world's greatest food market, at its best before 10am." },
      { name: "A walking day by neighbourhood", description: "Notting Hill to Hyde Park, or Shoreditch to Brick Lane, the city on foot." },
    ],
    food: [
      { name: "A neighbourhood restaurant dinner", description: "London's dining scene is extraordinary, a short walk from almost any hotel." },
      { name: "A café morning in a side street", description: "Flat white and something good on toast, the rhythm of a London morning." },
      { name: "A pub lunch in a green square", description: "A proper Sunday roast or a good pie, the most welcoming solo meal in the country." },
    ],
    tripRhythm: [
      "Mornings: museums, markets or the parks before the city fills up.",
      "Afternoons: a neighbourhood on foot, a gallery or a day trip by train.",
      "Evenings: dinner in a side-street restaurant and the city at its most alive.",
    ],
    bestTime:
      "May and June for long evenings and the parks at their best. September and October bring crisp light and fewer tourists. December is magical for the city's atmosphere. Summer is lively but busy.",
    gettingAround:
      "London's tube and bus network is excellent; the city is best explored by neighbourhood on foot. National Rail connects the Cotswolds, Cornwall, Bath and Edinburgh easily. Alma will structure day trips so they feel rewarding rather than rushed.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best areas to stay for your travel style, which day trips are worth the time and where to book restaurants in advance.",
    gallery: [
      { src: pexels(9825919), alt: "Empty road in London with historic old buildings" },
      { src: unsplash("photo-1533929736458-ca588d08c8be", 900), alt: "A morning view over the rooftops of London from a high vantage point" },
      { src: unsplash("photo-1464817739973-0128fe77aaa1", 900), alt: "A path through an autumn-lit park in London" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "ireland",
    name: "Ireland",
    country: "Ireland",
    descriptor: "Wild coastlines, Georgian cities and the warmest welcome in Europe.",
    tags: ["Countryside", "Coast", "Culture", "Wellness"],
    hero: {
      src: unsplash("photo-1590059390069-07e81a17b1cf", 2000),
      alt: "The dramatic Cliffs of Moher rising above the Atlantic Ocean in Ireland",
    },
    cardImage: {
      src: pexels(37097491),
      alt: "Majestic Rock of Cashel with grazing sheep in the Irish countryside",
    },
    summary:
      "A country of extraordinary coastlines, ancient ruins and a hospitality culture that puts you at ease from the first conversation.",
    intro: [
      "Ireland is a place where the landscape changes every few miles and the welcome never does. From Dublin's Georgian squares to the wild Atlantic Way, it is one of the most instinctively solo-friendly countries in the world.",
      "The combination of dramatic natural scenery, a rich literary and musical culture, and pubs that are genuinely warm social spaces makes solo travel here feel effortless.",
    ],
    soloFit:
      "Ireland's pub culture is the best natural social infrastructure for a solo traveller: warm, conversational and entirely comfortable for a woman alone. Dublin, Galway and Kilkenny are all walkable and easy, while the countryside rewards a self-driven pace.",
    bestAreas: [
      { name: "Dublin", description: "Georgian squares, world-class galleries and the most welcoming pub culture in Europe." },
      { name: "Galway & the west", description: "A lively, creative city with the Wild Atlantic Way and Connemara on the doorstep." },
      { name: "The Ring of Kerry & Cork", description: "Ireland's most dramatic coastal scenery, with excellent food in Cork city." },
    ],
    hotels: [
      { name: "A Georgian guesthouse in Dublin", description: "Warm, characterful and in a neighbourhood worth waking up in." },
      { name: "A boutique hotel in Galway city", description: "Well-placed for the music, the restaurants and the road west." },
      { name: "A coastal lodge on the Wild Atlantic Way", description: "Cliffs, sea air and the most restorative silence in Europe." },
    ],
    experiences: [
      { name: "The Cliffs of Moher at dusk", description: "One of Europe's great landscapes, best with an early start and the right light." },
      { name: "A live music evening in Galway", description: "Traditional sessions in a small pub, a genuinely social solo evening." },
      { name: "A slow day on the Dingle Peninsula", description: "Ancient beehive huts, dramatic headlands and almost no one else." },
    ],
    food: [
      { name: "An Irish breakfast in a city café", description: "Soda bread, good butter, strong tea, the best start to a day's walking." },
      { name: "A seafood restaurant in Dingle or Kinsale", description: "Oysters and chowder caught that morning, with an Atlantic view." },
      { name: "A pub dinner with live music", description: "The most purely enjoyable evening a solo traveller can have in Ireland." },
    ],
    tripRhythm: [
      "Mornings: coastal walks and ancient sites in the clear Atlantic light.",
      "Afternoons: a drive, a village, or a museum in the city.",
      "Evenings: a pub, a session and the easiest solo conversation you'll have anywhere.",
    ],
    bestTime:
      "May, June and September offer the best combination of light, temperature and passable weather. July and August are busiest. Winter is dramatic and quiet, with the landscapes at their most elemental.",
    gettingAround:
      "A hire car is essential for the countryside and coast. Dublin and Galway are walkable cities. Alma will route the driving days so the journey itself is part of the experience.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which coastal roads suit a solo driver and where the most rewarding rural detours are.",
    gallery: [
      { src: unsplash("photo-1564959130747-897fb406b9af", 900), alt: "The green hills and coastline of Connemara in western Ireland" },
      { src: unsplash("photo-1502136969935-8d8eef54d77b", 900), alt: "A colourful Georgian doorway in Dublin" },
      { src: unsplash("photo-1505664194779-8beaceb93744", 900), alt: "A traditional Irish pub interior with warm lighting" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "denmark",
    name: "Denmark",
    country: "Denmark",
    descriptor: "Design, hygge and the most liveable city in the world.",
    tags: ["City", "Culture", "Wellness", "Luxury"],
    hero: {
      src: unsplash("photo-1513622470522-26c3c8a854bc", 2000),
      alt: "Colourful townhouses reflected in the harbour canal at Nyhavn, Copenhagen",
    },
    cardImage: {
      src: unsplash("photo-1539635278303-d4002c07eae3", 1200),
      alt: "A cyclist on a broad Copenhagen street lined with trees",
    },
    summary:
      "Copenhagen is one of the world's most liveable, most beautifully designed cities, and a place where a woman alone at a restaurant counter is entirely, perfectly ordinary.",
    intro: [
      "Denmark's capital is compact, cycle-friendly and built around the kind of considered, unhurried quality of life that makes it consistently ranked among the world's happiest cities.",
      "For a solo traveller, Copenhagen's culture of independent coffee shops, world-class restaurants and long, candle-lit evenings makes it one of the most naturally welcoming cities in Europe.",
    ],
    soloFit:
      "Copenhagen is a city designed for slow, curious exploration. Its culture of communal seating, bar counters and café society means eating and drinking alone is entirely unremarkable, and often the starting point for a good conversation.",
    bestAreas: [
      { name: "Nørrebro & Vesterbro", description: "The creative quarters, independent coffee, excellent natural wine bars and neighbourhood restaurants." },
      { name: "The city centre & Nyhavn", description: "The waterfront, the design museums and the city's most photographed canal." },
      { name: "Frederiksberg & the parks", description: "A quieter, residential quarter with beautiful gardens and a slower pace." },
    ],
    hotels: [
      { name: "A design hotel in Vesterbro", description: "Considered interiors, strong coffee and the city's best neighbourhood at the door." },
      { name: "A boutique hotel near Nørreport", description: "Central, calm and well-placed for the lakes and the food scene." },
      { name: "A waterfront property in Nyhavn", description: "For a treat: the iconic canal, a morning walk and a city at its most beautiful." },
    ],
    experiences: [
      { name: "A morning at the SMK or Design Museum", description: "Two of Europe's most rewarding galleries, best explored without a plan." },
      { name: "A cycle around the lakes and parks", description: "The most Danish way to see the city, flat, beautiful and calm." },
      { name: "A New Nordic dinner", description: "Copenhagen's restaurant scene changed how the world cooks, book ahead and go alone." },
    ],
    food: [
      { name: "A smørrebrød lunch", description: "Open sandwiches at a proper Danish lunch counter, one of the great solo meals." },
      { name: "A natural wine bar in Nørrebro", description: "Small, warm and a good place to meet the city's creative population." },
      { name: "A pastry from a local bakery", description: "The world's best cardamom bun, eaten on a canal bridge with a coffee." },
    ],
    tripRhythm: [
      "Mornings: a bakery, the lakes by bicycle and a gallery before noon.",
      "Afternoons: a neighbourhood on foot, a design shop or a canal-side café.",
      "Evenings: the long Scandinavian dusk, then dinner at a counter or small restaurant.",
    ],
    bestTime:
      "May to September for the long evenings and the outdoor culture at its best. December brings a magical hygge atmosphere with Christmas markets and candlelit interiors. Winter is cold but the city is extraordinarily cosy.",
    gettingAround:
      "Copenhagen is best explored by bicycle, rental is easy and the cycle lanes are excellent. The metro and S-train reach further areas quickly. Alma will ensure your neighbourhood is chosen for walkability and easy access.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which restaurants to book in advance and how to experience the New Nordic scene without spending unnecessarily.",
    gallery: [
      { src: unsplash("photo-1513189878756-ac7f7b4c4281", 900), alt: "The colourful Nyhavn waterfront in Copenhagen on a sunny day" },
      { src: unsplash("photo-1556909114-f6e7ad7d3136", 900), alt: "A beautifully designed Danish pastry at a Copenhagen bakery" },
      { src: unsplash("photo-1570158268183-d296b2892211", 900), alt: "A cyclist crossing a bridge in Copenhagen at golden hour" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "sweden",
    name: "Sweden",
    country: "Sweden",
    descriptor: "Stockholm's islands, northern light and quiet forests.",
    tags: ["City", "Culture", "Wellness", "Countryside"],
    hero: {
      src: unsplash("photo-1516026672322-bc52d61a55d5", 2000),
      alt: "Stockholm's old town Gamla Stan rising above the water at dusk",
    },
    cardImage: {
      src: unsplash("photo-1523297467724-f6758d7124c5", 1200),
      alt: "Colourful wooden buildings along a waterfront in Sweden",
    },
    summary:
      "Stockholm spreads across fourteen islands and rewards slow exploration, a Scandinavian capital with extraordinary design, quiet archipelago islands and a food scene that has quietly become one of Europe's best.",
    intro: [
      "Sweden's capital is one of Europe's most quietly beautiful cities: a sprawl of islands, water and 17th-century streets that rewards a traveller who takes her time.",
      "Beyond Stockholm, Sweden opens into a landscape of birch forests, red-painted villages and an archipelago of 30,000 islands, some of the most restorative scenery in northern Europe.",
    ],
    soloFit:
      "Stockholm's café culture, its design-focused museum scene and the easy calm of a Swedish city make it an excellent solo destination. Swedes are reserved but warm, and the city's layout, island by island, gives each day a natural structure.",
    bestAreas: [
      { name: "Gamla Stan & Södermalm", description: "The old town and the creative island just south, cobblestones, bookshops and excellent coffee." },
      { name: "Östermalm & Djurgården", description: "The Vasa Museum, open-air museum and a quieter, leafy stretch of the city." },
      { name: "The Stockholm Archipelago", description: "A ferry to Sandhamn or Vaxholm for a slow island day or an overnight." },
    ],
    hotels: [
      { name: "A design hotel in Södermalm", description: "The creative island's best address, characterful, independent and beautifully considered." },
      { name: "A boutique hotel in Gamla Stan", description: "Cobblestones, low ceilings and the old town on the doorstep." },
      { name: "An archipelago guesthouse", description: "For a slow island chapter: water, silence and the best breakfast in Sweden." },
    ],
    experiences: [
      { name: "The Vasa Museum", description: "A 17th-century warship perfectly preserved, one of the world's great museum experiences." },
      { name: "A ferry day in the archipelago", description: "An hour from the city, a different world, wildflowers, water and quiet." },
      { name: "A design walk through Södermalm", description: "Independent shops, studios and the city's creative heart on foot." },
    ],
    food: [
      { name: "A fika in a Södermalm café", description: "Coffee and a cinnamon bun, the Swedish ritual, the best mid-morning break in Europe." },
      { name: "A smörgåsbord lunch", description: "The Swedish spread: herring, gravlax, meatballs and rye bread." },
      { name: "A Michelin-calibre dinner", description: "Stockholm's food scene is world-class, several restaurants within a short walk of each other." },
    ],
    tripRhythm: [
      "Mornings: a fika, the Vasa Museum or a walk through Gamla Stan's narrow streets.",
      "Afternoons: an island ferry, a design gallery or a bookshop afternoon.",
      "Evenings: the long Scandinavian light, then dinner in Södermalm or Östermalm.",
    ],
    bestTime:
      "June to August for the midnight sun, the archipelago and the city's outdoor life at its most joyful. September brings golden light and fewer tourists. Winter is cold and dark but the city is beautifully atmospheric.",
    gettingAround:
      "Stockholm's metro, trams and ferries make the city easy to navigate. The archipelago is reached by Waxholmsbolaget ferry. Alma will structure your days so the water crossings feel like part of the trip, not logistics.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best ferry routes for a day in the archipelago and which restaurants warrant a reservation.",
    gallery: [
      { src: unsplash("photo-1509356843151-3e7d96241e11", 900), alt: "Stockholm's Gamla Stan old town illuminated at twilight over the water" },
      { src: unsplash("photo-1538332576228-eb5b4c4de6f5", 900), alt: "A colourful street in Södermalm, Stockholm" },
      { src: unsplash("photo-1531366936337-7c912a4589a7", 900), alt: "A wooden boat on a still Swedish lake in summer light" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "germany",
    name: "Germany",
    country: "Germany",
    descriptor: "Medieval market towns, castle routes and excellent coffee.",
    tags: ["City", "Culture", "Countryside", "Good value"],
    hero: {
      src: unsplash("photo-1528360983277-13d401cdc186", 2000),
      alt: "The Brandenburg Gate in Berlin illuminated at dusk",
    },
    cardImage: {
      src: unsplash("photo-1467269204594-9661b134dd2b", 1200),
      alt: "A half-timbered old town in Germany with a cobblestone square",
    },
    summary:
      "A country of startling variety: Berlin's cultural energy, Bavaria's fairy-tale castles, the Rhine's vineyard slopes and medieval old towns that survived the centuries intact.",
    intro: [
      "Germany is one of Europe's most underrated destinations for the solo female traveller, safe, well-connected, with a café and culture scene that makes each city worth spending time in.",
      "The range is extraordinary: the creative intensity of Berlin, the Baroque grandeur of Dresden, the Christmas-market atmosphere of Nuremberg, the mountains of Bavaria, each chapter a different country.",
    ],
    soloFit:
      "Germany's cities are exceptionally solo-friendly: excellent public transport, a deep café culture and well-organised tourism infrastructure. Berlin and Munich in particular have thriving food and arts scenes where a woman alone at a restaurant or gallery is entirely unremarkable.",
    bestAreas: [
      { name: "Berlin", description: "The most culturally alive city in Europe, museums, galleries and a food scene that never sleeps." },
      { name: "Bavaria & the Alps", description: "Neuschwanstein, Rothenburg ob der Tauber and mountain lakes in summer." },
      { name: "The Rhine Valley", description: "Vineyard-covered slopes, medieval castles and river cruises." },
    ],
    hotels: [
      { name: "A design hotel in Berlin Mitte", description: "Central, contemporary and close to the city's best museums and restaurants." },
      { name: "A boutique hotel in Munich", description: "Well-placed for the English Garden, the Marienplatz and day trips into the Alps." },
      { name: "A Gasthof in Bavaria", description: "Traditional, warm and with a breakfast built for a day in the mountains." },
    ],
    experiences: [
      { name: "A Berlin museum day", description: "Museum Island, five world-class museums in a single complex on the Spree." },
      { name: "Neuschwanstein at opening time", description: "Bavaria's fairy-tale castle, best before the coaches arrive." },
      { name: "A wine-tasting afternoon on the Rhine", description: "Riesling and river views, one of Germany's most relaxed afternoons." },
    ],
    food: [
      { name: "A Berlin street food market", description: "The city's food scene is international and excellent, Street Food Thursday at Markthalle Neun." },
      { name: "A Bavarian Wirtschaft", description: "Roast pork, pretzels and wheat beer in a traditional inn, the most welcoming solo lunch." },
      { name: "A fine dining counter in Berlin", description: "The city has quietly developed one of Europe's most interesting restaurant scenes." },
    ],
    tripRhythm: [
      "Mornings: museums, a market or a walk through a neighbourhood before the city gets busy.",
      "Afternoons: a gallery, a café with a book or a day trip to the countryside.",
      "Evenings: dinner in a good neighbourhood restaurant and the city well into the night.",
    ],
    bestTime:
      "May and June for warmth and long evenings without peak-season crowds. September and October bring the harvest season, autumn colour and the run-up to Christmas markets. December is magical. July and August are busy but lively.",
    gettingAround:
      "Germany's rail network is excellent, fast trains connect Berlin, Munich, Hamburg and Frankfurt easily. Within cities, trams and metro are reliable. Alma will plan connections so inter-city travel feels like part of the journey.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best areas to base yourself in each city and which castles and day trips are worth the journey.",
    gallery: [
      { src: unsplash("photo-1560969184-10fe8719e047", 900), alt: "A colourful street in Berlin with murals and a warm evening light" },
      { src: unsplash("photo-1599946347371-68eb71b16afc", 900), alt: "The fairytale Neuschwanstein Castle in the Bavarian Alps" },
      { src: unsplash("photo-1467269204594-9661b134dd2b", 900), alt: "A half-timbered old town in Germany at Christmas" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "austria",
    name: "Austria",
    country: "Austria",
    descriptor: "Imperial grandeur, alpine villages and concert-hall evenings.",
    tags: ["City", "Culture", "Countryside", "Luxury"],
    hero: {
      src: unsplash("photo-1552832230-c0197dd311b5", 2000),
      alt: "Vienna's classical architecture and the Ringstrasse boulevard at dusk",
    },
    cardImage: {
      src: unsplash("photo-1518098268026-4e89f1a2cd8e", 1200),
      alt: "The turquoise lake of Hallstatt surrounded by alpine mountains in Austria",
    },
    summary:
      "Vienna's coffeehouse culture and imperial grandeur in the city; the Salzkammergut's alpine lakes and Hallstatt's extraordinary beauty beyond it.",
    intro: [
      "Austria is a country of two moods: the ordered, coffee-house elegance of Vienna, where an afternoon can disappear entirely in a Ringstrasse café, and the alpine drama of the lake district and Salzburg.",
      "For a solo traveller, Vienna's coffeehouse culture is among the finest in the world, designed explicitly for sitting alone, reading and staying as long as you like.",
    ],
    soloFit:
      "Vienna's Kaffeehäuser are the perfect solo space: warm, unhurried and with a tradition of lingering that makes a woman alone with a book an entirely welcomed presence. The city's museum quarter and concert scene reward a self-paced solo trip beautifully.",
    bestAreas: [
      { name: "Vienna's 1st & 7th districts", description: "The historic centre and the MuseumsQuartier, culture, coffeehouses and excellent restaurants." },
      { name: "Salzburg", description: "Mozart, the Baroque old town and the Alps as a backdrop, a perfect two-night stay." },
      { name: "The Salzkammergut", description: "Hallstatt and the alpine lakes, among the most beautiful landscapes in central Europe." },
    ],
    hotels: [
      { name: "A boutique hotel near the MuseumsQuartier", description: "For a treat: excellent position, considered design and the city's best museums at the door." },
      { name: "A pension in the 7th district", description: "Characterful, central and a short walk from the best cafés and restaurants." },
      { name: "A lakeside guesthouse in the Salzkammergut", description: "Alpine calm, a private jetty and mountains reflected in still water." },
    ],
    experiences: [
      { name: "A morning at the Kunsthistorisches Museum", description: "One of the world's great art museums, allow a full morning and take it slowly." },
      { name: "An evening concert in the Musikverein", description: "Vienna's greatest concert hall, affordable seats in the standing sections." },
      { name: "A day trip to Hallstatt", description: "The alpine village on the lake, extraordinary and best visited early or late season." },
    ],
    food: [
      { name: "A coffeehouse afternoon", description: "Melange and Apfelstrudel at Café Central or Café Landtmann, the quintessential Vienna afternoon." },
      { name: "A Beisl dinner", description: "A small Viennese inn, Tafelspitz, Wiener Schnitzel and a glass of Grüner Veltliner." },
      { name: "A Würstelstand late-night", description: "A Viennese sausage stand at midnight, the most honest and enjoyable late supper in Europe." },
    ],
    tripRhythm: [
      "Mornings: a museum, the Naschmarkt or a walk along the Ringstrasse.",
      "Afternoons: a coffeehouse, a gallery or the train to Salzburg.",
      "Evenings: a concert, a Beisl dinner and the city in its slow, graceful night mode.",
    ],
    bestTime:
      "April, May and September are ideal, beautiful weather, the city at its best and the lakes swimmable by late summer. December brings Vienna's famous Christmas markets. Summer is busy but the culture season is rich.",
    gettingAround:
      "Vienna's tram and metro network is superb, the city is almost entirely walkable by neighbourhood. Trains reach Salzburg in under three hours. Alma will structure the route so the lakeside chapters feel calm and unhurried.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including how to book concerts, which coffeehouses are worth finding and the best season for the Salzkammergut.",
    gallery: [
      { src: unsplash("photo-1574039677526-ac95e879e85f", 900), alt: "The grand interior of the Vienna State Opera" },
      { src: unsplash("photo-1516550893923-42d28e5677af", 900), alt: "A Viennese coffeehouse interior with marble tables and warm lighting" },
      { src: unsplash("photo-1506905925346-21bda4d32df4", 900), alt: "A still alpine lake reflecting mountains in the Austrian Salzkammergut" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    descriptor: "Alpine lakes, old-town lanes and mountain trains.",
    tags: ["Countryside", "Luxury", "Wellness", "City"],
    hero: {
      src: unsplash("photo-1531306736628-ff69cd46b05a", 2000),
      alt: "The Matterhorn reflected in a still alpine lake at dawn in Switzerland",
    },
    cardImage: {
      src: unsplash("photo-1506905925346-21bda4d32df4", 1200),
      alt: "A Swiss alpine village with snow-capped mountains reflected in a lake",
    },
    summary:
      "Switzerland rewards the traveller who slows down: medieval old towns, mountain railways with views that don't feel real, and lakes you can swim in by afternoon.",
    intro: [
      "Switzerland's beauty is almost embarrassingly concentrated, mountains, lakes, medieval towns and more national parks than you can easily visit in a fortnight, all connected by one of the world's finest train networks.",
      "For a solo traveller, this connectivity is transformative: arrive in Zurich, wake up in Zermatt, swim in Lake Geneva by the afternoon, the country is remarkably easy to move through.",
    ],
    soloFit:
      "Switzerland is exceptionally safe and well-organised for solo travel. Its train network means you are rarely dependent on a hire car, and the café and restaurant culture in cities like Zurich and Geneva is easy and welcoming for a woman alone.",
    bestAreas: [
      { name: "Zurich & the lake", description: "A beautiful, walkable city with a lake for swimming and the Alps visible on clear days." },
      { name: "Zermatt & the Matterhorn", description: "A car-free mountain village with the most iconic view in the Alps." },
      { name: "Bern & the Bernese Oberland", description: "Switzerland's unhurried capital and the gateway to Interlaken and Grindelwald." },
    ],
    hotels: [
      { name: "A boutique hotel in Zurich's old town", description: "Cobblestone streets, good restaurants and the lake within walking distance." },
      { name: "A mountain chalet in Zermatt", description: "Warm, beautifully situated and the Matterhorn from the window." },
      { name: "A lakeside guesthouse in Lucerne", description: "The most photogenic city in Switzerland, a covered bridge and calm water." },
    ],
    experiences: [
      { name: "A mountain railway journey", description: "The Glacier Express or Bernina Line, among the most scenic train journeys in the world." },
      { name: "A lake swim in summer", description: "Zurich, Geneva or Lucerne, the Swiss swim in their lakes every day and so should you." },
      { name: "A sunrise hike above the clouds", description: "Take the first gondola up and have the mountain entirely to yourself." },
    ],
    food: [
      { name: "A fondue in a mountain restaurant", description: "The classic experience, cheese, bread and a mountain view." },
      { name: "A Zurich café morning", description: "Switzerland's coffee culture is excellent, strong, precise and with very good pastry." },
      { name: "A lakeside dinner", description: "Many of Switzerland's best restaurants look directly onto the water, worth booking ahead." },
    ],
    tripRhythm: [
      "Mornings: a mountain railway, an early hike or the city market before the warmth builds.",
      "Afternoons: a lake swim, a slow café or a train to the next destination.",
      "Evenings: a long dinner in a good mountain or lakeside restaurant as the peaks go gold.",
    ],
    bestTime:
      "June to September for hiking, lake swimming and the mountains at their greenest. December to March for snow and the best skiing; the towns are beautifully atmospheric in winter. Spring brings wildflowers and empty trails.",
    gettingAround:
      "Switzerland's train network is the finest in Europe, fast, punctual and scenic. The Swiss Travel Pass gives unlimited rail, bus and boat travel. Alma will plan your connections so the journey between places feels as good as the destinations.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best passes for your route, which mountain experiences to pre-book and where the lake swims are most accessible.",
    gallery: [
      { src: unsplash("photo-1530289782699-a0aed5f7c3f6", 900), alt: "The Matterhorn peak above Zermatt in the Swiss Alps" },
      { src: unsplash("photo-1596422846543-75c6fc197f11", 900), alt: "A turquoise glacial lake surrounded by Swiss alpine peaks" },
      { src: unsplash("photo-1527236438218-d82077ae1f85", 900), alt: "The old town of Zurich with the river and medieval buildings" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "slovakia",
    name: "Slovakia",
    country: "Slovakia",
    descriptor: "A fairy-tale capital, castle-dotted mountains and very few other tourists.",
    tags: ["City", "Culture", "Countryside", "Good value"],
    hero: {
      src: unsplash("photo-1596885573153-c6b1b0a2d411", 2000),
      alt: "Bratislava Castle above the Danube with the old town below",
    },
    cardImage: {
      src: unsplash("photo-1570168007204-dfb528c6958f", 1200),
      alt: "A cobblestone square in Bratislava old town with a castle in the background",
    },
    summary:
      "Bratislava's compact old town and the High Tatras' dramatic peaks, Slovakia is one of Europe's most rewarding undiscovered destinations.",
    intro: [
      "Slovakia offers something increasingly rare in Europe: genuine discovery. Bratislava's old town is small, charming and very manageable, while the Tatra mountains rank among the continent's most dramatic hiking landscapes.",
      "For a solo traveller, the combination of a walkable city with easy onward connections to extraordinary natural scenery, and without the crowds of better-known destinations, makes Slovakia quietly outstanding.",
    ],
    soloFit:
      "Bratislava's old town is compact enough to feel comfortable within a morning. The city has a warm, European café culture and English is widely spoken. The Tatras offer well-marked hiking trails and mountain huts for sociable solo evenings.",
    bestAreas: [
      { name: "Bratislava old town", description: "Small, atmospheric and easily walkable, a city that rewards a slow afternoon." },
      { name: "The High Tatras", description: "Slovakia's dramatic mountain spine, serious hiking and alpine lakes." },
      { name: "Bojnice & the castle country", description: "Fairy-tale medieval castles scattered through a quiet, green countryside." },
    ],
    hotels: [
      { name: "A boutique hotel in Bratislava old town", description: "Central, characterful and a short walk from the castle and the best restaurants." },
      { name: "A mountain guesthouse in the Tatras", description: "Warm, simple and with hiking routes from the door." },
      { name: "A spa hotel near Piešťany", description: "Slovakia's spa tradition, thermal waters and an unhurried few days." },
    ],
    experiences: [
      { name: "The Bratislava Castle at sunset", description: "The city, the Danube and Slovakia's history from one extraordinary viewpoint." },
      { name: "A Tatra ridge hike", description: "Marked trails through Europe's most dramatic sub-2500m scenery." },
      { name: "A castle visit in the Váh valley", description: "Bojnice or Trenčín, remarkably preserved and almost entirely undiscovered." },
    ],
    food: [
      { name: "A Slovak bryndzové halušky", description: "Potato dumplings with sheep's cheese, the national dish, and very good." },
      { name: "A Bratislava café morning", description: "The old town's independent café scene is warm, good and uncrowded." },
      { name: "A mountain hut dinner", description: "Simple, hearty and eaten after a long day in the Tatras, one of the best meals of a trip." },
    ],
    tripRhythm: [
      "Mornings: the old town on foot, or the first cable car up into the Tatras.",
      "Afternoons: a castle, a café or a hike to a mountain lake.",
      "Evenings: a long dinner in the old town and the city quiet and unhurried.",
    ],
    bestTime:
      "June to September for hiking, warm days and the mountains at their most accessible. December and January bring snow and a beautiful, quiet atmosphere. Spring and autumn are ideal for the city.",
    gettingAround:
      "Bratislava is walkable; trains and buses reach the Tatras and other towns from the capital. The city is well-connected to Vienna and Budapest if you are combining countries. Alma will structure the route to make the most of the region.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best hiking routes for your fitness level and which mountain huts require a reservation.",
    gallery: [
      { src: unsplash("photo-1519677100203-a0e668c92439", 900), alt: "Bratislava Castle lit up above the Danube at night" },
      { src: unsplash("photo-1506905925346-21bda4d32df4", 900), alt: "A dramatic alpine lake in the Slovak High Tatras" },
      { src: unsplash("photo-1562181912-6a44a3e53c4d", 900), alt: "A cobblestone street in Bratislava old town" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "poland",
    name: "Poland",
    country: "Poland",
    descriptor: "Gothic old towns, forest trails and one of Europe's great cities.",
    tags: ["City", "Culture", "Countryside", "Good value"],
    hero: {
      src: unsplash("photo-1565117100996-532d23947b28", 2000),
      alt: "Kraków's medieval market square at golden hour with the Cloth Hall at the centre",
    },
    cardImage: {
      src: unsplash("photo-1509023464722-18d996393ca8", 1200),
      alt: "A colourful townhouse facade in a Polish old town",
    },
    summary:
      "Poland's cities are among Europe's most underrated: Kraków's medieval grandeur, Warsaw's extraordinary reinvention and a country that rewards a curious traveller richly.",
    intro: [
      "Poland is experiencing a cultural moment, Warsaw has become one of Europe's most vibrant and unexpected food and arts cities, while Kraków's medieval old town remains among the continent's most beautiful, and best preserved.",
      "For a solo traveller, both cities offer excellent infrastructure, a warm and sociable culture and a depth of history that gives each day real substance.",
    ],
    soloFit:
      "Polish cities are exceptionally welcoming for solo female travellers. Kraków's compact old town means everything is walkable, and the café and bar culture is easy and social. Warsaw's creative energy and international feel make it a natural solo destination.",
    bestAreas: [
      { name: "Kraków old town & Kazimierz", description: "The medieval centre and the Jewish quarter, Poland's most beautiful city, on foot." },
      { name: "Warsaw's Praga & Powiśle", description: "The capital's creative, reinvented quarters, galleries, coffee shops and excellent restaurants." },
      { name: "The Tatra Mountains & Zakopane", description: "The mountain resort with access to Poland's most dramatic hiking." },
    ],
    hotels: [
      { name: "A boutique hotel in Kraków old town", description: "Central, well-priced and with the market square a short walk away." },
      { name: "A design hotel in Warsaw's Powiśle", description: "The neighbourhood the city's creative population has made its own." },
      { name: "A mountain guesthouse near Zakopane", description: "Traditional, warm and a base for the Tatra trails." },
    ],
    experiences: [
      { name: "Kraków's market square at dawn", description: "The largest medieval square in Europe, before the tourist groups arrive." },
      { name: "Warsaw's POLIN Museum", description: "One of Europe's finest museums, the history of Polish Jews, beautifully told." },
      { name: "A Tatra mountain hike", description: "Morskie Oko lake and the peaks above it, a full, extraordinary day." },
    ],
    food: [
      { name: "A Kraków milk bar", description: "A bar mleczny, the best and most characterful cheap lunch in Poland." },
      { name: "A natural wine bar in Warsaw Powiśle", description: "Warsaw's food scene has arrived, small, excellent and very good value." },
      { name: "A zapiekanka in Kazimierz", description: "The open-face baguette that is Kraków's favourite street food, better than it sounds." },
    ],
    tripRhythm: [
      "Mornings: the old town before the tour groups arrive, or an early museum visit.",
      "Afternoons: a neighbourhood on foot, a gallery or the train between cities.",
      "Evenings: dinner in a good restaurant and the old town after dark, one of Europe's most beautiful.",
    ],
    bestTime:
      "May, June and September are ideal, warm, good light and manageable crowds. December brings beautiful Christmas markets and snow in the Tatras. Winter is cold but the cities are atmospheric.",
    gettingAround:
      "Trains connect Warsaw, Kraków and Wrocław quickly and comfortably. Cities are best explored on foot or by tram. Alma will structure the route so inter-city travel feels like part of the journey.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best areas to stay in each city and which historical sites warrant an early start.",
    gallery: [
      { src: unsplash("photo-1519677100203-a0e668c92439", 900), alt: "A sunrise view over the rooftops of Kraków's old town" },
      { src: unsplash("photo-1562784493-3cc64dc56d2d", 900), alt: "A colourful street in the Kazimierz district of Kraków" },
      { src: unsplash("photo-1548448213-ed2e8c39c1cc", 900), alt: "Warsaw's reinvented Powiśle neighbourhood at evening" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "japan",
    name: "Japan",
    country: "Japan",
    descriptor: "Ancient temples, neon cities and the world's most considered hospitality.",
    tags: ["City", "Culture", "Wellness", "Luxury"],
    hero: {
      src: pexels(2070485),
      alt: "A serene Japanese temple surrounded by autumn foliage",
    },
    cardImage: {
      src: pexels(15846188),
      alt: "Blooming cherry blossom tree near Tokyo Skytree tower",
    },
    summary:
      "A country of extraordinary contrasts: Kyoto's meditative temple gardens in the morning, Tokyo's extraordinary food scene by night, and a sense of safety that feels almost startling.",
    intro: [
      "Japan rewards the traveller who pays attention. Its cities are dense with detail — a perfect bowl of ramen, a moss-covered garden behind an unmarked gate, a centuries-old craft workshop still operating on a side street.",
      "For a solo traveller, Japan is arguably the world's most considered destination. Solo dining is built into the culture; single-seat counter restaurants exist specifically for it. The transport is world-class, and navigating independently is genuinely straightforward.",
    ],
    soloFit:
      "Japan consistently ranks among the safest countries in the world for solo female travellers. Solo dining is entirely unremarkable — counter seating and ichiran-style restaurants are designed for it. The infrastructure is excellent, and the culture of quiet respect means solo travel here feels both easy and deeply personal.",
    bestAreas: [
      { name: "Kyoto's Higashiyama & Gion", description: "The preserved geisha district and temple corridors, best explored early morning before the crowds." },
      { name: "Tokyo: Yanaka & Shimokitazawa", description: "The old neighbourhood and the creative quarter — Tokyo at its most human and walkable." },
      { name: "Hakone or Nara", description: "A mountain onsen escape or an ancient deer-park city, both within easy reach of the main route." },
    ],
    hotels: [
      { name: "A ryokan with kaiseki", description: "A traditional inn with tatami rooms, an onsen bath and a multi-course dinner served in your room." },
      { name: "A Kyoto machiya townhouse", description: "A converted wooden townhouse, quiet, central and beautifully considered." },
      { name: "A Tokyo design hotel", description: "For the city chapter: a compact, well-located base in a walkable neighbourhood." },
    ],
    experiences: [
      { name: "A dawn temple walk in Kyoto", description: "Fushimi Inari or Arashiyama before 7am — the most extraordinary hour in Japanese travel." },
      { name: "A solo counter dinner", description: "A ramen bar, a sushi counter or a yakitori kitchen, the most natural solo dining experience in the world." },
      { name: "An onsen evening", description: "A ryokan soak or a public sento bath — the daily ritual that resets everything." },
    ],
    food: [
      { name: "A standing ramen bar", description: "Perfectly calibrated, ready in minutes, the most satisfying solo lunch there is." },
      { name: "A depachika food hall", description: "The basement food halls of Tokyo's department stores — the most extraordinary food shopping in the world." },
      { name: "An omakase counter", description: "For one special dinner: a chef's menu built around what's best that day, eaten at the counter." },
    ],
    tripRhythm: [
      "Mornings: temples and gardens before the tour groups arrive.",
      "Afternoons: neighbourhood wandering, a museum or a train to the next city.",
      "Evenings: a counter dinner and the city's extraordinary night culture.",
    ],
    bestTime:
      "March and April for cherry blossom; October and November for autumn colour. Both are magical and busy. June to August is hot and humid; winter is cold but quiet and beautiful, with snow at mountain temples.",
    gettingAround:
      "The Shinkansen bullet train is the backbone of the route. IC cards cover city transit everywhere. Alma will plan the rail passes and transfers so connections feel effortless rather than logistical.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best ryokans to book ahead, which temples reward an early start and how to navigate the transport system confidently.",
    gallery: [
      { src: pexels(2778412), alt: "Lush green foliage in Japan" },
      { src: pexels(5393594), alt: "Cherry blossom lining a path near a Kyoto temple" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    descriptor: "Rice terraces, temple ceremonies and the most welcoming wellness culture in the world.",
    tags: ["Wellness", "Culture", "Coast", "Countryside"],
    hero: {
      src: pexels(2474689),
      alt: "Emerald rice terraces cascading down a hillside in Bali",
    },
    cardImage: {
      src: pexels(20993670),
      alt: "Palm trees over terraced fields in Bali",
    },
    summary:
      "An island that has mastered the art of unhurried living: ancient temples, emerald rice terraces, extraordinary wellness culture and a hospitality that makes every solo traveller feel instantly at home.",
    intro: [
      "Bali is one of the world's most naturally welcoming solo destinations — an island where the culture centres on ceremony, community and care, and where a woman travelling alone is met with warmth rather than curiosity.",
      "From Ubud's artistic and spiritual heart to the surf-washed creative villages of the south coast, Bali offers entirely different chapters within a single island.",
    ],
    soloFit:
      "Bali has a thriving solo-travel culture, particularly in Ubud and Canggu. The combination of affordable luxury, English spoken everywhere and a deeply welcoming local culture makes it one of the world's most natural solo destinations. Yoga retreats, cooking classes and temple visits provide easy, sociable structure.",
    bestAreas: [
      { name: "Ubud", description: "The island's spiritual and creative heart, rice terraces, temples, cooking classes and excellent restaurants." },
      { name: "Canggu", description: "A surf-influenced creative village with excellent cafés, independent restaurants and a relaxed community atmosphere." },
      { name: "Uluwatu & Bingin", description: "For a quieter coastal chapter, dramatic clifftop temples and small surf beaches." },
    ],
    hotels: [
      { name: "A rice-terrace villa in Ubud", description: "Waking to the sound of frogs and the view of terraced fields — the signature Bali stay." },
      { name: "A boutique retreat in Canggu", description: "Poolside, design-led and close to the best cafés and evening restaurants." },
      { name: "A clifftop resort in Uluwatu", description: "For a considered splurge: infinity pool, ocean views and genuine quiet." },
    ],
    experiences: [
      { name: "A sunrise temple visit", description: "Pura Luhur Uluwatu or Tanah Lot at first light, the most peaceful version of Bali's most beautiful places." },
      { name: "A cooking class in Ubud", description: "A market morning followed by a full day of Balinese cooking — sociable, hands-on and excellent." },
      { name: "A rice-terrace walk", description: "The Campuhan Ridge or the Tegallalang terraces before 8am, before the heat and the tour groups arrive." },
    ],
    food: [
      { name: "A warung breakfast", description: "Nasi goreng, fresh fruit and strong Balinese coffee at a simple local warung." },
      { name: "A rooftop café in Ubud", description: "The rice-terrace view, a smoothie bowl and a slow morning — Bali's defining solo ritual." },
      { name: "A modern Balinese table", description: "Restaurants like Locavore or Hujan Locale, using local produce with extraordinary care." },
    ],
    tripRhythm: [
      "Mornings: temples and rice terraces before the heat — Bali is at its best before 9am.",
      "Afternoons: a pool, a yoga class or a cooking lesson.",
      "Evenings: sunset from a clifftop temple, then dinner in Ubud or Canggu.",
    ],
    bestTime:
      "May to September is the dry season, the best time for outdoor activities and coastal days. October to April brings the wet season, lush and green, with daily afternoon showers — still very enjoyable in Ubud.",
    gettingAround:
      "A private driver is the most practical way to move between areas and reach the best temples and terraces. Within Ubud, walking is wonderful. Alma will arrange transfers so the logistics never get in the way of the experience.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which retreats are worth booking ahead, temple etiquette essentials and the best areas to base yourself for your travel style.",
    gallery: [
      { src: pexels(15920151), alt: "Tree and temple ruins in Bali" },
      { src: pexels(3703167), alt: "A tranquil infinity pool overlooking lush Balinese jungle" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    descriptor: "Ancient temples, mountain towns and the most rewarding street food on earth.",
    tags: ["Culture", "City", "Coast", "Good value"],
    hero: {
      src: pexels(3541009),
      alt: "A gilded Thai temple spire rising above the rooftops of Bangkok",
    },
    cardImage: {
      src: pexels(33444008),
      alt: "Intricate architecture of the Grand Palace in Bangkok, Thailand",
    },
    summary:
      "Thailand offers one of the richest solo travel experiences in the world: a northern hill city built for slow exploration, a chaotic, magnificent capital and quieter islands for the coast chapter.",
    intro: [
      "Thailand has been welcoming independent travellers for decades, and its infrastructure, warmth and extraordinary variety of experience remain unmatched in Southeast Asia.",
      "For a solo traveller, Chiang Mai offers the ideal base: a walkable old city, excellent food, countless day trips and a community of travellers and expats that makes the first few days easy.",
    ],
    soloFit:
      "Thailand is one of Southeast Asia's most solo-friendly countries. English is widely spoken in tourist areas, transport between cities is easy and affordable, and the culture of café and street-food dining makes eating alone an entirely natural pleasure.",
    bestAreas: [
      { name: "Chiang Mai old city", description: "The walled northern city, walkable, temple-rich and the ideal base for the first chapter." },
      { name: "Bangkok: Silom & Ari", description: "For the capital chapter: the riverside temples and the quieter local neighbourhood of Ari for eating." },
      { name: "Koh Lanta or Koh Yao Noi", description: "Quieter Andaman islands with a relaxed atmosphere, clear water and fewer crowds than the famous beaches." },
    ],
    hotels: [
      { name: "A boutique hotel in Chiang Mai's old city", description: "Teak interiors, a small pool and the moat a short walk away." },
      { name: "A design hotel near the Bangkok riverside", description: "Well-placed for the temple circuit and the evening street food." },
      { name: "A beachfront resort on a quieter island", description: "Affordable, beautiful and genuinely relaxing." },
    ],
    experiences: [
      { name: "A dawn alms-giving walk in Chiang Mai", description: "The early-morning monk procession through the old city streets, quiet and extraordinary." },
      { name: "A Thai cooking class", description: "A market morning followed by a full day of northern Thai cooking — one of the best travel days possible." },
      { name: "A longtail boat on the Bangkok canals", description: "The khlongs at dusk, a view of the city nobody who only walks sees." },
    ],
    food: [
      { name: "A Chiang Mai night market", description: "Khao soi, sai ua sausage and mango sticky rice at the Saturday Walking Street." },
      { name: "A Bangkok rooftop restaurant", description: "For one special evening — the city at night from above." },
      { name: "A morning khao tom", description: "Rice soup with a soft-boiled egg and ginger, the most restorative breakfast in the world." },
    ],
    tripRhythm: [
      "Mornings: temples and markets before the heat, everything is better before 10am.",
      "Afternoons: a cooking class, a café with air conditioning or the boat to an island.",
      "Evenings: street food, a night market or a long dinner in a garden restaurant.",
    ],
    bestTime:
      "November to April is the cool, dry season — the best time to visit. May to October brings the monsoon, green and dramatic in the north, rougher for the Andaman coast. The Gulf of Thailand coast (Koh Samui) has its own dry season from February to October.",
    gettingAround:
      "Domestic flights connect the main cities quickly; overnight sleeper trains are an experience worth taking at least once. Tuk-tuks and grab (ride-hailing) handle city transport well. Alma will map the route so the travel itself is part of the experience.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including temple dress requirements, which markets are worth the early start and the best islands for your pace.",
    gallery: [
      { src: pexels(36687407), alt: "Tropical beach in Phuket, Thailand with scenic views" },
      { src: pexels(2265876), alt: "Clear turquoise water and a longtail boat off a Thai island" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    descriptor: "Ancient lantern towns, karst mountains and extraordinary food at every turn.",
    tags: ["Culture", "Countryside", "Coast", "Good value"],
    hero: {
      src: pexels(2161467),
      alt: "Colourful paper lanterns hanging above a street in Hoi An at dusk",
    },
    cardImage: {
      src: pexels(2161467),
      alt: "Colourful paper lanterns hanging above a street in Hoi An at dusk",
    },
    summary:
      "A country of extraordinary diversity: the ancient lantern-lit streets of Hoi An, Hanoi's centuries-old quarter, Ha Long Bay's limestone karsts and a food culture that is worth the trip alone.",
    intro: [
      "Vietnam rewards a traveller who moves at a considered pace, spending enough time in each place to find the side streets, the neighbourhood cafés and the moments away from the busier attractions.",
      "For a solo traveller, Hoi An is one of the world's great bases: small, walkable, extraordinarily beautiful and with a tailoring, food and café culture that makes long, solitary, pleasurable days entirely natural.",
    ],
    soloFit:
      "Vietnam is a deeply rewarding solo destination. Its food culture — phở at a plastic stool, bánh mì from a street cart — makes eating alone one of the genuine pleasures of the trip. Internal transport has improved dramatically, and the country's north-to-south structure gives a solo journey natural shape.",
    bestAreas: [
      { name: "Hoi An ancient town", description: "The most beautiful town in Southeast Asia, lantern-lit and walkable, with the best tailors and restaurants in Vietnam." },
      { name: "Hanoi's Old Quarter", description: "The northern capital's 36-guild streets, a lake at the centre and the best phở in the world." },
      { name: "Ha Long Bay or Ninh Binh", description: "Karst limestone landscapes by water, the most dramatic scenery in northern Vietnam." },
    ],
    hotels: [
      { name: "A heritage house in Hoi An", description: "Courtyard, tiles and lanterns — the most atmospheric stay in Vietnam." },
      { name: "A boutique hotel in Hanoi's Old Quarter", description: "Well-placed for the lake, the markets and the best phở stalls." },
      { name: "A Ha Long Bay cruise", description: "An overnight junk boat through the karsts — the best way to see the bay at dawn." },
    ],
    experiences: [
      { name: "A lantern night in Hoi An", description: "The town lights its lanterns on the full moon, one of the most beautiful evenings in Southeast Asia." },
      { name: "A Vietnamese cooking class", description: "A market visit followed by hands-on cooking in a riverside kitchen." },
      { name: "A Ha Long sunrise on deck", description: "Karst peaks emerging through mist at dawn, one of the great landscape moments anywhere." },
    ],
    food: [
      { name: "A phở breakfast in Hanoi", description: "Standing at a stool on a Hanoi street at 7am, a bowl of broth — the best breakfast in the world." },
      { name: "A Hoi An cao lầu", description: "The dish that can only be made here, with local well water and fresh noodles." },
      { name: "A bánh mì from a cart", description: "Vietnam's perfect portable lunch, the best version is always from the simplest cart." },
    ],
    tripRhythm: [
      "Mornings: markets, phở and the old town before the midday heat.",
      "Afternoons: a cooking class, a café or the boat to the limestone bay.",
      "Evenings: lanterns, street food and the old quarters at their most alive.",
    ],
    bestTime:
      "Vietnam is long and varied; the ideal time depends on region. February to April suits both north and central. The south is best November to April. October and November are beautiful in Hoi An. Alma will plan the route around the best conditions for your timing.",
    gettingAround:
      "Domestic flights are fast and affordable between Hanoi, Da Nang and Ho Chi Minh City. Trains are scenic and excellent for the coastal route. Alma will structure the north-to-south (or south-to-north) flow so travel time is part of the experience.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which overnight journeys are worth taking, the best tailors in Hoi An and how to navigate the food scene confidently.",
    gallery: [
      { src: pexels(34124512), alt: "Street vendor in a Hanoi alley with Vietnamese flags" },
      { src: pexels(4040220), alt: "Limestone karst islands rising from mist over Ha Long Bay" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    descriptor: "Ancient kingdoms, tea-covered hills and the warmest welcome in South Asia.",
    tags: ["Culture", "Countryside", "Coast", "Wellness"],
    hero: {
      src: pexels(3581824),
      alt: "A misty tea plantation on the hillsides of Sri Lanka",
    },
    cardImage: {
      src: pexels(29644514),
      alt: "Aerial view of Mirissa beach in Sri Lanka",
    },
    summary:
      "A compact island of extraordinary variety: ancient rock fortresses, spice-scented hill towns, whale-watching bays and a coast of perfectly empty beaches — all within a few hours of each other.",
    intro: [
      "Sri Lanka is one of travel's great surprises — a small island that packs in temples, wildlife, colonial forts, tea hills and beautiful beaches without ever feeling rushed if you plan the route well.",
      "For a solo traveller, the combination of genuine warmth, a rich food culture and relatively affordable luxury makes Sri Lanka one of South Asia's most rewarding independent destinations.",
    ],
    soloFit:
      "Sri Lanka is welcoming and safe for solo female travellers, particularly in the main tourist areas. The tuk-tuk and train culture makes moving between places easy and characterful. Guesthouses and small boutique hotels have a warmth that suits solo travel particularly well.",
    bestAreas: [
      { name: "Galle Fort", description: "A UNESCO-listed Dutch colonial fort on the southern coast, walkable, beautiful and with excellent restaurants and boutique hotels." },
      { name: "The Cultural Triangle", description: "Sigiriya rock fortress, Dambulla cave temples and Polonnaruwa's ancient city — the heartland of Sri Lankan history." },
      { name: "Ella & the hill country", description: "The most scenic train journey in Asia, tea plantations, waterfalls and cool highland air." },
    ],
    hotels: [
      { name: "A boutique hotel in Galle Fort", description: "Colonial architecture, a courtyard pool and the fort walls a short walk away." },
      { name: "A tea estate guesthouse in Ella", description: "Misty mornings, a veranda view and breakfasts that make you want to stay another day." },
      { name: "A beach villa on the south coast", description: "For the coast chapter: direct beach access and a kitchen stocked with local produce." },
    ],
    experiences: [
      { name: "The Kandy to Ella train", description: "One of the world's most beautiful rail journeys, winding through tea hills and misty valleys." },
      { name: "Sigiriya at sunrise", description: "The 5th-century rock fortress climbed before the tour groups arrive, extraordinary." },
      { name: "A whale-watching morning from Mirissa", description: "Blue whales in the Indian Ocean, best between November and April." },
    ],
    food: [
      { name: "A rice and curry lunch", description: "The Sri Lankan spread of curries, dhal, coconut sambol and papadums — the most generous daily meal in Asia." },
      { name: "A Galle Fort restaurant", description: "Modern Sri Lankan cooking in a colonial courtyard, several excellent options within walking distance." },
      { name: "A coconut roti breakfast", description: "Made on a flat stone over a wood fire, with coconut and jaggery, the perfect hill-country morning." },
    ],
    tripRhythm: [
      "Mornings: ancient sites and train journeys in the cool early hours.",
      "Afternoons: a tea plantation walk, the beach or a long lunch.",
      "Evenings: a courtyard dinner in Galle or the stars from a hill-country veranda.",
    ],
    bestTime:
      "December to March for the west and south coast. April to September for the east coast. The hill country and Cultural Triangle are good year-round. Alma will plan the route around the best conditions for your travel dates.",
    gettingAround:
      "The train network is scenic and useful for the main route; tuk-tuks handle local travel everywhere. Private drivers are worth it for the Cultural Triangle. Alma will map the transfers so the journey between places is as enjoyable as the destinations.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which historic sites require an early start, the best train carriages to book and how to experience the food culture confidently.",
    gallery: [
      { src: pexels(20836060), alt: "Vehicles on a street by a hotel in Kandy town, Sri Lanka" },
      { src: pexels(3587793), alt: "A still lagoon reflecting palm trees on the Sri Lankan coast" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "india",
    name: "India",
    country: "India",
    descriptor: "Ancient temples, palace hotels and a sensory richness unlike anywhere else on earth.",
    tags: ["Culture", "History", "Countryside", "Wellness"],
    hero: {
      src: pexels(1583339),
      alt: "The Taj Mahal at dawn reflected in still water",
    },
    cardImage: {
      src: pexels(1583339),
      alt: "The Taj Mahal at dawn reflected in still water",
    },
    summary:
      "India rewards the traveller who plans well — choosing the right cities, the right order and the right pace transforms an overwhelming prospect into one of the most extraordinary journeys of a lifetime.",
    intro: [
      "India is vast, vivid and endlessly layered. The Rajasthan circuit alone could fill a month; so could Kerala's backwaters. For a solo traveller, the key is focus: a well-curated route through a region, rather than a frantic cross-country tick-list.",
      "The combination of Mughal heritage, living temple culture, palace hotels and an exceptional food scene makes India one of the world's most rewarding solo destinations when the groundwork is done properly.",
    ],
    soloFit:
      "India is extremely welcoming to solo female travellers, particularly in heritage cities, Rajasthan and the south. Choosing well-located, reputable accommodation makes a significant difference to the ease and confidence of the trip. Alma selects stays that suit solo travel specifically.",
    bestAreas: [
      { name: "Rajasthan", description: "Jaipur, Jodhpur, Udaipur and Jaisalmer — forts, palaces and the most distinctive hospitality in Asia." },
      { name: "Kerala", description: "Backwater houseboat stays, spice plantations, Ayurvedic retreats and a coast of quiet beauty." },
      { name: "Delhi & Agra", description: "The Mughal heartland: Old Delhi's lanes, the Red Fort and the Taj Mahal at dawn." },
    ],
    hotels: [
      { name: "A heritage haveli in Jaipur", description: "A converted palace with a courtyard pool and evening rooftop dinners." },
      { name: "A houseboat on the Kerala backwaters", description: "A private houseboat with a cook, gliding past paddy fields and coconut palms." },
      { name: "A boutique riad in Udaipur", description: "Lake Pichola views, candlelit terraces and the most romantic setting in Rajasthan." },
    ],
    experiences: [
      { name: "Sunrise at the Taj Mahal", description: "The first light on white marble, before the crowds arrive — one of travel's great moments." },
      { name: "A Rajasthani cooking class", description: "Learning dal baati churma and local spice blends from a home kitchen in Jaipur." },
      { name: "A morning puja on the Ganges", description: "Varanasi at dawn: oil lamps on the river, the sound of bells and an ancient world still very much alive." },
    ],
    food: [
      { name: "Thali in Rajasthan", description: "The all-in-one meal of dal, sabzi, roti and rice — different in every region, always extraordinary." },
      { name: "Street food in Old Delhi", description: "Parathe Wali Gali, chaat and the city's legendary nihari — one of Asia's great food streets." },
      { name: "Kerala sadya", description: "A banana-leaf feast of rice, pickles, curries and payasam — best eaten with your hands at a local restaurant." },
    ],
    tripRhythm: [
      "Mornings: temples, forts and markets before the heat builds.",
      "Afternoons: a palace hotel pool, an Ayurvedic treatment or a long slow lunch.",
      "Evenings: rooftop dinners, cultural performances and the golden hour over lake or fort.",
    ],
    bestTime:
      "October to March for most of India. Kerala's monsoon (June to August) is beautiful if you embrace it. Rajasthan can be very hot in summer — Alma will plan the timing and route to match the conditions for your travel dates.",
    gettingAround:
      "A well-planned mix of private transfers, domestic flights and the scenic train network. Alma maps the logistics so every connection is comfortable and the journey between places adds to the experience rather than detracting from it.",
    practical:
      "Alma considers accommodation neighbourhood, driver reliability, temple dress codes, solo-travel comfort and food safety when curating your India plan — so you can focus entirely on the experience.",
    gallery: [
      { src: pexels(34910832), alt: "Bustling Indian street with auto rickshaw and trees" },
      { src: pexels(3881104), alt: "A tranquil Kerala backwater with coconut palms reflected in still water" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "colombia",
    name: "Colombia",
    country: "Colombia",
    descriptor: "Walled colonial cities, coffee highlands and Latin America's most vibrant culture.",
    tags: ["City", "Culture", "Countryside", "Good value"],
    hero: {
      src: pexels(3586927),
      alt: "Colourful colonial buildings lining a street in Cartagena's old city",
    },
    cardImage: {
      src: pexels(19676231),
      alt: "Aerial view of Bogotá, Colombia",
    },
    summary:
      "Colombia has transformed into one of South America's most compelling destinations: a walled Caribbean city, a reinvented highland metropolis, coffee highlands and a warmth that makes solo travel feel effortless.",
    intro: [
      "Colombia offers a range of experiences that few countries can match: Cartagena's candy-coloured colonial streets by the Caribbean, Medellín's extraordinary urban reinvention and the Eje Cafetero's coffee hills and haciendas.",
      "For a solo traveller, Cartagena in particular is a natural base — walkable, beautiful and with a food and nightlife culture that rewards those exploring alone.",
    ],
    soloFit:
      "Colombia has changed dramatically in recent years and is now a genuinely welcoming solo travel destination, particularly in the main tourist cities. Cartagena's old city is safe and walkable; Medellín has a thriving café and creative culture. Sticking to well-established areas and using reliable transport makes the trip very manageable.",
    bestAreas: [
      { name: "Cartagena old city", description: "The walled Caribbean city — colonial, colourful and walkable, with excellent restaurants and boutique hotels." },
      { name: "Medellín: El Poblado & Laureles", description: "The city's most welcoming neighbourhoods, cafés, creative spaces and the extraordinary urban story." },
      { name: "The Coffee Region (Eje Cafetero)", description: "Haciendas, bamboo forests and the Jeep trips between small coffee towns — the most characterful part of rural Colombia." },
    ],
    hotels: [
      { name: "A boutique hotel in Cartagena's old city", description: "A colonial courtyard, a rooftop and the Caribbean two blocks away." },
      { name: "A design hotel in El Poblado, Medellín", description: "The most visited neighbourhood in the city, walkable to restaurants and transport." },
      { name: "A coffee hacienda in the Eje Cafetero", description: "Waking to birdsong, a farm breakfast and the coffee fields on the hillside." },
    ],
    experiences: [
      { name: "A Cartagena rooftop sunset", description: "The old city's walls and domes at dusk, one of the great urban views in South America." },
      { name: "A coffee farm visit", description: "Following the bean from tree to cup on a working hacienda, one of Colombia's most rewarding days." },
      { name: "The Medellín cable car", description: "Riding the metro cable up to the hillside communities, the best view of a remarkable city." },
    ],
    food: [
      { name: "A Cartagena ceviché", description: "Fresh fish, lime and coconut, eaten at a harbour-side table as the evening cools." },
      { name: "A Medellín café morning", description: "Third-wave Colombian coffee in a light-filled café, the city's favourite ritual." },
      { name: "A bandeja paisa lunch", description: "Colombia's most iconic spread of beans, rice, plantain, chorizo and avocado, sustaining and delicious." },
    ],
    tripRhythm: [
      "Mornings: the old city or the coffee hills before the heat, always better early.",
      "Afternoons: a museum, a hacienda tour or the cable car.",
      "Evenings: rooftop cocktails in Cartagena or dinner in Medellín's Laureles neighbourhood.",
    ],
    bestTime:
      "December to March and July to August are the driest months across most of Colombia. Cartagena is year-round; the Coffee Region is lush in the wetter months. Alma will advise on the best timing for your specific route.",
    gettingAround:
      "Domestic flights connect the main cities quickly and affordably. Within Cartagena the old city is walkable; Medellín has an excellent metro. Jeeps are the way to travel between coffee towns. Alma will structure transfers so the journey feels part of the experience.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including which areas to stay in for safety and atmosphere, and which coffee haciendas offer the most authentic experience.",
    gallery: [
      { src: pexels(17745834), alt: "City street with a view of the Cathedral of Cartagena de Indias" },
      { src: pexels(2356045), alt: "Rolling green coffee hills in the Colombian Eje Cafetero" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "peru",
    name: "Peru",
    country: "Peru",
    descriptor: "Inca ruins, Sacred Valley villages and the world's best restaurant scene.",
    tags: ["Culture", "Countryside", "Luxury", "Wellness"],
    hero: {
      src: pexels(3601422),
      alt: "The ancient Inca citadel of Machu Picchu emerging from clouds in the Andes",
    },
    cardImage: {
      src: pexels(13080580),
      alt: "Clouds rolling over the ancient Inca citadel of Machu Picchu",
    },
    summary:
      "One of the world's great travel destinations: Machu Picchu at dawn, the Sacred Valley's living Andean culture, Lima's extraordinary food scene and the vast wildness of the Amazon beyond.",
    intro: [
      "Peru offers the kind of travel that stays with you: the silence of Machu Picchu before the first train arrives, a market in the Sacred Valley unchanged in centuries, and a dinner in Lima that competes with the best in the world.",
      "For a solo traveller, Peru's structure — a coastal city chapter, a highland circuit and optional jungle extension — provides natural shape to the journey and excellent infrastructure throughout.",
    ],
    soloFit:
      "Peru is a well-established solo travel destination with good infrastructure in the main tourist areas. Cusco's compact centre is walkable and sociable; the Sacred Valley villages offer a quieter, deeply personal experience. Lima's Miraflores and Barranco neighbourhoods are safe, walkable and extraordinarily well-served for solo dining.",
    bestAreas: [
      { name: "Cusco's San Blas & Plaza de Armas", description: "The artistic neighbourhood above the main square — the most atmospheric base for the highland chapter." },
      { name: "The Sacred Valley", description: "Pisac, Ollantaytambo and the Inca terraces — best based here for a slower, more immersive alternative to Cusco." },
      { name: "Lima: Miraflores & Barranco", description: "The clifftop Pacific neighbourhood and the bohemian art district — the best of Peru's extraordinary food city." },
    ],
    hotels: [
      { name: "A colonial boutique hotel in Cusco", description: "Converted Inca stonework, a courtyard garden and the city's best neighbourhood at the door." },
      { name: "A Sacred Valley lodge", description: "Andean views, an outdoor pool and morning mist over the mountains." },
      { name: "A Miraflores design hotel", description: "For the Lima chapter: ocean-view, excellent location and walking distance to the city's best restaurants." },
    ],
    experiences: [
      { name: "Machu Picchu at first entry", description: "The citadel before 7am, in the mist, without the crowds — the most extraordinary place on earth at its most extraordinary moment." },
      { name: "A Sacred Valley market day", description: "Pisac on Sunday, an Andean market still used by local communities, extraordinary colour and craft." },
      { name: "A Lima tasting menu", description: "Central, Maido or Kjolle — Lima's restaurants are among the best in the world, book well ahead." },
    ],
    food: [
      { name: "A Lima ceviche", description: "Leche de tigre, the freshest fish, eaten at a counter in Miraflores — the world's best lunch." },
      { name: "A Cusco market breakfast", description: "Quinoa porridge and fresh juice in the San Pedro market, the most energising start to a highland day." },
      { name: "A cause and anticucho dinner", description: "Peru's most beloved dishes in a Barranco restaurant, honest, extraordinary and unlike anything else." },
    ],
    tripRhythm: [
      "Mornings: ancient sites and markets before the light flattens and the tour groups arrive.",
      "Afternoons: a valley walk, a textile workshop or the acclimatisation rest that Cusco demands.",
      "Evenings: a long dinner in Lima or a pisco sour in a Cusco courtyard bar.",
    ],
    bestTime:
      "May to October is the dry season — the best time for trekking, clear skies at Machu Picchu and the Sacred Valley at its most vivid. November to April brings rain, green landscapes and fewer crowds. Lima is grey in June to August (Andean winter) but the food scene is year-round.",
    gettingAround:
      "Lima to Cusco is a short domestic flight. The Vistadome train to Machu Picchu is a beautiful journey. Taxis and private transfers handle the valley. Alma will plan the acclimatisation days so altitude sickness is managed rather than suffered.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including Machu Picchu entry slot booking (essential, months in advance), altitude acclimatisation and which Lima restaurants require a reservation.",
    gallery: [
      { src: pexels(16844681), alt: "Animal on a barren Andean hill in Peru" },
      { src: pexels(2356044), alt: "The colourful textiles of a Sacred Valley market in Peru" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "argentina",
    name: "Argentina",
    country: "Argentina",
    descriptor: "Buenos Aires tango bars, Andean wine country and the end of the world.",
    tags: ["City", "Culture", "Countryside", "Luxury"],
    hero: {
      src: pexels(3217269),
      alt: "A colourful street in the La Boca neighbourhood of Buenos Aires",
    },
    cardImage: {
      src: pexels(37134503),
      alt: "Scenic view of Mar del Plata coastline in Argentina",
    },
    summary:
      "A country of cinematic scale: Buenos Aires' European grandeur and tango culture, Mendoza's vineyard-covered Andes, and Patagonia's wild, windswept end of the earth.",
    intro: [
      "Argentina is one of South America's most rewarding solo destinations — a country where the food, the culture and the sheer scale of the landscape conspire to produce an unforgettable trip.",
      "Buenos Aires in particular suits solo travel beautifully: a city with the café culture of Paris, the energy of New York and the warmth of South America, where eating and drinking alone at a good restaurant is entirely natural.",
    ],
    soloFit:
      "Buenos Aires is one of the great solo-travel cities — a European-flavoured metropolis where the café culture, the restaurant counter and the tango milonga all welcome a woman alone. Argentina's main tourist circuit is well-established and straightforward to navigate independently.",
    bestAreas: [
      { name: "Buenos Aires: Palermo & San Telmo", description: "The tree-lined creative neighbourhood and the cobblestoned antique quarter — the best of BA on foot." },
      { name: "Mendoza", description: "The Andean wine city, vineyards within cycling distance and the high Andes as a backdrop." },
      { name: "Patagonia: Bariloche or El Calafate", description: "For the wilderness chapter: glaciers, lakes and the most dramatic landscapes in the Americas." },
    ],
    hotels: [
      { name: "A boutique hotel in Palermo Soho", description: "Design-led, leafy and in the neighbourhood with the best restaurants in Buenos Aires." },
      { name: "A vineyard guesthouse in Mendoza", description: "Waking to Malbec vines and the snow-capped Andes, with a cellar door at the end of the garden." },
      { name: "A lakeside lodge in Bariloche", description: "Chocolate-box Andean scenery, hiking from the door and a fireplace for the evenings." },
    ],
    experiences: [
      { name: "A milonga in Buenos Aires", description: "A tango evening in a traditional dance hall — watching or joining, both are extraordinary." },
      { name: "A Mendoza wine day", description: "A bicycle between boutique bodegas in the Luján de Cuyo, tasting reserve Malbec in the vineyards." },
      { name: "The Perito Moreno glacier", description: "Walking the ice or watching it calve from the boardwalk — the most impressive natural spectacle in South America." },
    ],
    food: [
      { name: "A Buenos Aires parrilla dinner", description: "The Argentine steakhouse, unhurried, excellent and entirely comfortable for a woman dining alone." },
      { name: "A medialunas morning", description: "Butter croissants and a cortado at a Buenos Aires café, the most pleasurable solo breakfast in South America." },
      { name: "A Mendoza asado", description: "A long, wine-soaked Sunday lunch at a vineyard — one of the world's great slow meals." },
    ],
    tripRhythm: [
      "Mornings: the neighbourhood market, the vineyard or the glacier walk — Argentina rewards early risers.",
      "Afternoons: a siesta (Buenos Aires runs late), a wine tasting or a lake walk.",
      "Evenings: dinner rarely before 9pm, then the city at its most alive until well after midnight.",
    ],
    bestTime:
      "October to April (southern hemisphere spring and summer) for Buenos Aires and Patagonia. March to May for Mendoza's grape harvest. June to August is winter in Patagonia — dramatic but cold; good for skiing in Bariloche.",
    gettingAround:
      "Domestic flights connect Buenos Aires, Mendoza and Patagonia efficiently. Within Buenos Aires the metro and taxi/ride-hail are easy. Alma will structure the route so the distances feel exciting rather than exhausting.",
    practical:
      "Alma considers neighbourhood choice, transport patterns, opening hours and common practical concerns when curating your plan, including the best neighbourhoods to stay in Buenos Aires, which bodegas to pre-book and the glacier access logistics in Patagonia.",
    gallery: [
      { src: pexels(12978566), alt: "Flag of Argentina on a boat" },
      { src: pexels(3581002), alt: "The Perito Moreno glacier calving into a turquoise Patagonian lake" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "mexico",
    name: "Mexico",
    country: "Mexico",
    descriptor: "Colonial cities, ancient ruins and a food culture that is among the world's very best.",
    tags: ["Culture", "History", "City", "Coast"],
    hero: {
      src: pexels(2356045),
      alt: "Colourful buildings and a church dome in a Mexican colonial city",
    },
    cardImage: {
      src: pexels(20181325),
      alt: "Colourful street in Guanajuato, Mexico",
    },
    summary:
      "Mexico is one of Latin America's most rewarding solo destinations — colonial cities dripping with colour, Mayan ruins in the jungle, Pacific surf towns and a taco culture so good it is on UNESCO's intangible heritage list.",
    intro: [
      "Mexico City has quietly become one of the world's great food and culture capitals. Beyond it, Oaxaca's markets and mezcal bars, the ruins of Teotihuacán and the colonial grandeur of San Miguel de Allende each deserve their own chapter.",
      "For a solo traveller, Mexico rewards those who slow down: a week in Oaxaca is worth more than a week zigzagging the country. Alma builds routes around quality of experience, not quantity of stamps.",
    ],
    soloFit:
      "Mexico is very popular with solo female travellers, particularly in Oaxaca, Mexico City's Condesa and Roma neighbourhoods, San Miguel de Allende and the Yucatán. Neighbourhood choice matters — Alma selects accommodation in areas that suit solo travel specifically.",
    bestAreas: [
      { name: "Oaxaca City", description: "Markets, mezcal, mole and some of Mexico's best contemporary restaurants — deeply characterful and very walkable." },
      { name: "Mexico City (Condesa & Roma)", description: "Tree-lined streets, bookshops, galleries and a restaurant scene that rivals any city in the world." },
      { name: "San Miguel de Allende", description: "A UNESCO colonial city of pink stone, rooftop bars and the most beautiful sunsets in central Mexico." },
    ],
    hotels: [
      { name: "A boutique hotel in Oaxaca", description: "A converted colonial house with a central courtyard and breakfast on the terrace." },
      { name: "A design hotel in Roma Norte", description: "Walking distance to the city's best restaurants and markets, perfectly placed for solo exploring." },
      { name: "A rooftop hotel in San Miguel", description: "Views over the Parroquia spires and the city below — one of Mexico's most photogenic stays." },
    ],
    experiences: [
      { name: "A Oaxacan market morning", description: "Mercado Benito Juárez and the surrounding streets: mole pastes, chapulines, chocolate and fresh tlayudas." },
      { name: "Teotihuacán at sunrise", description: "The Pyramid of the Sun before the crowds arrive, with a guide who brings the history to life." },
      { name: "A mezcal tasting in the valley", description: "Visiting a small palenque outside Oaxaca to understand how the spirit is made, then tasting it properly." },
    ],
    food: [
      { name: "Oaxacan mole negro", description: "The most complex sauce in the Mexican kitchen — made over hours from chillies, chocolate and spice." },
      { name: "Mexico City tacos", description: "Al pastor from a late-night taquería, eaten standing at the counter — a Mexico City rite of passage." },
      { name: "A Oaxacan chocolate drink", description: "Thick, dark and barely sweet — made at the local mill and drunk warm in the morning market." },
    ],
    tripRhythm: [
      "Mornings: markets, ruins and colonial streets in the cool early hours.",
      "Afternoons: a long lunch that turns into an afternoon, a mezcal bar or a museum.",
      "Evenings: rooftop dinners, live music and the golden light on colonial stone.",
    ],
    bestTime:
      "October to April for most of Mexico — dry, warm and clear. Oaxaca's Día de los Muertos in late October/November is extraordinary. Alma plans the timing around your travel dates and any festivals worth building the trip around.",
    gettingAround:
      "Domestic flights between cities, then walking and local transport within them. Alma maps every connection — transfers from airports, which neighbourhoods are walkable and when a driver makes more sense than public transport.",
    practical:
      "Alma selects accommodation in safe, well-located neighbourhoods, plans routes that minimise unnecessary complexity and includes practical solo-travel notes for each city — so you arrive knowing exactly what to expect.",
    gallery: [
      { src: pexels(6942522), alt: "Bird's eye view of beachfront houses along the shoreline in Mexico" },
      { src: pexels(3997385), alt: "Ancient Mayan pyramids at Chichen Itza rising above the Yucatan jungle" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
  {
    slug: "chile",
    name: "Chile",
    country: "Chile",
    descriptor: "Desert stargazing, Patagonian wilderness and one of South America's most sophisticated cities.",
    tags: ["Adventure", "Countryside", "City", "Wellness"],
    hero: {
      src: pexels(2901209),
      alt: "Snow-capped Andes peaks reflected in a still Patagonian lake",
    },
    cardImage: {
      src: pexels(4613397),
      alt: "Llamas crossing a road in the Chilean Andes",
      objectPosition: "bottom",
    },
    summary:
      "Chile is one of the world's most geographically dramatic countries — the Atacama Desert in the north, Santiago and the wine valleys in the middle, and Patagonia's wild towers and glaciers in the south. Each region is a world of its own.",
    intro: [
      "Chile is long and lean, and the best trips treat it as a series of distinct chapters rather than a single north-to-south marathon. Santiago as a base, then fly to the Atacama, then south to Torres del Paine — each one extraordinary on its own terms.",
      "For a solo traveller, Chile is one of South America's safest and most straightforward destinations. The infrastructure is excellent, the food scene in Santiago has quietly become world-class and the landscapes reward the effort to reach them.",
    ],
    soloFit:
      "Chile is one of the safest countries in South America for solo female travellers. Santiago's Providencia and Lastarria neighbourhoods are walkable, social and very well-located. The Atacama and Patagonia are best with small-group or guided experiences — Alma builds these in where they add most value.",
    bestAreas: [
      { name: "Santiago (Lastarria & Providencia)", description: "Bookshops, wine bars, fish markets and some of South America's best contemporary restaurants." },
      { name: "San Pedro de Atacama", description: "The driest desert on earth: salt flats, geysers, flamingos and the clearest night skies anywhere." },
      { name: "Torres del Paine", description: "Patagonia's iconic national park: granite towers, turquoise lakes and a landscape unlike anything else on earth." },
    ],
    hotels: [
      { name: "A boutique hotel in Lastarria", description: "A converted townhouse in Santiago's most characterful neighbourhood, walkable to everything." },
      { name: "A desert lodge in the Atacama", description: "Stargazing terraces, volcanic views and breakfasts that fuel a full day of exploration." },
      { name: "A Patagonian lodge near the park", description: "Proper warmth after a day on the trails — good food, a fire and views of the towers." },
    ],
    experiences: [
      { name: "Atacama salt flat at sunrise", description: "The Salar de Atacama at first light — pink flamingos, still water and complete silence." },
      { name: "Stargazing in the Atacama", description: "The clearest skies on earth, guided by an astronomer with a telescope pointed at the Milky Way." },
      { name: "The W Trek in Torres del Paine", description: "The iconic multi-day route through Patagonia — Alma plans the logistics so you can focus on the walk." },
    ],
    food: [
      { name: "A Santiago fish market lunch", description: "Mercado Central: ceviche, caldillo de congrio and the freshest seafood in the southern hemisphere." },
      { name: "A Colchagua Valley wine tasting", description: "Chile's finest red wine region, a short drive south of Santiago, with small family bodegas worth visiting." },
      { name: "A Patagonian lamb asado", description: "Slow-roasted on a cross over an open fire — the traditional way, in a farmhouse outside the park." },
    ],
    tripRhythm: [
      "Mornings: early starts for desert or mountain light before the wind picks up.",
      "Afternoons: long lunches, wine tastings or a rest after the trails.",
      "Evenings: Santiago restaurant tables, stargazing sessions or the silence of Patagonia.",
    ],
    bestTime:
      "October to April for Patagonia and most of Chile. The Atacama is year-round; winter nights are coldest but the skies are even clearer. Alma plans the route around the best conditions for your specific travel dates.",
    gettingAround:
      "Domestic flights link the main regions efficiently; within each area, a mix of private transfers, local transport and guided day trips. Alma maps the connections so the logistics are seamless and the time between places is never wasted.",
    practical:
      "Alma includes detailed neighbourhood notes for Santiago, gear recommendations for Patagonia, altitude advice for the Atacama and solo-travel practical tips for each region — so you arrive confident and fully prepared.",
    gallery: [
      { src: pexels(37570438), alt: "Santiago skyline with the Andes mountains as a backdrop" },
      { src: pexels(2859169), alt: "Pink flamingos on the salt flats of the Atacama Desert at sunrise" },
    ],
    relatedArticles: ["boutique-or-budget", "choosing-the-right-neighbourhood"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export const destinationTags = Array.from(
  new Set(destinations.flatMap((d) => d.tags)),
).sort();
