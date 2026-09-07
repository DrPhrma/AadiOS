import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { timeline } from "@/data/timeline";

export function Timeline() {
  return (
    <Section
      id="timeline"
      kicker="07 / Timeline"
      title="Curiosity, then ambition."
      aside="Growth as a sequence of rooms, not a ladder of titles."
    >
      <ol className="relative mx-auto max-w-3xl border-l border-line pl-8 sm:pl-12">
        <span
          className="timeline-spine pointer-events-none absolute top-0 left-0 h-full w-px"
          aria-hidden="true"
        />
        {timeline.map((event, i) => (
          <li key={event.id} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-bg shadow-[0_0_0_1px_var(--color-accent)] sm:-left-[53px]" />
            <Reveal delay={i * 40}>
              <p className="kicker">{event.kicker}</p>
              <h3 className="mt-2 text-xl text-fg">{event.title}</h3>
              <p className="mt-2 max-w-xl text-sm text-muted">{event.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
