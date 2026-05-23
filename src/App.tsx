import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Sections Imports
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { EnterpriseSection } from "./components/sections/EnterpriseSection";
import { WhoWeAreSection } from "./components/sections/WhoWeAreSection";
import { FAQSection } from "./components/sections/FAQSection";
import { TeamManifestoSection } from "./components/sections/TeamManifestoSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { SupportTeamSection, ContactSection } from "./components/sections/SupportSection";
import { FooterSection } from "./components/sections/FooterSection";
import { Star } from "lucide-react";

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const scrollContainerRef = useRef(null);

  // 1. Setup Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,          // Scroll එක පාවෙලා යන ගාණ (Luxury vibe එකට 1.4 පට්ට)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth cubic easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Lenis එක හැම scroll frame එකකදීම update කරන්න ScrollTrigger එකට link කරනවා
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Connect GSAP ticker with Lenis
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // 2. Premium Interactions with GSAP
  useGSAP(() => {
    // Page top micro progress bar - Luxury sites වල දකින සියුම් design එකක්
    gsap.to(".progress-bar", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Fixed Decorative Star Rotation (Scroll triggered)
    gsap.to(".luxury-star", {
      rotation: 720,
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth interaction delay එකක් දෙනවා කැරකෙද්දී
      },
    });
  }, { scope: scrollContainerRef });

  return (
    <div ref={scrollContainerRef} className="relative w-full bg-black font-sans text-white antialiased selection:bg-zinc-800 selection:text-white">

      {/* Premium Minimal Progress Line */}
      <div className="progress-bar fixed top-0 left-0 right-0 z-[100] h-[2px] bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 origin-left scale-x-0" />

      {/* Sections Layout */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <EnterpriseSection />
        <WhoWeAreSection />
        <FAQSection />
        <TeamManifestoSection />
        <TestimonialsSection />
        <SupportTeamSection />
        <ContactSection />
        <FooterSection />
      </main>

      {/* Fixed Luxury Interactive Star */}
      <div className="luxury-star fixed bottom-8 right-8 z-50 text-zinc-400 opacity-40 pointer-events-none mix-blend-difference">
        <Star
          size={28}
          fill="currentColor"
          strokeWidth={0}
        />
      </div>
    </div>
  );
}