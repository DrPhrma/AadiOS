import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeLine } from "@/components/hero/type-line";
import { site } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-dvh flex-col px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-24 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-center py-6">
          <p className="boot-1 kicker">sys / home / aadi</p>
          <h1 className="boot-2 mt-3 max-w-full font-display text-display text-fg">
            {site.name.toUpperCase()}
          </h1>
          <div className="boot-3 mt-4 max-w-xl">
            {reduced ? (
              <p className="text-base text-fg sm:text-lg">{site.tagline}</p>
            ) : (
              <TypeLine text={site.tagline} className="text-base text-fg sm:text-lg" />
            )}
            <p className="mt-3 text-sm text-muted sm:text-base">{site.support}</p>
          </div>
          <div className="boot-4 mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#work">
                Explore Work
                <ArrowRight className="size-4" />
              </a>
            </Button>
            {site.githubUrl ? (
              <Button asChild variant="ghost">
                <a href={site.githubUrl} target="_blank" rel="noreferrer noopener">
                  GitHub
                </a>
              </Button>
            ) : (
              <Button asChild variant="ghost">
                <a href="/#contact">GitHub</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
