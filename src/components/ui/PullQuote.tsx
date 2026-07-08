import { cn } from "@/lib/utils";

/** Large italic serif pull quote for editorial emphasis. */
export function PullQuote({
  children,
  cite,
  className,
}: {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}) {
  return (
    <figure className={cn("border-l-2 border-terracotta pl-6", className)}>
      <blockquote className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-3 font-sans text-xs uppercase tracking-[0.18em] text-muted-ink">
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
