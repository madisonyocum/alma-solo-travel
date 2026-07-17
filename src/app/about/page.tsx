import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { ImageTextSplit } from "@/components/ImageTextSplit";
import { CTABanner } from "@/components/CTABanner";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Alma - Our Story",
  description:
    "Alma Solo Travel is a boutique planning studio helping women travel independently and feel deeply connected. Meet the founder and read our philosophy.",
  path: "/about",
});

const values = [
  "Independent, never unsupported",
  "Thoughtful over excessive",
  "Local character over generic luxury",
  "Quality at every budget",
  "Slower, more meaningful travel",
  "Honest recommendations",
];

const approach = [
  {
    eyebrow: "Philosophy",
    title: "Character over sameness",
    body: "A trip planned around who you are will always feel better than one planned around a checklist. We favour thoughtfulness over excess, at every budget.",
  },
  {
    eyebrow: "Women-focused",
    title: "Planned with you in mind",
    body: "We build careful thinking about neighbourhoods, timing and comfort into every plan, so you can travel with more confidence and less worry.",
  },
  {
    eyebrow: "Spending",
    title: "Thoughtfully, not more",
    body: "Whether a considered budget trip or a fully indulgent journey, our approach is the same: understand what matters most, then shape the trip around it.",
  },
  {
    eyebrow: "Responsibility",
    title: "Travelling with care",
    body: "We lean towards locally owned stays, independent restaurants and slower itineraries with fewer, longer stops. Better for you and gentler on the places you visit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-background pt-32 sm:pt-36">

        {/* Editorial header */}
        <Container>
          <div className="grid gap-10 border-b border-border pb-12 sm:pb-16 lg:grid-cols-2 lg:items-end lg:gap-20">
            <div>
              <span className="eyebrow mb-5 block">About Alma</span>
              <h1 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Travel independently.<br className="hidden sm:block" /> Feel deeply connected.
              </h1>
            </div>
            <div className="flex flex-col gap-6 lg:pb-1">
              <p className="text-lg leading-relaxed text-muted-ink">
                Alma is a boutique planning studio for women who want to travel solo, confidently and on their own terms. We handle the research, the logistics and the hard questions so you can focus on the journey.
              </p>
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                ]}
              />
            </div>
          </div>
        </Container>

        {/* Founder story */}
        <section className="section pb-9 bg-background">
          <Container>
            <ImageTextSplit
              image={images.founder}
              eyebrow="Meet the founder"
              title="Hello, I'm Maddie."
              aspect="aspect-[4/5]"
              imageClassName="shrink"
            >
              <p>
                I grew up in small-town Pennsylvania, dreaming of everywhere else.
                These days I&apos;m a product designer living in Edinburgh, Scotland,
                with 30+ countries stamped in my passport from travelling solo
                along the way.
                I know how freeing solo travel can feel, and how quickly the planning
                can become overwhelming. The endless tabs, the second-guessing, the
                question of whether a place will feel right when you arrive.
              </p>
              <p>
                Alma combines my love of travel, design and discovering the places
                that make a destination memorable: the right neighbourhood, the
                quietly brilliant hotel, the café you return to twice and the
                experiences that help you feel connected rather than simply
                entertained.
              </p>
              <p>
                I created Alma to help more women travel independently, beautifully
                and on their own terms. It began with friends asking me to plan
                their trips, and grew from there.
              </p>
            </ImageTextSplit>
          </Container>
        </section>

        {/* Meaning of Alma */}
        <section className="bg-background px-4 sm:px-6">
          <div className="overflow-hidden rounded-4xl bg-deep-olive py-12 sm:rounded-[2.5rem] sm:py-16">
            <Container size="narrow">
              <Reveal className="flex flex-col items-center gap-8 text-center">
                <span className="eyebrow text-[#1E3640]">The meaning of Alma</span>
                <p className="font-serif text-4xl italic text-surface sm:text-5xl">
                  A name that carries meaning<br />in every language it touches.
                </p>
                <div className="grid w-full max-w-2xl gap-4 text-left grid-cols-2">
                  {[
                    { lang: "Spanish & Portuguese", meaning: "Soul or spirit" },
                    { lang: "Latin (almus)", meaning: "Nourishing, kind, bountiful" },
                    { lang: "Arabic (ʿilm)", meaning: "Knowledge, wisdom" },
                    { lang: "Hebrew (עַלְמָה)", meaning: "Young woman, female" },
                  ].map((def) => (
                    <div key={def.lang} className="rounded-2xl bg-white/10 px-5 py-5">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#1E3640]">{def.lang}</p>
                      <p className="mt-2 font-serif text-xl italic text-surface/90">{def.meaning}</p>
                    </div>
                  ))}
                </div>
                <p className="measure text-base text-surface/75">
                  For us, it reflects the belief that the best journeys are not
                  defined by how many places you see, but by how deeply a place
                  stays with you.
                </p>
              </Reveal>
            </Container>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-background">
          <Container>
            <Reveal className="mb-12 flex flex-col gap-3">
              <span className="eyebrow">What we value</span>
              <h2 className="text-4xl sm:text-5xl">Our principles.</h2>
            </Reveal>
            <ul className="flex flex-col">
              {values.map((value, i) => (
                <Reveal
                  as="li"
                  key={value}
                  delay={i * 0.05}
                  className="flex items-baseline gap-6 border-t border-border py-6 last:border-b"
                >
                  <span className="w-7 shrink-0 font-sans text-xs font-semibold text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-ink sm:text-3xl">{value}</span>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>

        {/* Approach */}
        <section className="section bg-surface">
          <Container>
            <Reveal className="mb-12 flex flex-col gap-3">
              <span className="eyebrow">How we work</span>
              <h2 className="max-w-xl text-4xl sm:text-5xl">The thinking behind every plan.</h2>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2">
              {approach.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div className="flex flex-col gap-3 border-t border-border pt-6">
                    <span className="eyebrow">{item.eyebrow}</span>
                    <h3 className="font-serif text-xl text-ink sm:text-2xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-ink">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTABanner
          title="Let's plan something that feels like you."
          cta={
            <a href="/enquire" className="inline-flex items-center gap-2 rounded-full bg-paper/95 px-7 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-paper">
              Plan Your Trip Now
            </a>
          }
          imageSrc={images.aboutCta.src}
        />

      </div>
    </>
  );
}
