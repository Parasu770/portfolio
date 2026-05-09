"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-purple-400 mb-4"
      >
        Hi, I am
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-5xl md:text-7xl font-bold gradient-text"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="mt-5 text-2xl md:text-4xl font-semibold text-white"
>
  <TypeAnimation
    sequence={[
      "AI Developer",
      2000,
      "Full Stack Developer",
      2000,
      "Machine Learning Enthusiast",
      2000,
      "Frontend Designer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 max-w-3xl text-gray-400 text-lg leading-8"
      >
        {personalInfo.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/projects"
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          View Projects
        </Link>

        <Link
          href="/resume"
          className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
        >
          View Resume
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 flex gap-4"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          className="p-3 rounded-full bg-white/10 hover:bg-purple-600"
        >
          <FaGithub size={24} />
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          className="p-3 rounded-full bg-white/10 hover:bg-purple-600"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href={`mailto:${personalInfo.email}`}
          className="p-3 rounded-full bg-white/10 hover:bg-purple-600"
        >
          <MdEmail size={24} />
        </a>
      </motion.div>
    </section>
  );
}