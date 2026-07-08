import Image from "next/image";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

/** Responsive figure with optional caption/credit. */
export function ImageWithCaption({
  image,
  caption,
  priority = false,
  sizes = "100vw",
  aspect = "aspect-[4/5]",
  className,
  rounded = true,
}: {
  image: ImageAsset;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className={cn(
          "relative w-full overflow-hidden bg-sand/40",
          aspect,
          rounded && "rounded-2xl",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      {(caption || image.credit) && (
        <figcaption className="mt-3 font-sans text-xs text-muted-ink">
          {caption}
          {image.credit && (
            <span className="italic"> Photo: {image.credit}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
