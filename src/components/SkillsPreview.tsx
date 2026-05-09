import { skills } from "@/data/skills";

export default function SkillsPreview() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <div className="text-center mb-10">
        <p className="text-purple-400 mb-2">What I Use</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Technical Skills
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}