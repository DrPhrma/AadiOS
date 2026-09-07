import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.project.title} — Aadi`
          : "Project — Aadi",
      },
      {
        name: "description",
        content: loaderData?.project.summary ?? "Project case study.",
      },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return <ProjectCaseStudy project={project} />;
}
