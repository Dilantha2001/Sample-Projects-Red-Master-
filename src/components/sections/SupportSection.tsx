import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  MapPin,
  Shield,
  Clock,
  CheckCircle2,
  Award,
  Sparkles,
  Zap,
} from "lucide-react";

const teamMembers = [
  {
    id: 0,
    name: "Olivia Martinez",
    role: "VP of Enterprise Success",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    bio: "Directing elite technical support, managing critical system escalations, and structuring customized account communication rails.",
    credentials: "12+ Yrs Experience • Ex-Stripe Concierge Director",
    availability: "Immediate Access (VIP Portal)",
    status: "ONLINE",
  },
  {
    id: 1,
    name: "Richard Mills",
    role: "Lead Node Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    bio: "Specializing in high-performance blockchain node structures, real-time smart contracts scaling, and distributed ledger throughput.",
    credentials: "System Architect • Core Protocol Contributor",
    availability: "Available for Live Escalations",
    status: "ONLINE",
  },
  {
    id: 2,
    name: "Viola Bassett",
    role: "Web3 Integration Lead",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600",
    bio: "Pioneering secure integrations between core enterprise pipelines and decentralized tokenomics/ledger schemas.",
    credentials: "Full-Stack Integration • Smart Contract Auditor",
    availability: "Available for Architecture Audits",
    status: "ONLINE",
  },
  {
    id: 3,
    name: "Sophie Chamberlain",
    role: "Payments Coordinator",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    bio: "Configuring high-throughput transactional gateways, multi-signature corporate vaults, and low-latency settlement channels.",
    credentials: "Cryptographic Payments • Compliance Audit Lead",
    availability: "Available for Flow Integration",
    status: "ONLINE",
  },
  {
    id: 4,
    name: "Erik Anders",
    role: "Global Security Coordinator",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    bio: "Overseeing zero-knowledge communication pipelines, hardware security module parameters, and multi-factor compliance audits.",
    credentials: "SecOps Specialist • Cryptographer • ISO 27001",
    availability: "SecOps Operations Core Desk",
    status: "ONLINE",
  },
  {
    id: 5,
    name: "Natalie Carter",
    role: "Enterprise Success Agent",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
    bio: "Facilitating bespoke operational channels, custom billing schedules, and maintaining unified communications for VIP brands.",
    credentials: "Bespoke Accounts Coordinator • Ex-AWS Dedicated Lead",
    availability: "Direct Line Active",
    status: "ONLINE",
  },
];

