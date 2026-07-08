import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/types";
import { cn } from "@/lib/utils";

export function JournalCard({
  article,
  className,
  priority = false,
}: {
  article: Article;
  className?: string;
  priority?: boolean;
}) {
  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={`/journal/${article.slug}`}
        className="relative mb-5 block aspect-[3/2] w-full overflow-hidden rounded-2xl bg-sand/40"
      >
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-[1.2s] ease-out motion-safe:group-hover:scale-105"
        />
      </Link>

      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-ink">
        <span className="text-terracotta">{article.category}</span>
        <span aria-hidden="true">·</span>
        <span>{article.readingTime}</span>
      </div>

      <h3 className="mt-3 w-3/4 font-serif text-2xl leading-snug sm:text-3xl">
        <Link
          href={`/journal/${article.slug}`}
          className="transition-colors hover:text-terracotta"
        >
          {article.title}
        </Link>
      </h3>

      <p className="mt-3 text-xs text-muted-ink">{article.excerpt}</p>

      <Link
        href={`/journal/${article.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
        aria-label={`Read article: ${article.title}`}
      >
        <span className="link-underline">Read article</span>
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
