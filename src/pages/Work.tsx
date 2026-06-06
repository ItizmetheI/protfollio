import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import { PROJECTS } from '../data';
import ScrambleText from '../components/ScrambleText';

export default function Work() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  const xPercent = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(PROJECTS.length - 1) * 100]
  );

  const x = useTransform(xPercent, (v) => `${v}vw`);

  return (
    <PageTransition className="relative z-10 bg-neutral-950">

      {/* Header */}
      <div className="pt-32 md:pt-48 pb-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 max-w-7xl mx-auto w-full"
        >
          <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none uppercase">
            SELECTED <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-pink-500">
              <ScrambleText text="WORKS" delay={0.2} duration={1.2} />
            </span>
          </h1>
          <p className="text-neutral-400 max-w-sm uppercase text-xs tracking-widest font-sans font-medium border-l border-violet-500/50 pl-4">
            A curated selection of recent projects built with React, WebGL, and modern tools.
          </p>
        </motion.div>
      </div>

      {/* Scroll-linked horizontal section */}
      <div
        ref={wrapperRef}
        style={{ height: `${PROJECTS.length * 100}vh` }}
        className="relative"
      >
        <div
          style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
          className="flex items-center"
        >
          <motion.div
            style={{ x }}
            className="flex gap-24 px-32 w-max will-change-transform"
          >
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                style={{ width: '80vw' }}
                className="shrink-0 flex flex-col group"
              >
                <div className="w-full aspect-[16/9] overflow-hidden relative cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl z-0" />
                  <div className="w-full h-full relative overflow-hidden rounded-xl bg-neutral-950 p-2">
                    <motion.div
                      className="w-full h-full relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover relative z-10"
                      />
                    </motion.div>
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="bg-neutral-950/80 backdrop-blur-xl border border-neutral-700 text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-bold translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-2xl font-sans">
                        View Case Study <ArrowUpRight size={16} className="text-violet-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex w-full justify-between items-start">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-violet-300 transition-colors uppercase cursor-pointer rgb-hover">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm md:text-base uppercase tracking-widest font-sans font-medium">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-neutral-600 text-lg font-display font-medium border border-neutral-800 rounded-full px-4 py-1.5 bg-neutral-900/50">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </PageTransition>
  );
}
