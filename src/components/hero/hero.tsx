import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brackets } from "@/components/ui/brackets";
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
              <p className="text-lg text-fg sm:text-xl">{site.tagline}</p>
            ) : (
              <TypeLine text={site.tagline} className="text-lg text-fg sm:text-xl" />
            )}
            <p className="mt-3 text-base text-muted">{site.support}</p>
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

        <Brackets className="boot-5 mt-4 w-full max-w-md self-stretch sm:self-end">
          <StatusPanel />
        </Brackets>
      </div>
    </section>
  );
}

function StatusPanel() {
  const rows = [
    ["STATUS", site.status.status],
    ["FOCUS", site.status.focus],
    ["STACK", site.status.stack],
    ["CURRENT", site.status.current],
  ] as const;

  return (
    <aside className="bg-bg-raised/80 px-4 py-4 sm:px-5" aria-label="System status">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wide text-fg">{site.os}</p>
        <p className="flex items-center gap-2 font-mono text-micro text-signal">
          <span className="status-dot size-1.5 rounded-full bg-signal" />
          live panel
        </p>
      </div>
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 font-mono text-xs">
        {rows.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-subtle">{k}</dt>
            <dd className="min-w-0 text-right text-fg">{v}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
