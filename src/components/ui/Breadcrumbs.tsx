import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { name: string; path: string }[];
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-surface/85" : "text-muted-ink";
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 font-sans text-xs tracking-wide">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={color}>
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className={`${color} link-underline hover:opacity-100`}
                  >
                    {item.name}
                  </Link>
                )}
                {!last && (
                  <ChevronRight
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 ${color} opacity-60`}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
