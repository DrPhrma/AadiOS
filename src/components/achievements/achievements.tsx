import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { achievements } from "@/data/achievements";

const groups = ["Cybersecurity", "Development", "Academic"] as const;

export function Achievements() {
  return (
    <Section
      id="achievements"
      kicker="06 / Record"
      title="What is actually on the record."
      aside="No invented awards. Academic details stay second."
    >
      <div className="grid gap-10 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group} delay={i * 80}>
            <div className={group === "Academic" ? "opacity-80" : undefined}>
              <p className="kicker">{group}</p>
              <ul className="mt-5 space-y-4">
                {achievements
                  .filter((a) => a.group === group)
                  .map((item) => (
                    <li
                      key={item.id}
                      className="rounded-md bg-surface p-4 shadow-[var(--shadow-border)]"
                    >
                      <p className="text-sm text-fg">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.detail}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
