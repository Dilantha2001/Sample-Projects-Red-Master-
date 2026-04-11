import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Star, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: "01",
    title: "Team.in",
    subtitle: "Landing Page",
    description: "A collaborative platform reimagined with a high-performance interface and seamless user flow.",
    tags: ["UI UX Design", "Webflow"],
    image: "./assets/project-team.png",
    accent: "from-red-600 to-red-400"
  },
  {
    number: "02",
    title: "Chatap",
    subtitle: "Mobile App",
    description: "Modern messaging interface with glassmorphism effects and ultra-smooth interactions.",
    tags: ["Product Design", "React"],
    image: "./assets/project-chat.png",
    accent: "from-orange-600 to-orange-400"
  }
];

export const ProjectsSection = () => {
  return (
    <Section className="bg-black py-24 px-6 md:px-12 flex flex-col justify-center">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#dc26260a_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-500">
              <Star size={14} fill="currentColor" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter">
              Featured <span className="text-zinc-600">Projects</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase italic">
              / Selected Works / <br /> / 2023 - 2024 /
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group relative h-[500px] rounded-[32px] overflow-hidden bg-zinc-900/20 border border-zinc-800/50 hover:border-red-500/30 transition-all duration-500"
            >
              {/* Project Image Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-black text-white/5 group-hover:text-red-500/20 transition-colors">
                    {project.number}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-zinc-700/50 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-4xl font-black font-display uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-red-500 text-sm font-bold tracking-widest uppercase">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full bg-black/40 border border-zinc-800 text-[10px] font-bold text-zinc-500 group-hover:text-red-400 group-hover:border-red-500/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
