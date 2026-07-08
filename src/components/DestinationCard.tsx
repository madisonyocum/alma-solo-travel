import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/types";
import { cn } from "@/lib/utils";

export function DestinationCard({
  destination,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: {
  destination: Destination;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-ink",
        className,
      )}
    >
      <div className="relative aspect-3/4 w-full overflow-hidden">
        <Image
          src={destination.cardImage.src}
          alt={destination.cardImage.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="eyebrow text-sun/80">{destination.country}</p>
        <h3 className="mt-1 font-serif text-xl text-surface sm:text-2xl">
          {destination.name}
        </h3>
        <p className="mt-1.5 text-sm leading-snug text-surface/70">
          {destination.descriptor}
        </p>
      </div>
    </Link>
  );
}
