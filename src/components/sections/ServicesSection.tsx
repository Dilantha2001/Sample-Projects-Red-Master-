import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Star } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "../3d/Scene";
import * as THREE from "three";

// Helper Component for the Rotating Circular Text
const CircularCTA = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute w-full h-full"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-orange-600/60 font-medium tracking-widest text-[8px]"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text>
          <textPath xlinkHref="#circlePath">
            DISCOVER RADIANT EXCELLENCE • TRANSFORM YOUR BRAND •
          </textPath>
        </text>
      </svg>
    </motion.div>
  </div>
);

// Helper Component for the Point Callouts
const PointCallout = ({
  title,
  description,
  side = "left",
}: {
  title: string;
  description: string;
  side?: "left" | "right";
}) => (
  <motion.div
    initial={{ opacity: 0, x: side === "left" ? -60 : 60, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: false, margin: "-10% 0px" }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
    className={`absolute z-20 max-w-[200px] ${side === "left" ? "text-left" : "text-left"}`}
  >
    <div className="flex items-start gap-4">
      {side === "right" && (
        <div className="mt-1 relative">
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]" />
          <svg className="absolute top-1.5 left-[-60px] w-[60px] h-[40px] overflow-visible">
            <motion.line
              x1="60"
              y1="0"
              x2="0"
              y2="40"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </svg>
        </div>
      )}
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white tracking-tight">{title}</h4>
        <p className="text-zinc-400 text-[10px] leading-relaxed font-medium">
          {description}
        </p>
      </div>
      {side === "left" && (
        <div className="mt-1 relative">
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]" />
          <svg className="absolute top-1.5 left-3 w-[60px] h-[40px] overflow-visible">
            <motion.line
              x1="0"
              y1="0"
              x2="60"
              y2="-40"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </svg>
        </div>
      )}
    </div>
  </motion.div>
);

const ScrollRotatedModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      const section = document.getElementById("services");
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalDist = viewportHeight + rect.height;
        const currentDist = viewportHeight - rect.top;
        const rawProgress = currentDist / totalDist;
        const progress = Math.max(0, Math.min(1, rawProgress));

        // Spin model based on scroll + continuous time rotation
        groupRef.current.rotation.y = (progress * Math.PI * 4.5) + (performance.now() * 0.00025);
        // Tilt model based on scroll
        groupRef.current.rotation.x = -Math.PI / 10 + progress * (Math.PI / 5);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Scale එක මුල් කෝඩ් එකේ තිබ්බ ගාණටම (70) හැරෙව්වා */}
      <Model scale={70} />
    </group>
  );
};

export const ServicesSection = () => {
  return (
    <Section id="services" className="bg-black flex flex-col justify-between py-10 px-6 md:px-12 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
        {/* Header Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-9xl font-black font-display tracking-tighter uppercase leading-[0.8] text-white">
              Precision <br />
              <span className="text-zinc-600">In Time</span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-xs leading-relaxed font-medium italic">
              / From classic elegance to modern innovation, our services are
              crafted to elevate your brand presence. /
            </p>
          </div>

          <div className="flex justify-end pt-12" />
        </div>

        {/* Central 3D Model Area - Height එක vh 55ක් දක්වා වැඩි කර මුළු Area එකම විශාල කරන ලදී */}
        <div className="relative w-full h-[90vh] bg-transparent flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-zinc-900/50" />

          <div className="w-full h-full relative z-10">
            {/* කැමරාව ළඟට ගන්න fov එක 2.5 ට අඩු කරන ලදී. position එක [0, 0, 5] කර ළඟට ගන්නා ලදී */}
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 2.5 }}>
              <Suspense fallback={null}>
                {/* Stage එකේ Default auto-center එක ඔන් එකේ තියලා, adjustCamera=trueම තැබුවා (නැත්නම් object එක අතුරුදහන් වෙනවා) */}
                <Stage environment={null} intensity={1} castShadow={false}>
                  <ScrollRotatedModel />
                </Stage>
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>

          {/* Left Callout (Relative to Model) */}
          <div className="absolute left-[15%] top-[32%]">
            <PointCallout
              side="left"
              title="Elegant Branding"
              description="Designed to combine precision, durability, and refined visual style for your enterprise."
            />
          </div>

          {/* Right Callout - Near 3D Object */}
          <div className="absolute right-[15%] top-[60%] md:top-[32%]">
            <PointCallout
              side="right"
              title="Refined Craftsmanship"
              description="Blending timeless design with precision engineering for everyday digital excellence."
            />
          </div>

          {/* Circular CTA */}
          <div className="absolute right-[5%] bottom-[10%]">
            <CircularCTA />
          </div>
        </div>

        {/* Footer Stats Area */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 pt-12 border-t ">
          <div className="flex gap-16">
            <div className="space-y-1">
              <div className="text-4xl font-bold tracking-tighter text-white">
                4.5k+
              </div>
              <div className="text-[10px] font-medium tracking-widest text-zinc-400 uppercase">
                Satisfied Clients
              </div>
            </div>
            <div className="h-10 w-px bg-zinc-800 self-center" />
            <div className="space-y-1">
              <div className="text-4xl font-bold tracking-tighter text-white">
                10 year
              </div>
              <div className="text-[10px] font-medium tracking-widest text-zinc-400 uppercase">
                Market Expertise
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-red-500">
            <span className="text-[8px] font-bold tracking-[0.5em] uppercase text-zinc-600">
              Established 2014
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};