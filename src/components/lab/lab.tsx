import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import {
  experimentCategories,
  experiments,
  statusCopy,
  type ExperimentCategory,
  type ExperimentStatus,
} from "@/data/experiments";
import { cn } from "@/lib/cn";

const tone: Record<ExperimentStatus, string> = {
  completed: "text-signal",
  "in-progress": "text-accent",
  experiment: "text-muted",
  archived: "text-subtle",
};

export function Lab() {
  const [cat, setCat] = useState<ExperimentCategory | "all">("all");
  const list = useMemo(
    () => (cat === "all" ? experiments : experiments.filter((e) => e.category === cat)),
    [cat],
  );

  return (
    <Section
      id="lab"
      kicker="05 / The Lab"
      title="Experiments count."
      aside="Unfinished is not the same as unused."
    >
      <div className="flex flex-wrap gap-2">
        {experimentCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={cat === item.id}
            onClick={() => setCat(item.id)}
            className={cn(
              "min-h-10 rounded-sm px-3 font-mono text-xs tracking-wide transition-colors duration-[var(--motion-quick)]",
              cat === item.id
                ? "bg-accent text-accent-fg"
                : "text-muted shadow-[var(--shadow-border)] hover:text-fg",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item, i) => (
          <Reveal key={item.id} delay={(i % 6) * 40}>
            <article className="flex h-full flex-col rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-micro tracking-wide text-subtle">
                  {item.category}
                </p>
                <p className={cn("font-mono text-micro tracking-wide", tone[item.status])}>
                  {statusCopy[item.status]}
                </p>
              </div>
              <h3 className="mt-3 text-base text-fg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.blurb}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
