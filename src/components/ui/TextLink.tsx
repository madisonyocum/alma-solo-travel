import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Understated editorial text link with an animated underline and a small
 * arrow that nudges on hover. Motion is CSS-only and respects reduced-motion.
 */
export function TextLink({
  href,
  children,
  className,
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-ink",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
