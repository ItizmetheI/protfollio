import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import { PROJECTS, AWARDS } from '../data';
import Magnetic from '../components/Magnetic';
import ScrambleText from '../components/ScrambleText';

export default function Work() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, (v) => `calc(${v * -100}% + ${v * 100}vw)`);

  return (
    <PageTransition className="pt-32 md:pt-48 pb-0 relative z-10 flex flex-col bg-neutral-950">
      
      {/* Header */}
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 max-w-7xl mx-auto w-full px-6 md:px-12"
      >
        <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none uppercase">
          SELECTED <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500"><ScrambleText text="WORKS" delay={0.2} duration={1.2} /></span>
        </h1>
        <p className="text-neutral-400 max-w-sm uppercase text-xs tracking-widest font-sans font-medium border-l border-rose-500/50 pl-4">
          A curated selection of recent projects built with React, WebGL, and modern tools. Focusing on interaction and conversion.
        </p>
      </motion.div>

      {/* Horizontal Scroll Projects Wrapper */}
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-max gap-12 md:gap-24 px-6 md:px-32">
            {PROJECTS.map((project, idx) => (
              <div 
                key={project.id}
                className="w-[85vw] md:w-[70vw] lg:w-[50vw] shrink-0 flex flex-col group relative"
              >
                <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden relative cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-3xl z-0`} />
                  
                  <div className="w-full h-full relative overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center p-2">
                    {/* Placeholder for video swap - we use a fast-looping css scaled image to simulate dynamic entry if no real video is present */}
                    <motion.div
                      className="w-full h-full relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 relative z-10"
                      />
                      
                      {/* Fake video overlay effect on hover */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-0 group-hover:opacity-30 mix-blend-overlay z-20 pointer-events-none transition-opacity duration-300" />
                    </motion.div>
                    
                    {/* Hover reveal button */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="bg-neutral-950/80 backdrop-blur-xl border border-neutral-700 text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-bold translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-2xl font-sans">
                          View Case Study <ArrowUpRight size={16} className="text-rose-400" />
                        </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex w-full justify-between items-start">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-rose-300 transition-colors uppercase cursor-pointer rgb-hover">{project.title}</h3>
                    <p className="text-neutral-500 text-sm md:text-base uppercase tracking-widest font-sans font-medium">{project.category}</p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-neutral-600 text-lg font-display font-medium border border-neutral-800 rounded-full px-4 py-1.5 bg-neutral-900/50">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-neutral-950 z-20 relative pt-32 pb-48 px-6 md:px-12 border-t border-neutral-900/50">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-16 uppercase">Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400 italic">Recognition</span></h2>
          
          <div className="flex flex-col border-t border-neutral-800">
            {AWARDS.map((award, i) => (
              <Magnetic key={i} strength={0.02}>
                <div 
                   className="group flex flex-col md:flex-row justify-between md:items-center py-8 md:py-10 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors cursor-pointer px-6 -mx-6 rounded-2xl"
                >
                  <h3 className="text-2xl md:text-4xl font-display font-medium tracking-tight mb-4 md:mb-0 group-hover:translate-x-6 transition-transform duration-500 text-neutral-200 uppercase rgb-hover">{award.title}</h3>
                  <div className="flex items-center gap-8 text-neutral-400">
                    <span className="uppercase tracking-widest text-sm text-neutral-500 font-sans font-bold">{award.platform}</span>
                    <span className="w-24 text-right font-sans font-light">{award.date}</span>
                    <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 bg-neutral-900">
                      <ArrowUpRight size={20} className="text-rose-400" />
                    </div>
                  </div>
                </div>
              </Magnetic>
            ))}
          </div>
        </div>
      </section>
      
    </PageTransition>
  );
}
