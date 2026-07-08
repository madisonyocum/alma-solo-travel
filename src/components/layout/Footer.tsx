import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface">
      {/* Newsletter */}
      <Container className="border-b border-border py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2 className="text-4xl sm:text-5xl">Notes from somewhere beautiful.</h2>
            <p className="measure mt-4 text-muted-ink">
              Destination ideas, carefully chosen stays and practical inspiration
              for travelling independently.
            </p>
          </div>
          <NewsletterForm buttonLabel="Join The Journal" />
        </div>
      </Container>

      {/* Link columns */}
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)] md:gap-8">
          <div className="max-w-xs">
            <Wordmark tone="dark" />
            <p className="mt-5 text-sm text-muted-ink">
              Bespoke trip planning for female solo travelers.
            </p>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="link-underline text-sm text-muted-ink hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-ink sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Alma Solo Travel. All rights reserved.</p>
          <p className="italic">
            Placeholder brand, imagery, contact details and legal pages to be
            finalised before launch.
          </p>
        </div>
      </Container>
    </footer>
  );
}
