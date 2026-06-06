import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { PROCESS, STATS } from '../data';
import AnimatedCounter from '../components/AnimatedCounter';
import RevealText from '../components/RevealText';
import Magnetic from '../components/Magnetic';

export default function Expertise() {
  return (
    <PageTransition className="pt-32 md:pt-48 pb-24 px-6 md:px-12 relative z-10 flex flex-col bg-neutral-950">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      {/* Intro Header */}
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className="max-w-7xl mx-auto w-full mb-32"
      >
        <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none mb-12 uppercase">
          CRAFT & <br /><span className="italic text-violet-400 rgb-hover">DISCIPLINE</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl uppercase tracking-widest text-violet-500 font-sans font-bold mb-8 flex items-center gap-4">
              <Star size={20} /> Core Expertise
            </h2>
            <ul className="flex flex-col gap-6 text-xl tracking-tight font-display">
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-white group cursor-default">
                <span className="group-hover:text-violet-400 transition-colors">Creative Frontend Dev</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-neutral-300 group cursor-default">
                <span className="group-hover:text-pink-400 transition-colors">UI/UX & Web Design</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-neutral-300 group cursor-default">
                <span className="group-hover:text-pink-400 transition-colors">Performance Optimization</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-neutral-300 group cursor-default">
                <span className="group-hover:text-violet-500 transition-colors">Motion & WebGL</span>
              </li>
            </ul>
          </div>
          
          <div className="w-full lg:w-2/3">
              <h3 className="text-3xl md:text-5xl font-sans font-light tracking-tight leading-tight md:leading-snug text-neutral-300">
                <RevealText text="I believe in creating digital environments that feel" /> <span className="italic font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-pink-500 uppercase tracking-tighter drop-shadow-md">alive</span>. <RevealText text="By merging clean typography with fluid motion and robust engineering, I deliver websites that leave a lasting impression." delay={0.5} />
              </h3>
          </div>
        </div>
      </motion.div>

      {/* Stats Strip */}
      <section className="relative z-20 border-y border-neutral-800 bg-neutral-900/30 max-w-7xl mx-auto w-full rounded-2xl mb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none" />
          <div className="px-6 md:px-12 py-16 flex flex-wrap gap-12 justify-between relative z-10">
            {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start group">
                  <span className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-white mb-2 group-hover:scale-110 transition-transform origin-left">
                    <AnimatedCounter value={stat.value} duration={2 + i * 0.5} />{typeof stat.value === 'string' && stat.value.includes('+') ? '+' : ''}{typeof stat.value === 'string' && stat.value.includes('%') ? '%' : ''}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-sans font-bold">{stat.label}</span>
                </div>
            ))}
          </div>
      </section>

      {/* The Process Section */}
      <section className="max-w-7xl mx-auto w-full mb-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter uppercase mb-4">Our <span className="italic text-violet-400 rgb-hover">Process</span></h2>
            <p className="text-neutral-400 max-w-lg text-sm uppercase tracking-widest font-sans font-medium">From abstract concepts to award-winning digital realities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {PROCESS.map((p, i) => (
              <Magnetic key={i} strength={0.02}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col group p-10 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-violet-500/30 transition-colors h-full"
                >
                    <div className="text-violet-500/20 text-6xl font-display font-bold tracking-tighter mb-6 group-hover:text-violet-500 transition-colors duration-500">{p.step}</div>
                    <h3 className="text-3xl font-display font-medium mb-4 text-white uppercase">{p.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-base font-sans font-light">{p.desc}</p>
                </motion.div>
              </Magnetic>
            ))}
          </div>
      </section>

      {/* CTA replacing Testimonials */}
      <section className="max-w-7xl mx-auto w-full relative pt-12 pb-24 flex flex-col items-center border-t border-neutral-800">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-12 uppercase text-center">Ready to work together?</h2>
          <Link to="/contact" className="px-12 py-6 border border-white text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors font-sans hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start a Project
          </Link>
      </section>
    </PageTransition>
  );
}
