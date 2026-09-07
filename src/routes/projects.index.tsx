import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Aadi" },
      {
        name: "description",
        content: "Featured projects from Aadi's developer lab.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <div className="site-grid pointer-events-none absolute inset-0 opacity-70" />
      <Navigation />
      <main id="main" className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <p className="kicker">
          <Link to="/" className="link-underline">
            AADI.OS
          </Link>
          <span className="text-subtle"> / work</span>
        </p>
        <h1 className="mt-4 font-display text-3xl sm:text-display">Work</h1>
        <p className="mt-3 max-w-xl text-muted">
          Case studies for the projects that earned a longer look.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
