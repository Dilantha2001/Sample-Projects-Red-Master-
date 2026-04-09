import { motion } from "motion/react";
import { Star, ChevronRight, Globe, Zap, Shield, Layout } from "lucide-react";

export default function App() {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-black font-sans text-white scroll-smooth">
      
      {/* PAGE 1: CREATIVE BRANDING STUDIO */}
      <section className="relative h-screen w-full snap-start overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-60 grayscale-[0.5] brightness-[0.7]"
            poster="https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=1920"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-man-listening-to-music-with-headphones-and-dancing-4122-large.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Background Large Text */}
        <div className="pointer-events-none absolute inset-0 z-1 flex flex-col justify-around overflow-hidden opacity-[0.05] select-none">
          <span className="text-[25vw] font-black leading-none tracking-tighter">BRANDING</span>
          <span className="text-[25vw] font-black leading-none tracking-tighter self-end">BRANDING</span>
          <span className="text-[25vw] font-black leading-none tracking-tighter">BRANDING</span>
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
            <div className="text-[10px] font-medium text-zinc-500">
              © 2024
            </div>
          </div>
        </footer>
      </section>

      {/* PAGE 2: VECHAIN INSPIRED */}
      <section className="relative h-screen w-full snap-start overflow-hidden bg-black flex flex-col">
        {/* Flowing Light Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-[10%] top-0 h-full w-[40%] bg-gradient-to-r from-purple-900/40 via-blue-900/20 to-transparent blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-[10%] top-0 h-full w-[40%] bg-gradient-to-l from-purple-900/40 via-blue-900/20 to-transparent blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[30%] w-[80%] bg-purple-600/10 blur-[100px] rounded-full" 
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-12 py-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">VeChain</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Explore</a>
            <a href="#" className="hover:text-white transition-colors">Build</a>
            <a href="#" className="hover:text-white transition-colors">Enterprise</a>
            <a href="#" className="hover:text-white transition-colors">Discover</a>
          </div>

          <button className="px-6 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-medium hover:bg-zinc-800 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            Explore Vechain
          </button>
        </nav>

        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase">
              WEB3 FOR BETTER
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent font-display">
                Real-world adoption
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-blue-200 bg-clip-text text-transparent font-display">
                blockchain technology
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              The VeChainThor blockchain is the foundation on which the VeChain ecosystem is built.
            </p>

            <div className="pt-8">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Explore Vechain
              </button>
            </div>
          </motion.div>
        </main>

        {/* Partners Section */}
        <footer className="relative z-10 py-12 px-12">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tighter">coinbase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white" />
              <span className="font-bold text-2xl tracking-tighter uppercase">OKX</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white rounded-sm" />
              <span className="font-bold text-2xl tracking-tighter">galaxy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tighter">kraken <span className="text-xs uppercase opacity-60">ventures</span></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="font-bold text-2xl tracking-tighter uppercase">CIRCLE</span>
            </div>
          </div>
        </footer>

        {/* Flowing Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[20%] pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-full opacity-20">
            <motion.path 
              animate={{ 
                d: [
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,160C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              fill="#9333ea" 
              fillOpacity="1"
            ></motion.path>
          </svg>
        </div>
      </section>

      {/* PAGE 3: TESTIMONIALS */}
      <section className="relative h-screen w-full snap-start overflow-hidden bg-black flex flex-col py-24 px-6 md:px-12">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Rating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 shadow-xl mb-8"
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
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
            {[
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
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/60 transition-all group"
              >
                <div className="text-purple-500 mb-6">
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
      </section>

      {/* PAGE 4: IMMERSIVE FOOTER */}
      <section className="relative h-screen w-full snap-start overflow-hidden bg-black flex flex-col justify-end">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition-all hover:scale-110">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition-all hover:scale-110">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition-all hover:scale-110">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
      </section>

      {/* Fixed Decorative Star */}
      <div className="fixed bottom-8 right-8 z-50 text-zinc-300 opacity-60 pointer-events-none">
        <Star size={32} fill="currentColor" strokeWidth={0} className="animate-pulse" />
      </div>
    </div>
  );
}
