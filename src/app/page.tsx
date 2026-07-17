import { HomeHero } from "@/components/sections/HomeHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { Button } from "@/components/ui/Button";
import { DestinationSlider } from "@/components/DestinationSlider";
import { ServiceTier } from "@/components/ServiceTier";
import { JournalCard } from "@/components/JournalCard";
import { Testimonial } from "@/components/Testimonial";
import { destinations } from "@/data/destinations";
import { articles } from "@/data/articles";
import { serviceTiers } from "@/data/services";
import { images } from "@/data/images";
import Image from "next/image";
import { ArrowRight, ClipboardList, Map, Plane } from "lucide-react";
import { CyclingVideoHero } from "@/components/CyclingVideoHero";

const howItWorks = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell us about your dream trip",
    body: "Fill in a short form. Tell us where you want to go, how you like to travel and what matters most. No phone call, no commitment.",
  },
  {
    icon: Map,
    step: "02",
    title: "We'll handle the planning and logistics",
    body: "We find the right neighbourhoods, stays where solo women feel genuinely welcome and experiences worth your time. A plan built around you, not a template.",
  },
  {
    icon: Plane,
    step: "03",
    title: "An easy to follow itinerary for when you land",
    body: "Your personalised guide lands in your inbox with everything you need. Step off the plane knowing exactly where you're going and why.",
  },
];

const soloPoints = [
  "Neighbourhoods chosen for how you actually travel",
  "Hotels where solo women feel welcome",
  "A real budget breakdown, no surprises",
  "Someone in your corner if plans change",
];

export default function HomePage() {
  return (
    <>
      {/* 1, Hero */}
      <HomeHero />


      {/* 3, How it works */}
      <section className="py-20 sm:py-28 bg-surface">
        <Container>
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="eyebrow">Simple from the start</span>
                <h2 className="font-serif text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
                  From &ldquo;I want to go&rdquo; to a plan you&apos;ll love, in a week.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {howItWorks.map((item, i) => (
                  <Reveal key={item.step} delay={i * 0.1}>
                    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6">
                      <div className="flex items-center justify-between">
                        <item.icon className="h-5 w-5 text-terracotta" aria-hidden="true" />
                        <span className="font-serif text-4xl leading-none text-terracotta">{item.step}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-sans text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-ink">{item.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div>
                <Button href="/enquire" variant="primary">
                  Start Planning My Trip
                </Button>
              </div>
            </div>

            {/* Right: cycling video — hidden on mobile */}
            <div className="hidden sm:flex sm:flex-col">
              <Reveal className="relative min-h-96 flex-1 overflow-hidden rounded-3xl bg-sand/40">
                <CyclingVideoHero />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3, Destinations */}
      <section className="bg-surface pt-14 pb-[clamp(4rem,7.5vw,7.5rem)]">
        <Container>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Where she went"
              title={<>Places made for the woman who travels <em className="italic">solo.</em></>}
              className="max-w-2xl"
            />
            <div className="shrink-0">
              <TextLink href="/destinations">View All Destinations</TextLink>
            </div>
          </div>
          <DestinationSlider destinations={destinations} />
        </Container>
      </section>

      {/* 4, Services */}
      <section className="section bg-background">
        <Container>
          <Reveal className="mb-14 flex flex-col gap-4">
            <span className="eyebrow">Planning services</span>
            <h2 className="whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl">
              As involved as you&apos;d like us to be.
            </h2>
            <p className="measure text-base leading-relaxed text-muted-ink sm:text-lg">
              Some women want a confident starting point and to take it from there. Others want every detail handled. Alma works both ways, and every way in between.
            </p>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {serviceTiers.map((tier, i) => (
              <Reveal key={tier.slug} delay={i * 0.08}>
                <ServiceTier tier={tier} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-muted-ink">
            Exact pricing depends on trip length, complexity and destination.
          </p>
        </Container>
      </section>

      {/* 5, Solo, not unsupported */}
      <section className="bg-background px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-4xl bg-[#3D6473] text-surface sm:rounded-[2.5rem]">
          <Image
            src={images.howItWorksHero.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <Container className="relative section">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className="flex flex-col gap-6">
                <span className="eyebrow text-sun">Solo, not alone</span>
                <h2 className="text-balance text-4xl leading-tight text-surface sm:text-5xl lg:text-[3.25rem]">
                  Going alone doesn&apos;t mean figuring it all out alone.
                </h2>
                <p className="measure text-surface/85">
                  Alma is for the woman who wants independence, not uncertainty. We handle the research, the logistics, the &ldquo;is this hotel actually good for a solo woman?&rdquo; questions, so you arrive confident, not exhausted from planning.
                </p>
                <div>
                  <Button href="/enquire" variant="light">
                    Plan Your Trip
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </Reveal>
              <Reveal className="flex flex-col justify-center">
                <ul className="divide-y divide-surface/20 border-y border-surface/20">
                  {soloPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-4 py-5 font-serif text-xl text-surface sm:text-2xl"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-surface" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* 6, Pull quote */}
      <section className="section bg-background">
        <Container>
          <Testimonial
            quote="I wanted to go. I just didn't want the planning to get in the way."
            attribution="The female solo traveler who books with Alma"
          />
        </Container>
      </section>

      {/* 7, Journal */}
      <section className="section bg-surface">
        <Container>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The journal"
              title="Ideas for where to go, and how to travel well."
              className="max-w-xl"
            />
            <TextLink href="/journal">Read The Journal</TextLink>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <JournalCard article={article} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8, Final CTA */}
      <section className="bg-surface px-4 pb-6 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-4xl bg-ink text-surface sm:rounded-[2.5rem]">
          <Image
            src={images.enquiryCta.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/60" />
          <Container className="relative section" size="narrow">
            <Reveal className="flex flex-col items-center gap-7 text-center">
              <h2 className="text-balance text-4xl leading-tight text-surface sm:text-5xl lg:text-6xl">
                What would you do with a trip that was already planned?
              </h2>
              <p className="measure text-surface/90">
                Tell Alma where you want to go and how you want to feel when you get there. We&apos;ll handle the rest, and have your itinerary ready within a week.
              </p>
              <Button href="/enquire" size="lg" variant="light">
                Start Planning My Trip
              </Button>
            </Reveal>
          </Container>
        </div>
      </section>
    </>
  );
}
