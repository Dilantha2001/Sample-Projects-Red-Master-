import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { Star, Palette, Search, LayoutGrid, Globe } from 'lucide-react';

const services = [
  {
    title: "UI UX",
    subtitle: "Design",
    description: "I bring your ideas to life with engaging and intuitive digital experiences.",
    icon: <Palette size={32} />,
    color: "from-red-600 to-orange-600"
  },
  {
    title: "UI UX",
    subtitle: "Audit",
    description: "I'll review your app or website and give tips to make it better.",
    icon: <Search size={32} />,
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Design",
    subtitle: "System",
    description: "I develop a set of design standards to keep your products consistent.",
    icon: <LayoutGrid size={32} />,
    color: "from-red-500 to-red-800"
  },
  {
    title: "Webflow",
    subtitle: "Dev",
    description: "I turn designs into live, responsive, and dynamic Webflow websites.",
    icon: <Globe size={32} />,
    color: "from-orange-500 to-orange-800"
  }
];

export const ServicesSection = () => {
  return (
    <Section className="bg-black flex flex-col justify-center py-24 px-6 md:px-12">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#dc2626_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#ea580c_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-zinc-900 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-red-500">
              <Star size={16} fill="currentColor" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black font-display tracking-tighter uppercase leading-none">
              Services <br />
              <span className="text-zinc-500">Provided</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-lg max-w-sm leading-relaxed font-medium italic">
            / High-impact solutions tailored / <br />
            / for modern digital enterprises. /
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group space-y-8"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} p-[1px] group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-4xl font-black font-display tracking-tight uppercase leading-none">
                  {service.title} <br />
                  <span className="text-zinc-600 group-hover:text-red-500 transition-colors uppercase">
                    {service.subtitle}
                  </span>
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 overflow-hidden">
                <div className="h-[2px] w-full bg-zinc-900 relative">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ delay: (idx * 0.1) + 0.5, duration: 1 }}
                    className={`absolute inset-0 bg-gradient-to-r ${service.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
