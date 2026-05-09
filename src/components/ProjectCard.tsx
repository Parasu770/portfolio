"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
}: Props) {
  return (
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

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
          >
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}