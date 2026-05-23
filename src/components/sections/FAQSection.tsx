import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { ChevronDown, Award, TrendingUp, Cpu, Layers, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does our Web3 consortium offer?",
    answer: "We deliver full-suite sovereign infrastructure provisioning, high-performance distributed web engineering, deterministic PoA consensus node setup, dual-token gas decoupling, and premium bespoke design systems. Our architecture is optimized for enterprises seeking to lock corporate ESG metrics and high-value carbon credentials onto the immutable blockchain ledger.",
  },
  {
    question: "Why deploy specialized Web3 protocols instead of standard cloud databases?",
    answer: "Standard centralized cloud structures rely on vulnerable databases that are subject to single-point exploits, high data manipulation risk, and costly middle-man verification steps. By deploying distributed validator nodes, you secure 100% data integrity, immutable audit paths, 100% operational uptime, and trustless transparency that instantly elevates brand authority.",
  },
  {
    question: "What is our enterprise node integration SLA timeline?",
    answer: "Standard smart contract design, genesis node bootstrapping, and complete security validation audits are fully realized within a rapid 3-week sprint cycle. Post-deployment, our dedicated concierge team provides real-time transaction telemetry, security patches, and instant SLA verification via private dashboard telemetry.",
  },
  {
    question: "How quickly do transaction proofs and ESG offsets settle?",
    answer: "Using our deterministic PoA 2.0 dual-token engine, all transaction broadcasts, block validation, and zero-knowledge ledger logs settle dynamically. Updates are recorded and reflected onto your client-facing ESG widgets and analytics dashboards within exactly 2.4 seconds of block finality.",
  },
  {
    question: "What is our client onboarding and genesis deployment process?",
    answer: "We start with a sandbox database diagnostic to inspect current operations. Next, our engineers deploy customized smart contracts, provision dedicated validator node access, allocate stable VTHO gas pipelines, and deliver your premium luxury console dashboard to launch your sovereign blockchain interface.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-black flex flex-col justify-between relative overflow-hidden h-screen w-full snap-start select-none">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      
      {/* Glowing Aura Rings */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -right-20 top-20 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Header Info */}
      <div className="pt-8 md:pt-12 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 flex justify-between items-center border-b border-zinc-900/60 pb-4">
        <span className="text-[8px] font-black tracking-[0.3em] text-zinc-500 uppercase">
          Ecosystem Directory • Frequently Asked Questions
        </span>
        <span className="text-[8px] font-black tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-1">
          <HelpCircle size={10} className="text-red-500" />
          VERIFIED PROTOCOL SUPPORT
        </span>
      </div>

      {/* Main Content Split Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10 py-6 overflow-hidden">
        
        {/* Left Side: Accordion FAQ List (Span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full space-y-6">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-[9px] font-black tracking-[0.25em] text-red-500 uppercase">
              SUPPORT PROTOCOLS
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
              Frequently Asked <br />
              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          {/* Accordion list */}
          <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-zinc-950/65 border-red-500/30 shadow-[0_0_20px_rgba(220,38,38,0.04)]"
                      : "bg-zinc-900/10 border-zinc-900/60 hover:bg-zinc-950/20 hover:border-zinc-800"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span
                      className={`text-xs md:text-sm font-bold uppercase tracking-wide font-display transition-colors duration-300 ${
                        isOpen ? "text-red-400" : "text-zinc-300"
                      }`}
                    >
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`p-1.5 rounded-full border ${
                        isOpen ? "border-red-500/30 text-red-500" : "border-zinc-800 text-zinc-500"
                      }`}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1 border-t border-zinc-950 text-[10px] md:text-xs text-zinc-400 leading-relaxed font-sans font-medium">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Elegant Luxury Collage Widget Grid (Span 5) */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[480px] grid grid-cols-12 grid-rows-12 gap-4">
          
          {/* Widget 1: Real-time SVG Growth Matrix (Line Graph) (Pos: Row 1-7, Col 1-7) */}
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.25)" }}
            className="col-span-7 row-span-7 rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-4 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-red-500/5 blur-[15px] rounded-full pointer-events-none" />
            <div className="flex justify-between items-center z-10">
              <span className="text-[7px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                <TrendingUp size={10} className="text-red-500" />
                TRANSACTION SCALING
              </span>
              <span className="text-[8px] font-black text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-1 py-0.5 rounded leading-none">
                +428%
              </span>
            </div>
            
            {/* Custom SVG Line Graph */}
            <div className="h-[70px] w-full mt-2 relative z-10">
              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area under curve */}
                <path d="M 0,50 L 0,40 Q 15,35 30,22 T 60,18 T 85,8 L 100,5 L 100,50 Z" fill="url(#chartGlow)" />
                {/* Curve line */}
                <motion.path
                  d="M 0,40 Q 15,35 30,22 T 60,18 T 85,8 L 100,5"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
                {/* Pulsing end node */}
                <circle cx="100" cy="5" r="2.5" fill="#ef4444" />
                <circle cx="100" cy="5" r="5" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="1" fill="none" className="animate-ping" />
              </svg>
            </div>

            <div className="z-10 mt-2">
              <h4 className="text-[10px] font-black text-white uppercase tracking-wider font-display">
                Throughput Peak
              </h4>
              <p className="text-[8px] text-zinc-500 leading-normal font-sans">
                Consensus pipeline batch optimization.
              </p>
            </div>
          </motion.div>

          {/* Widget 2: Prestige SLA Trophy Badge (Pos: Row 8-12, Col 1-7) */}
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.25)" }}
            className="col-span-7 row-span-5 rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-4 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-red-500/5 blur-[15px] rounded-full pointer-events-none" />
            <div className="flex justify-between items-center">
              <span className="text-[7px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                <Award size={10} className="text-red-500" />
                SLA ASSURANCE
              </span>
            </div>
            
            <div className="my-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-white tracking-tighter uppercase font-display leading-none">
                20,000+
              </span>
              <span className="text-[7px] font-black text-zinc-400 tracking-wider uppercase leading-none">
                VERIFIED
              </span>
            </div>

            <div>
              <h4 className="text-[9px] font-black text-white uppercase tracking-wider font-display">
                Circular Ledgers Secured
              </h4>
              <p className="text-[8px] text-zinc-500 leading-normal font-sans">
                High-integrity enterprise tracking structures.
              </p>
            </div>
          </motion.div>

          {/* Widget 3: Live Circular Token Pipeline (SVG Matrix) (Pos: Row 1-5, Col 8-12) */}
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.25)" }}
            className="col-span-5 row-span-5 rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-3.5 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="50" r="20" stroke="rgba(249,115,22,0.15)" strokeWidth="1" fill="none" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="40 120"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="20"
                  stroke="#f97316"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="20 60"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <span className="text-[7px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                <Cpu size={10} className="text-red-500" />
                GAS TRACK
              </span>
            </div>

            <div className="relative z-10 mt-4">
              <h4 className="text-[9px] font-black text-white uppercase tracking-wider font-display">
                Decoupled
              </h4>
              <p className="text-[8px] text-zinc-500 leading-normal font-sans">
                VTHO pipeline buffered.
              </p>
            </div>
          </motion.div>

          {/* Widget 4: Live Node Performance Console (Pos: Row 6-12, Col 8-12) */}
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.25)" }}
            className="col-span-5 row-span-7 rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-4 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-red-500/5 blur-[15px] rounded-full pointer-events-none" />
            <div className="flex justify-between items-center">
              <span className="text-[7px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                <Layers size={10} className="text-red-500" />
                L2 PIPELINE
              </span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            </div>

            <div className="space-y-1.5 font-mono text-[7px] text-zinc-400 mt-2">
              <div className="flex justify-between border-b border-zinc-900 pb-0.5">
                <span>PING:</span>
                <span className="text-white font-bold">11ms</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-0.5">
                <span>ZK-PORT:</span>
                <span className="text-white font-bold">#9443</span>
              </div>
              <div className="flex justify-between">
                <span>IP:</span>
                <span className="text-white font-bold">10.42.188</span>
              </div>
            </div>

            <div className="mt-2">
              <h4 className="text-[9px] font-black text-white uppercase tracking-wider font-display">
                Prestige Gateway
              </h4>
              <p className="text-[8px] text-zinc-500 leading-normal font-sans">
                Active core nodes routed successfully.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Spacer Row */}
      <div className="pb-8 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-zinc-900/60 pt-4 text-center md:text-left select-none">
        <span className="text-[8px] font-black uppercase tracking-[0.25em] text-zinc-600">
          SECURE PROTOCOL SUPPORT • SYSTEM OVERLAYS
        </span>
        <div className="flex items-center gap-6 text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
          <span className="hover:text-red-500 transition-colors cursor-default">AUDITED CONTRACTS</span>
          <span>•</span>
          <span className="hover:text-red-500 transition-colors cursor-default">SLA GUARANTEE</span>
        </div>
      </div>
    </Section>
  );
};
