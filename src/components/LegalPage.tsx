import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

/**
 * Shared layout for legal placeholder pages. Content here is clearly-labelled
 * placeholder text to be replaced with reviewed legal copy before launch.
 */
export function LegalPage({
  title,
  name,
  path,
  children,
}: {
  title: string;
  name: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background pt-24 sm:pt-28">
      <Container className="py-16" size="narrow">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name, path },
          ]}
        />
        <h1 className="mt-8 text-4xl sm:text-5xl">{title}</h1>
        <div className="mt-10 flex flex-col gap-5 text-muted-ink [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:text-ink">
          {children}
        </div>
      </Container>
    </div>
  );
}
