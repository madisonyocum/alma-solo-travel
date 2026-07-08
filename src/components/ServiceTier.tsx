import { Check } from "lucide-react";
import type { ServiceTierData } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

export function ServiceTier({
  tier,
  detailed = false,
}: {
  tier: ServiceTierData;
  detailed?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border border-border bg-surface p-8",
        tier.comingSoon && "opacity-60",
      )}
    >
      {/* Header */}
      <h3 className="font-serif text-3xl font-bold sm:text-[2rem]">{tier.name}</h3>
      {tier.badge ? (
        <span className="eyebrow mt-1 text-terracotta">{tier.badge}</span>
      ) : tier.comingSoon ? (
        <span className="eyebrow mt-1 text-muted-ink">Coming soon</span>
      ) : tier.featured ? (
        <span className="eyebrow mt-1 text-terracotta">Most chosen</span>
      ) : null}

      <p className="mt-3 line-clamp-2 text-muted-ink">{tier.tagline}</p>

      {detailed && (
        <p className="measure mt-4 text-sm text-muted-ink">
          <span className="font-medium text-ink">Who it&apos;s for. </span>
          {tier.forWho}
        </p>
      )}

      {/* Price */}
      <div className="mt-6 flex items-baseline gap-3">
        <p className="font-sans text-xl font-semibold text-olive">{tier.price}</p>
        {tier.callDuration && (
          <span className="text-sm text-muted-ink">Includes {tier.callDuration}</span>
        )}
      </div>

      {/* Features */}
      <ul className="mt-6 flex flex-col gap-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ink">
            <Check
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-olive"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {detailed && (
        <>
          {tier.notIncluded.length > 0 && (
            <div className="mt-6">
              <p className="eyebrow mb-3 text-muted-ink">Not included</p>
              <ul className="flex flex-col gap-2">
                {tier.notIncluded.map((f) => (
                  <li key={f} className="text-sm text-muted-ink">
                   , {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-6 text-sm text-muted-ink">
            <span className="font-medium text-ink">Indicative delivery. </span>
            {tier.timeline}
          </p>
        </>
      )}

      {/* CTA, always at the bottom */}
      <div className="mt-auto pt-8">
        {tier.comingSoon ? (
          <Button variant="secondary" className="w-full cursor-default opacity-50" disabled>
            Coming Soon
          </Button>
        ) : (
          <Button
            href={`/enquire?service=${tier.slug}`}
            variant="secondary"
            className="w-full"
          >
            {tier.featured ? "Plan Your Trip Now" : `Explore ${tier.name.replace("Alma ", "")}`}
          </Button>
        )}
      </div>
    </article>
  );
}
