import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    name: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=samantha"
  },
  {
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=isabella"
  },
  {
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=gabrielle"
  },
  {
    text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    name: "John Peter",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=john"
  },
  {
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    name: "Natalie Martinez",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=natalie"
  },
  {
    text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Victoria Thompson",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=victoria"
  }
];

export const TestimonialsSection = () => {
  return (
    <Section className="bg-black flex flex-col py-24 px-6 md:px-12">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Rating Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 shadow-xl mb-8"
        >
          <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
            <Star size={12} fill="white" className="text-white" />
          </div>
          <span className="text-xs font-semibold text-zinc-300">Rated 4/5 by over 1 Lakh users</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 max-w-3xl font-display leading-tight"
        >
          Words of praise from others about our presence.
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full overflow-y-auto pr-2 custom-scrollbar">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/60 transition-all group"
            >
              <div className="text-red-500 mb-6">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
                  <path d="M0 24V11.4286C0 5.14286 4.57143 0 10.8571 0V4.57143C7.42857 4.57143 5.14286 6.85714 5.14286 10.2857H10.8571V24H0ZM18.2857 24V11.4286C18.2857 5.14286 22.8571 0 29.1429 0V4.57143C25.7143 4.57143 23.4286 6.85714 23.4286 10.2857H29.1429V24H18.2857Z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-lg mb-8 leading-relaxed font-medium">
                {item.text}
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-xs text-zinc-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
