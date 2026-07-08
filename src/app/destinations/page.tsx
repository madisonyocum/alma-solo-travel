import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CyclingVideoHero } from "@/components/CyclingVideoHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { destinations } from "@/data/destinations";
import { buildMetadata } from "@/lib/seo";
import { Globe } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Destinations for Solo Travel",
  description:
    "Alma creates personalised solo travel plans for women, for any destination in the world. Browse for inspiration or tell us where you want to go.",
  path: "/destinations",
});

const EXAMPLE_SLUGS = [
  "andalucia",
  "portugal",
  "puglia",
  "greek-islands",
  "croatia",
  "france",
  "iceland",
  "scotland",
  "uk",
  "ireland",
  "japan",
  "bali",
  "thailand",
  "vietnam",
  "sri-lanka",
  "india",
  "colombia",
  "peru",
  "argentina",
  "mexico",
  "chile",
];

export default function DestinationsPage() {
  const examples = EXAMPLE_SLUGS
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <>
      {/* Video hero */}
      <section className="relative isolate flex min-h-[62vh] w-full items-end overflow-hidden bg-ink pt-24 sm:min-h-[68vh]">
        <CyclingVideoHero />
        <div aria-hidden="true" className="absolute inset-0 z-3 bg-linear-to-t from-ink/90 via-ink/60 to-ink/40" />
        <div className="relative z-10 mx-auto w-full max-w-336 px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-sun">Destinations</p>
            <h1 className="text-balance text-4xl text-surface sm:text-5xl lg:text-6xl">
              Places chosen for slow,<br className="hidden sm:block" /> considered solo travel.
            </h1>
            <p className="measure mt-6 text-lg text-surface/90">
              A growing selection of destinations, each one curated with the independent solo traveller in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Example destinations */}
      <section className="bg-background pb-24 sm:pb-32">
        <Container>
          <Reveal className="mb-10 flex flex-col gap-5 pt-8 sm:pt-10">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">Custom plan, any destination</span>
              <h2 className="text-3xl sm:text-4xl">Places and plans others have loved.</h2>
            </div>
            <div className="flex flex-col items-center gap-5 rounded-2xl bg-[#ede8df] px-6 py-5 w-full text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 shrink-0 text-muted-ink" aria-hidden="true" />
                <p className="font-serif text-xl italic text-ink">
                  Don&apos;t see yours? Alma plans for anywhere. Just ask.
                </p>
              </div>
              <div className="flex w-full flex-col-reverse items-center gap-2 sm:w-auto sm:flex-row sm:gap-4">
                <p className="text-sm text-muted-ink">Plans ready in a week</p>
                <Button href="/enquire" variant="primary" className="w-full sm:w-auto">Plan My Trip</Button>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((destination, i) => (
              <Reveal key={destination.slug} delay={i * 0.04}>
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-ink"
                >
                  <div className="relative aspect-3/4 w-full overflow-hidden">
                    <Image
                      src={destination.cardImage.src}
                      alt={destination.cardImage.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 3}
                      className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                      style={destination.cardImage.objectPosition ? { objectPosition: destination.cardImage.objectPosition } : undefined}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="eyebrow text-sun/80">{destination.country}</p>
                    <h3 className="mt-1 font-serif text-xl text-surface sm:text-2xl">{destination.name}</h3>
                    <p className="mt-1.5 text-sm text-surface/70 leading-snug">{destination.descriptor}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}
