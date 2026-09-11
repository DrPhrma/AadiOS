import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section
      id="contact"
      kicker="09 / Contact"
      title="Contact Me."
      aside="Dm opens"
    >
      <Reveal>
        <div className="max-w-xl space-y-6">
          <p className="text-base text-muted">
            If you are a student, a mentor, or someone building in the same
            neighbourhood of ideas — start a conversation.
          </p>
          {site.githubUrl ? (
            <Button asChild>
              <a href={site.githubUrl} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
            </Button>
          ) : (
            <div className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="font-mono text-xs tracking-wide text-subtle">GitHub</p>
              <p className="mt-2 text-sm text-muted">
                A public profile is not listed yet. When it is, it will live here
                — no placeholder account, no invented handle.
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
