import Image from "next/image";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./ui/Reveal";

/**
 * Alternating image / text split. `reverse` flips the order on desktop while
 * keeping a sensible stacked order on mobile (image first).
 */
export function ImageTextSplit({
  image,
  reverse = false,
  eyebrow,
  title,
  children,
  aspect = "aspect-[4/5]",
  priority = false,
  imageClassName,
}: {
  image: ImageAsset;
  reverse?: boolean;
  eyebrow?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  aspect?: string;
  priority?: boolean;
  imageClassName?: string;
}) {
  return (
    <div className={cn("grid items-center gap-10 lg:gap-16", imageClassName ? "lg:grid-cols-[2fr_3fr]" : "lg:grid-cols-2")}>
      <Reveal
        className={cn(
          "relative w-full overflow-hidden rounded-3xl bg-sand/40",
          aspect,
          reverse ? "lg:order-2" : "lg:order-1",
          imageClassName,
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.2s] ease-out motion-safe:hover:scale-105"
        />
      </Reveal>

      <Reveal
        className={cn(
          "flex flex-col gap-5",
          reverse ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6",
        )}
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="text-balance text-4xl sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h2>
        <div className="measure flex flex-col gap-4 text-muted-ink">
          {children}
        </div>
      </Reveal>
    </div>
  );
}
