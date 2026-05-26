import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Cpu, Shield, Layers, ArrowUpRight, Users } from "lucide-react";

interface TeamMember {
  role: string;
  code: string;
  name: string;
  image: string;
  details: string;
}

const teamMembers: TeamMember[] = [
  {
    role: "CORE ENGINE BUILDER",
    code: "01 / PROTOCOL",
    name: "Alexander Vance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    details: "Former distributed ledger specialist. Designed low-latency Layer-2 execution channels and state channels.",
  },
  {
    role: "UX & INTERACTIVE DESIGN",
    code: "02 / AESTHETICS",
    name: "Elena Rostova",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    details: "Crafted interfaces for global luxury brands. Specializes in micro-interactions, canvas grids, and HSL palettes.",
  },
  {
    role: "SMART CONTRACT AUDITOR",
    code: "03 / INTEGRITY",
    name: "Dr. Marcus Thorne",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    details: "Cryptographic researcher. Expert in zero-knowledge proof mechanics and immutable registry optimization.",
  },
];

interface CapabilityCard {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const capabilities: CapabilityCard[] = [
  {
    number: "01",
    title: "Creative Systems & UI/UX",
    desc: "Luxury visual design and hardware-accelerated user experiences that redefine premium digital presence.",
    icon: <Users size={16} />,
  },
  {
    number: "02",
    title: "Web3 Engine Deployment",
    desc: "High-throughput Layer-2 systems, dedicated consensus nodes, and bulletproof decentralized rails.",
    icon: <Cpu size={16} />,
  },
  {
    number: "03",
    title: "Auditable ESG Ledgers",
    desc: "Smart contracts that secure corporate regulatory milestones and carbon credits onto immutable chains.",
    icon: <Layers size={16} />,
  },
];

export const TeamManifestoSection = () => {
  return (
    <Section id="manifesto" className="bg-black flex flex-col justify-between relative overflow-hidden min-h-screen lg:h-screen w-full snap-start select-none py-12 lg:py-0">
      
      {/* Background Decorative Matrix Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03)_0%,transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      {/* Top Rim Glowing Header */}
      <div className="pt-8 md:pt-12 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 flex justify-between items-center border-b border-zinc-900/60 pb-4">
        <span className="text-xs font-black tracking-[0.25em] text-zinc-500 uppercase">
          Ecosystem Directory • Consortium Members & Capabilities
        </span>
        <span className="text-xs font-black tracking-[0.15em] text-red-500 uppercase flex items-center gap-1.5">
          <Shield size={12} className="text-red-500" />
          EST. 2018 GENESIS NODE #001
        </span>
      </div>

      {/* Main Split Grid (Team & Vision) */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-6 overflow-hidden">
        
        {/* Left Side: Fanning Team Synergy Grid */}
        <div className="relative w-full h-[360px] md:h-[400px] flex items-center justify-center">
          {teamMembers.map((member, idx) => {
            const rot = (idx - 1) * 6; // Angle fan
            const offset = (idx - 1) * 45; // X-axis fan
            return (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15, 
                  rotate: 0, 
                  zIndex: 30,
                  borderColor: "rgba(239, 68, 68, 0.4)",
                  boxShadow: "0 15px 35px rgba(220,38,38,0.1)"
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0, x: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: rot, x: offset }}
                viewport={{ once: false, margin: "-10% 0px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 12, 
                  mass: 0.8,
                  delay: idx * 0.12 
                }}
                className="absolute w-[220px] md:w-[250px] h-[310px] md:h-[340px] rounded-2xl border border-zinc-900 bg-zinc-950/70 backdrop-blur-xl p-5 flex flex-col justify-between cursor-pointer select-none transition-all duration-300"
                style={{ 
                  originY: 1, 
                  zIndex: 10 + idx,
                }}
              >
                {/* Micro Tech Banner */}
                <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                  <span className="text-xs font-black text-red-500 uppercase tracking-widest">
                    {member.code}
                  </span>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                </div>

                {/* Team Member Image */}
                <div className="flex-1 my-3 rounded-lg border border-zinc-900/60 bg-zinc-950 flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-red-950/20 pointer-events-none" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Info Text */}
                <div className="space-y-1">
                  <span className="text-xs font-black text-zinc-500 uppercase tracking-wider">
                    {member.role}
                  </span>
                  <h4 className="text-sm font-black text-white uppercase tracking-wide font-display leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans leading-normal line-clamp-2">
                    {member.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Partnership Manifesto */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col justify-center h-full"
        >
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-black tracking-[0.2em] text-red-500 uppercase">
              SOVEREIGN ALLIANCE
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
              Committed to <br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Your Sovereignty
              </span>
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg font-sans font-medium">
              We merge computational precision with elite creative mastery. Our mandate is simple: to form high-integrity architectural partnerships that secure absolute decentralized data validation, extreme render performances, and permanent trust.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-xs font-black uppercase tracking-widest text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.35)] cursor-pointer select-none"
            >
              Bridge Consensus
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom Capabilities Section ("What We Bring to the Table") */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 relative z-10">
        
        {/* Small Row Header */}
        <div className="flex items-center gap-4 mb-5 border-t border-t-zinc-900 pt-6">
          <span className="text-xs font-black text-red-500 uppercase tracking-[0.25em]">
            CAPABILITIES REGISTER
          </span>
          <div className="h-[1px] flex-1 bg-zinc-900/60" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            WHAT WE BRING TO THE TABLE
          </span>
        </div>

        {/* Three Columns Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: "rgba(239, 68, 68, 0.3)" }}
              className="p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900/80 backdrop-blur-md text-left flex justify-between items-start gap-4 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-red-500/5 blur-[15px] rounded-full pointer-events-none" />
              
              {/* Icon Container */}
              <div className="p-2.5 rounded-lg bg-red-950/30 border border-red-500/20 text-red-500 group-hover:scale-105 transition-transform">
                {cap.icon}
              </div>

              {/* Text Data */}
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs md:text-sm font-black text-white uppercase tracking-wider font-display">
                    {cap.title}
                  </h4>
                  <span className="text-xs font-bold text-zinc-500 font-mono">
                    {cap.number}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans font-medium">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
