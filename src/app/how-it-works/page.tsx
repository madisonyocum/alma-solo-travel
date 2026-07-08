import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/data/services";
import { serviceFaqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { Check, FileText, Map, MessageCircle, Clock, Shield } from "lucide-react";
import { StepPanel } from "@/components/StepPanel";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "How It Works, The Alma Planning Process",
  description:
    "From enquiry to arrival, here's how Alma shapes your personalised solo journey in five considered steps.",
  path: "/how-it-works",
});

const deliverables = [
  {
    icon: FileText,
    title: "Your personalised guide",
    body: "A beautifully formatted digital document you can save, print or use offline. Everything in one place.",
  },
  {
    icon: Map,
    title: "A neighbourhood map",
    body: "Your hotels, restaurants and experiences pinned so you always know where you are and what's nearby.",
  },
  {
    icon: MessageCircle,
    title: "Practical travel notes",
    body: "How to get from the airport, transport tips, what to know before you arrive, the details that matter.",
  },
  {
    icon: Clock,
    title: "A day-by-day framework",
    body: "Suggested rhythms for each day. Structured enough to feel confident, loose enough to be yours.",
  },
  {
    icon: Shield,
    title: "Solo-specific guidance",
    body: "Neighbourhoods, hotels and evenings chosen with a solo woman in mind. No generic advice.",
  },
  {
    icon: Check,
    title: "Ongoing support",
    body: "Alma available by email if plans change, something comes up, or you just need a quick answer.",
  },
];


