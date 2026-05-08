"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
    >

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            className="px-4 py-2 text-sm bg-purple-600 rounded-md hover:bg-purple-700"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            className="px-4 py-2 text-sm border border-white/20 rounded-md hover:bg-white/10"
          >
            Demo
          </a>
        </div>
      </div>

    </motion.div>
  );
}