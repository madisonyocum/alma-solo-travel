import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

interface CTABannerProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  cta: React.ReactNode;
  imageSrc?: string;
}

export function CTABanner({ title, description, cta, imageSrc }: CTABannerProps) {
  return (
    <section className="bg-background px-4 pb-6 sm:px-6">
      <div className="relative isolate flex min-h-112 items-center overflow-hidden rounded-4xl bg-ink text-surface sm:min-h-136 sm:rounded-[2.5rem]">
        <Image
          src={imageSrc ?? images.enquiryCta.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/60" />
        <Container className="relative py-16 sm:py-20" size="narrow">
          <Reveal className="flex flex-col items-center gap-7 text-center">
            <h2 className="text-balance text-4xl leading-tight text-surface sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            {description && (
              <p className="measure text-surface/90">{description}</p>
            )}
            {cta}
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
