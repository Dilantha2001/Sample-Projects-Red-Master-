import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { Server, Cpu, Lock, TrendingUp, Shield, Activity, ArrowRight } from "lucide-react";

interface PillarDetail {
  id: number;
  label: string;
  title: string;
  desc: string;
  techMetrics: {
    primaryName: string;
    primaryVal: string;
    secondaryName: string;
    secondaryVal: string;
    tertiaryName: string;
    tertiaryVal: string;
    status: string;
  };
  nodeCoordinates: { x: number; y: number }[];
  terminalLogs: string[];
}

const pillars: PillarDetail[] = [
  {
    id: 0,
    label: "01 / DECENTRALIZED RAILS",
    title: "Sovereign Node Networks",
    desc: "We deploy enterprise validator infrastructure and bespoke layer-2 scaling systems designed for high transaction volume, absolute finality, and robust security rails.",
    techMetrics: {
      primaryName: "Node Latency",
      primaryVal: "12.4 ms",
      secondaryName: "Active Nodes",
      secondaryVal: "384 Nodes",
      tertiaryName: "Network SLA",
      tertiaryVal: "99.9998%",
      status: "STABLE",
    },
    nodeCoordinates: [
      { x: 30, y: 40 },
      { x: 50, y: 20 },
      { x: 70, y: 55 },
      { x: 45, y: 75 },
      { x: 20, y: 65 },
      { x: 80, y: 30 },
    ],
    terminalLogs: [
      "SYSTEM: Initializing decentralized node sync...",
      "ZK-PROVE: Generating zero-knowledge proof [OK]",
      "NODE-GATEWAY: Port 8443 established",
      "CONSENSUS: PoA 2.0 deterministic finality reached",
      "LEDGER: Block #40925721 broadcast successful",
    ],
  },
  {
    id: 1,
    label: "02 / COGNITIVE DESIGN",
    title: "Luxury Interaction Craft",
    desc: "We curate premium digital canvases that merge fluid micro-animations, glassmorphic rendering, and harmonious HSL layouts. Our design principles reject standard templates.",
    techMetrics: {
      primaryName: "Render Frame-rate",
      primaryVal: "120 FPS",
      secondaryName: "CSS Render Latency",
      secondaryVal: "0.22 ms",
      tertiaryName: "GPU Acceleration",
      tertiaryVal: "Hardware Enabled",
      status: "OPTIMAL",
    },
    nodeCoordinates: [
      { x: 25, y: 30 },
      { x: 60, y: 35 },
      { x: 85, y: 65 },
      { x: 35, y: 80 },
      { x: 75, y: 25 },
      { x: 50, y: 60 },
    ],
    terminalLogs: [
      "UX-ENGINE: Initializing double-buffer drawing context...",
      "TRANSITIONS: Hardware easing initialized [120Hz]",
      "SHADERS: GLSL micro-noise overlay running",
      "CANVAS: SVG vector rendering path resolved",
      "AESTHETICS: Modern 2026 luxury dark mode verified",
    ],
  },
  {
    id: 2,
    label: "03 / IMMUTABLE TRACEABILITY",
    title: "Verified ESG Incentive Engines",
    desc: "We develop smart contracts that lock ecological credentials and corporate metrics onto the blockchain, transforming transparency into brand loyalty.",
    techMetrics: {
      primaryName: "Secured Value",
      primaryVal: "$2.42B+",
      secondaryName: "Carbon Offsets Ledgered",
      secondaryVal: "14.8M Tons",
      tertiaryName: "Gas Optimization",
      tertiaryVal: "96.4% Saved",
      status: "SYNCHRONIZED",
    },
    nodeCoordinates: [
      { x: 40, y: 30 },
      { x: 30, y: 60 },
      { x: 65, y: 20 },
      { x: 80, y: 45 },
      { x: 55, y: 80 },
      { x: 20, y: 45 },
    ],
    terminalLogs: [
      "CONTRACT: Audit hash verified: 0x9F82...4D2E",
      "METRICS: Carbon credits tokenization complete",
      "LEDGER: Value transfer validated against genesis key",
      "GAS-SAVER: Batching mechanism operating normally",
      "COMPLIANCE: ESG immutable record locked",
    ],
  },
];

