import React, { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "01 // GENESIS" },
  { id: "services", label: "02 // PRECISION" },
  { id: "projects", label: "03 // FEATURED" },
  { id: "enterprise", label: "04 // ADOPTION" },
  { id: "whoweare", label: "05 // SOVEREIGN" },
  { id: "manifesto", label: "06 // ALLIANCE" },
  { id: "faq", label: "07 // SUPPORT" },
  { id: "support", label: "08 // SPECIALISTS" },
  { id: "contact", label: "09 // CONSENSUS" },
];

export const ScrollNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when the section occupies the center of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);
  const offsetPercent = activeIndex !== -1 ? (activeIndex / (navItems.length - 1)) * 100 : 0;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-5 select-none pointer-events-auto">
      {/* Sleek Vertical Connection Track */}
      <div className="absolute right-[5.5px] top-1 bottom-1 w-[1px] bg-zinc-800/60 rounded-full">
        {/* Glow Active Fill */}
        <div
          className="absolute top-0 right-0 w-[1.5px] bg-gradient-to-b from-red-500 to-orange-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(239,68,68,0.5)]"
          style={{
            height: `${offsetPercent}%`,
          }}
        />
      </div>

      {navItems.map((item, idx) => {
        const isActive = item.id === activeSection;

        return (
          <button
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className="group relative w-3 h-3 flex items-center justify-center cursor-pointer focus:outline-none z-10"
            aria-label={`Scroll to ${item.label}`}
          >
            {/* Custom Tooltip Tag */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 scale-95 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap px-3 py-1.5 rounded-lg bg-zinc-950/95 border border-zinc-900 text-[9px] font-black tracking-[0.2em] text-zinc-300 uppercase shadow-2xl backdrop-blur-xl flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.8)]" : "bg-zinc-700"}`} />
              {item.label}
            </div>

            {/* Glowing Ring Outer Dot */}
            <div
              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all duration-500 ${
                isActive
                  ? "border-red-500/40 bg-zinc-950/40 shadow-[0_0_12px_rgba(220,38,38,0.15)]"
                  : "border-transparent group-hover:border-zinc-800"
              }`}
            >
              {/* Inner Core Bullet */}
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-br from-red-500 to-orange-500 scale-110 shadow-[0_0_8px_#ef4444]"
                    : "bg-zinc-700 group-hover:bg-zinc-400 group-hover:scale-110"
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};
