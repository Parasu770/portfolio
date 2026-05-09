export default function GithubStats() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <div className="text-center mb-10">
        <p className="text-purple-400 mb-2">GitHub Activity</p>

        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          GitHub Stats
        </h2>
      </div>

      <div className="flex flex-col items-center gap-6">

        {/* GitHub Stats */}
        <img
          src="https://github-readme-stats.vercel.app/api?username=Parasu770&show_icons=true&theme=tokyonight"
          alt="github stats"
          className="rounded-xl"
        />

        {/* Streak Stats */}
        <img
          src="https://streak-stats.demolab.com?user=Parasu770&theme=tokyonight"
          alt="github streak"
          className="rounded-xl"
        />

      </div>
    </section>
  );
}