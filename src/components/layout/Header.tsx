"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

/**
 * Global header.
 *, Transparent with light text over a page's hero, transitioning to a warm
 *   solid background once scrolled (or immediately on non-hero pages).
 *, Thin, elegant proportions; no pill-shaped nav container.
 */
// Routes that render as a solid header from the top (no dark photographic hero).
const SOLID_ROUTES = ["/enquire", "/privacy", "/terms", "/cookies", "/journal", "/about"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const overHero =
    !SOLID_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/")) &&
    !pathname.startsWith("/destinations/");

  useEffect(() => {
    if (!overHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero, pathname]);

  const solid = scrolled || !overHero;
  const tone = solid ? "dark" : "light";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid
            ? "bg-background/94 backdrop-blur-sm"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-10">
          <Wordmark tone={tone} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNav.map((link) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative font-sans text-sm tracking-wide transition-colors",
                        solid ? "text-ink" : "text-surface",
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-300",
                          active ? "w-full" : "w-0 group-hover:w-full",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/enquire"
              className={cn(
                "hidden h-10 items-center rounded-full px-5 font-sans text-sm tracking-wide transition-colors lg:inline-flex",
                solid
                  ? "bg-deep-olive text-surface hover:bg-ink"
                  : "border border-surface/70 text-surface hover:bg-surface hover:text-ink",
              )}
            >
              Plan Your Trip
            </Link>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={cn(
                "flex h-11 w-11 items-center justify-center lg:hidden",
                solid ? "text-ink" : "text-surface",
              )}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={triggerRef}
      />
    </>
  );
}
