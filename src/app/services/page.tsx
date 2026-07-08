import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceTier } from "@/components/ServiceTier";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { serviceTiers, optionalExtras } from "@/data/services";
import { serviceFaqs } from "@/data/faqs";
import { images, pexels } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Services & Pricing",
  description:
    "Flexible solo-travel planning services for every budget, Alma Edit, Journey and Concierge. Thoughtful, personal and shaped entirely around you.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[62vh] w-full items-end overflow-hidden bg-ink pt-24 sm:min-h-[68vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/6180932/6180932-uhd_2560_1440_25fps.mp4"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/60 to-ink/40" />
        <div className="relative z-10 mx-auto w-full max-w-336 px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-sun">Services & pricing</p>
            <h1 className="text-balance text-4xl text-surface sm:text-5xl lg:text-6xl">
              A beautifully planned trip, shaped entirely around you.
            </h1>
            <div className="mt-6 text-surface/90">
              <p className="measure text-lg">
                Whether you need a confident starting point or support across every
                detail, Alma offers flexible planning services for different budgets,
                destinations and levels of involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background">
        <Container className="pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]}
          />
        </Container>

        {/* Detailed tiers */}
        <section className="section pt-10!">
          <Container>
            <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-6">
              {serviceTiers.map((tier, i) => (
                <Reveal key={tier.slug} delay={i * 0.08} className="flex h-full flex-col">
                  <ServiceTier tier={tier} detailed />
                </Reveal>
              ))}
            </div>
            <p className="mt-12 text-sm italic text-muted-ink">
              Exact pricing depends on trip length, complexity and destination.
            </p>
          </Container>
        </section>

        {/* Comparison */}
        <section className="section bg-surface">
          <Container>
            <SectionHeading
              eyebrow="At a glance"
              title="Compare the services."
              className="mb-12 max-w-xl"
            />
            <ComparisonTable />
          </Container>
        </section>

        {/* Budget section */}
        <section className="section bg-background">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className="flex flex-col gap-6">
                <span className="eyebrow">Value, considered</span>
                <h2 className="text-balance text-4xl leading-[1.05] sm:text-5xl">
                  Budget-conscious does not mean generic.
                </h2>
                <p className="text-lg leading-relaxed text-muted-ink">
                  We believe good travel is about spending thoughtfully. Alma can help
                  you balance simple, characterful accommodation with the experiences
                  that matter most to you — or create a fully indulgent journey when
                  luxury is the priority.
                </p>
                <div>
                  <Button href="/enquire" variant="primary">Plan My Trip</Button>
                </div>
              </Reveal>
              <Reveal className="relative aspect-3/2 overflow-hidden rounded-3xl bg-sand/40">
                <Image
                  src={pexels(27879553)}
                  alt="A view of Edinburgh with the castle in the background"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Optional extras */}
        <section className="section bg-surface">
          <Container>
            <SectionHeading
              eyebrow="Optional extras"
              title="Add what you need."
              intro="Tailor any service with optional extras. To keep pricing honest, extras are quoted individually based on your trip."
              className="mb-12 max-w-xl"
            />
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {optionalExtras.map((extra) => (
                <li
                  key={extra}
                  className="flex items-center justify-between gap-4 border-b border-border pb-4 text-ink"
                >
                  <span>{extra}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="section bg-background scroll-mt-24">
          <Container>
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked."
              className="mb-10"
            />
            <FAQAccordion items={serviceFaqs} />
          </Container>
        </section>

        {/* CTA */}
        <CTABanner
          title="Not sure which service is right for you?"
          description="Tell us about your trip and we'll recommend the best fit for your destination, budget and how involved you'd like us to be."
          cta={<Button href="/enquire" size="lg" variant="light">Plan Your Trip Now</Button>}
          imageSrc={images.groupJourneys.src}
        />
      </div>
    </>
  );
}
