"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9998] h-72 w-72 rounded-full bg-purple-500/20 blur-3xl transition-transform duration-100"
      style={{
        left: position.x - 144,
        top: position.y - 144,
      }}
    />
  );
}