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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition"
            >
              <Icon className="text-4xl text-purple-400" />
              <p className="text-gray-300">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}