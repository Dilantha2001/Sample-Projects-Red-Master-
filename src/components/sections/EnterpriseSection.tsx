import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";

import PixelBlast from "../../reactbit/PixelBlast";

export const EnterpriseSection = () => {
  return (
    <Section className="bg-black flex flex-col">
      // Component inspired by github.com/zavalit/bayer-dithering-webgl-demo
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#c93d40"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      {/* Flowing Light Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[10%] top-0 h-full w-[40%] bg-gradient-to-r from-red-900/40 via-orange-900/20 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[10%] top-0 h-full w-[40%] bg-gradient-to-l from-red-900/40 via-orange-900/20 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[30%] w-[80%] bg-red-600/10 blur-[100px] rounded-full"
        />
      </div>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-[10px] font-bold tracking-[0.2em] text-red-500 uppercase">
            WEB3 FOR BETTER
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent font-display">
              Real-world adoption
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-orange-200 bg-clip-text text-transparent font-display">
              blockchain technology
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            The VeChainThor blockchain is the foundation on which the VeChain
            ecosystem is built.
          </p>

          <div className="pt-8">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.4)]">
              Explore Vechain
            </button>
          </div>
        </motion.div>
      </main>
      {/* Partners Section */}
      <footer className="relative z-10 py-12 px-12">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tighter">
              coinbase
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white" />
            <span className="font-bold text-2xl tracking-tighter uppercase">
              OKX
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white rounded-sm" />
            <span className="font-bold text-2xl tracking-tighter">galaxy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tighter">
              kraken{" "}
              <span className="text-xs uppercase opacity-60">ventures</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="font-bold text-2xl tracking-tighter uppercase">
              CIRCLE
            </span>
          </div>
        </div>
      </footer>
      {/* Flowing Wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full opacity-20">
          <motion.path
            animate={{
              d: [
                "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,160C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="#dc2626"
            fillOpacity="1"
          ></motion.path>
        </svg>
      </div>
    </Section>
  );
};
