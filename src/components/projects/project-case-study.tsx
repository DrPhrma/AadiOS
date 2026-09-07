import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/ui/media-frame";
import { type Project, statusTone } from "@/data/projects";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const github = project.github || site.githubUrl;

  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <div className="site-grid pointer-events-none absolute inset-0 opacity-70" />
      <Navigation />
      <main id="main" className="relative px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <article className="mx-auto w-full max-w-6xl">
          <p className="kicker">
            <Link to="/" className="link-underline">
              AADI.OS
            </Link>
            <span className="text-subtle"> / work / {project.slug}</span>
          </p>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs text-muted">
                {project.index} · {project.category}
              </p>
              <h1 className="mt-2 font-display text-3xl text-fg">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted">{project.summary}</p>
            </div>
            <p className={cn("font-mono text-xs", statusTone[project.status])}>
              {project.statusLabel}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="ghost">
              <a href="/#work">
                <ArrowLeft className="size-4" />
                All work
              </a>
            </Button>
            {github ? (
              <Button asChild variant="ghost">
                <a href={github} target="_blank" rel="noreferrer noopener">
                  GitHub
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            ) : (
              <Button asChild variant="ghost">
                <a href="/#contact">GitHub</a>
              </Button>
            )}
          </div>

          <div className="mt-12">
            <MediaFrame
              src={project.cover}
              alt={project.coverAlt}
              caption={`~/lab/${project.slug}/cover`}
            />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10">
              <Block kicker="Overview" title={project.purpose}>
                {project.overview.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Block>

              {project.architecture ? (
                <Block kicker="Architecture" title="Modules, not a monolith.">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.architecture.map((node, i) => (
                      <li
                        key={node.name}
                        className="rounded-sm bg-surface p-4 shadow-[var(--shadow-border)]"
                      >
                        <p className="font-mono text-micro text-subtle">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 text-sm text-fg">{node.name}</p>
                        <p className="mt-1 text-sm text-muted">{node.detail}</p>
                      </li>
                    ))}
                  </ul>
                </Block>
              ) : null}

              <Block kicker="Journey" title="How it actually moved.">
                <ol className="relative space-y-0 border-l border-line pl-6">
                  {project.journey.map((step) => (
                    <li key={step.phase} className="relative pb-8 last:pb-0">
                      <span className="absolute -left-[29px] top-1 size-2 rounded-full bg-accent" />
                      <p className="font-mono text-xs tracking-wide text-fg">
                        {step.phase}
                      </p>
                      <p className="mt-2 text-sm text-muted">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block kicker="Challenges" title="What broke, and what that taught.">
                <ul className="space-y-3">
                  {project.challenges.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-line pl-4 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="kicker">Stack / concepts</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm px-2 py-1 font-mono text-micro text-muted shadow-[var(--shadow-border)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="kicker">Honesty</p>
                <p className="mt-3 text-sm text-muted">{project.honesty}</p>
              </div>
            </aside>
          </div>

          {project.stills.length > 0 ? (
            <div className="mt-16">
              <p className="kicker mb-6">Stills / placeholders</p>
              <div className="grid gap-6 md:grid-cols-2">
                {project.stills.map((still) => (
                  <MediaFrame
                    key={still.src + still.caption}
                    src={still.src}
                    alt={still.alt}
                    caption={still.caption}
                  />
                ))}
              </div>
              <p className="mt-4 font-mono text-xs text-subtle">
                Visuals are atmospheric stand-ins unless noted. Image files live
                in the project stills folder so they can be swapped later.
              </p>
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </div>
  );
}

function Block({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-2 text-xl text-fg">{title}</h2>
      <div className="mt-4 space-y-4 text-base text-muted">{children}</div>
    </section>
  );
}
