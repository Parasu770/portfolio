"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold gradient-text"
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="/" className="hover:text-purple-400">
            Home
          </Link>

          <Link href="/about" className="hover:text-purple-400">
            About
          </Link>

          <Link href="/projects" className="hover:text-purple-400">
            Projects
          </Link>

          <Link href="/resume" className="hover:text-purple-400">
            Resume
          </Link>

          <Link href="/contact" className="hover:text-purple-400">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-gray-300 bg-black border-t border-white/10">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>

          <Link href="/resume" onClick={() => setOpen(false)}>
            Resume
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}