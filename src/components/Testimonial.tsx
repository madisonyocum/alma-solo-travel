import { cn } from "@/lib/utils";

/**
 * Illustrative statement block. Alma does not publish fabricated reviews, so
 * this is used for representative, clearly-unattributed sentiments (e.g. a
 * traveller mindset) rather than fake client testimonials. Pass a real,
 * attributed quote here only once you have genuine client permission.
 */
export function Testimonial({
  quote,
  attribution,
  className,
}: {
  quote: string;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col items-center gap-2 text-center", className)}>
      <span aria-hidden="true" className="font-serif text-6xl leading-none text-sun/70">&ldquo;</span>
      <blockquote className="-mt-3 mx-auto max-w-3xl text-balance font-serif text-2xl italic leading-[1.08] text-ink sm:text-3xl lg:text-[2.75rem]">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-6 font-sans text-xs uppercase tracking-[0.2em] text-muted-ink">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
