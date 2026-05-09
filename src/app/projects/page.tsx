import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-14">
        <p className="text-purple-400 mb-2">My Work</p>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">
          Projects
        </h1>
        <p className="text-gray-400 mt-4">
          Here are some of the projects I have worked on recently.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}