"use client";

import { useState } from "react";
import { Check, ClipboardList, PhoneCall, Search, SlidersHorizontal, Send, ArrowRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

const stepIcons = [ClipboardList, PhoneCall, Search, SlidersHorizontal, Send];

export function StepPanel({ steps, sectionClassName }: { steps: ProcessStep[]; sectionClassName?: string }) {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = stepIcons[active];

  return (
    <section className={cn("py-12 sm:py-16", sectionClassName ?? "bg-background")}>
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border-strong bg-paper">
          <div className="flex flex-col sm:flex-row sm:h-145">
            {/* Left: step list */}
            <nav
              aria-label="Steps"
              className="flex flex-row overflow-x-auto border-b border-border-strong sm:flex-col sm:overflow-y-auto sm:overflow-x-visible sm:border-b-0 sm:border-r sm:w-96 sm:shrink-0 no-scrollbar bg-paper"
            >
              {steps.map((s, i) => {
                const StepIcon = stepIcons[i];
                return (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex shrink-0 items-end gap-4 pl-9 pr-8 py-7 text-left transition-colors border-r border-border sm:border-r-0 sm:border-b",
                      active === i ? "bg-white" : "hover:bg-white/70",
                    )}
                  >
                    <span className={cn(
                      "font-serif text-3xl leading-none tabular-nums transition-colors shrink-0 self-center translate-y-px",
                      active === i ? "text-olive" : "text-muted-ink/30 group-hover:text-olive/50",
                    )}>
                      {s.number}
                    </span>
                    <div className="flex items-center gap-2 translate-y-[1.5px]">
                      <StepIcon className={cn(
                        "h-4 w-4 shrink-0 translate-y-[0.5px] transition-colors",
                        active === i ? "text-olive" : "text-muted-ink/40 group-hover:text-olive/60",
                      )} aria-hidden="true" />
                      <span className={cn(
                        "font-sans text-base leading-snug transition-colors",
                        active === i ? "font-medium text-ink" : "text-muted-ink group-hover:text-ink",
                      )}>
                        {s.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Right: content */}
            <div className="flex flex-col flex-1 bg-white overflow-hidden">
              {/* Fixed top bar: icon + arrows — never moves */}
              <div className="flex items-center justify-between shrink-0 px-10 sm:px-14 lg:px-16 pt-10 sm:pt-14 lg:pt-16">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10">
                  <Icon className="h-5 w-5 text-olive" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActive((a) => Math.max(a - 1, 0))}
                    disabled={active === 0}
                    aria-label="Previous step"
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors",
                      active === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-olive hover:text-olive",
                    )}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((a) => Math.min(a + 1, steps.length - 1))}
                    disabled={active === steps.length - 1}
                    aria-label="Next step"
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors",
                      active === steps.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:border-olive hover:text-olive",
                    )}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable text content */}
              <div className="flex-1 overflow-y-auto px-10 sm:px-14 lg:px-16 pt-6 pb-10 sm:pb-14 lg:pb-16">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl sm:text-3xl">{step.title}</h2>
                    <p className="max-w-xl text-base leading-relaxed text-muted-ink">
                      {step.description}
                    </p>
                  </div>
                  {step.details && (
                    <ul className="flex flex-col gap-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-olive" aria-hidden="true" />
                          <span className="text-sm text-muted-ink">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 pt-6 border-t border-border">
                    <a
                      href="/enquire"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-sm font-medium tracking-wide text-surface transition-colors hover:bg-deep-olive"
                    >
                      Start your enquiry
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
