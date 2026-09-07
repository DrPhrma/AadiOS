import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Brackets } from "@/components/ui/brackets";
import { type Project, statusTone } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={cn(
        "group block rounded-md bg-surface p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]",
        featured && "lg:p-3",
      )}
    >
      <Brackets>
        <article>
          <div className="relative overflow-hidden rounded-sm bg-bg-raised aspect-video">
            <img
              src={project.cover}
              alt={project.coverAlt}
              className="size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)] group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="media-scrim absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-3">
              <span className="font-mono text-micro text-fg/90">
                {project.index} / {project.category}
              </span>
              <ArrowUpRight className="size-4 text-fg opacity-0 transition-opacity duration-[var(--motion-quick)] group-hover:opacity-100" />
            </div>
          </div>
          <div className="flex flex-col gap-3 px-3 py-4 sm:px-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg text-fg sm:text-xl">{project.title}</h3>
              <span
                className={cn(
                  "shrink-0 pt-1 font-mono text-micro tracking-wide",
                  statusTone[project.status],
                )}
              >
                {project.statusLabel}
              </span>
            </div>
            <p className="text-sm leading-normal text-muted">{project.summary}</p>
            <p className="font-mono text-xs text-subtle">Open case study</p>
          </div>
        </article>
      </Brackets>
    </Link>
  );
}
