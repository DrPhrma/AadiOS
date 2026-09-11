import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section
      id="about"
      kicker="02 / About"
      title="I started building before I really knew what I was doing."
      aside="A progression, not a biography."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-normal text-muted">
            <p>
              Near the end of Class 8 a first personal portfolio went live. It was
              imperfect. That was the point — a page existed because it was made,
              not because it was ready.
            </p>
            <p>
              The path after that did not follow a syllabus. Cybersecurity labs.
              Linux guests that would not talk to the host. Local models that
              failed in useful ways. A desktop assistant assembled in pieces. A
              coastal town that only existed inside a game prototype.
            </p>
            <p>
              The through-line is a habit: build, test, break, debug, fix, iterate.
              Titles come later. The work comes first.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid gap-4 sm:grid-cols-2">
            <article>
              <p className="kicker mb-3">Version 01</p>
              <MediaFrame
                src="images/version-01.png"
                alt="Abstract visual standing in for the first Class 8 portfolio — not a real screenshot."
                caption="placeholder · first portfolio, Class 8"
              />
              <p className="mt-3 font-mono text-xs text-subtle">
                First portfolio — end of Class 8. Original capture not attached; this is a stand-in.
              </p>
            </article>
            <article>
              <p className="kicker mb-3">Version 02</p>
              <MediaFrame
                src="images/version-02.png"
                alt="Refined dark workstation interface representing the 2026 portfolio."
                caption="current · portfolio 2026"
              />
              <p className="mt-3 font-mono text-xs text-subtle">
                Current portfolio, not a school résumé template.
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
