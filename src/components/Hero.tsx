"use client";

import { personalInfo } from "@/data/personal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-purple-400 mb-4"
      >
        Hi, I am
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-5xl md:text-7xl font-bold gradient-text"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-2xl md:text-4xl font-semibold text-white"
      >
        {personalInfo.role}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 max-w-2xl text-gray-400 text-lg"
      >
        {personalInfo.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 flex gap-4"
      >
        <a href={personalInfo.github} target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-purple-600">
          <FaGithub size={24} />
        </a>

        <a href={personalInfo.linkedin} target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-purple-600">
          <FaLinkedin size={24} />
        </a>

        <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-full bg-white/10 hover:bg-purple-600">
          <MdEmail size={24} />
        </a>
      </motion.div>

    </section>
  );
}