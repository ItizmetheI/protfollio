import { motion } from 'motion/react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { PROCESS, TESTIMONIALS, STATS } from '../data';

export default function Expertise() {
  return (
    <PageTransition className="pt-32 md:pt-48 pb-24 px-6 md:px-12 relative z-10 flex flex-col bg-neutral-950">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      {/* Intro Header */}
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className="max-w-7xl mx-auto w-full mb-32"
      >
        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none mb-12">
          CRAFT & <br /><span className="italic text-rose-400">DISCIPLINE</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl uppercase tracking-widest text-rose-500 font-medium mb-8 flex items-center gap-4">
              <Star size={20} /> Core Expertise
            </h2>
            <ul className="flex flex-col gap-6 text-xl tracking-tight">
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-white">
                <span>Creative Frontend Dev</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-neutral-300">
                <span>UI/UX & Web Design</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-neutral-300">
                <span>Performance Optimization</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-4 text-neutral-300">
                <span>Motion & WebGL</span>
              </li>
            </ul>
          </div>
          
          <div className="w-full lg:w-2/3">
              <h3 className="text-3xl md:text-5xl font-light tracking-tighter leading-tight md:leading-snug text-neutral-300">
                I believe in creating digital environments that feel <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500">alive</span>. By merging clean typography with fluid motion and robust engineering, I deliver websites that leave a lasting impression.
              </h3>
          </div>
        </div>
      </motion.div>

      {/* Stats Strip */}
      <section className="relative z-20 border-y border-neutral-800 bg-neutral-900/30 max-w-7xl mx-auto w-full rounded-2xl mb-32">
          <div className="px-6 md:px-12 py-12 flex flex-wrap gap-12 justify-between">
            {STATS.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-2">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">{stat.label}</span>
                </motion.div>
            ))}
          </div>
      </section>

      {/* The Process Section */}
      <section className="max-w-7xl mx-auto w-full mb-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter uppercase mb-4">Our <span className="italic text-rose-400">Process</span></h2>
            <p className="text-neutral-400 max-w-lg text-sm uppercase tracking-widest font-medium">From abstract concepts to award-winning digital realities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {PROCESS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col group p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-rose-500/30 transition-colors"
              >
                  <div className="text-rose-500/30 text-5xl font-bold tracking-tighter mb-6 group-hover:text-rose-500 transition-colors duration-500">{p.step}</div>
                  <h3 className="text-2xl font-medium mb-4 text-white">{p.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{p.desc}</p>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto w-full relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-rose-500/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center pt-12">
            <Quote size={48} className="text-rose-500/40 mb-12" />
            
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full pb-8">
                <div className="flex gap-8 px-4 w-max">
                  {TESTIMONIALS.map((testimonial, i) => (
                    <motion.div 
                      key={i}
                      className="snap-center w-[85vw] md:w-[600px] shrink-0 bg-neutral-950 border border-neutral-800 p-8 md:p-12 rounded-2xl flex flex-col justify-between"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                        <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-neutral-300">"{testimonial.text}"</p>
                        <div className="flex flex-col">
                          <span className="font-medium text-white text-lg">{testimonial.name}</span>
                          <span className="text-rose-400 text-sm uppercase tracking-widest mt-1">{testimonial.role}</span>
                        </div>
                    </motion.div>
                  ))}
                </div>
            </div>
          </div>
      </section>
    </PageTransition>
  );
}
