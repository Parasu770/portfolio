import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Portfolio
        </Link>

        <div className="flex gap-6 text-sm md:text-base text-gray-300">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <Link href="/about" className="hover:text-purple-400">About</Link>
          <Link href="/projects" className="hover:text-purple-400">Projects</Link>
          <Link href="/resume" className="hover:text-purple-400">Resume</Link>
          <Link href="/contact" className="hover:text-purple-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}