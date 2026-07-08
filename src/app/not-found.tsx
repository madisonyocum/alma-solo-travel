import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-background pt-24">
      <Container size="narrow">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="eyebrow">Lost your way?</p>
          <h1 className="text-balance text-4xl sm:text-5xl">
            This page has wandered off the map.
          </h1>
          <p className="measure text-muted-ink">
            The page you were looking for doesn&apos;t exist, or may have moved.
            Let&apos;s get you back on the road.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-5">
            <Button href="/">Return home</Button>
            <TextLink href="/destinations">Explore destinations</TextLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