export const WhoWeAreSection = () => {
  const [activePillarId, setActivePillarId] = useState(0);
  const [tickerLogs, setTickerLogs] = useState<string[]>([]);
  const activePillar = pillars[activePillarId];

  // Feed terminal simulator logs over time
  useEffect(() => {
    setTickerLogs(activePillar.terminalLogs);
    const interval = setInterval(() => {
      const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
      const randomIp = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
      const logOptions = [
        `CONN: Handshake from host ${randomIp} verified`,
        `TELEMETRY: Sync status OK • Latency: ${(Math.random() * 8 + 8).toFixed(1)}ms`,
        `CRYPTOGRAPHY: ZK hash generated successfully: 0x${randomHex}`,
        `BLOCKCHAIN: Node consensus weight 98.4% verified`,
        `MONITOR: Prestige ledger state: SYNC_COMPLETE`,
      ];
      const selectedLog = logOptions[Math.floor(Math.random() * logOptions.length)];
      setTickerLogs((prev) => [...prev.slice(1), selectedLog]);
    }, 3200);

    return () => clearInterval(interval);
  }, [activePillarId]);

  return (
    <Section id="whoweare" className="bg-black flex flex-col justify-between relative overflow-hidden min-h-screen lg:h-screen w-full snap-start select-none py-12 lg:py-0">
      
      {/* Background Decorative Mesh Grids */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Ambient Red Glow Backdrops */}
      <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-orange-950/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Header Margin Spacer */}
      <div className="pt-8 md:pt-12 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 flex justify-between items-center border-b border-zinc-900/60 pb-4">
        <span className="text-xs font-black tracking-[0.25em] text-zinc-500 uppercase">
          WHO WE ARE • CORPORATE MANIFESTO
        </span>
        <span className="text-xs font-black tracking-[0.15em] text-red-500 uppercase flex items-center gap-1.5">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
          ACTIVE ENGINE STATE: PRESTIGE
        </span>
      </div>

      {/* Main Showcase Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-6">
        
        {/* Left Column: Typographic Ethos & Hover Pillars */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 flex flex-col justify-center h-full"
        >
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-black tracking-[0.2em] text-red-500 uppercase">
              GENESIS CONSORTIUM
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-display uppercase tracking-tighter leading-none">
              A Sovereign <br />
              <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                Digital Legacy
              </span>
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg font-sans font-medium">
              We merge rigorous cryptographic security with premium design craftsmanship. We don't just build platforms—we forge bespoke digital systems that represent high prestige, ultimate longevity, and deterministic performance.
            </p>
          </div>

          {/* Interactive Pillars Selectors */}
          <div className="space-y-4 pt-2">
            {pillars.map((pillar) => {
              const isSelected = activePillarId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setActivePillarId(pillar.id)}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`group p-5 rounded-xl border transition-all duration-500 cursor-pointer select-none ${
                    isSelected
                      ? "bg-zinc-950/60 border-red-500/30 shadow-[0_0_25px_rgba(220,38,38,0.06)]"
                      : "bg-zinc-900/10 border-zinc-900/60 hover:bg-zinc-950/30 hover:border-zinc-800"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs font-black tracking-widest font-display transition-colors duration-300 ${
                        isSelected ? "text-red-500" : "text-zinc-400 group-hover:text-zinc-300"
                      }`}
                    >
                      {pillar.label}
                    </span>
                    <ArrowRight
                      size={14}
                      className={`transition-all duration-300 ${
                        isSelected
                          ? "text-red-500 translate-x-1"
                          : "text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-zinc-500"
                      }`}
                    />
                  </div>
                  
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 space-y-1.5"
                    >
                      <h4 className="text-sm font-black text-white uppercase tracking-wider">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Stateful Interactive Prestige Console */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[430px] md:h-[480px] lg:h-[510px] rounded-3xl border border-zinc-900/80 bg-gradient-to-br from-zinc-950/70 to-zinc-950/20 backdrop-blur-xl p-5 md:p-6 overflow-hidden flex flex-col justify-between"
        >
          {/* Glass Top Rim Glare */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
          
          {/* Node Grid Network Visualizer */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Connection Lines */}
              <AnimatePresence mode="wait">
                <motion.g
                  key={activePillarId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {activePillar.nodeCoordinates.map((node, i) => {
                    const nextNode = activePillar.nodeCoordinates[(i + 1) % activePillar.nodeCoordinates.length];
                    const centerNode = activePillar.nodeCoordinates[(i + 3) % activePillar.nodeCoordinates.length];
                    return (
                      <g key={i}>
                        <motion.line
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${nextNode.x}%`}
                          y2={`${nextNode.y}%`}
                          stroke="rgba(239, 68, 68, 0.15)"
                          strokeWidth="1.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, delay: i * 0.1, ease: "easeInOut" }}
                        />
                        <motion.line
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${centerNode.x}%`}
                          y2={`${centerNode.y}%`}
                          stroke="rgba(249, 115, 22, 0.08)"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: i * 0.15, ease: "easeInOut" }}
                        />
                      </g>
                    );
                  })}
                </motion.g>
              </AnimatePresence>

              {/* Pulsing Nodes */}
              <AnimatePresence mode="wait">
                <motion.g
                  key={`nodes-${activePillarId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {activePillar.nodeCoordinates.map((node, i) => (
                    <g key={i}>
                      <circle cx={`${node.x}%`} cy={`${node.y}%`} r="12" fill="url(#nodeGlow)" />
                      <motion.circle
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="3"
                        fill="#ef4444"
                        animate={{ r: [2, 4.5, 2], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <circle
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="6"
                        stroke="rgba(239, 68, 68, 0.3)"
                        strokeWidth="1"
                        fill="none"
                      />
                    </g>
                  ))}
                </motion.g>
              </AnimatePresence>
            </svg>
          </div>

          {/* Telemetry Header */}
          <div className="relative z-10 flex justify-between items-center border-b border-zinc-900 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-black tracking-widest text-white uppercase font-display">
                PRESTIGE METRICS
              </span>
            </div>
            <div className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400">
              LEDGER SYNC: ONLINE
            </div>
          </div>

          {/* Metric Telemetry Cards Grid */}
          <div className="relative z-10 grid grid-cols-3 gap-3 my-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`metric1-${activePillarId}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-900 flex flex-col justify-between"
              >
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider leading-none">
                  {activePillar.techMetrics.primaryName}
                </span>
                <span className="text-base font-black text-white mt-1.5 uppercase font-display">
                  {activePillar.techMetrics.primaryVal}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`metric2-${activePillarId}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-900 flex flex-col justify-between"
              >
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider leading-none">
                  {activePillar.techMetrics.secondaryName}
                </span>
                <span className="text-base font-black text-white mt-1.5 uppercase font-display">
                  {activePillar.techMetrics.secondaryVal}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`metric3-${activePillarId}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-900 flex flex-col justify-between"
              >
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider leading-none">
                  {activePillar.techMetrics.tertiaryName}
                </span>
                <span className="text-xs font-black text-white mt-1.5 uppercase font-display leading-tight truncate">
                  {activePillar.techMetrics.tertiaryVal}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cryptographic Node Information Dashboard */}
          <div className="relative z-10 p-4 rounded-xl bg-zinc-950/40 border border-zinc-900/60 backdrop-blur-md space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                <Cpu size={12} className="text-red-500" />
                SYSTEM ALLOCATION RAILS
              </span>
              <span className="text-xs font-black tracking-widest text-red-500 uppercase">
                {activePillar.techMetrics.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-sans text-zinc-400 font-medium">
              <div className="flex justify-between border-b border-zinc-900 pb-1">
                <span>GATEWAY PORT:</span>
                <span className="font-bold text-white font-mono">0x4B3C</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1">
                <span>PROTOCOL:</span>
                <span className="font-bold text-white uppercase font-sans">VETHOR.L2</span>
              </div>
              <div className="flex justify-between">
                <span>NODE SIGNATURE:</span>
                <span className="font-bold text-white font-mono">ECDSA-256</span>
              </div>
              <div className="flex justify-between">
                <span>SLA QUALITY:</span>
                <span className="font-bold text-white font-sans">99.998%</span>
              </div>
            </div>
          </div>

          {/* Micro Terminal Live Decrypt Ticker */}
          <div className="relative z-10 flex-1 min-h-[110px] rounded-lg bg-black border border-zinc-900/80 p-3.5 font-mono text-xs leading-relaxed text-zinc-400 overflow-hidden flex flex-col justify-end mt-4">
            <div className="absolute top-2 left-3 text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-1.5 pointer-events-none">
              <Server size={10} /> LIVE BLOCK LOGS
            </div>
            <div className="space-y-0.5 select-all overflow-hidden flex flex-col justify-end pt-4">
              {tickerLogs.map((log, idx) => (
                <motion.div
                  key={`${activePillarId}-${idx}-${log.substring(0, 8)}`}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`truncate ${
                    idx === tickerLogs.length - 1
                      ? "text-red-500 font-bold"
                      : "text-zinc-500"
                  }`}
                >
                  &gt; {log}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Border Margin Spacer */}
      <div className="pb-8 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-zinc-900/60 pt-4 text-center md:text-left select-none">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-600">
          CRAFTED BY DECENTRALIZED COGNIZANCE © 2026
        </span>
        <div className="flex items-center gap-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">
          <span className="hover:text-red-500 transition-colors cursor-default">VISION</span>
          <span>•</span>
          <span className="hover:text-red-500 transition-colors cursor-default">PRECISION</span>
          <span>•</span>
          <span className="hover:text-red-500 transition-colors cursor-default">SOVEREIGNTY</span>
        </div>
      </div>
    </Section>
  );
};
