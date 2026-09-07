import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const [flagship, ...rest] = projects;

  return (
    <Section
      id="work"
      kicker="03 / Work"
      title="Featured projects."
      aside="Case studies, not cards that pretend to be products."
    >
      {flagship ? (
        <Reveal>
          <ProjectCard project={flagship} featured />
        </Reveal>
      ) : null}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
