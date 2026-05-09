export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <h1 className="text-4xl font-bold gradient-text mb-6">
        Resume
      </h1>

      <p className="text-gray-400 mb-8">
        Download my resume to know more about my skills,
        projects, and experience.
      </p>

      <a
        href="/resume.pdf"
        download="Parasuraman_Resume.pdf"
        className="inline-block px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
}