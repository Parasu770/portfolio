"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I am Parasuraman's AI assistant. Ask me about projects, skills, or experience.",
    },
  ]);

  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    let botReply =
      "I am still learning. Please explore the portfolio sections.";

    const lower = input.toLowerCase();

    if (lower.includes("project")) {
      botReply =
        "Parasuraman has worked on AI Business Analyzer, Traffic Prediction System, and modern full-stack web applications.";
    }

    if (lower.includes("skill")) {
      botReply =
        "Skills include Next.js, React, TypeScript, Python, Machine Learning, FastAPI, MongoDB, and Tailwind CSS.";
    }

    if (lower.includes("experience")) {
      botReply =
        "Parasuraman has experience in AI projects, full-stack development, and Signal Integrity concepts.";
    }

    if (lower.includes("resume")) {
      botReply =
        "You can download the resume from the Resume section in the navigation bar.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] p-4 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
      >
        <MessageCircle />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[350px] rounded-2xl border border-white/10 bg-[#0b0b0f] shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <h2 className="font-semibold text-white">
              AI Assistant
            </h2>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl text-sm max-w-[85%] ${
                  msg.role === "user"
                    ? "ml-auto bg-purple-600 text-white"
                    : "bg-white/10 text-gray-300"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm outline-none"
            />

            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}