import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Editorial section heading: optional uppercase eyebrow, large serif title
 * and optional supporting intro. Renders semantic <h2> by default.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className,
  headingClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  headingClassName?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag
        className={cn(
          "text-balance text-4xl sm:text-5xl lg:text-6xl",
          headingClassName,
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "measure text-base leading-relaxed text-muted-ink sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
