import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrambleText from '../components/ScrambleText';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition className="flex flex-col">
      {/* Immersive Hero */}
      <section className="relative min-h-screen flex flex-col pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 relative z-10 w-full h-full flex-grow items-center pt-12 md:pt-0">
           
           {/* Left side text focus */}
           <div className="w-full lg:w-3/5 flex flex-col justify-center gap-8">
              <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-[12vw] lg:text-[7.5vw] leading-[0.85] tracking-tight font-display font-bold text-white uppercase drop-shadow-lg flex flex-col">
                  <span><ScrambleText text="Ahmed" delay={0.2} duration={1.2} /></span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-violet-300 to-pink-400">
                    <ScrambleText text="Barkat" delay={0.6} duration={1.2} />
                  </span>
                </h1>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-xl"
              >
                <h2 className="text-xl md:text-3xl font-display font-medium text-white mb-4">Web Developer & Designer</h2>
                <p className="text-base md:text-lg text-neutral-400 font-sans font-light">
                  I build fast, clean websites for businesses that want to look serious online.
                </p>
              </motion.div>
              
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="flex flex-wrap gap-4 items-center mt-4"
              >
                <Link to="/work" className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-violet-100 transition-colors font-sans">
                  View Projects <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="px-8 py-4 border border-neutral-700 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:border-white transition-colors font-sans">
                  Let's Talk
                </Link>
              </motion.div>
           </div>
           
           {/* Right side dynamic image composition */}
           <div className="w-full lg:w-2/5 relative h-[50vh] lg:h-[75vh]">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, y: 100 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                 style={{ y: heroY }}
                 className="absolute top-[5%] right-[5%] w-[65%] h-[60%] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl z-20"
              >
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Project 1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-neutral-900/20 mix-blend-multiply" />
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, y: -50 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                 style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
                 className="absolute bottom-[10%] left-[5%] w-[60%] h-[55%] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl z-10"
              >
                  <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea36f?q=80&w=2604&auto=format&fit=crop" alt="Project 2" className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
              </motion.div>
           </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-overlay text-white"
        >
          <MousePointer2 size={24} className="animate-bounce opacity-50" />
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold font-sans">Scroll</span>
        </motion.div>
      </section>

      {/* Endless Marquee banner */}
      <section className="py-4 md:py-6 bg-gradient-to-r from-violet-600 via-violet-500 to-pink-500 text-white overflow-hidden flex whitespace-nowrap shadow-[0_0_80px_rgba(139,92,246,0.15)] relative z-30">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 md:gap-16 items-center text-xl md:text-3xl uppercase tracking-widest font-display font-bold"
        >
          <span>Available for Projects</span> <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          <span>Web Design</span> <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          <span>React & TypeScript</span> <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          <span>Malaysia & Pakistan</span> <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          <span>Fast Delivery</span> <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          <span>Available for Projects</span> <span className="w-2 h-2 rounded-full bg-pink-500"></span>
        </motion.div>
      </section>

      {/* The Arsenal Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-800 pb-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tight text-white flex items-center gap-4">
              <span className="text-violet-500">01 //</span> The Arsenal
            </h2>
            <p className="text-neutral-400 font-sans font-light max-w-sm">Combining robust traditional engineering with the bleeding edge of creative technology.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col gap-24 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-[50px] group-hover:bg-violet-500/20 transition-colors" />
               <div className="flex flex-wrap gap-2 relative z-10">
                 {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(tech => (
                   <span key={tech} className="px-3 py-1 bg-neutral-950 border border-neutral-700 rounded-full text-xs font-sans text-neutral-300">{tech}</span>
                 ))}
               </div>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col gap-24 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] group-hover:bg-pink-500/20 transition-colors" />
               <div className="flex flex-wrap gap-2 relative z-10">
                 {['Framer Motion', 'GSAP', 'Lenis', 'Lottie'].map(tech => (
                   <span key={tech} className="px-3 py-1 bg-neutral-950 border border-neutral-700 rounded-full text-xs font-sans text-neutral-300">{tech}</span>
                 ))}
               </div>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col gap-24 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] group-hover:bg-pink-500/20 transition-colors" />
               <div className="flex flex-wrap gap-2 relative z-10">
                 {['Three.js', 'React Three Fiber', 'GLSL', 'Shaders'].map(tech => (
                   <span key={tech} className="px-3 py-1 bg-neutral-950 border border-neutral-700 rounded-full text-xs font-sans text-neutral-300">{tech}</span>
                 ))}
               </div>
            </motion.div>
          </div>
        </div>
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
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-light tracking-tight leading-tight text-neutral-300">
            We don't just build websites. We architect <span className="italic font-medium text-white">digital destinations</span> that captivate, convert, and leave a permanent mark on the web.
          </h2>
          <div className="mt-16">
            <Link to="/expertise" className="inline-flex items-center gap-2 text-violet-400 hover:text-white uppercase tracking-widest font-sans font-semibold transition-colors border-b border-violet-500/30 hover:border-white pb-1">
              Explore Our Expertise <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Signature Approach Section - Uniqueness Factor */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_left,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none -translate-y-1/2" />
        
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
                className="w-64 h-64 border border-violet-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700"
              >
                <div className="w-48 h-48 border border-pink-500/30 rounded-full flex items-center justify-center -rotate-45">
                  <div className="w-32 h-32 border border-pink-500/30 rounded-full flex items-center justify-center rotate-90">
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
               className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8 uppercase"
             >
               THE <span className="italic text-violet-400">SIGNATURE</span> EDGE.
             </motion.h2>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col gap-8 text-neutral-400 text-lg font-sans font-light leading-relaxed"
             >
               <p>
                 While others rely on templates and off-the-shelf components, I engineer bespoke digital environments from the ground up. My approach merges cognitive psychology with advanced frontend architecture.
               </p>
               <div className="flex flex-col gap-6">
                 <div className="flex flex-col border-l-2 border-violet-500/50 pl-6">
                   <h4 className="text-white font-sans font-medium text-xl mb-2">Zero-Compromise Performance</h4>
                   <p className="text-sm">I obsess over 60fps animations and micro-interactions. Every transition is physically modeled, every frame optimized.</p>
                 </div>
                 <div className="flex flex-col border-l-2 border-pink-500/50 pl-6">
                   <h4 className="text-white font-sans font-medium text-xl mb-2">Immersive Narrative</h4>
                   <p className="text-sm">Websites shouldn't just be read; they should be experienced. I use kinetic typography and WebGL to tell your brand's story.</p>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
