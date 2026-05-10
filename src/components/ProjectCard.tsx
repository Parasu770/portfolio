"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech?: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  tech = [],
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition"
      >
        <img src={image} alt={title} className="w-full h-52 object-cover" />

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

          <p className="text-gray-400 text-sm leading-6 mb-5">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/20"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm"
            >
              View Details
            </button>

            <a
              href={github}
              target="_blank"
              className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="max-w-2xl w-full rounded-2xl bg-[#0b0b0f] border border-white/10 p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl mb-6" />

            <h2 className="text-3xl font-bold gradient-text mb-4">{title}</h2>

            <p className="text-gray-300 leading-7 mb-5">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/20"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={github}
                target="_blank"
                className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm"
              >
                GitHub
              </a>

              <a
                href={demo}
                target="_blank"
                className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}