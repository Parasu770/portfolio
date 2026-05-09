"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-20"
      options={{
        background: {
          color: {
            value: "#050505",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#a855f7",
          },
          links: {
            color: "#a855f7",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 45,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}