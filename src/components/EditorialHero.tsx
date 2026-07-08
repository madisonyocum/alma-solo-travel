import Image from "next/image";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Reusable full-bleed editorial hero with a dark gradient scrim for legible
 * light text over photography. Used by the homepage and every top-level page.
 * `size="full"` is the cinematic homepage variant; `size="page"` is shorter.
 */
export function EditorialHero({
  image,
  eyebrow,
  title,
  children,
  size = "page",
  priority = true,
  align = "left",
  imageClassName,
  imagePosition = "object-center",
  zoom = true,
}: {
  image: ImageAsset;
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  size?: "full" | "page";
  priority?: boolean;
  align?: "left" | "center";
  imageClassName?: string;
  imagePosition?: string;
  zoom?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate flex w-full items-end overflow-hidden bg-ink",
        size === "full"
          ? "min-h-[100svh]"
          : "min-h-[62vh] pt-24 sm:min-h-[68vh]",
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className={cn(
          "object-cover",
          zoom ? "scale-105 motion-safe:animate-[heroZoom_18s_ease-out_forwards]" : (imageClassName ?? "scale-100"),
          imagePosition,
          zoom && imageClassName,
        )}
      />
      {/* Legibility scrims */}
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/60 to-ink/40" />

      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-336 px-5 pb-16 sm:px-8 lg:px-10",
          size === "full" ? "pb-24 sm:pb-28" : "pb-14 sm:pb-16",
          align === "center" && "text-center",
        )}
      >
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto",
          )}
        >
          {eyebrow && (
            <p className="eyebrow mb-5 text-sun">{eyebrow}</p>
          )}
          <h1
            className={cn(
              "text-balance text-surface",
              size === "full"
                ? "text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl"
                : "text-4xl sm:text-5xl lg:text-6xl",
            )}
          >
            {title}
          </h1>
          {children && (
            <div className="mt-6 text-surface/90">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
