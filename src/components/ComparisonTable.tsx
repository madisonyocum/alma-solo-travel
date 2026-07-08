import { Check, Minus } from "lucide-react";
import { comparisonRows } from "@/data/services";

/**
 * Feature comparison. Renders as a table on desktop and as stacked per-tier
 * cards on mobile (the table is hidden and the cards shown, and vice versa).
 */
export function ComparisonTable() {
  const tiers = ["Edit", "Journey", "Concierge"] as const;

  return (
    <div>
      {/* Desktop table */}
      <table className="hidden w-full border-collapse text-left md:table">
        <caption className="sr-only">
          Comparison of Alma Edit, Journey and Concierge services
        </caption>
        <thead>
          <tr className="border-b border-border-strong">
            <th scope="col" className="py-5 pr-4 font-sans text-sm font-semibold text-ink">
              What&apos;s included
            </th>
            {tiers.map((t) => (
              <th
                key={t}
                scope="col"
                className="py-5 px-4 text-center font-serif text-2xl text-ink"
              >
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.feature} className="border-b border-border">
              <th scope="row" className="py-4 pr-4 text-sm font-normal text-muted-ink">
                {row.feature}
              </th>
              <Cell on={row.edit} />
              <Cell on={row.journey} />
              <Cell on={row.concierge} />
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-8 md:hidden">
        {tiers.map((tier) => {
          const key = tier.toLowerCase() as "edit" | "journey" | "concierge";
          return (
            <div key={tier} className="border-t border-border-strong pt-5">
              <h3 className="mb-4 font-serif text-2xl">{tier}</h3>
              <ul className="flex flex-col gap-3">
                {comparisonRows.map((row) => (
                  <li
                    key={row.feature}
                    className="flex items-start gap-3 text-sm text-ink"
                  >
                    {row[key] ? (
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    ) : (
                      <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-muted-ink/50" />
                    )}
                    <span className={row[key] ? "text-ink" : "text-muted-ink/70"}>
                      {row.feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Cell({ on }: { on: boolean }) {
  return (
    <td className="px-4 py-4 text-center">
      {on ? (
        <>
          <Check aria-hidden="true" className="mx-auto h-4 w-4 text-olive" />
          <span className="sr-only">Included</span>
        </>
      ) : (
        <>
          <Minus aria-hidden="true" className="mx-auto h-4 w-4 text-muted-ink/50" />
          <span className="sr-only">Not included</span>
        </>
      )}
    </td>
  );
}
