import { skills } from "@/data/skills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h1 className="text-4xl font-bold gradient-text mb-6">About Me</h1>

      <p className="text-gray-300 text-lg leading-8">
        I am a Full Stack Developer with experience in building modern web
        applications, dashboards, SaaS platforms, and AI-powered business tools.
        I enjoy creating clean user interfaces, secure backend APIs, and
        practical digital solutions for real-world business problems.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-5 text-white">
        Technical Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300"
          >
            {skill}
          </span>
        ))}
        <ExperienceTimeline />
      </div>
    </div>
  );
}