export default function HowItWorksPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[62vh] w-full items-end overflow-hidden bg-ink pt-24 sm:min-h-[68vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/4684101/4684101-hd_1920_1080_25fps.mp4"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/60 to-ink/40" />
        <div className="relative z-10 mx-auto w-full max-w-336 px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-sun">How it works</p>
            <h1 className="text-balance text-4xl text-surface sm:text-5xl lg:text-6xl">
              From an idea to a journey that feels entirely yours.
            </h1>
            <div className="mt-6 text-surface/90">
              <p className="measure text-lg">
                A five-step process, transparent, personal and shaped entirely around how you actually want to travel and feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-surface">
        <Container className="pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "How It Works", path: "/how-it-works" },
            ]}
          />
        </Container>

        <StepPanel steps={processSteps} sectionClassName="bg-surface pt-10!" />

        {/* Timeline */}
        <section className="section bg-background">
          <Container>
            <Reveal className="flex flex-col items-center gap-5 text-center mb-16">
              <span className="eyebrow">Timeline</span>
              <h2 className="text-4xl text-ink sm:text-5xl">
                Your plan is ready within a week.
              </h2>
              <p className="measure mx-auto text-muted-ink">
                Most plans are delivered within 7 days of receiving everything we need. Rush planning is available as a quoted extra when your dates are coming up fast.
              </p>
            </Reveal>

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-start">
              {/* Timeline track */}
              <div className="relative pl-14">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border-strong" aria-hidden="true" />
                <div className="flex flex-col">
                  {[
                    { label: "Day 1", note: "Form received", detail: "You fill in the short form and we confirm receipt. No phone call needed to get started." },
                    { label: "Days 2–5", note: "Research and planning", detail: "We research your destination, vet the stays, and build your personalised plan from scratch." },
                    { label: "Day 6", note: "Review and refine", detail: "We check every detail before it leaves us. Your plan is reviewed for accuracy, tone and completeness." },
                    { label: "Day 7", note: "Plan delivered", detail: "Your final guide lands in your inbox, formatted, mapped and ready to travel with." },
                  ].map((t, i) => (
                    <Reveal key={t.label} delay={i * 0.1} className="relative flex items-start gap-8 pb-12 last:pb-0">
                      <div className="absolute -left-14 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-olive bg-background z-10">
                        <div className="h-2.5 w-2.5 rounded-full bg-olive" />
                      </div>
                      <div className="flex flex-col gap-1.5 pt-1">
                        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-olive">{t.label}</p>
                        <p className="font-serif text-xl text-ink sm:text-2xl">{t.note}</p>
                        <p className="text-sm leading-relaxed text-muted-ink">{t.detail}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Fake plan document */}
              <Reveal delay={0.2} className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-2xl border border-border-strong bg-paper shadow-sm">
                  <div className="border-b border-border bg-surface px-6 py-4">
                    <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-olive">Alma Travel Plan</p>
                    <p className="mt-0.5 font-serif text-lg text-ink">Amalfi Coast, Italy</p>
                    <p className="font-sans text-xs text-muted-ink">7 nights · Solo · September 2025</p>
                  </div>
                  <div className="relative divide-y divide-border px-6">
                    {[
                      { day: "Day 1", title: "Arrive in Naples", place: "Hotel Piazza Bellini", tag: "Arrival", items: ["Airport transfer arranged", "Check in, settle in, rest"] },
                      { day: "Day 2–3", title: "Positano", place: "La Sirenuse", tag: "Coast", items: ["Cliffside walk to Fornillo Beach", "Dinner at La Tagliata"] },
                      { day: "Day 4–5", title: "Ravello & Amalfi", place: "Palazzo Avino", tag: "Culture", items: ["Villa Cimbrone gardens", "Duomo di Amalfi at dusk"] },
                      { day: "Day 6–7", title: "Capri day trip", place: "Return to Naples", tag: "Island", items: ["Blue Grotto boat tour", "Limoncello tasting"] },
                    ].map((entry) => (
                      <div key={entry.day} className="py-3.5">
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-muted-ink">{entry.day}</p>
                          <span className="rounded-full bg-olive/10 px-2 py-0.5 font-sans text-[0.6rem] font-semibold uppercase tracking-wider text-olive">{entry.tag}</span>
                        </div>
                        <p className="font-serif text-sm text-ink">{entry.title}</p>
                        <p className="font-sans text-xs text-muted-ink italic">{entry.place}</p>
                        <ul className="mt-1.5 flex flex-col gap-1">
                          {entry.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 font-sans text-xs text-muted-ink">
                              <span className="h-px w-3 shrink-0 bg-border-strong" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-paper to-transparent" aria-hidden="true" />
                  </div>
                  <div className="border-t border-border bg-surface px-6 py-3 flex items-center justify-between">
                    <p className="font-sans text-[0.6rem] uppercase tracking-widest text-muted-ink">Prepared by Alma</p>
                    <p className="font-sans text-[0.6rem] uppercase tracking-widest text-muted-ink">Confidential</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* What you receive */}
        <section className="section bg-surface">
          <Container>
            <Reveal className="mb-12 flex flex-col gap-3">
              <span className="eyebrow">What you receive</span>
              <h2 className="text-4xl sm:text-5xl">Everything in one place, ready to go.</h2>
              <p className="max-w-xl text-muted-ink">
                Your plan arrives as a complete, usable guide. Not a list of links to sort through. Not a spreadsheet. Something you can open on arrival and actually use.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07} className="h-full">
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-background p-6">
                    <item.icon className="h-5 w-5 text-terracotta" aria-hidden="true" />
                    <h3 className="font-sans text-base font-semibold text-ink">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-ink">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="section bg-background">
          <Container>
            <Reveal className="mb-12 flex flex-col gap-3">
              <span className="eyebrow">Common questions</span>
              <h2 className="text-4xl sm:text-5xl">Everything you might want to know.</h2>
            </Reveal>
            <FAQAccordion items={serviceFaqs} />
          </Container>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to start planning?"
          description="Fill in the short form and we'll take it from there. No phone call needed to get started."
          cta={<Button href="/enquire" size="lg" variant="light">Start Your Enquiry</Button>}
          imageSrc={images.howItWorksCta.src}
        />
      </div>
    </>
  );
}
