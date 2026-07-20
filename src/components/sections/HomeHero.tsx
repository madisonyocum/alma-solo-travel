import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { HeroSearch } from "./HeroSearch";

/**
 * Cinematic, viewport-height homepage hero. The heading mixes serif roman,
 * italic and uppercase to create editorial rhythm. The hero image is the one
 * priority asset preloaded on the page.
 */
export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-svh w-full items-center bg-ink">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/8045111/8045111-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/8045111/8045111-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div aria-hidden="true" className="absolute inset-0 z-3 bg-linear-to-t from-ink/70 via-ink/35 to-ink/15" />

      <div className="relative z-10 mx-auto w-full max-w-360 px-5 pt-16 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-sun">Bespoke trip planning for female solo travelers</p>

          <h1 className="mt-6 font-serif text-surface">
            <span className="block text-[3.5rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem]">
              The trip you keep
            </span>
            <span className="block text-[4rem] italic leading-[0.95] sm:text-[5.25rem] lg:text-[7rem]">
              meaning to take?
            </span>
            <span className="block text-[3.5rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem]">
              Let&apos;s plan it.
            </span>
          </h1>

          <p className="mt-8 w-full max-w-2xl text-lg text-surface/90">
            Alma builds personalised solo travel plans for women who are done waiting,
            <br className="hidden sm:block" />
            so you can stop researching and actually go.
          </p>

          <div className="mt-10 w-full max-w-4xl text-left">
            <HeroSearch />
            <p className="mt-4 text-center text-sm text-surface/80">
              Prefer to browse first?{" "}
              <Link
                href="/destinations"
                className="link-underline font-medium text-surface"
              >
                Explore Destinations
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <a
        href="#intro"
        aria-label="Scroll to content"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden w-fit flex-col items-center gap-2 text-surface/80 transition-colors hover:text-surface sm:flex"
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <ChevronDown
          className="h-5 w-5 motion-safe:animate-bounce"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
