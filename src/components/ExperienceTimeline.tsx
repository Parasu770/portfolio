import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="max-w-5xl mx-auto py-16">
      <div className="text-center mb-12">
        <p className="text-purple-400 mb-2">My Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Experience
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition"
          >
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-purple-300 mt-1">{item.company}</p>
            <p className="text-sm text-gray-500 mt-1">{item.period}</p>
            <p className="text-gray-400 mt-4 leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}