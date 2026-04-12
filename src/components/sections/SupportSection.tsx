import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { ArrowRight, Mail, MessageSquare, MapPin, Send } from 'lucide-react';

const teamMembers = [
  {
    name: 'Olivia Martinez',
    role: 'Payments Support',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Richard Mills',
    role: 'Payments Support',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Viola Bassett',
    role: 'Customer Success Lead',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400',
    featured: true,
  },
  {
    name: 'Sophie Chamberlain',
    role: 'Specialized Support',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Erik Anders',
    role: 'VP of Customer Success',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Natalie Carter',
    role: 'Customer Success Agent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  },
];

export const SupportTeamSection = () => {
  return (
    <Section className="bg-black flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            We're 100% remote and hiring
            <ArrowRight size={10} className="ml-1" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter max-w-4xl mx-auto leading-tight uppercase font-display">
            Dedicated support for your business
          </h2>
          
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            Our expert team is available 24/7 to help you with any technical challenges.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="relative flex items-center justify-center overflow-visible py-10">
          <div className="flex items-center gap-4 md:gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: member.featured ? 1.1 : 0.9, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex-shrink-0 w-32 md:w-48 aspect-[4/5] rounded-2xl overflow-hidden group border border-white/5 ${
                  member.featured ? 'z-20 ring-2 ring-red-500/50 shadow-2xl shadow-red-500/20' : 'z-10 bg-zinc-900'
                }`}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${!member.featured ? 'grayscale group-hover:grayscale-0' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 inset-x-0 p-4 backdrop-blur-md bg-white/5 border-t border-white/10 m-2 rounded-xl">
                  <p className="text-white font-bold text-[10px] md:text-xs leading-tight uppercase">
                    {member.name}
                  </p>
                  <p className="text-zinc-400 text-[8px] md:text-[10px] font-medium tracking-wide">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-8"
        >
          <button className="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all">
            View demo
          </button>
          <button className="px-6 py-3 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-red-700 transition-all">
            Get started
          </button>
        </motion.div>
      </div>
    </Section>
  );
};

export const ContactSection = () => {
  return (
    <Section className="bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-4xl font-black uppercase tracking-tighter font-display">Contact sales</h3>
            <p className="text-zinc-500 text-sm md:text-base max-w-md leading-relaxed">
              Ready to take your brand to the next level? Our sales team is ready to assist you.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">First name</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all placeholder:text-zinc-700"
                  placeholder="John"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Last name</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all placeholder:text-zinc-700"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email address</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all placeholder:text-zinc-700"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">How can we help?</label>
              <textarea 
                rows={3}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all resize-none placeholder:text-zinc-700"
                placeholder="Tell us about your project..."
              />
            </div>

            <button className="w-full py-4 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group">
              Submit Request
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 lg:pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex gap-4 p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/50 group hover:border-red-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Chat to sales</h4>
                <p className="text-zinc-500 text-[10px] mb-2 font-medium">Speak to our specialized team.</p>
                <a href="mailto:sales@untitledui.com" className="text-red-500 text-xs font-bold hover:underline">sales@untitledui.com</a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/50 group hover:border-red-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Direct support</h4>
                <p className="text-zinc-500 text-[10px] mb-2 font-medium">Email our 24/7 help desk.</p>
                <a href="mailto:support@untitledui.com" className="text-red-500 text-xs font-bold hover:underline">support@untitledui.com</a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/50 group hover:border-red-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Global HQ</h4>
                <p className="text-zinc-500 text-[10px] mb-1 font-medium">Melbourne, Australia</p>
                <p className="text-white text-[10px] font-bold">100 Smith St, Collingwood VIC</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
