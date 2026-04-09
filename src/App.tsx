import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { EnterpriseSection } from './components/sections/EnterpriseSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FooterSection } from './components/sections/FooterSection';
import { Star } from 'lucide-react';

export default function App() {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-black font-sans text-white scroll-smooth selection:bg-purple-500/30">
      <HeroSection />
      <EnterpriseSection />
      <TestimonialsSection />
      <FooterSection />

      {/* Fixed Decorative Star */}
      <div className="fixed bottom-8 right-8 z-50 text-zinc-300 opacity-60 pointer-events-none">
        <Star size={32} fill="currentColor" strokeWidth={0} className="animate-pulse" />
      </div>
    </div>
  );
}
