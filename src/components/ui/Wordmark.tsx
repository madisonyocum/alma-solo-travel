import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const color = tone === "light" ? "text-surface" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="Alma Solo Travel, home"
      className={cn("group inline-flex flex-col leading-none", color, className)}
    >
      <span className="font-serif text-2xl tracking-[0.28em] sm:text-[1.7rem]">
        ALMA
      </span>
      <span
        className={cn(
          "mt-1 block text-center font-sans text-[0.55rem] font-medium tracking-[0.52em]",
          tone === "light" ? "text-surface/70" : "text-muted-ink",
        )}
      >
        SOLO TRAVEL
      </span>
    </Link>
  );
}
