import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { JournalCard } from "@/components/JournalCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { articles, getArticle } from "@/data/articles";
import { buildMetadata, articleSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/journal/${article.slug}`,
    image: article.image.src,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const formattedDate = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-background pt-24 sm:pt-28">
      {/* Header */}
      <Container className="pt-8" size="narrow">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: article.title, path: `/journal/${article.slug}` },
          ]}
        />
        <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-ink">
          <span className="text-terracotta">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </div>
        <h1 className="mt-5 text-balance text-4xl leading-none sm:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 text-sm text-muted-ink">
          By {article.author} ·{" "}
          <time dateTime={article.date}>{formattedDate}</time>
        </p>
      </Container>

      {/* Lead image */}
      <Container className="mt-12" size="default">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-sand/40">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 72rem"
            className="object-cover"
          />
        </div>
      </Container>

      {/* Body */}
      <Container className="py-16" size="narrow">
        <div className="flex flex-col gap-3">
          {article.body.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="mt-6 text-2xl sm:text-3xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-terracotta pl-6 font-serif text-2xl italic leading-snug text-ink sm:text-3xl"
                >
                  {block.text}
                </blockquote>
              );
            }
            return (
              <p key={i} className="text-base leading-relaxed text-muted-ink">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <TextLink href="/journal">Back To The Journal</TextLink>
        </div>
      </Container>

      {/* More articles */}
      {more.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <h2 className="mb-12 text-4xl sm:text-5xl">Keep reading.</h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-10">
              {more.map((a) => (
                <Reveal key={a.slug}>
                  <JournalCard article={a} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          path: `/journal/${article.slug}`,
          image: article.image.src.startsWith("http")
            ? article.image.src
            : `${SITE_URL}${article.image.src}`,
          date: article.date,
          author: article.author,
        })}
      />
    </article>
  );
}
