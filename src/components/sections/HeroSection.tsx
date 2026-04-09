import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';

export const HeroSection = () => {
  return (
    <Section className="bg-black">
      {/* Background Image - Extending to top to remove the top black box */}
      <div className="absolute inset-0 z-2 bg-black flex items-start justify-center overflow-hidden">
        <div className="relative w-full h-[85vh] overflow-hidden">
          <img
            src="./assets/background.png"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
          <img
            src="./assets/person.png"
            alt="Person Silhouette"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain z-[5] opacity-90"
          />

          {/* Main Prominent Branding Text strictly on top of the video area */}
          <div className="absolute inset-0 flex items-center justify-center z-[4] select-none pointer-events-none item-end">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[18vw] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              BRANDING
            </motion.span>
          </div>
        </div>
      </div>

      {/* Subtler Background Text Layers */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex flex-col justify-around overflow-hidden opacity-[0.03] select-none">
        <span className="text-[25vw] font-black leading-none tracking-tighter text-white">BRANDING</span>
        <span className="text-[25vw] font-black leading-none tracking-tighter self-end text-white">BRANDING</span>
        <span className="text-[25vw] font-black leading-none tracking-tighter text-white">BRANDING</span>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center py-12">
        <div className="flex items-center gap-4 text-sm font-medium tracking-wide text-zinc-300">
          <a href="#" className="hover:text-white transition-colors">Works</a>
          <span className="text-zinc-700">|</span>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <span className="text-zinc-700">|</span>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <span className="text-zinc-700">|</span>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight max-w-md drop-shadow-2xl">
                UNLOCK YOUR BUSINESS POTENTIAL WITH OUR EXPERT SOLUTIONS.
              </h2>
              <p className="text-zinc-200 text-sm max-w-xs leading-relaxed drop-shadow-lg">
                From innovative marketing strategies to operational excellence, we provide expert guidance to help your business grow, scale, and thrive.
              </p>
            </div>

            <button className="group flex flex-col items-start gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 group-hover:text-white transition-colors">READ MORE</span>
              <div className="h-[1px] w-12 bg-white/50 group-hover:w-16 transition-all duration-300" />
            </button>

            <div className="pt-12 flex gap-16">
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-bold tracking-tighter">472+</div>
                <div className="text-[10px] font-medium tracking-widest text-zinc-300 uppercase">Expert solutions</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-bold tracking-tighter">597+</div>
                <div className="text-[10px] font-medium tracking-widest text-zinc-300 uppercase">Enterprises to Thrive</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:text-right flex flex-col lg:items-end space-y-12"
          >
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
              <span className="block text-zinc-400/80">Creative</span>
              <span className="block text-zinc-500/80">Branding</span>
              <span className="block text-white">Studio</span>
            </h1>

            <div className="max-w-xs lg:text-right space-y-6">
              <p className="text-zinc-200 text-xs leading-relaxed drop-shadow-lg">
                From innovative marketing strategies to operational excellence, we provide expert guidance to help your business grow, scale, and thrive.
              </p>
              <div className="space-y-1">
                <div className="text-sm font-semibold tracking-tight">Your Partner in</div>
                <div className="text-sm font-semibold tracking-tight">Business Growth</div>
              </div>
              <p className="text-[10px] text-zinc-400 leading-relaxed italic">
                / From innovative marketing strategies to operational excellence, we provide expert /
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-12 left-0 w-full z-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-300 uppercase">
            <span>UI/UX</span>
            <span className="text-zinc-800">|</span>
            <span>Website Design</span>
            <span className="text-zinc-800">|</span>
            <span>Bussiness Developemnt</span>
            <span className="text-zinc-800">|</span>
            <span>Ads Campaign</span>
            <span className="text-zinc-800">|</span>
            <span>Branding</span>
          </div>
          <div className="text-[10px] font-medium text-zinc-500 text-center">
            © 2024
          </div>
        </div>
      </footer>
    </Section>
  );
};
