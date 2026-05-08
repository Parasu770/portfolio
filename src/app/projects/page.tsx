import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-center gradient-text mb-12">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}