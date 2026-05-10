"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-14">
        <p className="text-purple-400 mb-2">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">
          Contact Me
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Have a project, internship opportunity, collaboration idea, or question?
          Feel free to contact me.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <Mail className="text-purple-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p className="text-gray-400">{personalInfo.email}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <MapPin className="text-purple-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-gray-400">Taipei, Taiwan</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-bold mb-4">Connect With Me</h2>

            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500"
          />

          <textarea
            placeholder="Your Message"
            required
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition font-semibold"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}