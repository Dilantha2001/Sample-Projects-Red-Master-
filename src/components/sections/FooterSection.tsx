import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { Star, Shield } from 'lucide-react';

export const FooterSection = () => {
  return (
    <Section className="flex flex-col justify-end bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="./assets/footer.png"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-1">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 flex flex-col items-center">
        {/* Top Section: Central Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star size={48} fill="white" className="text-white" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-display">
              Creative Branding Studio
            </h2>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Empowering brands through innovative design and strategic excellence. We are the world leader in digital rehabilitation and creative growth.
          </p>
        </motion.div>

        {/* Middle Section: Two Columns */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end border-b border-zinc-800 pb-12 mb-8">
          {/* Left: Partner Logos & Partnership Text */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-zinc-300 rounded-sm rotate-45" />
                <span className="font-bold text-xl tracking-tighter">zantic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-zinc-300" />
                <span className="font-bold text-xl tracking-tighter">BookStore</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                  <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                </div>
                <span className="font-bold text-xl tracking-tighter">Wager</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
              A strategic partnership between Creative Branding Studio and leading global enterprises. Delivering excellence since 2024.
            </p>
          </div>

          {/* Right: Links & Social Icons */}
          <div className="flex flex-col lg:items-end gap-8">
            <div className="flex flex-wrap lg:justify-end gap-x-8 gap-y-4 text-sm font-semibold text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Participate</a>
              <a href="#" className="hover:text-white transition-colors">Stories</a>
              <a href="#" className="hover:text-white transition-colors">Volunteer</a>
              <a href="#" className="hover:text-white transition-colors">Sponsor</a>
              <a href="#" className="hover:text-white transition-colors">Resources</a>
              <a href="#" className="hover:text-white transition-colors">History</a>
              <a href="#" className="hover:text-white transition-colors">Toolkit</a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-400 hover:text-white transition-all hover:scale-110">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-all hover:scale-110">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-all hover:scale-110">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-all hover:scale-110">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Crisis Line / Support */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-900">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
              <Shield size={20} className="text-white" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Support Line</div>
              <div className="text-xs font-bold text-white">DIAL 988 then Press 1</div>
            </div>
          </div>
          <div className="text-zinc-500 text-[10px] font-medium tracking-widest uppercase">
            In Crisis? Call the National Suicide Prevention Lifeline
          </div>
        </div>
      </div>
    </Section>
  );
};
