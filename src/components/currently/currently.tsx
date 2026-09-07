import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/data/site";

const panels = [
  { kicker: "Building", items: site.currently.building },
  { kicker: "Learning", items: site.currently.learning },
  { kicker: "Experimenting with", items: site.currently.experimenting },
] as const;

export function Currently() {
  return (
    <Section
      id="now"
      kicker="08 / Currently"
      title="A snapshot of focus."
      aside={site.currently.note}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {panels.map((panel, i) => (
          <Reveal key={panel.kicker} delay={i * 70}>
            <article className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
              <div className="flex items-center justify-between">
                <p className="kicker">{panel.kicker}</p>
                <span className="font-mono text-micro text-subtle">static</span>
              </div>
              <ul className="mt-5 space-y-2">
                {panel.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-2 font-mono text-sm text-fg last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
