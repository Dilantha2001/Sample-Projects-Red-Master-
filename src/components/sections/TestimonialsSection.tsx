import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    name: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=samantha",
  },
  {
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=isabella",
  },
  {
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=gabrielle",
  },
  {
    text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    name: "John Peter",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=john",
  },
  {
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    name: "Natalie Martinez",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=natalie",
  },
  {
    text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Victoria Thompson",
    role: "CEO and Co-founder of ABC Company",
    avatar: "https://i.pravatar.cc/150?u=victoria",
  },
];

export const TestimonialsSection = () => {
  const row1 = [testimonials[0], testimonials[1], testimonials[2]];
  const row2 = [testimonials[3], testimonials[4], testimonials[5]];

  // Quadruple to guarantee complete cover on ultra-wide monitors (e.g. 4K)
  const row1Quadrupled = [...row1, ...row1, ...row1, ...row1];
  const row2Quadrupled = [...row2, ...row2, ...row2, ...row2];

  const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="w-[300px] md:w-[380px] p-6 md:p-8 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 backdrop-blur-md hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.06)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shrink-0 mx-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden select-none">
      {/* Decorative glowing accent track at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Custom decorative linked train compartment lines on left and right for aesthetics */}
      <div className="absolute top-1/2 left-0 w-1.5 h-3 bg-red-500/10 border-r border-red-500/20 -translate-y-1/2 rounded-r group-hover:bg-red-500/35 transition-colors duration-300" />
      <div className="absolute top-1/2 right-0 w-1.5 h-3 bg-red-500/10 border-l border-red-500/20 -translate-y-1/2 rounded-l group-hover:bg-red-500/35 transition-colors duration-300" />

      <div>
        {/* Star rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill="#ef4444"
              className="text-red-500 drop-shadow-[0_0_4px_#ef4444]"
            />
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-6 font-sans relative z-10">
          "{item.text}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-auto border-t border-zinc-800/60 pt-4 relative z-10">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover border border-zinc-800 group-hover:border-red-500/30 transition-colors duration-300"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-bold text-white text-xs md:text-sm tracking-wide">
            {item.name}
          </h4>
          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider mt-0.5">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Section className="bg-black flex flex-col justify-between py-12 px-0 overflow-hidden relative h-screen snap-start">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[50%] h-[50%] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-center items-center gap-8 md:gap-12 my-auto">
        {/* Header Area */}
        <div className="flex flex-col items-center w-full px-6 text-center">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 shadow-xl mb-4"
          >
            <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
              <Star size={10} fill="white" className="text-white" />
            </div>
            <span className="text-[10px] md:text-xs font-semibold text-zinc-300">
              Trusted by leading global enterprises
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black max-w-2xl font-display leading-tight uppercase tracking-tight text-white"
          >
            Words of praise from others <br />
            <span className="text-zinc-500">about our presence.</span>
          </motion.h2>
        </div>

        {/* Scrolling Marquees Wrapper */}
        <div className="w-full flex flex-col gap-6 py-4 relative mask-gradient overflow-hidden">
          <style>{`
            .mask-gradient {
              mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
            }
          `}</style>

          {/* Track 1 - Scrolls Left */}
          <div className="pause-marquee overflow-hidden w-full flex">
            <div className="animate-marquee flex py-2">
              {row1Quadrupled.map((item, idx) => (
                <TestimonialCard key={`row1-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Track 2 - Scrolls Right */}
          <div className="pause-marquee overflow-hidden w-full flex">
            <div className="animate-marquee-reverse flex py-2">
              {row2Quadrupled.map((item, idx) => (
                <TestimonialCard key={`row2-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
