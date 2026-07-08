import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { JournalCard } from "@/components/JournalCard";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The Journal, Solo Travel Notes & Guides",
  description:
    "Destination guides, planning perspectives and quiet inspiration for women travelling independently, from the Alma journal.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <div className="bg-background pt-32 sm:pt-36">
        <Container>
          <span className="eyebrow mb-5 block">The journal</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-balance">Notes, guides and quiet inspiration.</h1>
          <p className="measure mt-5 text-lg text-muted-ink">
            Considered writing on travelling solo: where to stay, how to choose, and where your spending truly matters.
          </p>
        </Container>

        <Container className="pt-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Journal", path: "/journal" },
            ]}
          />
        </Container>

        <section className="section pt-14">
          <Container>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              {articles.map((article, i) => (
                <Reveal key={article.slug} delay={i * 0.07}>
                  <JournalCard article={article} priority={i === 0} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
