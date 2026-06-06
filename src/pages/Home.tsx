import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition className="flex flex-col">
      {/* Immersive Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Deep immersive gradients */}
        <div className="absolute inset-0 bg-neutral-950">
          <motion.div 
             animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/4 -left-[20%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
          />
          <motion.div 
             animate={{ rotate: -360, scale: [1, 1.3, 1] }} 
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-1/4 -right-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-rose-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
          />
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-rose-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Available for New Projects
            </div>
            
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter font-medium text-white mix-blend-overlay drop-shadow-2xl flex flex-col items-center">
              <span>DIGITAL</span>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-purple-400 pb-4">ARTISTRY</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-neutral-400 font-light max-w-2xl mt-4"
          >
            We transform visionary concepts into award-winning digital experiences. 
            Blurring the line between design and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 flex gap-6"
          >
            <Link to="/work" className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden font-semibold uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="relative z-10">Discover Work</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-rose-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-overlay text-white"
        >
          <MousePointer2 size={24} className="animate-bounce opacity-50" />
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-medium">Scroll</span>
        </motion.div>
      </section>

      {/* Endless Marquee banner */}
      <section className="py-4 md:py-6 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 text-white overflow-hidden flex whitespace-nowrap shadow-[0_0_80px_rgba(225,29,72,0.15)] relative z-30">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 md:gap-16 items-center text-xl md:text-3xl uppercase tracking-widest font-bold"
        >
          <span>Awwwards Winning</span> <Star size={20} className="opacity-50" />
          <span>FWA of the Day</span> <Star size={20} className="opacity-50" />
          <span>Webby Nominee</span> <Star size={20} className="opacity-50" />
          <span>CSS Design Awards</span> <Star size={20} className="opacity-50" />
          <span>Awwwards Winning</span> <Star size={20} className="opacity-50" />
          <span>FWA of the Day</span> <Star size={20} className="opacity-50" />
        </motion.div>
      </section>

      {/* Statement Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 relative flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tighter leading-tight text-neutral-300">
            We don't just build websites. We architect <span className="italic font-medium text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">digital destinations</span> that captivate, convert, and leave a permanent mark on the web.
          </h2>
          <div className="mt-16">
            <Link to="/expertise" className="inline-flex items-center gap-2 text-rose-400 hover:text-white uppercase tracking-widest font-semibold transition-colors border-b border-rose-500/30 hover:border-white pb-1">
              Explore Our Expertise <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Signature Approach Section - Uniqueness Factor */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_left,rgba(225,29,72,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square bg-neutral-950 border border-neutral-800 rounded-2xl relative overflow-hidden flex items-center justify-center group"
            >
              {/* Abstract Interactive Lab Element */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border border-rose-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700"
              >
                <div className="w-48 h-48 border border-purple-500/30 rounded-full flex items-center justify-center -rotate-45">
                  <div className="w-32 h-32 border border-indigo-500/30 rounded-full flex items-center justify-center rotate-90">
                     <span className="text-white text-xs uppercase tracking-[0.3em] font-bold">Unreleased Lab</span>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-neutral-950 to-transparent">
                 <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Internal R&D / WebGL Shaders</p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
             <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-4xl md:text-6xl font-medium tracking-tighter mb-8"
             >
               THE <span className="italic text-rose-400">SIGNATURE</span> EDGE.
             </motion.h2>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col gap-8 text-neutral-400 text-lg font-light leading-relaxed"
             >
               <p>
                 While others rely on templates and off-the-shelf components, we engineer bespoke digital environments from the ground up. Our approach merges cognitive psychology with advanced frontend architecture.
               </p>
               <div className="flex flex-col gap-6">
                 <div className="flex flex-col border-l-2 border-rose-500/50 pl-6">
                   <h4 className="text-white font-medium text-xl mb-2">Zero-Compromise Performance</h4>
                   <p className="text-sm">We obsess over 60fps animations and micro-interactions. Every transition is physically modeled, every frame optimized.</p>
                 </div>
                 <div className="flex flex-col border-l-2 border-purple-500/50 pl-6">
                   <h4 className="text-white font-medium text-xl mb-2">Immersive Narrative</h4>
                   <p className="text-sm">Websites shouldn't just be read; they should be experienced. We use kinetic typography and WebGL to tell your brand's story.</p>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
