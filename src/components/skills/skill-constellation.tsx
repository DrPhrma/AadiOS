import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups, type SkillGroupId } from "@/data/skills";
import { cn } from "@/lib/cn";

export function SkillConstellation() {
  const [active, setActive] = useState<SkillGroupId | "all">("all");
  const current = skillGroups.find((g) => g.id === active);

  return (
    <Section
      id="skills"
      kicker="04 / Skills"
      title="A constellation, not a scoreboard."
      aside="No fake percentages. Groups you can inspect."
    >
      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="All"
          on={active === "all"}
          onClick={() => setActive("all")}
        />
        {skillGroups.map((group) => (
          <FilterChip
            key={group.id}
            label={group.label}
            on={active === group.id}
            onClick={() => setActive(group.id)}
          />
        ))}
      </div>

      {current ? (
        <p className="mt-6 max-w-2xl text-sm text-muted">{current.blurb}</p>
      ) : (
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Select a cluster to isolate it. Skills are listed because they have been
          used — not because a bar chart said so.
        </p>
      )}

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const dim = active !== "all" && active !== group.id;
          return (
            <Reveal key={group.id} delay={i * 50}>
              <button
                type="button"
                onClick={() =>
                  setActive((v) => (v === group.id ? "all" : group.id))
                }
                className={cn(
                  "h-full w-full rounded-md bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-[opacity,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]",
                  dim && "opacity-40",
                )}
              >
                <p className="font-mono text-micro tracking-wide text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg text-fg">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm px-2 py-1 font-mono text-xs text-muted shadow-[var(--shadow-border)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </button>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function FilterChip({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={cn(
        "min-h-10 rounded-sm px-3 font-mono text-xs tracking-wide transition-colors duration-[var(--motion-quick)]",
        on ? "bg-accent text-accent-fg" : "text-muted shadow-[var(--shadow-border)] hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
