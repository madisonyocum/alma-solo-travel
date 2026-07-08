"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { Wordmark } from "@/components/ui/Wordmark";

/**
 * Full-screen editorial mobile menu.
 *, Body scroll lock while open
 *, Escape closes
 *, Focus moves into the menu on open and returns to the trigger on close
 *, Simple focus trap within the panel
 */
export function MobileMenu({
  open,
  onClose,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Focus management + Escape + focus trap.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length, 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Return focus to the trigger on close.
  useEffect(() => {
    if (!open) triggerRef.current?.focus();
  }, [open, triggerRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-[100] flex flex-col bg-background lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <Wordmark tone="dark" />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center text-ink"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Main"
            className="flex flex-1 flex-col justify-center px-5 sm:px-8"
          >
            <ul className="flex flex-col gap-2">
              {primaryNav.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 font-serif text-4xl text-ink sm:text-5xl"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border px-5 py-6 sm:px-8">
            <Link
              href="/enquire"
              onClick={onClose}
              className="flex min-h-[52px] items-center justify-center rounded-full bg-deep-olive px-6 font-sans text-sm tracking-wide text-surface"
            >
              Plan Your Journey
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