export const SupportTeamSection = () => {
  // Stack state tracks the render order of cards. 
  // The element at the last position (index 5) is on top of the pile.
  const [stack, setStack] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const activeId = stack[stack.length - 1];
  const activeMember = teamMembers.find((m) => m.id === activeId)!;

  const handleCardClick = (id: number) => {
    if (id === activeId) return; // Already on top
    setStack((prev) => [...prev.filter((x) => x !== id), id]);
  };

  return (
    <Section className="bg-black flex flex-col justify-center relative min-h-screen py-16 overflow-hidden snap-start">
      {/* High-end Subtle Red Glows */}
      <div className="absolute top-1/3 left-10 w-[40%] h-[40%] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[50%] h-[50%] bg-orange-950/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-400 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
            Chamber VIP Network • 24/7/365 Direct
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tighter max-w-4xl mx-auto leading-tight uppercase font-display text-white">
            Dedicated support <br className="hidden md:inline" />
            <span className="text-zinc-500">for your luxury presence.</span>
          </h2>
        </motion.div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Metrics & Selection (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-900 backdrop-blur-md relative overflow-hidden group hover:border-red-500/20 transition-all">
                <div className="text-red-500 mb-1">
                  <Clock size={16} />
                </div>
                <div className="font-bold text-white text-lg md:text-xl font-display">
                  &lt; 15s
                </div>
                <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold mt-0.5">
                  Response SLA
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-900 backdrop-blur-md relative overflow-hidden group hover:border-red-500/20 transition-all">
                <div className="text-red-500 mb-1">
                  <Shield size={16} />
                </div>
                <div className="font-bold text-white text-lg md:text-xl font-display">
                  Level 3
                </div>
                <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold mt-0.5">
                  Dedicated Arch
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-900 backdrop-blur-md relative overflow-hidden group hover:border-red-500/20 transition-all">
                <div className="text-red-500 mb-1">
                  <CheckCircle2 size={16} />
                </div>
                <div className="font-bold text-white text-lg md:text-xl font-display">
                  99.9%
                </div>
                <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold mt-0.5">
                  CSAT Level
                </div>
              </div>
            </div>

            {/* Concierge Directory List */}
            <div className="space-y-2 bg-zinc-950/30 p-4 rounded-2xl border border-zinc-900/60 backdrop-blur-md">
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 px-3 pb-2 border-b border-zinc-900/50">
                Directory Registry
              </div>
              <div className="space-y-1 pt-1.5">
                {teamMembers.map((member) => {
                  const isActive = member.id === activeId;
                  return (
                    <button
                      key={member.id}
                      onClick={() => handleCardClick(member.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 select-none text-left cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-red-950/30 to-zinc-900/40 border border-red-500/20 shadow-md shadow-red-500/5"
                          : "hover:bg-zinc-900/30 border border-transparent hover:border-zinc-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className={`w-8 h-8 rounded-full object-cover border border-zinc-800 ${
                              isActive ? "border-red-500/50" : ""
                            }`}
                          />
                          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-black shadow-[0_0_6px_#22c55e]" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold leading-none ${isActive ? "text-white animate-pulse" : "text-zinc-400"}`}>
                            {member.name}
                          </div>
                          <div className="text-[9px] text-zinc-500 font-medium mt-0.5">
                            {member.role}
                          </div>
                        </div>
                      </div>
                      <ArrowRight
                        size={12}
                        className={`text-zinc-600 transition-all ${
                          isActive ? "text-red-500 translate-x-1" : ""
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: The Interactive Card Stack Fan (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 order-1 lg:order-2 py-6">
            
            {/* The Stack Container */}
            <div className="relative w-[280px] md:w-[330px] aspect-[3/4] shrink-0 overflow-visible">
              {teamMembers.map((member) => {
                const position = stack.indexOf(member.id); // 0 (bottom) to 5 (top)
                const isActive = position === 5; // Top active card

                // Dynamic cascade positioning based on stack depth
                const xOffset = (position - 5) * 16;
                const yOffset = (position - 5) * 8;
                const rotation = (position - 5) * 2.5;
                const scale = 0.88 + position * 0.024;

                return (
                  <motion.div
                    key={member.id}
                    style={{
                      zIndex: position,
                      transformOrigin: "bottom center",
                    }}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      rotate: rotation,
                      scale: scale,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    onClick={() => handleCardClick(member.id)}
                    className={`absolute inset-0 rounded-2xl border border-zinc-800/80 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group select-none cursor-pointer overflow-hidden bg-zinc-950 ${
                      isActive
                        ? "shadow-[0_20px_50px_rgba(239,68,68,0.06)] border-red-500/20"
                        : "hover:border-zinc-700/60"
                    }`}
                  >
                    {/* Chamber Duotone Image Styling */}
                    <div className="absolute inset-0 bg-red-950 pointer-events-none" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-all duration-700 ${
                        isActive
                          ? "grayscale-[90%] contrast-[1.25] brightness-[0.75] scale-102 group-hover:grayscale-[20%] group-hover:brightness-[0.9]"
                          : "grayscale contrast-[1.1] brightness-[0.6] opacity-65"
                      }`}
                    />
                    
                    {/* Soft ambient glowing mask inside card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    
                    {/* Dynamic highlight borders */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100`} />

                    {/* Card Inner Badge Detail */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/70 border border-zinc-800/50 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_#22c55e]" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-wider text-zinc-300">
                        {member.status} • Concierge Desk
                      </span>
                    </div>

                    {/* Card Bottom Meta */}
                    <div className="absolute bottom-0 inset-x-0 p-5 backdrop-blur-md bg-black/60 border-t border-zinc-900 m-3 rounded-xl z-20 flex flex-col justify-end">
                      <p className="text-white font-black text-xs md:text-sm tracking-wide uppercase leading-tight">
                        {member.name}
                      </p>
                      <p className="text-red-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dedicated Details (Active Specialist Metadata) */}
            <div className="w-full flex-1 max-w-sm space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 flex items-center gap-1.5">
                      <Sparkles size={10} /> Active Representative
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight font-display mt-1">
                      {activeMember.name}
                    </h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-0.5">
                      {activeMember.role}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
                    {activeMember.bio}
                  </p>

                  <div className="space-y-2 border-t border-zinc-900 pt-4 text-xs font-semibold font-sans">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Credentials:</span>
                      <span className="text-zinc-300">{activeMember.credentials}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Live Status:</span>
                      <span className="text-zinc-300">{activeMember.availability}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact-sales"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group hover:text-red-500 transition-colors cursor-pointer"
                    >
                      Connect with {activeMember.name.split(" ")[0]}
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export const ContactSection = () => {
  return (
    <Section id="contact-sales" className="bg-black flex items-center min-h-screen py-16 snap-start relative">
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-red-950/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10 my-auto">
        
        {/* Left Side: Luxury Form (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-red-500">
              <Zap size={10} fill="#ef4444" /> Initiate Registration
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter font-display text-white">
              Connect to our sales desk.
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm max-w-lg leading-relaxed font-sans">
              Enter your organizational requirements below. An elite Chamber support concierge will respond inside our secure 15-second SLA window.
            </p>
          </div>

          <form className="space-y-6 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* First Name */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  id="first_name"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500/80 px-1 py-3.5 text-sm text-white outline-none transition-all duration-300 peer placeholder:text-transparent"
                />
                <label
                  htmlFor="first_name"
                  className="absolute left-1 top-3.5 text-zinc-500 text-xs uppercase tracking-widest font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3.5 peer-focus:top-[-10px] peer-focus:text-[9px] peer-focus:text-red-500 peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-red-500"
                >
                  First name
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-500 to-orange-500 peer-focus:w-full transition-all duration-500" />
              </div>

              {/* Last Name */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  id="last_name"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500/80 px-1 py-3.5 text-sm text-white outline-none transition-all duration-300 peer placeholder:text-transparent"
                />
                <label
                  htmlFor="last_name"
                  className="absolute left-1 top-3.5 text-zinc-500 text-xs uppercase tracking-widest font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3.5 peer-focus:top-[-10px] peer-focus:text-[9px] peer-focus:text-red-500 peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-red-500"
                >
                  Last name
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-500 to-orange-500 peer-focus:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Email Address */}
            <div className="relative group">
              <input
                type="email"
                required
                id="email_address"
                placeholder=" "
                className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500/80 px-1 py-3.5 text-sm text-white outline-none transition-all duration-300 peer placeholder:text-transparent"
              />
              <label
                htmlFor="email_address"
                className="absolute left-1 top-3.5 text-zinc-500 text-xs uppercase tracking-widest font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3.5 peer-focus:top-[-10px] peer-focus:text-[9px] peer-focus:text-red-500 peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-red-500"
              >
                Email address
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-500 to-orange-500 peer-focus:w-full transition-all duration-500" />
            </div>

            {/* Message Box */}
            <div className="relative group">
              <textarea
                rows={3}
                required
                id="message"
                placeholder=" "
                className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500/80 px-1 py-3.5 text-sm text-white outline-none transition-all duration-300 peer resize-none placeholder:text-transparent"
              />
              <label
                htmlFor="message"
                className="absolute left-1 top-3.5 text-zinc-500 text-xs uppercase tracking-widest font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3.5 peer-focus:top-[-10px] peer-focus:text-[9px] peer-focus:text-red-500 peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-red-500"
              >
                Tell us about your organization...
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-500 to-orange-500 peer-focus:w-full transition-all duration-500" />
            </div>

            {/* Submit */}
            <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:scale-103 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-[0_4px_20px_rgba(239,68,68,0.25)] hover:shadow-[0_4px_30px_rgba(239,68,68,0.4)]">
              Submit Secure Request
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </motion.div>

        {/* Right Side: Channels List (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6 lg:pt-16"
        >
          <div className="grid grid-cols-1 gap-4">
            
            {/* Secure Chat */}
            <div className="flex gap-4 p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900 group hover:border-red-500/30 transition-all shadow-md relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-white mb-1">
                  Chamber Secure Chat
                </h4>
                <p className="text-zinc-500 text-[10px] mb-2 leading-relaxed">
                  Engage in zero-knowledge encrypted channels with specialists.
                </p>
                <a
                  href="mailto:sales@untitledui.com"
                  className="text-red-500 text-[11px] font-bold hover:underline tracking-wider"
                >
                  sales@untitledui.com
                </a>
              </div>
            </div>

            {/* Direct SLA Mail */}
            <div className="flex gap-4 p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900 group hover:border-red-500/30 transition-all shadow-md relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-white mb-1">
                  Priority SLA Maildesk
                </h4>
                <p className="text-zinc-500 text-[10px] mb-2 leading-relaxed">
                  Direct escalation inbox monitored live by Level 3 technicians.
                </p>
                <a
                  href="mailto:support@untitledui.com"
                  className="text-red-500 text-[11px] font-bold hover:underline tracking-wider"
                >
                  support@untitledui.com
                </a>
              </div>
            </div>

            {/* Global Registry HQ */}
            <div className="flex gap-4 p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900 group hover:border-red-500/30 transition-all shadow-md relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-white mb-1">
                  Global Registry Office
                </h4>
                <p className="text-zinc-500 text-[10px] mb-1 leading-relaxed">
                  Melbourne Corporate HQ
                </p>
                <p className="text-white text-[10px] font-bold">
                  100 Smith St, Collingwood VIC 3066
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
