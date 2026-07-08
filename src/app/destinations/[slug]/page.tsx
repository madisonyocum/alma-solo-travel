import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABanner } from "@/components/CTABanner";
import { destinations, getDestination } from "@/data/destinations";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return buildMetadata({
    title: `${destination.name}, Solo Travel Guide`,
    description: destination.summary,
    path: `/destinations/${destination.slug}`,
    image: destination.hero.src,
  });
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: destination.name, path: `/destinations/${destination.slug}` },
  ];

  return (
    <>
      <div className="bg-background pt-32 sm:pt-36">

        {/* Header */}
        <Container>
          <Reveal className="flex flex-col items-center gap-5 text-center">
            <span className="eyebrow">{destination.country}</span>
            <h1 className="text-5xl leading-none sm:text-6xl lg:text-7xl">
              {destination.name}
            </h1>
            <p className="text-base leading-relaxed text-muted-ink sm:text-lg">
              {destination.descriptor}
            </p>
          </Reveal>
        </Container>

        <Container className="pt-8">
          <Breadcrumbs items={crumbs} />
        </Container>

        {/* Cinematic editorial gallery */}
        <Container className="pt-10 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1.9fr_1fr]">
            <div className="relative aspect-3/2 overflow-hidden rounded-2xl bg-sand/40">
              <Image
                src={destination.cardImage.src}
                alt={destination.cardImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, 65vw"
                className="object-cover"
                style={destination.cardImage.objectPosition ? { objectPosition: destination.cardImage.objectPosition } : undefined}
                priority
              />
            </div>
            <div className="relative aspect-3/2 overflow-hidden rounded-2xl bg-sand/40 sm:aspect-auto">
              <Image
                src={destination.gallery[0].src}
                alt={destination.gallery[0].alt}
                fill
                sizes="(max-width: 640px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>

        {/* Intro */}
        <section className="bg-background pb-16 sm:pb-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
              <Reveal className="flex flex-col gap-3">
                <span className="eyebrow">About</span>
                <h2 className="text-3xl sm:text-4xl">Why {destination.name}?</h2>
              </Reveal>
              <Reveal className="flex flex-col gap-5">
                {destination.intro.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed text-muted-ink">
                    {para}
                  </p>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Why it works for solo travel */}
        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
              <Reveal className="flex flex-col gap-3">
                <span className="eyebrow">Solo travel</span>
                <h2 className="text-3xl sm:text-4xl">Why it works.</h2>
              </Reveal>
              <Reveal>
                <p className="text-lg leading-relaxed text-muted-ink">
                  {destination.soloFit}
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Best areas — simple list */}
        <section className="bg-background py-16 sm:py-20">
          <Container>
            <Reveal className="mb-10 flex flex-col gap-2">
              <span className="eyebrow">Where to base yourself</span>
              <h2 className="text-3xl sm:text-4xl">Best areas.</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destination.bestAreas.map((area, i) => (
                <Reveal key={area.name} delay={i * 0.06}>
                  <div className="flex flex-col gap-2 border-t border-border pt-5">
                    <h3 className="font-serif text-xl text-ink">{area.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-ink">
                      {area.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Best time + getting around */}
        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 sm:grid-cols-2 lg:gap-16">
              <Reveal className="flex flex-col gap-3 border-t border-border pt-6">
                <span className="eyebrow">When to go</span>
                <p className="text-base leading-relaxed text-muted-ink">{destination.bestTime}</p>
              </Reveal>
              <Reveal className="flex flex-col gap-3 border-t border-border pt-6">
                <span className="eyebrow">Getting around</span>
                <p className="text-base leading-relaxed text-muted-ink">{destination.gettingAround}</p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTABanner
          title={<>Ready to make {destination.name} your own?</>}
          description={`Tell us how you like to travel and we'll build a personalised plan for ${destination.name} — the right neighbourhoods, stays and experiences for you.`}
          cta={
            <Button
              href={`/enquire?destination=${destination.slug}`}
              size="lg"
              variant="light"
            >
              Plan My {destination.name} Trip
            </Button>
          }
          imageSrc={destination.hero?.src}
        />
      </div>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
