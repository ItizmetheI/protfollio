import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { PROJECTS, AWARDS } from '../data';

export default function Work() {
  return (
    <PageTransition className="pt-32 md:pt-48 pb-24 px-6 md:px-12 relative z-10 flex flex-col bg-neutral-950">
      
      {/* Header */}
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 max-w-7xl mx-auto w-full"
      >
        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none">
          SELECTED <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">WORKS</span>
        </h1>
        <p className="text-neutral-400 max-w-sm uppercase text-xs tracking-widest font-medium border-l border-rose-500/50 pl-4">
          A curated selection of recent projects built with React, WebGL, and modern tools. Focusing on interaction and conversion.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-32 md:gap-48 max-w-7xl mx-auto w-full">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative flex flex-col ${idx % 2 === 1 ? 'md:items-end' : ''}`}
          >
            <div className="w-full md:w-4/5 aspect-[4/3] md:aspect-[16/9] overflow-hidden relative cursor-pointer rounded-lg bg-neutral-900 border border-neutral-800 p-2 md:p-4">
               {/* Colored glow behind image on hover */}
               <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl z-0`} />
               
               <div className="w-full h-full relative overflow-hidden rounded-md">
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 relative z-10"
                 />
                 <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-20" />
                 
                 {/* Hover reveal button */}
                 <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-white px-6 py-3 rounded-full uppercase tracking-widest text-xs font-semibold translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-2xl">
                      View Case Study <ArrowUpRight size={14} className="text-rose-400" />
                    </div>
                 </div>
               </div>
            </div>
            
            <div className={`mt-8 flex w-full md:w-4/5 justify-between items-start ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'text-right' : ''}>
                <h3 className="text-2xl md:text-5xl font-medium tracking-tighter mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-rose-300 transition-colors">{project.title}</h3>
                <p className="text-neutral-500 text-sm md:text-base uppercase tracking-widest">{project.category}</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="text-neutral-600 text-sm font-medium">{project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Awards Section */}
      <section className="mt-32 md:mt-48 max-w-7xl mx-auto w-full pt-24 border-t border-neutral-800">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-16 uppercase">Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400 italic">Recognition</span></h2>
        
        <div className="flex flex-col border-t border-neutral-800">
          {AWARDS.map((award, i) => (
            <div 
               key={i} 
               className="group flex flex-col md:flex-row justify-between md:items-center py-6 md:py-8 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors cursor-pointer px-4 -mx-4 rounded-lg"
            >
              <h3 className="text-xl md:text-3xl font-medium tracking-tight mb-2 md:mb-0 group-hover:translate-x-4 transition-transform duration-300 text-neutral-200">{award.title}</h3>
              <div className="flex items-center gap-8 text-neutral-400">
                <span className="uppercase tracking-widest text-sm text-neutral-500">{award.platform}</span>
                <span className="w-24 text-right font-light">{award.date}</span>
                <ArrowUpRight size={20} className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-rose-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </PageTransition>
  );
}
