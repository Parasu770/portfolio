"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="max-w-3xl mx-auto mt-16">
      <h1 className="text-4xl font-bold gradient-text mb-6 text-center">
        Contact Me
      </h1>

      <p className="text-gray-400 text-center mb-8">
        Have a project, internship opportunity, or collaboration idea? Send me a message.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-lg bg-white/10 border border-white/10 text-white outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-white/10 border border-white/10 text-white outline-none"
        />

        <textarea
          placeholder="Your Message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 rounded-lg bg-white/10 border border-white/10 text-white outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}