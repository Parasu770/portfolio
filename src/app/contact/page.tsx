"use client";
export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto mt-16">
      <h1 className="text-4xl font-bold gradient-text mb-6 text-center">
        Contact Me
      </h1>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-white/10 border border-white/10 text-white outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-white/10 border border-white/10 text-white outline-none"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-4 rounded-lg bg-white/10 border border-white/10 text-white outline-none"
        />

        <button
  type="button"
  onClick={() => alert("Message sent! (demo)")}
  className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
>
  Send Message
</button>
      </form>
    </div>
  );
}