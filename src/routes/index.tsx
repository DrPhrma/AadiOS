import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about/about";
import { Achievements } from "@/components/achievements/achievements";
import { Contact } from "@/components/contact/contact";
import { Currently } from "@/components/currently/currently";
import { Hero } from "@/components/hero/hero";
import { Lab } from "@/components/lab/lab";
import { SiteShell } from "@/components/layout/site-shell";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { SkillConstellation } from "@/components/skills/skill-constellation";
import { Timeline } from "@/components/timeline/timeline";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <FeaturedProjects />
      <SkillConstellation />
      <Lab />
      <Achievements />
      <Timeline />
      <Currently />
      <Contact />
    </SiteShell>
  );
}
